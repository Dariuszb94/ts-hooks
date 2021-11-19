import { createContext } from "react";

const inititalState = {
  first: "Darek",
  last: "B",
};

const context = createContext<typeof inititalState>(inititalState);
export default context;
