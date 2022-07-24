import { useState } from "react";
import { CounterLayout } from "../Components/CounterLayout";
import { MyContextProvider } from "../Context/MyContextProvider";

export const Page = () => {
  const [count, setCount] = useState(0);

  const increment = (val?: number) => {
    const value = val === undefined ? 1 : val;
    setCount((prev) => prev + value);
  };
  const decrement = (val?: number) => {
    const value = val === undefined ? 1 : val;
    setCount((prev) => prev - value);
  };
  const update = (val:number)=>{
    setCount(val);
  }

  return (
    <MyContextProvider
      counter={count}
      decrement={decrement}
      increment={increment}
      update={update}
    >
      <div className="Comp">
        <p>I'm the module with the wrapper</p>
        <p>My count is: {count}</p>
        <CounterLayout />
      </div>
    </MyContextProvider>
  );
};
