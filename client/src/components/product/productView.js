import "../../styles/productView.css";
import { useState } from "react";
import Sidebar from "./sidebar";
import ProductMain from "./productMainArea";
import LoginBar from "../user/loginbar";
import Filter from "../filter/Filter";
import Cart from "../cart/Cart";
import Form from "../form/Form";
import {useAuthContext} from "../../hooks/useAuthContext";
import {useLogout} from "../../hooks/useLogout";
import Profile from "../user/profile";
import logoutbutton from '../../images/icons/logout.png'
import { useEffect } from "react";

function ProductView({products, setProducts, setLoadProducts, loadProducts}) {
  
    const {user} = useAuthContext();
    const {logout} = useLogout();
    const [sideOpen, setSideOpen] = useState(false);
    const [logSideOpen,setLogSideOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState('')
    const [filter, setFilter] = useState('')
    const [cart, setCart] = useState([])
    const [cartOpen, setCartOpen] = useState(false)
    const [count, setCount] = useState('')

    const handleFilter = (event) => setFilter(event.target.value)
    const handleSubmit = () => logout();

    const ItemAfterFilter = filter === '' ? products : products.filter(item => 
    item.name.toLowerCase().includes(filter.toLowerCase()))   
  
    useEffect(() => {},[count])
    
 
  return (
    <section className='mainstuff' id='mainstuff' >
        <div className="product-view">
            <div className="filter-cart">
            <Filter value={filter} onChange={handleFilter} />
            <Cart 
            cartItems={ cart } 
            setCart = { setCart } 
            cartOpen = { cartOpen } 
            setCartOpen = { setCartOpen } 
            count = { count } 
            setCount = { setCount }
            products = {products}
            setProducts = {setProducts}/>
            {user && (
            <div id='active-profile'>
                <Profile user={user}/>
                <img className="log-out-button" src={logoutbutton} alt="log-out" onClick={handleSubmit} id="logout" />
                <div id='user-active'>{user.name}</div>
            </div>)}
          </div>
        <ProductMain
          products = {ItemAfterFilter}  setSideOpen = {setSideOpen} 
          sideOpen = {sideOpen} setSelectedProduct = {setSelectedProduct}
          setLoadProducts = {setLoadProducts} loadProducts = {loadProducts}/>
            <div className='sidecontainer'>
                <Sidebar product = {selectedProduct} 
                setSideOpen = {setSideOpen} 
                sideOpen = {sideOpen} 
                setCart = {setCart} 
                cartItems={cart}
                count = {count}
                setCount = {setCount}/>
                <LoginBar setSideOpen = {setLogSideOpen} sideOpen = {logSideOpen}/>
            </div>
        <Form />
      </div>
    </section>
  )
}
export default ProductView;
