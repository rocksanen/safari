import '../styles/productView.css';
import {useState} from 'react'
import Sidebar from "./sidebar";
import ProductMain from "./productMainArea";
import LoginBar from './loginbar';


function ProductView({products}) {

    const [sideOpen, setSideOpen] = useState(false);
    const [logSideOpen,setLogSideOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState('')

  return (

    <section className='mainstuff' id='mainstuff' >
        <div className="product-view">
            <ProductMain 
            products = {products} setSideOpen = {setSideOpen} 
            sideOpen = {sideOpen} setSelectedProduct = {setSelectedProduct}/>
            <div className='sidecontainer'>
              <Sidebar product = {selectedProduct} setSideOpen = {setSideOpen} sideOpen = {sideOpen}/>
              <LoginBar setSideOpen = {setLogSideOpen} sideOpen = {logSideOpen}/>
            </div>
        </div>
    </section>
   
  )
}

export default ProductView;