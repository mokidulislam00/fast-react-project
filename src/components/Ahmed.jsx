import {useState} from "react"

export default function Ahmed() {
    const names = ["Ahmed", "Rigan", "Labib", "Rifat", "Rasel", "Riyad", "Rifat", "Rifat", "Rifat", "Rifat", "Rifat", "Rifat", "Rifat", "Rifat", "Rifat", "Rifat", "Rifat", "Rifat", "Rifat", "Rifat", "Rifat", "Rifat", "Rifat", "Rifat"]

const [index, setIndex] = useState(0);

function changeName(){
    setIndex ((index + 1) % names.length)
}           

  return (
    <div className="m-4 p-4 border border-gray-300 rounded shadow-md bg-amber-100">

<h1  className="text-2xl font-bold">Name: {names[index]}</h1>
<button onClick={changeName} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-2">
      Change Name
    </button>
    </div>
  )
}
