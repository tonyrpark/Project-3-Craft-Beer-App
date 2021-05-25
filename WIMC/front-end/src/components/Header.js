import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";

const Header = () => {
  return (
    <div className="header-wrapper">
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
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      />
      <div className="main-info">
        <h1>UCSD Fullstack - Tony Park React Portfolio</h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Design",
            "Web Development",
            "SEO",
            "Marketing",
            "Creative Content Writing",
            "MERN",
            "Node.js",
            "Bootstrap",
            "Handlebars.js",
            "MongoDB",
            "NoSQL",
            "Cybersecurity",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">
          About Me
        </a>
      </div>
    </div>
  );
};

export default Header;
