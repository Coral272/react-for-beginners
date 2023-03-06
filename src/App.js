import styles from "./App.module.css"
import { useEffect, useState } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setConins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setConins(json);
        setLoading(false);
      });
  }, [])
  return(
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loaing....</strong> : null}
      <ul>
        {coins.map((coin, index) => 
          <li key={index}>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
