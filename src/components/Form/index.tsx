import React, { useEffect, useState } from 'react';
import { AccountForm } from '../../interfaces/Account';
import { Country } from './Country';
import { ErrorsCounter } from './ErrorsCounter';
import { Seed } from './Seed';

interface Props {
  onChange: (accountFormData: AccountForm) => void;
}

export const Form: React.FC<Props> = ({ onChange }) => {
  const [country, setCountry] = useState<string>('usa');
  const [errorsCount, setErrorsCount] = useState<any>(0);
  const [seed, setSeed] = useState<any>(0);
  const [isDisabledSubmit, setIsDisabledSubmit] = useState<boolean>(true);

  useEffect(() => {
    const isValidCountry = country != '';
    const isValidSeed =
      !Number.isNaN(parseInt(seed)) && typeof parseInt(seed) === 'number';
    const isValidErrorsCount =
      !Number.isNaN(parseFloat(errorsCount)) &&
      typeof parseFloat(errorsCount) === 'number';

    if (isValidCountry && isValidErrorsCount && isValidSeed) {
      setIsDisabledSubmit(false);
    } else {
      setIsDisabledSubmit(true);
    }
  }, [country, errorsCount, seed]);

  const handleClickSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onChange({ country, errorsCount, seed });
  };

  return (
    <div className="w-[300px] flex m-auto pt-6">
      <div className="w-full h-full flex flex-col gap-8 justify-center items-center">
        <Country value={country} onChange={setCountry} />
        <ErrorsCounter value={errorsCount} onChange={setErrorsCount} />
        <Seed value={seed} onChange={setSeed} />
        <button
          className="border-2 cursor-pointer border-solid border-emerald-400 rounded px-4 py-2 enabled:hover:bg-emerald-400 enabled:hover:scale-105 enabled:hover:font-bold disabled:border-gray-400 transition"
          disabled={isDisabledSubmit}
          onClick={handleClickSubmit}
        >
          Generate !
        </button>
      </div>
    </div>
  );
};
