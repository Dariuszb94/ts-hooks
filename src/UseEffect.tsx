import { useEffect, useState } from "react";

function UseEffect() {
  const [val, valSet] = useState(1);
  useEffect(() => {
    window.setInterval(() => {
      valSet((prev) => prev + 1);
    }, 1000);
  }, []);
  return <div>{val}</div>;
}

export default UseEffect;
