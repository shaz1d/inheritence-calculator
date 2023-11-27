type Props = {};

const SingleResult = (props: Props) => {
  return (
    <div className="p-5 bg-pest-700 rounded-xl">
      <div className="w-full flex justify-between items-center text-lg mb-4">
        <span>Father Gets</span> <span className="text-right">0.123%</span>
      </div>
      <div className="w-full flex justify-between items-center text-base font-normal py-1">
        <span>Land</span> <span className="text-right">0.123% decimal</span>
      </div>
      <div className="w-full flex justify-between items-center text-base font-normal py-1">
        <span>Gold</span> <span className="text-right">0.123% vori</span>
      </div>
      <div className="w-full flex justify-between items-center text-base font-normal py-1">
        <span>Silver</span> <span className="text-right">0.123% vori</span>
      </div>
      <div className="w-full flex justify-between items-center text-base font-normal py-1">
        <span>Currency</span> <span className="text-right">0.123% taka</span>
      </div>
    </div>
  );
};

export default SingleResult;
