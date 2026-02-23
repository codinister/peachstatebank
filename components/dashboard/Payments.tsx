'use client';

import settings from '@/data/settings';
import { FaRegCheckCircle } from 'react-icons/fa';

const Payments = () => {
  return (
    <div className="shadow-lg p-4 mt-6">
      <p className="font-bold mb-4">Last 5 Payments</p>

      <div className="flex items-center justify-between">
        <span>
          <b>24 April</b>
          <br />
          <b>1:16 AM</b>
        </span>
        <span>Adhoc Internal Transfer</span>
      </div>


      <div className="flex justify-between items-center mt-6">
        <span className='flex gap-2'>
          <FaRegCheckCircle className=' text-green-600 text-2xl' /> Processed
        </span>
        <h6>{settings.currency} 5,000.00</h6>
      </div>

      
    </div>
  );
};

export default Payments;
