import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets/")
      .then((res) => res.json())
      .then((data) => setCryptos(data.data))
      .catch((error) => console.error("error:", error));
  }, []);

  return (
    <div>
      <h1>Cryptomonedas:</h1>
      <ul>
        {cryptos.map((crypto) => (
          <li key={crypto.id}>
            <Link to={`/coin/${crypto.id}`}>
              {crypto.rank}. {crypto.name} ({crypto.symbol})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
