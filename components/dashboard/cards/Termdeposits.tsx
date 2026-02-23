'use client';
import { RiLuggageDepositLine } from 'react-icons/ri';

const Termdeposits = () => {
  return (
    <div className="flex-1  bg-secondary/75 p-4 text-white">
      <p className="font-extrabold">Term Deposits</p>
      <RiLuggageDepositLine className="text-5xl mb-1" />
      <p>No Current Term Deposit</p>
    </div>
  );
};

export default Termdeposits;
