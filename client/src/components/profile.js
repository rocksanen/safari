import { useState } from "react";
import profile from "../images/icons/profile.png"
const Profile = ({user}) => {
  
    const [open, setOpen] =useState(false);
    let total = 0;
    const handleOpen = () => {
      setOpen(!open);
      //console.log(user.orders);
    };
  
    return (
        
      <>
        <img className="profile-button" src={profile} alt="profile-icon" onClick={handleOpen} />
        {open ? <div>
            <h4>
              Personal information:
            </h4>
            <ul>
                <li key={user._id}>
                    <b>Name:</b> {user.name}
                </li>
                <li key={user.email}>
                   <b>Email:</b> {user.email}
                </li>
            </ul>
            <h4>
                Your orders
            </h4>
            <ul>
                {user.orders && user.orders.map((order)=>{
                  total += order.quantity;
                    return(
                        <li key={order._id}>
                            {order.name} - {order.quantity} 
                            
                        </li>
                    )
                })}
            </ul>
            <h4>
              Total: {total} 
            </h4>
        </div> : <div></div>}
      </>
    );
}
export default Profile;