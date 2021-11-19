import UserContext, { UserState } from "./store";
const UseContext = () => {
  const [user, userSet] = useState<UserState>({});
  return <UserContext.Provider value={user}></UserContext.Provider>;
};

export default UseContext;
