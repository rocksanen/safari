

import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const CartComponent = (props) => {

    const [error,setError] = useState(null);
    const { user } = useAuthContext();
  
    const dothis = () => {
  
      user ? props.setCart(addItem(props.item, props.cartItems)) : (() => setError('You must be logged in'))();
  
    }
    
    return (
      <div className="add-to-cart-complex">
        <input
          type="number"
          id="quantity"
          className="qty-box"
          min={1}
          max={props.item.stock}
          placeholder={1}
        ></input>
        <button
          className="add-to-cart-button"
          onClick={() => {dothis(); props.setCount(props.count + 1)}}
        >
          Add to cart
        </button>
        {error && <div className="error">{error}</div>}
        <b id="total"></b>
      </div>
    );
  
    function addItem(item, cartItems) {
      let already = false;
      let amount = parseInt(document.querySelector("#quantity").value);
  
      console.log(cartItems);
  
      if (!amount) amount = 1;
      console.log("Määrä: " + amount);
      console.log(cartItems);
  
      cartItems.map((existing) => {
        /* THIS SHIT DONT WORK */
  
        console.log(existing);
  
        if (item.name === existing.name) {
          existing.qty = parseInt(existing.qty) + amount;
          already = true;
        }
        return console.log("existing: " + existing.name);
      })
  
      /* THIS SHIT DO WORK */
      if (!already) {
        cartItems.push({
          id: item.id,
          name: item.name,
          qty: amount
        });
      }
      return cartItems;
    }
  };


  export default CartComponent