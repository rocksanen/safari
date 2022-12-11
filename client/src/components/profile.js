
import { useState } from "react";


const Profile = ({user}) => {
  
    const [open, setOpen] =useState(false);

    const handleOpen = () => {
      setOpen(!open);
      //console.log(user.orders);
    };
  
    return (
        
      <div>
        <button onClick={handleOpen}>Profile</button>
        {open ? <div>
            <ul>
                <li key={user._id}>
                    <b>Name:</b> {user.name}
                </li>
                <li key={user._id}>
                   <b>Email:</b> {user.email}
                </li>
            </ul>
            <h4>
                Your orders
            </h4>
            <ul>
                {user && user.orders.map((order)=>{
                    return(
                        <li key={order.id}>
                            {order.name} - {order.price} €
                        </li>
                    )
                })}
            </ul>
        </div> : <div></div>}
      </div>
    );
}

export default Profile;