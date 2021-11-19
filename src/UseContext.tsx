import { useContext } from "react";
import { useState } from "react";
import UserContext, { UserState } from "./store";
const UseContext = () => {
  const [user, userSet] = useState<UserState>({
    first: "Adam",
    last: "Kowalski",
  });
  return (
    <UserContext.Provider value={user}>
      <Consumer />
      <button
        onClick={() =>
          userSet({
            first: "Adam1",
            last: "Kowalski1",
          })
        }
      >
        Change Context
      </button>
    </UserContext.Provider>
  );
};

export default UseContext;

const Consumer = () => {
  const { first, last } = useContext<UserState>(UserContext);
  return (
    <div>
      First:{first}, Last:{last}
    </div>
  );
};
