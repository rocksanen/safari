import icon from '../images/icons/cart-icon.png'
const Cart = ({ cartItems, setCart, cartOpen, setCartOpen }) => {
  if (cartOpen) {
    return (
      <div className="cart">
        <div className="cart-box">
          <button className="close-button" onClick={() => setCartOpen(false)}>x</button>
          <CartList cartItems={cartItems} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="cart">
          <img src={icon} className="cart-button" onClick={() => setCartOpen(true)}/>
      </div>
    );
  }
};

const CartList = (props) => {
  return (
    <ul className="Cart-box">
      {props.cartItems.map((item) => {
        return (
          <li>
            {item.name} - {item.qty}
          </li>
        );
      })}
    </ul>
  );
};

export default Cart;
