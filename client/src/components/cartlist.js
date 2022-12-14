import { useAuthContext } from "../hooks/useAuthContext";

const CartList = (props) => {
  const { user } = useAuthContext();

    return (
      <>
      <ul className="Cart-box">
        {props.cartItems.map((item) => {
          return (
  
            <li key={item.id}>
              {item.name} - {item.qty} <button onClick={() => { removeItem(item, props.cartItems, props.setCart); props.setCount(props.count+1)}}>Remove</button>
            </li>
  
          )
        })}
      </ul>
      <button id="buy-button" onClick={()=>Buy(props.cartItems,user)}>OSTA KAIKKI</button>
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



  export default CartList