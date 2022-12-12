import "../styles/productView.css";
import { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import ProductMain from "./productMainArea";
import LoginBar from "./loginbar";
import Filter from "./filter/Filter";
import Cart from "./Cart";
import Form from "./form/Form";

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
        id: 1,
        name: "retkituote 1",
        qty: 3
      },
      {
        id: 2,
        name: "retkituote 2",
        qty: 1
      }
    ]
    useEffect(() => {
      setCart(cartExamp)
    },[]);
    const ItemAfterFilter = filter === '' ? products : products.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase()))    
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
                <Sidebar product = {selectedProduct} setSideOpen = {setSideOpen} sideOpen = {sideOpen} setCart = {setCart} cartItems={cart}/>
                <LoginBar setSideOpen = {setLogSideOpen} sideOpen = {logSideOpen}/>
            </div>
        </div>
        <Form />
      </div>
    </section>
  );
}
export default ProductView;
