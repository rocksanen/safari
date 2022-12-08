
import stars from '../images/backGroundImages/stars.png'
import sun from '../images/backGroundImages/sun.png'
import trees from '../images/backGroundImages/treesandmountains.png'
import sunset from '../images/backGroundImages/sunset.png'
import '../styles/background.css';


const Background = () => 

    <header id='parallerheader'> 
    <div id = 'background'></div>  
    <div id='rotator'>
        <img src={stars} className="stars" id="stars" alt="stars"/>
    </div>
        <img src={sun} className="sun" alt="sun"/>
        <img src={sunset} id="sunset" alt="sunset"/>
        <img src={trees} className="trees" alt="trees"/>
        <h1 className="title">Safari Wares</h1>
    
    </header>

export default Background