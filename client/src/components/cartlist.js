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
        <button id="buy-button" onClick={() => Buy(props.cartItems,user, props.products, props.setProducts)}>OSTA KAIKKI</button>
      </span>
      </>
    )
  }

  const Buy = (cartItems,user,products, setProducts) =>{
    updateUser(cartItems,user)
    updateProductStock(cartItems,products,setProducts)
    }

  const updateUser = async (cartItems,user) => {

    let reqBody = [];
    for(let i = 0; i<cartItems.length; i++) {
      reqBody.push( {
        name: cartItems[i].name,
        quantity: cartItems[i].qty
      })
    }
    //console.log(reqBody, user);
    sendToDB(reqBody,user)
  }

 

  const sendToDB = async(reqBody,user) => {

    const API_URL = "http://localhost:4000/api";
        
    try{
      console.log(reqBody);
      console.log(user.id, 'jepuli');
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


      const updateProductStock = (cartItems,products,setProducts) =>{

        for(let i = 0; i < cartItems.length; i++) {
      
          for(let j = 0; j < products.length; j++) {
      
            if(cartItems[i].id === products[j].id) {
      
                const object = products[j]
                const id = object.id
                const stockAmount = object.stock - cartItems[i].qty
                sendStockToDB(stockAmount,id,products,setProducts)
            }
          }
        }  
      }
      
      
      const sendStockToDB = async (stockAmount, id,products,setProducts) => {
      
        try{
        
          const response = await fetch(`http://localhost:4000/api/products/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({stock:stockAmount}),
            headers: {'Content-Type' : 'application/json'}
          })
              
            if (!response.ok) {console.log('Whoopsie, could not fetch')}  
            fetchProductAfterBuy(setProducts,products) 
            return response
      
        }catch(error) {console.error(error.message)}
      }



      const fetchProductAfterBuy = async (setProducts,products) => {
        
        const API_URL = "http://localhost:4000/api";

        try {
          // Make the API request.
          //console.log("getting json");
          const response = await fetch(API_URL + "/products/");
          //console.log("response received");
          // Get the JSON data from the response.
          const json = await response.json();
          // If the response was successful, set the products state to the JSON data.
          // Otherwise, set the products state to an empty array.
          response.ok ? setProducts(json) : setProducts([]);
        } catch (error) {
          // If an error occurred, log the error message to the console.
    
          console.error(error.message);
          // Set the products state to an empty array.
          setProducts(products = []);
        }
      };


  
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