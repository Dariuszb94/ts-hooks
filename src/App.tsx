import UseContext from "./UseContext";
import UseEffect from "./UseEffect";
import UseState from "./UseState";

function App() {
  return (
    <div>
      <h2>Use state</h2>
      <UseState />
      <h2>Use effect</h2>
      <UseEffect />
      <h2>Use context</h2>
      <UseContext />
      <h2>Use reducer</h2>
      <UseReducer />
    </div>
  );
}

export default App;
