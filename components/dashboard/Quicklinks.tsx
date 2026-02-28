'use client';
import { FaSackDollar } from 'react-icons/fa6';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { SlPeople } from 'react-icons/sl';
import { LuCalculator } from 'react-icons/lu';
import { GoFileBinary } from 'react-icons/go';
import Link from 'next/link';

const Quicklinks = () => {
  return (
    <div className="p-4 shadow-lg">
      <p className="font-bold mb-4">Quick Links</p>

      <div className="flex gap-6 flex-wrap">
        <div className="flex-1 text-center">
          <Link href="/payment" className="text-[8px]">
            <FaSackDollar className="text-secondary/70 text-5xl mx-auto" />
            <span>One time Payment</span>
          </Link>
        </div>
        <div className="flex-1 text-center">
          <FaSackDollar className="text-primary text-5xl mx-auto" />
          <span className="text-[8px]">Funds Transfer</span>
        </div>
        <div className="flex-1 text-center">
          <RiSecurePaymentLine className="text-primary text-5xl mx-auto" />
          <span className="text-[8px]">Multiple Payment</span>
        </div>
      </div>

      <div className="flex gap-6 flex-wrap mt-6">
        <div className="flex-1 text-center">
          <SlPeople className="text-secondary/70 text-5xl mx-auto" />
          <span className="text-[8px]">Manage Beneficiaries</span>
        </div>
        <div className="flex-1 text-center">
          <LuCalculator className="text-primary text-5xl mx-auto" />
          <span className="text-[8px]">Exchange Rate Calculator</span>
        </div>
        <div className="flex-1 text-center">
          <GoFileBinary className="text-secondary text-5xl mx-auto" />
          <span className="text-[8px]">File Upload</span>
        </div>
      </div>
    </div>
  );
};

export default Quicklinks;
