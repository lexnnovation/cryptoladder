import React from "react";
import SavedCoin from "../components/SavedCoin";

const Accunt = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Account</h1>
          <div>
            <p>Welcome User</p>
          </div>
        </div>
        <div>
          <button>Sign Out</button>
        </div>
      </div>
      <div>
        <div>
          <h1>Favourite Coins</h1>
          <SavedCoin />
        </div>
      </div>
    </div>
  );
};

export default Accunt;
