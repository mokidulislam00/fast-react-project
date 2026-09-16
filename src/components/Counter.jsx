
import React, { useState } from 'react';
function Counter() {

  const [count, setCount] = useState(0);

  return (
    <div className="m-4 p-4 border border-gray-300 rounded shadow-md bg-amber-100"  >

      <h1 className="text-2xl font-bold">Count: {count}</h1>

      <button onClick={() => setCount(count + 1)} disabled={count === 10}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-5 border border-blue-700 rounded"
        >
        +
      </button>
       <button onClick={() => setCount(count - 1)} disabled={count === 0}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-5 border border-blue-700 rounded m-2">
        -
      </button>

    </div>
  );
}

export default Counter;