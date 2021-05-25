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
        <h1>SIGN UP AND ADD YOUR WALLET TODAY</h1>
        <Typed
          className="typed-text"
          strings={[
            "Bitcoin",
            "Ethereum",
            "Tether",
            "Binance Coin",
            "Cardano",
            "Dogecoin",
            "XRP",
            "USD Coin",
            "Polkadot",
            "Internet Computer",
            "Uniswap",
            "Bitcoin Cash",
            "Litecoin",
            "Chainlink",
            "Polygon",
            "Stellar",
            "Ethereum Classic",
            "Binance USD",
            "Solana",
            "VeChain",
            "Wrapped Bitcoin",
            "THETA",
            "TRON",
            "EOS",
            "Filecoin",
            "Aave",
            "Dai",
            "Monero",
            "Neo",
            "Maker",
            "SHIBA INU",
            "Klaytn",
            "Bitcoin SV",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="/signup" className="btn-main-offer">
          Register Here
        </a>
      </div>
    </div>
  );
};

export default Header;
