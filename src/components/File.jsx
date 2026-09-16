import { useState } from "react";

 function File1({btn} ) {

  const names = ["Labib", "John", "Rahim", "Karim", "Hasan"];

  const [index, setIndex] = useState(0);

  const changeName = () => {
    setIndex((index + 1) % names.length);
  };

  return (
    <div className="m-3">
      <h1  className="text-2xl font-bold">Name: {names[index]}</h1>

      <button onClick={changeName}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-3">
        {btn}    
      </button>
    </div>
  );
}



export default function File({ btn }) {
const names = ["Labib","Dohn","Nahim","Karim","Aasan"];
const [name,setName] = useState(0); 

const changeName = () => {
  setName((name + 1) % names.length);
};
return (  
  <div className="m-4 p-4 border border-gray-300 rounded shadow-md bg-amber-100">
    <h1  className="text-2xl font-bold">Name: {names[name]}</h1>
    <button onClick={changeName}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-3">
      {btn}
    </button>
    <File1 btn={btn} />
  </div>
)
}