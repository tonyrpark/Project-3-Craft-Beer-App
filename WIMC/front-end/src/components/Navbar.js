import React from "react";
import logo4 from "../logo4.png";
import {Link} from 'react-router-dom';
// REACT FONTAWESOME IMPORTS
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  const {isLoggedIn,userName} = props.loginInfo
  const {setLogin} = props;

  const logout=()=>{
    if (window.confirm('Do you want to logout?')) {
      window.localStorage.setItem('userId',"");
      window.localStorage.setItem('userName',"");
      setLogin({
        userId:"",
        userName:"",
        isLoggedIn:false
    
      })
      window.location.replace('/');
    } else {
    }
    
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img className="logo" img src={logo4} alt="logo..." />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        icon
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Portfolio
              </a>
            </li>
            {isLoggedIn?<li className="nav-item">
              <Link className="nav-link" to="/wallet">
                Your Wallet
              </Link>
            </li>:null
            }
            {isLoggedIn?<li className="nav-item"><button className="btnDanger" onClick={logout}>logout</button></li>:
            <li className="nav-item"><Link 
            to="/login"
            className="nav-link" 
            >Login</Link></li>
              }
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
