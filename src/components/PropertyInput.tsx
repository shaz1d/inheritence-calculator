import { useState } from "react";

type Props = {
  name: string;
  type: string;
};

const PropertyInput = ({ name, type }: Props) => {
  const [state, setState] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (/^-?\d*(\.\d{0,2})?$/.test(e.target.value)) {
      ///^-?\d*\.?\d*$/
      setState(e.target.value);
    }
  };
  return (
    <div>
      <label htmlFor={name} className="flex items-end gap-3 justify-between">
        <span>{name}</span>
        <span>{type}</span>
      </label>
      <input
        className="w-full outline-none border-2 border-transparent focus:border-2 focus:border-pest-450 bg-pest-200 p-2 rounded-[5px] text-right text-2xl text-pest-600 accent-pest-450 h-12 transition-colors duration-200"
        type="text"
        id={name}
        onChange={handleChange}
        value={state}
      />
    </div>
  );
};

export default PropertyInput;
