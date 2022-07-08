import React, { useState } from "react";
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
          <thead></thead>
        </table>
      )}
    </div>
  );
};

export default SavedCoin;
