import CartIcon from './CartIcon';
import CartList from './cartlist';

const Cart = ({cartItems, setCart, cartOpen, setCartOpen, count, setCount, products, setProducts}) => {
    /* rendering shopping list and cart */
    const renderList = () => {
        if (cartOpen) {
            return <div className="cart">
                <div className="cart-box">
                    <button className="close-button" onClick={() => setCartOpen(false)}>x</button>
                    <CartList
                        cartItems={cartItems}
                        setCart={setCart}
                        count={count}
                        setCount={setCount}
                        products={products}
                        setCartOpen={setCartOpen}
                    />
                </div>
            </div>;
        }
        return null;
    }
    /* rendering shopping cart */
    const renderCart = () => {
        return <CartIcon cartItems={cartItems} setCartOpen={setCartOpen}/>;
    }
    return (
        <>
            {renderCart()}
            {renderList()}
        </>
    );
}
export default Cart;