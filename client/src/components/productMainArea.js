
import '../styles/productView.css';
import ProductListItem from "../scripts/ProductListItem"; 


const ProductMain = ({setSideOpen,setSelectedProduct,sideOpen,products}) => {

    return(

    <div className="product-main-area">
        <h1>Meidän tavaramme</h1>
        <div className="product-list">
            {products.map(item =>
                <ProductListItem
                    key={item.id}
                    product={item}
                    onClick={() => {                    
                    setSideOpen(!sideOpen ? !sideOpen:sideOpen);
                    setSelectedProduct(item);}}
                />)}
        </div>
    </div>
    )
}


export default ProductMain