import CryptoItem from '../CryptoItem'; 

const CryptoList = ({ cryptos }) => {
  return (
    <div>
      <h1>Cryptomonedas:</h1>
      <ul>
        {cryptos.map((crypto) => (
          <CryptoItem key={crypto.id} crypto={crypto} />
        ))}
      </ul>
    </div>
  );
};

export default CryptoList;
