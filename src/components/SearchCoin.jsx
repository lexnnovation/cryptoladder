import React, { useState } from "react";
import CoinSearchResults from "../components/CoinSearchResults";

const SearchCoin = ({ coins }) => {
  const [searchTerm, setsearchTerm] = useState("");

  return (
    <div className='rounded-container my-4 '>
      <div className='flex flex-col md:flex-row justify-between pt-4 pb-8 px-8 text-center md:text-right'>
        <h1 className='text-xl font-bold my-2'>Search Crypto Currency</h1>
        <form>
          <input
            className='w-full border bg-primary border-input rounded-full px-4 py-4 text-center md:px-6 md:text-left shadow-sm '
            onChange={(e) => {
              setsearchTerm(e.target.value);
            }}
            type='text'
            placeholder='Search crypto coin'
          />
        </form>
      </div>
      <div className='px-4'>
        <table className='w-full border-collapse text-center'>
          <thead className='border-b-[2px] bg-primary '>
            <tr>
              <th></th>
              <th>#</th>
              <th className='text-left'>Coin</th>
              <th></th>
              <th>Price</th>
              <th>24h</th>
              <th className='hidden md:table-cell'>Volume (24h)</th>
              <th className='hidden sm:table-cell'>Market</th>
              <th>Last 7 Days</th>
            </tr>
          </thead>
          <tbody>
            {coins
              .filter((value) => {
                if (searchTerm === "") {
                  return value;
                } else if (
                  value.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((coin) => (
                <CoinSearchResults key={coin.id} coin={coin} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchCoin;
