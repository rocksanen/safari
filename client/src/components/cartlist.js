const CartList = (props) => {
  
    return (
      <>
      <ul className="Cart-box">
        {props.cartItems.map((item) => {
          return (
  
            <li key={item.id}>
              {item.name} - {item.qty} <button onClick={() => props.setCart(removeItem(item, props.cartItems))}>Remove</button>
            </li>
  
          )
        })}
      </ul>
      <button id="buy-button" onClick={() => buy(props.cartItems)}>OSTA KAIKKI</button>
      </>
    )
  }

function buy(items) {
    /* OSTA */
    console.log(items);
  }
  
  function removeItem(item, cartItems) {
  
    /*HELP: removing works, HOWEVER: 
    2. clicking a button wont update on click, only after updates after closing and opening the cart 
    */
    let removeThis = cartItems.indexOf(item)
  
    if (removeThis > -1) {
      return cartItems.splice(removeThis, 1)
    }
  }

  export default CartList