import '../styles/productView.css';
import {useState} from 'react'
import Sidebar from "./sidebar";
import ProductMain from "./productMainArea";


function ProductView({products}) {

    const [sideOpen, setSideOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState('')

  return (

    <section className='mainstuff' id='mainstuff' >
        <div className="product-view" >
            <ProductMain 
            products = {products} setSideOpen = {setSideOpen} 
            sideOpen = {sideOpen} setSelectedProduct = {setSelectedProduct}/>
            <Sidebar product = {selectedProduct} setSideOpen = {setSideOpen} sideOpen = {sideOpen}/>
        </div>
    </section>
   
  )
}

export default ProductView;