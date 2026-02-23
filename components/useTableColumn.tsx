'use cliemt';

import { ColumnDef } from '@tanstack/react-table';

const useTableColumn = () => {
  type columnsType = {
    date: string;
    description: string;
    reference_no: string;
    payments: string;
    deposits: string;
    balance: string;
  };

  const tableColumn: ColumnDef<columnsType>[] = [
    {
      accessorKey: 'date',
      header: 'Date',
      cell: ({ row }) => <div>{row.getValue('date')}</div>,
    },
    {
      accessorKey: 'description',
      header: 'Description',
      cell: ({ row }) => <div>{row.getValue('description')}</div>,
    },
    {
      accessorKey: 'reference_no',
      header: 'Reference No',
      cell: ({ row }) => {
        return <div>{row.getValue('reference_no')}</div>;
      },
    },
    {
      accessorKey: 'payments',
      header: 'Payments',
      cell: ({ row }) => {
        return <div>{row.getValue('payments')}</div>;
      },
    },
    {
      accessorKey: 'deposits',
      header: 'Deposits',
      cell: ({ row }) => {
        return <div>{row.getValue('deposits')}</div>;
      },
    },
    {
      accessorKey: 'balance',
      header: 'Balance',
      cell: ({ row }) => {
        return <div>{row.getValue('balance')}</div>;
      },
    },
  ];

  return { tableColumn };
};

export default useTableColumn;
