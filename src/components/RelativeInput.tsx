import { useState } from "react";

type Action = {
  type: string;
};
type Props = {
  name: string;
  isChecked: boolean;
  dispatch: React.Dispatch<Action>;
};

const RelativeInput = ({ name, isChecked, dispatch }: Props) => {
  const [sons, setSons] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (isNaN(parseInt(newValue)) || !parseInt(newValue)) {
      setSons(1);
    } else {
      setSons(parseInt(newValue));
    }
  };
  return (
    <div className="flex gap-2 items-center min-h-[40px]">
      <input
        className="cursor-pointer accent-pest-600"
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          dispatch({ type: name.toLowerCase() });
        }}
        name={name}
        id={name}
      />
      <label htmlFor={name} className="cursor-pointer">
        {name}
      </label>
      {name.toLowerCase() === "husband" ||
      name.toLowerCase() === "father" ||
      name.toLowerCase() === "mother" ||
      name.toLowerCase() === "grandfather" ||
      name.toLowerCase() === "grandmother" ||
      !isChecked ? null : (
        <input
          className="bg-pest-200 h-10 w-10 rounded-md text-center accent-pest-600"
          type="text"
          name=""
          id=""
          value={sons}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default RelativeInput;
