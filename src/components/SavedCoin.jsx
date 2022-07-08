import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const SavedCoin = () => {
  const [coins, setCoins] = useState([]);
  return (
    <div>
      {coins.length === 0 ? (
        <p>
          Your coin saver account is empty! Save a coin to access it easily on
          you watch list.
          <Link to='/'>Click here to search and save coins</Link>
        </p>
      ) : (
        <table>
          <thead>
            <th>Rank #</th>
            <th>Coin</th>
            <th>Remove</th>
          </thead>
          <tbody>
            {coins.map((coin) => {
              <tr key={coin.id}>
                <td>{coins.rank}</td>
                <td>
                  <Link to={`/coin/${coin.id}`}>
                    <div>
                      <img src={coin?.image} alt='/' />
                      <div>
                        <p>{coin?.name}</p>
                        <p>{coin?.symbol.toUpperCase()}</p>
                      </div>
                    </div>
                  </Link>
                </td>
                <td>
                  <AiOutlineClose />
                </td>
              </tr>;
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SavedCoin;
