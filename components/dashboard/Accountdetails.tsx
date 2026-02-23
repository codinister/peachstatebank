'use client';

import profile from '@/data/profile';
import settings from '@/data/settings';
import Link from 'next/link';

const Accountdetails = () => {
  return (
    <div className="border-2 border-muted my-1">
      <table className="w-full">
        <thead className="bg-muted text-white">
          <tr className="">
            <td className="px-4 py-2">Customer Name</td>
            <td>Account Number</td>
            <td className="hidden sm:table-cell">Account Type</td>
            <td className="hidden sm:table-cell">Status</td>
            <td className="hidden sm:table-cell">Net Balance</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">
              <Link href="/account-details">{profile.fullname}</Link>
            </td>
            <td>
              <Link href="/account-details">{settings.account_number}</Link>
            </td>
            <td className="hidden sm:table-cell">{settings.account_type}</td>
            <td className="hidden sm:table-cell">Active</td>
            <td className="hidden sm:table-cell">{settings.current_balance}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Accountdetails;
