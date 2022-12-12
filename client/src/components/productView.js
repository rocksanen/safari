import '../styles/productView.css';
import {useEffect, useState} from 'react'
import Sidebar from "./sidebar";
import ProductMain from "./productMainArea";
import LoginBar from './loginbar';
import Filter from './filter/Filter';
import Cart from './Cart';
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from '../hooks/useAuthContext';
import Profile from './profile';

function ProductView({products}) {

  const {user} = useAuthContext();
  const {logout} = useLogout();
  
   
    const [sideOpen, setSideOpen] = useState(false);
    const [logSideOpen,setLogSideOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState('')
    const [filter, setFilter] = useState('')
    const handleFilter = (event) => {
      console.log(event.target.value)
      setFilter(event.target.value)
    }
    const [cart, setCart] = useState([])
    const [cartOpen, setCartOpen] = useState(false)

    const handleSubmit = () => {
      logout();
  }

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
  
    const ItemAfterFilter = filter === '' ? products : products.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase()))    
    console.log(ItemAfterFilter)  
  return (

    <section className='mainstuff' id='mainstuff' >
        <div className="product-view">
            <div className="filter-cart">
            <Filter value={filter} onChange={handleFilter} />
            <Cart cartItems={ cart } setCart = { setCart } cartOpen = { cartOpen } setCartOpen = { setCartOpen}/>
            {user && (
            <div id='active-profile'>
                <Profile user={user}/>
                <div id='user-active'>{user.name}</div>
                <button onClick={handleSubmit} id="logout">Log out</button>
            </div>)}
        </div>
        <ProductMain
          products = {ItemAfterFilter}  setSideOpen = {setSideOpen} 
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