import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './styles/background.css';
import {useState,useEffect,useRef} from 'react'

//components
import Background from './components/background';
import ProductView from './components/productView';
import Register from './components/Register';
import Login from './components/login';



const API_URL='http://localhost:4000';

function App() {

  const positionRef = useRef(0);
  const [mainstuff,setMainStuff] = useState(null)
  const [sunset,setSunset] = useState(null)
  const [background,setBackground] = useState(null)
  const [products,setProducts] = useState([])

  useEffect(() => {

    fetchProduct()

    //fetchUser is for test purposes only!!!
    //fetchUser()

    setMainStuff(document.getElementById('mainstuff'))
    setSunset(document.getElementById('sunset'))
    setBackground(document.getElementById('background'))

  },[])


  const fetchProduct = async () => {

    const response = await fetch(API_URL + '/api/products/')
    const json = await response.json()

    response.ok ? setProducts(json) : setProducts([])

  }

  // for test purposes only
  const fetchUser = async () => {


    const response = await fetch(API_URL + '/api/user/')
    const json = await response.json()

    console.log(json);

  }
  const handleScroll = (e) => {

    const target = e.currentTarget.scrollTop;
      
      if (target !== positionRef.current) {

          positionRef.current = target;
          const mainposition = positionRef.current/600
          const sunposition = positionRef.current/1000
          const backgroundposition = 1 - positionRef.current/900
          mainstuff.style.opacity = mainposition 
          sunset.style.opacity = sunposition
          background.style.opacity = backgroundposition
        }
  }

  

  return(

    <main>
      <div className = 'wrapper' onScroll={handleScroll}>
        <BrowserRouter>
        <Background/>
        <ProductView products={products}/>
        <Routes>
          <Route
          path='/login'
          element={<Login/>}
          />
          <Route
          path='/signup'
          element={<Register/>}
          />
        </Routes>
        </BrowserRouter>
      </div>
    </main>
    
  )
}

export default App;
