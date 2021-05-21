import '../../App';
import axios from 'axios'
import { useState, useEffect} from 'react';
 
 




function Graphs() {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      }).catch(error => console.log(error))
  }, []);
  
  return (
    <div className="Graphs">
        <div className= "coin-search">
            <h2 className="coin-text"> Search a Currecy!</h2>
            
        </div>
        
    </div>
  );
}

export default Graphs;