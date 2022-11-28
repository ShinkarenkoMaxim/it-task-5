import React from 'react';
import { Account } from '../../../interfaces/Account';

export const TableRow: React.FC<{ account: Account }> = ({ account }) => (
  <div className="grid grid-cols-accountRow gap-2 py-4 border-b-2 text-sm text-zinc-500">
    <div className="text-center">{account.num}</div>
    <div>{account.id}</div>
    <div>{account.fullName}</div>
    <div>{account.address}</div>
    <div>{account.phoneNumber}</div>
  </div>
);
