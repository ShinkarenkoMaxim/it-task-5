import React from 'react';

interface Props {
  onChange: (e: number) => void;
  value: number;
}

export const Seed: React.FC<Props> = ({ onChange, value }) => {
  return (
    <div className="w-full">
      <label htmlFor="seed">Seed:</label>
      <div className="flex gap-4">
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
        <button
          className="text-center bg-emerald-500 border-2 border-emerald-500 text-white py-2 px-4 rounded font-bold hover:bg-white hover:text-black"
          onClick={() => onChange((Math.random() * 100000) << 0)}
        >
          Randomize
        </button>
      </div>
    </div>
  );
};
