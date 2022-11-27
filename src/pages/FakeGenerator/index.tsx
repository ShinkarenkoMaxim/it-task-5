import React, { useState } from 'react';
import { DataTable } from '../../components/DataTable';
import { Form } from '../../components/Form';

const Title: React.FC = () => (
  <h1 className="text-amber-500 font-black text-4xl uppercase text-center pt-10">
    Fake Generator
  </h1>
);

export const FakeGenerator: React.FC = () => {
  const [page, setPage] = useState<number>(1);

  return (
    <div className="max-w-5xl container mx-auto">
      <div className="w-full flex flex-col gap-6">
        <Title />
        <Form />
        <DataTable />
      </div>
    </div>
  );
};
