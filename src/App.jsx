import Labib from "./components/Labib"
import Rigan from "./components/Rigan"
import Rafsan from "./components/rafsan"
import File from "./components/File"

function App()
 {
 return(

<>
<h1>Rigan</h1>
<h2>Rafsan</h2>
<Labib number="01700000000" name="Labib" description="This is my React Project" />
<Rigan />
<Rafsan />
<Rafsan/>
<File name="Ahmed Labib" phone="01700000000" address="Barisal, Bangladesh" />
</>
 )
}

export default App 