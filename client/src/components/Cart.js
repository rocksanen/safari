const Cart = ({ cartItems, setCart, cartOpen, setCartOpen }) => {
  if (cartOpen) {
    return (
      <div className="cart">
        <div className="cart-box">
          <button className="cart-button" onClick={() => setCartOpen(false)}>
            Close
          </button>
          <CartList cartItems={cartItems} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="cart">
        <button className="cart-button" onClick={() => setCartOpen(true)}>
          Open
        </button>
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
