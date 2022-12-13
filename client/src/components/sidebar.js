
import '../styles/productView.css';
import ProductDetails from './productDetails';

const Sidebar = ({ product, setSideOpen, sideOpen, setCart, cartItems, count, setCount }) => {

  return (
    <div className="product-side-panel">
      <div className="product-side-panel-toggle-wrapper">
        <div
          className="product-side-panel-toggle"
          onClick={() => setSideOpen(!sideOpen)}>
          {sideOpen ? '>' : '< Tuotteet'}
        </div>
      </div>
        {sideOpen && (
        <ProductDetails
          product={product}
          setCart={setCart}
          cartItems={cartItems}
          visible={sideOpen}
          setSideOpen={setSideOpen}
          count={count}
          setCount={setCount}
        />
      )}
    </div>
  )
}

export default Sidebar;
