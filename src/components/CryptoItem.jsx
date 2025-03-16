import { Link } from 'react-router-dom';

const CryptoItem = ({ crypto }) => {
  return (
    <li>
      <Link to={`/coin/${crypto.id}`}>
        {crypto.rank}. {crypto.name} ({crypto.symbol})
      </Link>
    </li>
  );
};

export default CryptoItem;
