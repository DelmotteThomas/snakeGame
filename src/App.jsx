import { GameProvider } from './context/gameContext'
import './App.css'
import  {Game} from "./components/Game"

function App() {
  

  return (
    <GameProvider>
      <Game/>
    </GameProvider>
  )
}

export default App
