import SingleResult from "./SingleResult";

type Props = {
  result?: object;
};

const Result = ({ result }: Props) => {
  return (
    <div className="bg-pest-600 p-8 rounded-3xl text-white">
      <h2 className="text-xl">Result</h2>
      <div className="grid grid-cols-2 gap-5">
        <SingleResult />
      </div>
    </div>
  );
};

export default Result;
