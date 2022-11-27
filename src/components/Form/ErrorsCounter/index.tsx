import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface Props {
  onChange: (e: any) => void;
  value: number;
}

const marks = Array.from({ length: 11 })
  .map((_, k) => k)
  .reduce((o, k) => Object.assign(o, { [k]: k }), {});

export const ErrorsCounter: React.FC<Props> = ({ onChange, value }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div>
        <label htmlFor="errors">Errors count:</label>
        <input
          className="w-full border-2 border-emerald-500 rounded p-2"
          type="number"
          name="errors"
          step="0.01"
          placeholder="Errors count"
          value={value.toString()}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(
              e.target.value !== ''
                ? parseFloat(e.target.value) > 1000
                  ? 1000
                  : parseFloat(e.target.value)
                : e.target.value
            )
          }
        />
      </div>
      <div>
        <Slider
          min={0}
          max={10}
          defaultValue={0}
          value={value}
          marks={marks}
          onChange={(v) => onChange(v as number)}
        />
      </div>
    </div>
  );
};
