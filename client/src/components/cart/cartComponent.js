

import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

const CartComponent = (props) => {

    const [error,setError] = useState(null);
    const { user } = useAuthContext();
  
    const passToSetCart = () => {
  
      user ? props.setCart(addItem(props.item, props.cartItems, props.setSideOpen)) : (() => setError('Kirjaudu sisään ensin!'))();
  
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
          onClick={() => {passToSetCart(); props.setCount(props.count + 1)}}
        >
          Lisää ostoskoriin
        </button>
        {error && <div className="error">{error}</div>}
        <b id="total"></b>
      </div>
    );
  
    function addItem(item, cartItems, setSideOpen) {
      let already = false;
      let amount = parseInt(document.querySelector("#quantity").value);
  
      if (!amount) amount = 1;

      cartItems.map((existing) => {
  
        if (item.name === existing.name) {
          existing.qty = parseInt(existing.qty) + amount;
          already = true;

          if (existing.qty > props.item.stock) {
            existing.qty = props.item.stock;
          }
        }
        return console.log("existing: " + existing.name);
      })
      
  
      if (!already) {
        (amount > item.stock) ? amount = item.stock : console.log('');;
        cartItems.push({
          id: item.id,
          name: item.name,
          item: item,
          qty: amount
        });
      }
      setSideOpen(false);
      return cartItems;
    }
  };


  export default CartComponent