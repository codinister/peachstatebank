'use client';

import AccountInfo from '@/components/accountdetails/AccountInfo';
import MyAccountdetails from '@/components/accountdetails/MyAccountdetails';
import Transactions from '@/components/accountdetails/Transactions';
import React from 'react';

const AccountDetails = () => {
  return (
    <div className="mx-auto container px-6 sm:px-0 py-6">
      <MyAccountdetails />
      <AccountInfo />
      <Transactions />
    </div>
  );
};

export default AccountDetails;
