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
        {open ? <div id="profile-info"> <button className="close-button-profile" onClick={() => setOpen(false)}>x</button>
            <h4>
              Personal information:
            </h4>
            <ul>
                <li key={user._id}>
                    <b>Nimi:</b> {user.name}
                </li>
                <li key={user._id}>
                   <b>Email:</b> {user.email}
                </li>
            </ul>
            <h4>
                Tilauksesi
            </h4>
            <ul>
                {user && user.orders.map((order)=>{
                  total += order.price;
                    return(
                        <li key={order.id}>
                            {order.name} - {order.price} €
                            
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
export default Profile;