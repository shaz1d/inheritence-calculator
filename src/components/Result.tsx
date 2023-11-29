import SingleResult from "./SingleResult";
type RelativesShare = {
  heir: string;
  share: number;
  land: number;
  gold: number;
  silver: number;
  currency: number;
};
type Props = {
  result: RelativesShare[];
};

const Result = ({ result }: Props) => {
  console.log(result);
  return (
    <div className="bg-pest-600 p-8 rounded-3xl text-white">
      <h2 className="text-xl">Result</h2>
      <div className="grid sm:grid-cols-2 gap-5 mt-6">
        {result.map((item, index) => (
          <SingleResult key={index} relative={item} />
        ))}
      </div>
    </div>
  );
};

export default Result;
