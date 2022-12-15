import "../styles/productView.css";
import ProductListItem from "../scripts/ProductListItem";

const ProductMain = ({setSideOpen,setSelectedProduct,sideOpen,products,setLoadProducts,loadProducts}) => {

  return (
    <div id="products" className="product-main-area">
      <h1>Meidän tavaramme</h1>
      <div className="product-list">
        {products.map((item) => (
          <ProductListItem
            key={item.id}
            product={item}
            onClick={() => {
              setSideOpen(!sideOpen ? !sideOpen : sideOpen);
              setSelectedProduct(item);
              setLoadProducts(loadProducts + 1)
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductMain;
