import { useMyContext } from "../Context/MyContextProvider";
import { DisplayCountWithButtons } from "./DisplayCountWithButtons";
import { DeepNested } from "./DeepNested";

export const CounterLayout = () => {

    const {counter} = useMyContext();
  return (
    <div className="Comp">
      <p>I'm layout holding those components</p>
      <p>I'm aware of the count: {counter}</p>
      <div className="FlexView">
        <DisplayCountWithButtons />
        <DeepNested />
      </div>
    </div>
  );
};
