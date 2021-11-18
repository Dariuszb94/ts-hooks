import { useState } from "react";

export default function UseState() {
  const [arr, arrSet] = useState<number[]>([]);
  return (
    <div>
      <div>
        <button
          onClick={() => {
            arrSet([...arr, arr.length + 1]);
          }}
        >
          Add to array
        </button>
        {JSON.stringify(arr)}
      </div>
    </div>
  );
}
