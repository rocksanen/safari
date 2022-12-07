
import '../styles/productView.css';
import ProductDetails from './productDetails';
import SignInUp from './SignInUp';


const Sidebar = ({product, setSideOpen, sideOpen, logged}) => {

    return(

        <div className="product-side-panel">
            <div className="product-side-panel-toggle-wrapper">
                <div className="product-side-panel-toggle"
                    onClick={() => setSideOpen(!sideOpen)}>
                    {sideOpen ? '>' : '<'}
                </div>
            </div>
            <ProductDetails visible={sideOpen} product = {product} />
            <SignInUp visible={sideOpen}/>
        </div>
    )
}

export default Sidebar