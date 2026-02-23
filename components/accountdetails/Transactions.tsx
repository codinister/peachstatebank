'use client';

import { columnType } from '@/type/types';
import DataTable from '../TableRow';
import useTableColumn from '../useTableColumn';
import settings from '@/data/settings';

const Transactions = () => {
  const { tableColumn } = useTableColumn();


  const cur = settings.currency



  const tableData: columnType[] = [
  {
    date: "2023-03-15",
    description: "Opening Balance",
    reference_no: "OB20230315",
    payments: cur+'0.00',
    deposits: cur+'0.00',
    balance: cur+'4500.00'
  },
  {
    date: "2023-03-30",
    description: "Payroll Deposit – Tech Solutions Inc",
    reference_no: "DEP230330",
    payments: cur+'0.00',
    deposits: cur+'3100.00',
    balance: cur+'7600.00'
  },
  {
    date: "2023-04-05",
    description: "Rent Payment – Greenview Apartments",
    reference_no: "TRF230405",
    payments: cur+'1450.00',
    deposits: cur+'0.00',
    balance: cur+'6150.00'
  },
  {
    date: "2024-09-18",
    description: "Online Purchase – Amazon",
    reference_no: "POS240918",
    payments: cur+'289.75',
    deposits: cur+'0.00',
    balance: cur+'5860.25'
  },
  {
    date: "2024-11-02",
    description: "Zelle Transfer from Sarah Miller",
    reference_no: "ZEL241102",
    payments: cur+'0.00',
    deposits: cur+'600.00',
    balance: cur+'6460.25'
  },
  {
    date: "2025-02-10",
    description: "Utility Bill – Florida Power & Light",
    reference_no: "BILL250210",
    payments: cur+'210.40',
    deposits: cur+'0.00',
    balance: cur+'6249.85'
  },
  {
    date: "2025-02-28",
    description: "Payroll Deposit – Tech Solutions Inc",
    reference_no: "DEP250228",
    payments: cur+'0.00',
    deposits: cur+'3250.00',
    balance: cur+'9499.85'
  },
  {
    date: "2025-03-05",
    description: "ATM Withdrawal",
    reference_no: "ATM250305",
    payments: cur+'400.00',
    deposits: cur+'0.00',
    balance: cur+'9099.85'
  },
  {
    date: "2025-04-12",
    description: "Car Loan Payment – Auto Finance USA",
    reference_no: "LOAN250412",
    payments: cur+'425.00',
    deposits: cur+'0.00',
    balance: cur+'8674.85'
  },
  {
    date: "2025-06-20",
    description: "Mobile Check Deposit",
    reference_no: "DEP250620",
    payments: cur+'0.00',
    deposits: cur+'1100.00',
    balance: cur+'9774.85'
  }
];



  return (
    <div className="border-2 border-muted/30 p-6 shadow-lg">
      <p className="font-bold mb-6">Transactions</p>
      <div>
        <DataTable columns={tableColumn} data={tableData} />
      </div>
    </div>
  );
};

export default Transactions;
