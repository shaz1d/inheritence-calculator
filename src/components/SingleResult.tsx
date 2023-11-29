type RelativesShare = {
  heir: string;
  share: number;
  land: number;
  gold: number;
  silver: number;
  currency: number;
};
type Props = {
  relative: RelativesShare;
};

const SingleResult = ({ relative }: Props) => {
  const { heir, share, land, gold, silver, currency } = relative;
  return (
    <div className="p-5 bg-pest-700 rounded-xl">
      <div className="w-full flex justify-between items-center text-lg mb-4">
        <span>{heir}</span>{" "}
        <span className="text-right">{share.toFixed(3)}%</span>
      </div>
      <div className="w-full flex justify-between items-center text-base font-normal py-1">
        <span>Land</span>{" "}
        <span className="text-right">{land.toFixed(3)} decimal</span>
      </div>
      <div className="w-full flex justify-between items-center text-base font-normal py-1">
        <span>Gold</span>{" "}
        <span className="text-right">{gold.toFixed(3)} vori</span>
      </div>
      <div className="w-full flex justify-between items-center text-base font-normal py-1">
        <span>Silver</span>{" "}
        <span className="text-right">{silver.toFixed(3)} vori</span>
      </div>
      <div className="w-full flex justify-between items-center text-base font-normal py-1">
        <span>Currency</span>{" "}
        <span className="text-right">{currency.toFixed(3)} taka</span>
      </div>
    </div>
  );
};

export default SingleResult;
