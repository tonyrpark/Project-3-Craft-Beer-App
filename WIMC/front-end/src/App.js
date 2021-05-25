import "./App.css";
import Navbar from './components/Navbar';
import Login from './components/Login'
import HomePage from "./components/HomePage"
import Signup from './components/SignUp'
import WalletContainer from './components/WalletContainer'
import {BrowserRouter as Router, Route } from 'react-router-dom';
import React,{useState,useEffect} from "react";
import axios from 'axios';
function App() {

  const [login,setLogin] = useState({
    userId:"",
    userName:"",
    isLoggedIn:false
  })
useEffect(()=>{
  if(window.localStorage.getItem('userId')){
    setLogin({
      userId:window.localStorage.getItem('userId'),
      userName:window.localStorage.getItem('userName'),
      isLoggedIn:true
    })
  }
  
},[])
  return (
    <Router>
      <React.Fragment>
      <Navbar loginInfo={login} setLogin={setLogin}/>
      <Route path="/" exact render={()=>(<HomePage isLoggedIn={login.isLoggedIn}/>)}/>
      <Route path="/login" render={()=>(<Login setLogin={setLogin}/>)}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/wallet" component={WalletContainer}/>
     </React.Fragment>
    </Router>
  );
}

export default App;
