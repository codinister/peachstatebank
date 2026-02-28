'use client';

import PayRow from './PayRow';
import { Button } from './ui/button';

const PaymentSummary = ({
  data,
}: {
  data: {
    title: string;
    sub_title: string;
  }[];
}) => {
  return (
    <div>
      <div className="p-4 bg-primary text-white">
        You initiated a request for new payment. Please reveal details before
        you confirm!
      </div>

      <div className=" my-10">
        {data.map((v, k) => (
          <PayRow key={k} title={v.title} sub_title={v.sub_title} />
        ))}
      </div>

    </div>
  );
};

export default PaymentSummary;
