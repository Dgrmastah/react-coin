import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Coin = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    fetch(`https://api.coincap.io/v2/assets/${id}`)
      .then((res) => res.json())
      .then((data) => setCoin(data.data))
      .catch((error) => console.error("error:", error));
  }, [id]);

  const toggleFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.some((fav) => fav.id === coin.id)) {
      favorites = favorites.filter((fav) => fav.id !== coin.id);
    } else {
      favorites.push(coin);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  if (!coin) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{coin.name} ({coin.symbol})</h2>
      <p>Precio: ${parseFloat(coin.priceUsd).toFixed(2)}</p>
      <button onClick={toggleFavorites}>⭐ Agregar/Quitar Favoritos</button>
    </div>
  );
};

export default Coin;

