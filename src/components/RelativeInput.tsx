type Action = {
  type: string;
};
type Props = {
  name: string;
  isChecked: boolean;
  dispatch: React.Dispatch<Action>;
  state?: number;
  setState?: React.Dispatch<React.SetStateAction<number>>;
};

const RelativeInput = ({
  name,
  isChecked,
  dispatch,
  state,
  setState,
}: Props) => {
  const maxValue = name.toLowerCase() === "wife" ? 4 : 20;
  const minValue = 1;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);

    if (setState) {
      if (newValue > maxValue) {
        setState(maxValue);
      } else if (newValue < minValue) {
        setState(minValue);
      } else {
        setState(newValue);
      }
    }
  };

  const increment = () => {
    if (setState) {
      setState((prev) => {
        if (prev < maxValue) {
          return prev + 1;
        } else {
          return prev;
        }
      });
    }
  };
  const decrement = () => {
    if (setState) {
      setState((prev) => {
        if (prev > minValue) {
          return prev - 1;
        } else {
          return prev;
        }
      });
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
        <div className="flex items-center">
          <button
            className="text-lg h-5 w-5  text-white flex justify-center items-center bg-pest-600 rounded-sm z-10"
            onClick={decrement}
          >
            -
          </button>
          <input
            className="bg-pest-200 h-10 w-10 rounded-md text-center accent-pest-600"
            type="number"
            name=""
            id=""
            max={name.toLowerCase() === "wife" ? 4 : 20}
            min={1}
            value={state}
            onChange={handleChange}
          />
          <button
            className="text-lg h-5 w-5 text-white flex justify-center items-center bg-pest-600 rounded-sm"
            onClick={increment}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default RelativeInput;
