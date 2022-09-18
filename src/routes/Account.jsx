import React from "react";
import SavedCoin from "../components/SavedCoin";

const Accunt = () => {
  return (
    <div className='max-w-[1140px] mx-auto'>
      <div className='flex justify-between items-center my-12 py-8 rounded-container '>
        <div className='mx-8'>
          <h1 className='text-lg font-bold'>Account</h1>
          <div>
            <p>Welcome User</p>
          </div>
        </div>
        <div className='mx-8'>
          <button className='border px-6 py-2 rounded-full hover:shadow-md  hover:scale-105 font-[600 ]'>
            Sign Out
          </button>
        </div>
      </div>
      <div className='flex justify-between items-center my-12 py-8 rounded-container '>
        <div className='w-ful min-h-[300px] mx-8'>
          <h1 className='text-xl font-bold py-4'>Favourite Coins</h1>
          <SavedCoin />
        </div>
      </div>
    </div>
  );
};

export default Accunt;
