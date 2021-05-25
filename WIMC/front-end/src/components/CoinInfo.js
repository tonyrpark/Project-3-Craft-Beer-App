import React from 'react';
export default function CoinInfo(props) {
    const {coin,addToWallet,isLoggedIn} = props;
    const checkFlag=(priceChange)=>{
        if(priceChange<=0)
        {
            return false;
        }
        else{
            return true;
        }
    }
    return (
        <tr>
            <td><img src={coin.image} alt="img" /></td>
            <td>{coin.symbol}</td>
            <td>{coin.current_price} $</td>
            <td>{coin.total_volume}</td>
            <td className={checkFlag(coin.price_change_24h)?'flag-up':'flag-down'}>{coin.price_change_24h} %</td>
            <td>{coin.market_cap} $</td>
            {isLoggedIn?<td><button className="btn-action" onClick={()=>{addToWallet(coin.symbol)}}>add to wallet</button></td>:null}
        </tr>
    )
}
