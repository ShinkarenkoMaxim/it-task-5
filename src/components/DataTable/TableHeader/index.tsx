import React from 'react';

export const TableHeader: React.FC = () => (
  <div className="grid grid-cols-accountRow gap-2 py-4 border-emerald-400 border-b-2  border-t-2 font-bold">
    <div className="text-center">№</div>
    <div>ID</div>
    <div>Fullname</div>
    <div>Address</div>
    <div>Phone</div>
  </div>
);
