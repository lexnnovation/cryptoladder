import React from "react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineStar,
} from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";

const CoinSearchResults = ({ coin }) => {
  return (
    <tr className='hover:bg-[#2b6cb0] hover:text-white ease-in duration-200 h-[80px] border-b-[2px] last:border-b-0 overflow-hidden'>
      <td className='pl-3'>
        <AiOutlineStar />
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <div className='flex items-center'>
          <img
            className='w-6 mr-2 rounded-full'
            src={coin.image}
            alt={coin.id}
          />
          <p className='hidden sm:table-cell'>{coin.name}</p>
        </div>
      </td>
      <td>{coin.symbol.toUpperCase()}</td>
      <td>${coin.current_price.toLocaleString()}</td>
      <td>
        {coin.price_change_percentage_24h < 0 ? (
          <div className='text-red-600 pr-2 flex items-center justify-center'>
            <p>{coin.price_change_percentage_24h.toFixed(3)}%</p>
            <AiOutlineArrowDown size={10} />
          </div>
        ) : (
          <div className='text-green-600 pr-2 flex items-center justify-center'>
            <p>{coin.price_change_percentage_24h.toFixed(3)}%</p>
            <AiOutlineArrowUp size={10} />
          </div>
        )}
      </td>
      <td className='w-[180px] hidden md:table-cell'>
        ${coin.total_volume.toLocaleString()}
      </td>
      <td className='w-[180px] hidden sm:table-cell'>
        ${coin.market_cap.toLocaleString()}
      </td>
      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color='red' />
        </Sparklines>
      </td>
    </tr>
  );
};

export default CoinSearchResults;
