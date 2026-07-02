import React, {useState} from "react";
import {Link} from "react-router-dom" ;
import axios from 'axios';
const Menu = ({username,gmail}) => {
  

  //usestate for the menu
  const [selectedMenu,setSelectedMenu]=useState(0);
  //usestate for the profile logo
  const [isProfileDropdownOpen,setIsProfileDropdownOpen]=useState(false);


  const handleMenuclick=(index)=>{
    setSelectedMenu(index);

  }
  const handleProfileclick=(index)=>{
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  }
const logout = async () => {
  try {
    await axios.post(
      "http://localhost:3002/logout",
      {},
      {
        withCredentials: true,
      }
    );

    window.location.href = "http://localhost:3000/login";
  } catch (err) {
    console.log(err);
  }
};
  
  const menuClass="menu";
  const activeMenuClass="menu selected";
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/" onClick={()=>handleMenuclick(0)}>
            <p className={selectedMenu==0 ?activeMenuClass:menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
             <Link style={{textDecoration:"none"}} to="/orders" onClick={()=>handleMenuclick(0)}>
            <p className={selectedMenu==1 ?activeMenuClass:menuClass}>Orders</p>
            </Link></li>
          <li>
             <Link style={{textDecoration:"none"}} to="/holdings" onClick={()=>handleMenuclick(0)}>
            <p className={selectedMenu==2 ?activeMenuClass:menuClass}>Holdings</p>
            </Link></li>
          <li>
             <Link style={{textDecoration:"none"}} to="/positions" onClick={()=>handleMenuclick(0)}>
            <p className={selectedMenu==3 ?activeMenuClass:menuClass}>Positions</p>
            </Link>       
          </li>
          <li>
             <Link style={{textDecoration:"none"}} to="/funds" onClick={()=>handleMenuclick(0)}>
            <p className={selectedMenu==4 ?activeMenuClass:menuClass}>Funds</p>
            </Link>          
          </li>
          <li>
             <Link style={{textDecoration:"none"}} to="/apps" onClick={()=>handleMenuclick(0)}>
            <p className={selectedMenu==5 ? activeMenuClass:menuClass}>Apps</p>
            </Link>         
          </li>
        </ul>
        <hr />

     <div className="profile" onClick={handleProfileclick}>
  <button className="avatar">
    {username ? username.charAt(0).toUpperCase() : "U"}
  </button>

  <span className="username">{username}</span>

  <i className="fa-solid fa-chevron-down"></i>

  {isProfileDropdownOpen && (
    <div className="profile-dropdown">
      <ul>
       <li onClick={logout}>
  <img src="/logout.png" alt="Logout" className="logout-icon" />
  <span>Logout</span>
</li>
      </ul>
    </div>
  )}
</div>
      </div>
    </div>
  );
};

export default Menu;
