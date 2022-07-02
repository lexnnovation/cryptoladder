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
    <div className='rounded-container flex justify-between'>
      <h1>Trending Coins</h1>
      <div>
        {trending.map((trendingCoin) => (
          <div>
            <div>
              <div>
                <img src={trendingCoin.item.small} alt='/' />
                <div>
                  <p>{trendingCoin.item.name}</p>
                  <p>{trendingCoin.item.symbol}</p>
                </div>
              </div>
              <div>
                <img
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
