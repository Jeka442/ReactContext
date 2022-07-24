import { useRef } from "react";
import { useMyContext } from "../Context/MyContextProvider";

export const DeepNested = () => {
  return (
    <div className="Comp">
      I'm nested level 1
      <DeepNested1 />
    </div>
  );
};

const DeepNested1 = () => {
  return (
    <div className="Comp">
      I'm nested level 2
      <DeepNested2 />
    </div>
  );
};
const DeepNested2 = () => {
  return (
    <div className="Comp">
      I'm nested level 3
      <DeepNested3 />
    </div>
  );
};

const DeepNested3 = () => {
  return (
    <div className="Comp">
      I'm nested level 4
      <DeepNested4 />
    </div>
  );
};

const DeepNested4 = () => {
  const { update, counter } = useMyContext();

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") update(0);
    else update(parseInt(e.target.value));
  };
  return (
    <div className="Comp">
      I'm nested level 5
      <br />
      and still
      <br />
      knows the count: {counter}
      <br />
      and can do that - try changing the value
      <br />
      <input
        value={counter === 0 ? "" : counter}
        onChange={updateValue}
        type="number"
        placeholder="insert a number"
      />
    </div>
  );
};
