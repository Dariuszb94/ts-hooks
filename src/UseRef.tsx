import { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  return (
    <div>
      <input type="text" />
    </div>
  );
};

export default UseRef;
