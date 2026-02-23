'use client';

import settings from '@/data/settings';
import Box from '../Box';
import Box2 from '../Box2';

const AccountInfo = () => {
  return (
    <div className="shadow-lg border-2 border-muted/30 p-6 ">
      <div className="flex flex-col sm:flex-row gap-10">
        <div className="flex-1">
          <p className="font-bold mb-4">Account Info</p>
          <Box title="Account Type" sub_title={settings.account_type} />
          <Box title="Account Currency" sub_title={settings.currency} />
          <Box title="Account Status" sub_title="Active" />
        </div>

        <div className="px-6 flex-1 border-x-2 border-x-muted/30">
          <p className="font-bold mb-4">Balances</p>
          <Box2
            title="Available Balance"
            sub_title={settings.current_balance}
          />

          <Box2 title="Net Balance" sub_title={settings.current_balance} />

          <Box2 title="Amount On Hold" sub_title="0.00" />

          <Box2 title="Uncleared Balance" sub_title="0.00" />
        </div>

        <div className="flex-1">
          <p className="font-bold mb-4">Limits</p>

          <Box2 title="Overdraft Limit" sub_title="0.00" />

          <Box2 title="AUF Limit" sub_title="0.00" />

          <Box2 title="Daily ATM Redrawal" sub_title="0.00" />

          <Box2 title="Minimum Balance Required" sub_title="0.00" />
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
