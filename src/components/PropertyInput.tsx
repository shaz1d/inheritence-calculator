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
      <label
        htmlFor={name}
        className="flex items-end gap-3 justify-between mb-1 text-pest-600"
      >
        <span>{name}</span>
        <span className="text-sm text-pest-400">{type}</span>
      </label>
      <input
        className="w-full outline-none border-2 border-transparent focus:border-2 focus:border-pest-600 bg-white p-2 rounded-[5px] text-right text-xl text-pest-600 accent-pest-600 h-12 transition-colors duration-200"
        type="text"
        id={name}
        onChange={handleChange}
        value={state}
      />
    </div>
  );
};

export default PropertyInput;
