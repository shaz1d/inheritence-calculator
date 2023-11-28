import { useReducer, useState } from "react";
import PropertyInput from "./PropertyInput";
import RelativeInput from "./RelativeInput";
import Result from "./Result";
import reducer from "../libs/utils";

type RelativesShare = {
  heir: string;
  share: number;
  land: number;
  gold: number;
  silver: number;
  currency: number;
};

const MainContent = () => {
  const conditions = {
    hasChild: false,
    hasSon: false,
    hasDaughter: false,
    hasFather: false,
    hasMother: false,
    hasTrueGrandfather: false,
    hasTrueGrandmother: false,
    hasWife: false,
    hasHusband: false,
  };

  const [numberOfSons, setNumberOfSons] = useState(1);
  const [numberOfDaughters, setNumberOfDaughters] = useState(1);
  const [numberOfWives, setNumberOfWives] = useState(1);

  const [land, setLand] = useState("0");
  const [gold, setGold] = useState("0");
  const [silver, setSilver] = useState("0");
  const [currency, setCurrency] = useState("0");

  const [state, dispatch] = useReducer(reducer, conditions);

  function calculate() {
    const result: RelativesShare[] = [];
    const totalLand = parseFloat(land);
    const totalGold = parseFloat(gold);
    const totalSilver = parseFloat(silver);
    const totalCurrency = parseFloat(currency);

    const husbandShare = state.hasHusband
      ? state.hasChild
        ? 1 / 4
        : 1 / 2
      : 0;
    const wifeShare = state.hasWife ? (state.hasChild ? 1 / 8 : 1 / 4) : 0;

    if (state.hasHusband) {
      const share = husbandShare;
      result.push({
        heir: "Husband",
        share,
        land: totalLand * share,
        gold: totalGold * share,
        silver: totalSilver * share,
        currency: totalCurrency * share,
      });
    }
    if (state.hasWife) {
      const share = wifeShare;
      result.push({
        heir: "Wife",
        share,
        land: (totalLand * share) / numberOfWives,
        gold: (totalGold * share) / numberOfWives,
        silver: (totalSilver * share) / numberOfWives,
        currency: (totalCurrency * share) / numberOfWives,
      });
    }
    if (state.hasSon) {
      const share = 9 / (numberOfSons + numberOfDaughters);
      result.push({
        heir: "Son",
        share,
        land: (totalLand * share) / numberOfSons,
        gold: (totalGold * share) / numberOfSons,
        silver: (totalSilver * share) / numberOfSons,
        currency: (totalCurrency * share) / numberOfSons,
      });
    }

    console.log(result);
  }

  return (
    <div>
      <div className="bg-white p-4 rounded-3xl grid grid-cols-8 gap-4 mb-6">
        <div className="col-span-4 p-6 text-pest-600">
          <h2 className="text-xl">Relatives List</h2>
          <div className="grid grid-cols-2 gap-5 mt-6">
            <RelativeInput
              name="Husband"
              isChecked={state.hasHusband}
              dispatch={dispatch}
            />
            <RelativeInput
              name="Wife"
              isChecked={state.hasWife}
              dispatch={dispatch}
              state={numberOfWives}
              setState={setNumberOfWives}
            />
            <RelativeInput
              name="Son"
              isChecked={state.hasSon}
              dispatch={dispatch}
              state={numberOfSons}
              setState={setNumberOfSons}
            />
            <RelativeInput
              name="Daughter"
              isChecked={state.hasDaughter}
              dispatch={dispatch}
              state={numberOfDaughters}
              setState={setNumberOfDaughters}
            />
            <RelativeInput
              name="Father"
              isChecked={state.hasFather}
              dispatch={dispatch}
            />
            <RelativeInput
              name="Mother"
              isChecked={state.hasMother}
              dispatch={dispatch}
            />
            <RelativeInput
              name="Grandfather"
              isChecked={state.hasTrueGrandfather}
              dispatch={dispatch}
            />
            <RelativeInput
              name="Grandmother"
              isChecked={state.hasTrueGrandmother}
              dispatch={dispatch}
            />
          </div>
        </div>
        <div className="col-span-4 bg-pest-200 rounded-2xl p-5 text-pest-600">
          <h2 className="text-xl">Property Description</h2>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <PropertyInput
              name="Land"
              type="decimal"
              state={land}
              setState={setLand}
            />
            <PropertyInput
              name="Gold"
              type="vori"
              state={gold}
              setState={setGold}
            />
            <PropertyInput
              name="Silver"
              type="vori"
              state={silver}
              setState={setSilver}
            />
            <PropertyInput
              name="Currency"
              type="taka"
              state={currency}
              setState={setCurrency}
            />
            <button
              className="col-span-2 rounded-md bg-pest-600 text-white py-3 text-xl"
              onClick={calculate}
            >
              Calculate
            </button>
          </div>
        </div>
      </div>
      <Result />
    </div>
  );
};

export default MainContent;
