import { useEffect, useState } from "react";

function UseEffect() {
  const [val, valSet] = useState(1);
  useEffect(() => {
    const timer = window.setInterval(() => {
      valSet((prev) => prev + 1);
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);
  return <div>{val}</div>;
}

export default UseEffect;
