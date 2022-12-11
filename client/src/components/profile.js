
import { useState } from "react";


const Profile = ({user}) => {
  
    const [open, setOpen] =useState(false);
    let total = 0;

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
      </div>
    );
}

export default Profile;