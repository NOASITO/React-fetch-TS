import './App.css'
import { CountProvider } from "./contexts/CountProvider";

function App() {

  return (
    <>
    <CountProvider>
      <h1>Holas</h1>


    </CountProvider>
    </>
  )
}

export default App
