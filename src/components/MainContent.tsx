import PropertyInput from "./PropertyInput";
import RelativeInput from "./RelativeInput";

const MainContent = () => {
  return (
    <div className="bg-white p-4 rounded-3xl grid grid-cols-8 gap-4">
      <div className="col-span-5 p-6 text-pest-600">
        <h2 className="text-xl">Relatives List</h2>
        <div className="grid grid-cols-3 gap-5 mt-6">
          <RelativeInput name="Husband" />
          <RelativeInput name="Wife" />
          <RelativeInput name="Son" />
          <RelativeInput name="Daughter" />
          <RelativeInput name="Father" />
          <RelativeInput name="Mother" />
          <RelativeInput name="Grand Father" />
          <RelativeInput name="Grand Mother" />
        </div>
      </div>
      <div className="col-span-3 bg-pest-200 rounded-2xl p-5 text-pest-600">
        <h2 className="text-xl">Property Description</h2>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <PropertyInput name="Land" type="decimal" />
          <PropertyInput name="Gold" type="vori" />
          <PropertyInput name="Silver" type="vori" />
          <PropertyInput name="Currency" type="taka" />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
