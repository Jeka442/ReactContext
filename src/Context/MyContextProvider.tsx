import React, { useState } from "react";
import { withChildren } from "../SharedTypes";

interface IContext {
  counter: number;
  increment: (val?: number) => void;
  decrement: (val?: number) => void;
  update: (val: number) => void;
}

const MyContext = React.createContext<IContext>({
  counter: 0,
  decrement: () => {
    throw new Error("Not implemented");
  },
  increment: () => {
    throw new Error("Not implemented");
  },
  update: () => {
    throw new Error("Not implemented");
  },
});

export const MyContextProvider = (props: withChildren<IContext>) => {
  const { children, ...rest } = props;
  return <MyContext.Provider value={rest}>{props.children}</MyContext.Provider>;
};

export const useMyContext = () => {
  return React.useContext(MyContext);
};
