'use client';

import settings from '@/data/settings';

const MyAccountdetails = () => {
  return (
    <div className="mb-10 border-2 border-muted/30 shadow-lg p-6">
      <p className="font-bold mb-4">Account Details</p>
      <div>
        <div className="w-100 mb-6">
          <p className="mb-3">Account</p>
          <div className="pb-2 border-b-2 border-b-muted/30">
            {settings.account_number}-{settings.currency}-
            {settings.account_type}
          </div>
        </div>

        <div className="mb-6">
          Balance: {settings.currency}
          {settings.current_balance}
        </div>

        <div>Product Name: {settings.product_name}</div>
      </div>
    </div>
  );
};

export default MyAccountdetails;
