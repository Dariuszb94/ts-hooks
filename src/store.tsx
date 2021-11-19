import { createContext } from "react";

const inititalState = {
  first: "Darek",
  last: "B",
};
export type UserState = typeof inititalState;
const context = createContext<typeof inititalState>(inititalState);
export default context;
