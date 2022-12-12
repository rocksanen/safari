
import '../styles/productView.css';
import ProductDetails from './productDetails';

const Sidebar = ({product, setSideOpen, sideOpen, setCart, cartItems}) => {

    return(

        <div className="product-side-panel">
            <div className="product-side-panel-toggle-wrapper">
                <div className="product-side-panel-toggle"
                    onClick={() => setSideOpen(!sideOpen)}>
                    {sideOpen ? '>' : '< Tuotteet'}
                </div>
            </div>
            <ProductDetails visible={sideOpen} product = {product} setCart= {setCart} cartItems = {cartItems}/>
        </div>
    )
}

export default Sidebar