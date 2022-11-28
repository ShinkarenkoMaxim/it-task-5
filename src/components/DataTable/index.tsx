import React from 'react';
import { Account } from '../../interfaces/Account';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

interface Props {
  accounts: Account[];
}

export const DataTable: React.FC<Props> = ({ accounts }) => {
  return (
    <div className="w-full">
      <TableHeader />
      {accounts.map((account, k) => (
        <TableRow key={k} account={account} />
      ))}
    </div>
  );
};
