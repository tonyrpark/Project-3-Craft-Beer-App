import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Dude, Where's My Crypto?</h1>
        <Typed
          className="typed-text"
          strings={[
            "Bitcoin",
            "Ethereum",
            "Binance Coin",
            "Cardano",
            "Litecoin",
            "Dogecoin",
            "Tether",
            "XRP",
            "Polkadot",
            "Internet Computer",
            "Bitcoin Cash",
            "Uniswap",
            "Chainlink",
            "Stellar",
            "Ethereum Classic",
            "Polygon",
            "VeChain",
            "Solana",
            "EOS",
            "THETA",
            "TRON",
            "Wrapped Bitcoin",
            "Filecoin",
            "Binance USD",
            "Monero",
            "Aave",
            "Neo",
            "SHIBA INU",
            "Bitcoin SV",
            "Terra",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">
          Crypto Ticker Info Click Here
        </a>
      </div>
    </div>
  );
};

export default Header;
