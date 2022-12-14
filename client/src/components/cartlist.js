import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const CartList = (props) => {
  const { user , dispatch} = useAuthContext();
  const [orders,setOrders] = useState([]); 
  const updateUser = async (cartItems) => {

    let body = [];
    for(let i = 0; i<cartItems.length; i++){
      const order = {
        name: cartItems[i].name,
        quantity: cartItems[i].qty
      }
      body.push(order)
    }
    sendToDB(body)
  }

  const sendToDB = async(body) => {

  const API_URL = "http://localhost:4000/api";
    
  try{
    console.log(body);

    const response = await fetch(API_URL +`/user/${user.id}`, {
      method: 'PATCH',
      body: JSON.stringify({body}),
      headers: {
        'Content-Type' : 'application/json'
      }
     

    })
    if (!response.ok) {

      console.log('NOPE!');
    }


    }catch(error){
      console.log(error.message);
    }
  }
function Buy(items) {

  updateUser(items)
  console.log(items);
  /*
  const { user , dispatch} = useAuthContext();
  const [orders,setOrders] = useState([]); 
    /* OSTA
    const addOrdersToUser = async () => {
      setOrders(items);
      const response = await fetch(`/api/user/:${user.id}`, {
        method: 'PATCH',
        body: JSON.stringify(orders),
        headers: {
          'Content-Type' : 'application/json'
        }
      })
      const json = await response.json()
      if(!response.ok) {
        console.log('cant add to user');
      }
      if(response.ok){
        setOrders([])
        dispatch({type: 'UPDATE', payload: json})
      }
    }
    */

  }
  
  const handleSubmit = () => {
    
      
        /* OSTA */
        
        const addOrdersToUser = async () => {
          setOrders(props.cartItems);
          const response = await fetch(`http://localhost:4000/api/user/${user.id}`, {
            method: 'PATCH',
            body: JSON.stringify(orders),
            headers: {
              'Content-Type' : 'application/json'
            }
          })
          const json = await response.json()
          if(!response.ok) {
            console.log('cant add to user');
          }
          if(response.ok){
            setOrders([])
            dispatch({type: 'UPDATE', payload: json})
          }
        }
        console.log(props.cartItems);
        console.log(user);
        addOrdersToUser();
    
  }
  
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
      <button id="buy-button" onClick={()=>Buy(props.cartItems)}>OSTA KAIKKI</button>
      </>
    )
  }


  
  function removeItem(item, cartItems) {
    
    let removeThis = cartItems.indexOf(item)
  
    if (removeThis > -1) {
      return cartItems.splice(removeThis, 1)
    }
  }



  export default CartList