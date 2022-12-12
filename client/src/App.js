import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles/background.css';
import {useState,useEffect,useRef} from 'react'

//components
import Background from './components/background';
import ProductView from './components/productView';
import Register from './components/Register';
import Login from './components/login';



const API_URL='http://localhost:4000/api'

function App() {

  const positionRef = useRef(0);
  const [mainstuff,setMainStuff] = useState(null)
  const [sunset,setSunset] = useState(null)
  const [background,setBackground] = useState(null)
  const [products,setProducts] = useState([])

  useEffect(() => {

    fetchProduct()

    //fetchUser is for test purposes only!!!
   // fetchUser()

    setMainStuff(document.getElementById('mainstuff'))
    setSunset(document.getElementById('sunset'))
    setBackground(document.getElementById('background'))

  },[])


  const fetchProduct = async () => {
    try {
      // Make the API request.
      console.log("getting json");

      const response = await fetch(API_URL + '/products/');
      
      console.log("response received")

      console.log(response);
      // Get the JSON data from the response.
      const json = await response.json();
      // If the response was successful, set the products state to the JSON data.
      // Otherwise, set the products state to an empty array.
      response.ok ? setProducts(json) : setProducts([]);
    } catch (error) {
      // If an error occurred, log the error message to the console.

      console.error(error.message);
      // Set the products state to an empty array.
      setProducts([]);
    }
  }

  // for test purposes only
  const fetchUser = async () => {


    const response = await fetch(API_URL + '/user/')
    const json = await response.json()

    console.log(json);

  }
  const handleScroll = (e) => {

    // Get the scroll position of the target element.
    const target = e.currentTarget.scrollTop;
      
      // Check if the scroll position has changed and the mainstuff, sunset, and
      // background elements are not null.
      if (target !== positionRef.current && mainstuff && sunset && background) {

          // Update the current scroll position.
          positionRef.current = target;

          // Calculate the opacity values for each element based on the scroll position.
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
        </BrowserRouter>
      </div>
    </main>
    
  )
}

export default App;
