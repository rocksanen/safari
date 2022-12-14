const CartList = (props) => {
  let total = 0;

    return (
      <>
      <ul className="Cart-box">
        {props.cartItems.map((item) => {
          total += item.item.price;
          return (
            <li key={item.id}>
              {item.name} <div className="cart-quantity-component"><button className="cart-plusminus" onClick={() => {changeAmount(item, props.cartItems, false); props.setCount(props.count+1)}} > - </button> {item.qty} <button className="cart-plusminus" onClick={() => {changeAmount(item, props.cartItems, true); props.setCount(props.count+1) }}>+</button></div><button className="cart-remove-button" onClick={() => { removeItem(item, props.cartItems); props.setCount(props.count+1)}}>Remove</button>
            </li>
          )
        })}
      </ul>
      <span className="cart-bottom">
        <p>Total: {total} €</p>
        <button id="buy-button" onClick={() => buy(props.cartItems)}>OSTA KAIKKI</button>
      </span>
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