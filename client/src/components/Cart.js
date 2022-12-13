
import CartIcon from './CartIcon';
import CartList from './cartlist';

const Cart = ({ cartItems, setCart, cartOpen, setCartOpen}) => {

  if (cartOpen) {
    return (
      <div className="cart">
        <div className="cart-box">
          <button className="close-button" onClick={() => setCartOpen(false)}>x</button>
          <CartList cartItems={cartItems} setCart={() => setCart} />
        </div>
      </div>
    )
  }

  return <CartIcon cartItems = {cartItems} setCartOpen = {setCartOpen}/>
  
}

export default Cart;