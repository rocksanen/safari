
import '../styles/productView.css';
import ProductDetails from './productDetails';

const Sidebar = ({product, setSideOpen, sideOpen}) => {

    return(

        <div className="product-side-panel">
            <div className="product-side-panel-toggle-wrapper">
                <div className="product-side-panel-toggle"
                    onClick={() => setSideOpen(!sideOpen)}>
                    {sideOpen ? '>' : '<'}
                </div>
            </div>
            <ProductDetails visible={sideOpen} product = {product} />
        </div>
    )
}

export default Sidebar