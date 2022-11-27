import React from 'react';

const TableHeader: React.FC = () => (
  <div className="grid grid-cols-5 py-1 border-b-2 border-t-2 font-bold">
    <div>№</div>
    <div>ID</div>
    <div>Fullname</div>
    <div>Address</div>
    <div>Phone</div>
  </div>
);

const TableRow: React.FC = () => (
  <div className="grid grid-cols-5 py-4 border-b-2">
    <div>1</div>
    <div>1</div>
    <div>Test</div>
    <div>Test city, test street, 1</div>
    <div>+00000000000</div>
  </div>
);

export const DataTable: React.FC = () => {
  return (
    <div className="w-full">
      <TableHeader />
      <TableRow />
    </div>
  );
};
