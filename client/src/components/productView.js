import '../styles/productView.css';
import {useEffect, useState} from 'react'
import Sidebar from "./sidebar";
import ProductMain from "./productMainArea";
import LoginBar from './loginbar';
import Cart from './Cart';



function ProductView({products}) {

    const [sideOpen, setSideOpen] = useState(false);
    const [logSideOpen,setLogSideOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState('')
    const [cart, setCart] = useState([])
    const [cartOpen, setCartOpen] = useState(false)

    /* placeholder */ 
    const cartExamp = 
    [
      {
        name: "kakkaa",
        qty: 3
      },
      {
        name: "ASDASDA",
        qty: 1
      }
    ]

    useEffect(() => {
      setCart(cartExamp)
    },[]);

    

  return (

    <section className='mainstuff' id='mainstuff' >
        <div className="product-view">

        <Cart cartItems={ cart } setCart = { setCart } cartOpen = { cartOpen } setCartOpen = { setCartOpen}/>

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