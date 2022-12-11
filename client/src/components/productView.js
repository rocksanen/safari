import '../styles/productView.css';
import {useState} from 'react'
import Sidebar from "./sidebar";
import ProductMain from "./productMainArea";
import LoginBar from './loginbar';
import Filter from './filter/Filter';



function ProductView({products}) {

    const [sideOpen, setSideOpen] = useState(false);
    const [logSideOpen,setLogSideOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState('')
    const [filter, setFilter] = useState('')




    const handleFilter = (event) => {
      console.log(event.target.value)
      setFilter(event.target.value)
    }




    const ItemAfterFilter = filter === '' ? products : products.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase()))
    
    console.log(ItemAfterFilter)
  
  return (

    <section className='mainstuff' id='mainstuff' >
        
        <div className="product-view">
        <Filter value={filter} onChange={handleFilter} />
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