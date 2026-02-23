'use client';

import settings from '@/data/settings';
import { RiMoneyCnyBoxLine } from "react-icons/ri";


const Currentandsavings = () => {
  return (
    <div className="flex-1  bg-secondary p-4 text-white">
      
      <RiMoneyCnyBoxLine className="text-5xl mb-1" />

      <p className='font-extrabold'>Current & Savings</p>
      <p>1 Total Accounts</p>
      <h6 className='font-extrabold'>{settings.current_balance}</h6>
      <p>{settings.currency} (1 Accounts)</p>
    </div>
  );
};

export default Currentandsavings;
