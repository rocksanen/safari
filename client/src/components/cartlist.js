const CartList = (props) => {
  
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
      <button id="buy-button" onClick={() => buy(props.cartItems)}>OSTA KAIKKI</button>
      </>
    )
  }

function buy(items) {
    /* OSTA */
    console.log(items);
  }
  
  function removeItem(item, cartItems) {
    
    let removeThis = cartItems.indexOf(item)
  
    if (removeThis > -1) {
      return cartItems.splice(removeThis, 1)
    }
  }

  export default CartList