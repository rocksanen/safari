import icon from '../images/icons/cart-icon.png'
const Cart = ({ cartItems, setCart, cartOpen, setCartOpen }) => {
  if (cartOpen) {
    return (
      <div className="cart">
        <div className="cart-box">
          <button className="close-button" onClick={() => setCartOpen(false)}>x</button>
          <CartList cartItems={cartItems} setCart={() => setCart} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="cart">
          <img src={icon} alt="cart-icon" className="cart-button" onClick={() => setCartOpen(true)}/>
      </div>
    );
  }
};

const CartList = (props) => {
  return (
    <>
    <ul className="Cart-box">
      {props.cartItems.map((item) => {
        return (
          <li key={item.id}>
            {item.name} - {item.qty} <button onClick={() => props.setCart(removeItem(item, props.cartItems))}>Remove</button>
          </li>
        );
      })}
    </ul>
    <button id="buy-button" onClick={console.log(props.cartItems)}>OSTA KUSIPÄÄ</button>
    </>
  );
};

function removeItem(item, cartItems) {

  /*HELP: removing works, HOWEVER: 
  1. clicking a button removes everything below it too
  2. clicking a button wont update on click, only after updates after closing and opening the cart 
  */
  let removeThis = cartItems.indexOf(item)

  return cartItems.splice(removeThis)
  
}

export default Cart;
