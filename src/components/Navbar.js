
import "./style.css"
import React, {useState} from 'react'
import { NavLink  } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Navbar = () => {

   
    let navigate = useNavigate();

    const handleLogout = () => 
    {
      localStorage.removeItem("token");
      navigate("/login");
    };

    return ( 

    <nav>
      
        <div>
          iNotebook
        </div>
        <div>
        <NavLink  to="/home" className="link " exact    >
              {" "}
              Home
            </NavLink>
        </div>
        <div>
        <NavLink  className="link"  exact to="/" >
              {" "}
              About
            </NavLink>
        </div>
        <div className="blank">

        </div>
        {!localStorage.getItem("token") ? (
            <div  >
              <button className="btn">
                <NavLink  className="link"  exact  to="/signup">Sign Up</NavLink>
              </button>
              <button className="btn">
                <NavLink  className="link" exact  to="/login">Login </NavLink>
              </button>
            </div>
          ) : (
            <button className="btn" onClick={handleLogout}>Log Out</button>

          )}
      

    </nav>

    )
}

export default Navbar
