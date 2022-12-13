
import '../styles/carticon.css';

const CartIcon = ({setCartOpen,cartItems}) => {
    
    const sum = cartItems.reduce((total, item) => total + item.qty, 0);

    return(
    <>
        <link 
            rel="stylesheet" 
            href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" 
            integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" 
            crossOrigin="anonymous"/>
        <link 
            href="https://fonts.googleapis.com/css?family=Montserrat" 
            rel="stylesheet"/> 
        <div className="shopping-cart"  onClick={() => setCartOpen(true)}>
            <div id="badge">{sum}</div>
            <i className="fas fa-shopping-cart shopping-cart-icon"></i>
        </div>
    </>
    )
}


export default CartIcon