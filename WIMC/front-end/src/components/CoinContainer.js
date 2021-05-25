import React, { useState, useEffect } from "react";
import axios from "axios";
import CoinInfo from "./CoinInfo";

export default function CoinContainer(props) {
  const { isLoggedIn } = props;
  const [coins, setCoin] = useState({
    data: [],
  });

  const addToWallet = (currency) => {
    axios
      .post("https://project-3-dwmc.herokuapp.com/api/wallet/create", {
        userId: window.localStorage.getItem("userId"),
        currency: currency.toUpperCase(),
        isLoggedIn: isLoggedIn,
      })
      .then((result) => {
        console.log(result);
        alert(result.data.message);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((response) => {
        setCoin({ data: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="main-heading">Crypto Today</h1>
      <table className="coin-container">
        <thead>
          <tr>
            <th>Coin</th>
            <th>Symbol</th>
            <th>Current Price</th>
            <th>Total Volume</th>
            <th>Price Change</th>
            <th>Market Capital</th>
            {isLoggedIn ? <th>Action</th> : null}
          </tr>
        </thead>
        <tbody>
          {coins.data.map((coin) => {
            return (
              <CoinInfo
                key={coin.id}
                coin={coin}
                addToWallet={addToWallet}
                isLoggedIn={isLoggedIn}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
