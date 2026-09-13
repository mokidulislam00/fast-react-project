import Labib from "./components/Labib"
import Rigan from "./components/Rigan"
import Rafsan from "./components/rafsan"
import File from "./components/File"

function App()
 {
 return(

<>

<Labib number="01700000000" name="Labib" description="This is my React Project" address="Barisal, Bangladesh" />

<Rigan name="Rigan" phone="01700000000" address="Barisal, Bangladesh" />
<Rafsan name="Rafsan" phone="01700000000" address="Barisal, Bangladesh" />
<File name="Ahmed Labib" phone="01700000000" address="Barisal, Bangladesh" />
</>
 )
}

export default App 