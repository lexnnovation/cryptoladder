import axios from "axios";
import React, { useEffect, useState } from "react";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const url = "https://api.coingecko.com/api/v3/search/trending";
  useEffect(() => {
    axios.get(url).then((response) => {
      setTrending(response.data.coins);
      // console.log(response.data.coins);
    });
  }, [url]);

  return (
    <div className='rounded-container my-12 py-4 text-primary'>
      <h1 className='text-xl font-bold p-4'>Trending Coins</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4'>
        {trending.map((trendingCoin) => (
          <div
            className='hover:bg-[#2b6cb0] hover:text-white  rounded-container flex justify-between p-4 hover:scale-105 ease-in-out duration-300'
            key={trendingCoin.item.id}
          >
            <div className='flex items-center justify-between w-full'>
              <div className='flex'>
                <img
                  className='rounded-full'
                  src={trendingCoin.item.small}
                  alt='/'
                />
                <div className='ml-4'>
                  <p className='font-bold'>{trendingCoin.item.name}</p>
                  <p>{trendingCoin.item.symbol}</p>
                </div>
              </div>
              <div className='flex items-center'>
                <img
                  className='w-5 py-2 mr-1'
                  src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'
                  alt='/'
                />
                <p>{trendingCoin.item.price_btc.toFixed(6)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
