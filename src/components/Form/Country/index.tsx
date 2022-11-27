import React from 'react';

interface Props {
  onChange: (e: any) => void;
  value: string;
}

export const Country: React.FC<Props> = ({ onChange, value }) => {
  return (
    <div className="w-full">
      <label htmlFor="country">Country:</label>
      <select
        name="country"
        className="w-full border-2 border-emerald-500 rounded p-2 bg-white"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          onChange(e.target.value)
        }
      >
        <option value="usa">United States</option>
        <option value="poland">Poland</option>
        <option value="italy">Italian</option>
      </select>
    </div>
  );
};
