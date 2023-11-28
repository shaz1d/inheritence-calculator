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
          className="bg-pest-200 h-10 w-14 rounded-md text-center accent-pest-600"
          type="number"
          name=""
          id=""
          max={name.toLowerCase() === "wife" ? 4 : 20}
          min={1}
          value={state}
          onChange={(e) => {
            if (setState) {
              setState(parseInt(e.target.value, 10));
            }
          }}
        />
      )}
    </div>
  );
};

export default RelativeInput;
