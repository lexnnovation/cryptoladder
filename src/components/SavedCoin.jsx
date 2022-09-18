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
        <table className='w-full border-collapse text-center'>
          <thead className='border-b-[2px] bg-primary'>
            <tr className='border-b'>
              <th className='px-4'>Rank #</th>
              <th className='text-left'>Coin</th>
              <th className='text-left'>Remove</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => {
              <tr
                key={coin.id}
                className='hover:bg-[#2b6cb0] hover:text-white ease-in duration-200 h-[80px] border-b-[2px] last:border-b-0 overflow-hidden'
              >
                <td>{coins.rank}</td>
                <td>
                  <Link to={`/coin/${coin.id}`}>
                    <div className='flex items-center'>
                      <img src={coin?.image} alt='/' />
                      <div>
                        <p>{coin?.name}</p>
                        <p>{coin?.symbol.toUpperCase()}</p>
                      </div>
                    </div>
                  </Link>
                </td>
                <td>
                  <AiOutlineClose className='cursor-pointer' />
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
