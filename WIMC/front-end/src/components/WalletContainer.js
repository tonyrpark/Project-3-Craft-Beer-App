import React, { useState, useEffect } from "react";
import axios from "axios";
import WalletInfo from "./WalletInfo";

export default function WalletContainer(props) {
  const [wallet, setWallet] = useState({
    data: [],
  });

  useEffect(() => {
    axios
      .post("https://project-3-dwmc.herokuapp.com/api/wallet/get", {
        userId: window.localStorage.getItem("userId"),
      })
      .then((response) => {
        setWallet({ data: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="main-heading">Your Wallet</h1>
      <table className="coin-container">
        <thead>
          <tr>
            <th>Currency</th>
            <th>Private Key</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {wallet.data.map((wallet) => {
            return <WalletInfo key={wallet._id} wallet={wallet} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
