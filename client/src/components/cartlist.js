const CartList = (props) => {
  
    return (
      <>
      <ul className="Cart-box">
        {props.cartItems.map((item) => {
          return (
  
            <li key={item.id}>
              {item.name} <div clasName="cart-quantity-component"><button className="cart-plusminus" onClick={() => {changeAmount(item, props.cartItems, false); props.setCount(props.count+1)}} > - </button> {item.qty} <button className="cart-plusminus" onClick={() => {changeAmount(item, props.cartItems, true); props.setCount(props.count+1) }}>+</button></div><button className="cart-remove-button" onClick={() => { removeItem(item, props.cartItems); props.setCount(props.count+1)}}>Remove</button>
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

  function changeAmount(item, cartItems, increase) {

    let changeThis = cartItems.indexOf(item);

    increase ? cartItems[changeThis].qty++ : cartItems[changeThis].qty--;
    

    if (!cartItems[changeThis].qty) {
      cartItems.splice(changeThis, 1)
    }

  }

  export default CartList