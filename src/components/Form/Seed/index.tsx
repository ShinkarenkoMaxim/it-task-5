import React from 'react';

interface Props {
  onChange: (e: number) => void;
  value: number;
}

export const Seed: React.FC<Props> = ({ onChange, value }) => {
  return (
    <div className="w-full">
      <label htmlFor="seed">Seed:</label>
      <input
        className="w-full border-2 border-emerald-500 rounded p-2"
        type="number"
        name="seed"
        placeholder="Seed"
        value={value.toString()}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.value == '') return e.preventDefault();
          return onChange(parseInt(e.target.value));
        }}
      ></input>
    </div>
  );
};
