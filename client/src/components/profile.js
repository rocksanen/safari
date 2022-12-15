import { useState } from "react";
import profile from "../images/icons/profile.png"
const Profile = ({user}) => {

  const [orders,setOrders] = useState([]);
  
    const [open, setOpen] =useState(false);
    let total = 0;
    const handleOpen = () => {
      getOrders(user,setOrders);
      console.log(orders);
      setOpen(!open);
      //console.log(user.orders);
    };
  
    return (
      <>
        <img className="profile-button" src={profile} alt="profile-icon" onClick={handleOpen} />
        {open ? <div id="profile-info"> <button className="close-button-profile" onClick={() => setOpen(false)}>x</button>
            <h4>
              Personal information:
            </h4>
            <ul>
                <li key={user._id}>
                    <b>Nimi:</b> {user.name}
                </li>
                <li key={user.email}>
                   <b>Email:</b> {user.email}
                </li>
            </ul>
            <h4>
                Tilauksesi
            </h4>
            <ul>
                {orders && orders.map((order)=>{
                  total += (order.price * order.quantity);
                    return(
                        <li key={order._id}>
                            {order.name} - {order.quantity} KPL - {order.price} €
                            
                        </li>
                    )
                })}
            </ul>
            <h4>
              Total: {total} €
            </h4>
        </div> : <div></div>}
      </>
    );
}

const getOrders = async(user,setOrders)=>{
  const API_URL = 'http://localhost:4000/api/'
  try {
    const response = await fetch(API_URL + `user/${user.id}`);
    const json = await response.json();
    response.ok ? setOrders(json.orders) : setOrders(user.orders);    
  } catch (error) {
    console.log(error.message);
  }
}
export default Profile;