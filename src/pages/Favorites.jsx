import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div>
      <h1>Favoritos</h1>
      {favorites.length === 0 ? (
        <p>No hay criptomonedas en favoritos.</p>
      ) : (
        <ul>
          {favorites.map((crypto) => (
            <li key={crypto.id}>
              <Link to={`/coin/${crypto.id}`}>
                {crypto.rank}. {crypto.name} ({crypto.symbol})
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
