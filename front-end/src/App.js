// Team - I had to combine two app.js file's due to different packages I was experimenting with. -Tony

//From app.jsx file
import React from "react";
import { Router, Route } from "react-router-dom";
import history from "./history";
import UserProvider from "./contexts/UserProvider";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MenuBar from "./components/menus/MenuBar";
//from app.js file
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "square",
              stroke: {
                width: 10,
                color: "#f9ab00",
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
      <Router history={history}>
        <UserProvider>
          <Route path="/" component={MenuBar} />
          <Route path="/profile" component={Profile} />
        </UserProvider>
        <Route path="/" exact component={Home} />
      </Router>
    </>
  );
}

export default App;
