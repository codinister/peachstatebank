'use client';

import Accountdetails from '@/components/dashboard/Accountdetails';
import Activitylog from '@/components/dashboard/Activitylog';
import Currentandsavings from '@/components/dashboard/cards/Currentandsavings';
import Loansandfinances from '@/components/dashboard/cards/Loansandfinances';
import Termdeposits from '@/components/dashboard/cards/Termdeposits';
import Payments from '@/components/dashboard/Payments';
import Quicklinks from '@/components/dashboard/Quicklinks';

const Dashboard = () => {
  return (
    <div className="mx-auto container py-6 px-6 sm:px-0 flex-col sm:flex-row flex gap-4">
      <div className="flex-2">
        <div className="flex flex-col sm:flex-row">
          <Currentandsavings />
          <Termdeposits />
          <Loansandfinances />
        </div>

        <div>
          <Accountdetails />
        </div>

        <div>
          <Activitylog />
        </div>
      </div>
      <div className="flex-1">
        <div>
          <Quicklinks />
        </div>
        <div>
          <Payments />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
