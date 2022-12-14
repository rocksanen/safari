import { useAuthContext } from "../hooks/useAuthContext";

const CartList = (props) => {
  const { user } = useAuthContext();

  let total = 0;

    return (
      <>
      <ul className="Cart-box">
        {props.cartItems.map((item) => {

          total += item.item.price*item.qty;
          return (
            <li key={item.id}>
              {item.name} <div className="cart-quantity-component"><button className="cart-plusminus" onClick={() => {changeAmount(item, props.cartItems, false); props.setCount(props.count+1)}} > - </button> {item.qty} <button className="cart-plusminus" onClick={() => {changeAmount(item, props.cartItems, true); props.setCount(props.count+1) }}>+</button></div><button className="cart-remove-button" onClick={() => { removeItem(item, props.cartItems); props.setCount(props.count+1)}}>Remove</button>
            </li>
          )
        })}
      </ul>
      <span className="cart-bottom">
        <p>Total: {total} €</p>
        <button id="buy-button" onClick={() => Buy(props.cartItems,user)}>OSTA KAIKKI</button>
      </span>
      </>
    )
  }

  const Buy = (items,user) =>{
    updateUser(items,user)
    }

  const updateUser = async (cartItems,user) => {

    let reqBody = [];
    for(let i = 0; i<cartItems.length; i++) {
      reqBody.push( {
        name: cartItems[i].name,
        quantity: cartItems[i].qty
      })
    }

    sendToDB(reqBody,user)
  }

 

  const sendToDB = async(reqBody,user) => {

      const API_URL = "http://localhost:4000/api";
        
      try{
        console.log(reqBody);
        const response = await fetch(API_URL +`/user/${user.id}`, {
          method: 'PATCH',
          body: JSON.stringify({orders: reqBody}),
          headers: {'Content-Type': 'application/json'}})
    
        if (!response.ok) {
          console.log('Something went wrong with updating the database!');
        }
    
        }catch(error){
          console.log(error.message);
        }
      }


  
  function removeItem(item, cartItems) {

    let removeThis = cartItems.indexOf(item)
  
    if (removeThis > -1) {
      return cartItems.splice(removeThis, 1)
    }
  }

  function changeAmount(item, cartItems, increase) {

    let changeThis = cartItems.indexOf(item);

    increase ? cartItems[changeThis].qty++ : cartItems[changeThis].qty--;

    if (item.qty > cartItems[changeThis].item.stock) {
      item.qty = cartItems[changeThis].item.stock;
    }

    if (!cartItems[changeThis].qty) {
      cartItems.splice(changeThis, 1)
    }

  }

  export default CartList