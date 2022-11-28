import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getAccounts } from '../../api';
import { AccountForm } from '../../interfaces/Account';
import { DataTable } from '../../components/DataTable';
import { Form } from '../../components/Form';

const Title: React.FC = () => (
  <h1 className="text-amber-500 font-black text-4xl uppercase text-center pt-10">
    Fake Generator
  </h1>
);

export const FakeGenerator: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<any[]>([]);
  const [formData, setFormData] = useState<AccountForm>({
    country: 'usa',
    errorsCount: 0,
    seed: 0,
  });

  // If form is changed - getting new data
  useEffect(() => {
    (async () => {
      try {
        const res = await getAccounts({
          page: 1, // always set page to 1 for getting new set of data
          ...formData,
        });

        setPage(1); // Set to first
        setData(res.data); // Replacing data
      } catch (err) {
        console.log(err);
      }
    })();
  }, [formData]);

  const handleNext = async () => {
    try {
      const res = await getAccounts({
        page: page + 1,
        ...formData,
      });
      setPage(page + 1);
      setData([...data, ...res.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeFormData = (accountFormData: AccountForm) => {
    setFormData(accountFormData);
  };

  return (
    <div className="max-w-7xl container mx-auto">
      <div className="w-full flex flex-col gap-8">
        <Title />
        <Form onChange={handleChangeFormData} />
        <InfiniteScroll
          dataLength={data.length}
          next={handleNext}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <DataTable accounts={data} />
        </InfiniteScroll>
      </div>
    </div>
  );
};
