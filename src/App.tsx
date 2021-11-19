import UseContext from "./UseContext";
import UseEffect from "./UseEffect";
import UseState from "./UseState";

function App() {
  return (
    <div>
      <h1>Use state</h1>
      <UseState />
      <h1>Use effect</h1>
      <UseEffect />
      <h1>Use context</h1>
      <UseContext />
    </div>
  );
}

export default App;
