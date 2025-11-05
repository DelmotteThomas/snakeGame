import { BackgroundEffects } from "./BackgroundEffects";
import { GameTitle } from "./GameTitle";
import { RestartButton } from "./RestartButton";
import { GameBoard } from "./GameBoard";
import { Controls } from "./Controls";
import { ScoreBoard} from "./ScoreBoard"
import  {useGameLoop}  from "../hooks/useGameLoop";
import  {useKeyboard}  from "../hooks/useKeyboard";


export const Game = () => {
    
   useKeyboard();
   useGameLoop();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
 
  <BackgroundEffects />

  <div className="mb-8 text-center z-10">
    <GameTitle />
  </div>
  <div className="flex flex-col md:flex-row items-start justify-center gap-12 z-10">
    <div className="flex flex-col items-center md:items-start gap-6">
      <ScoreBoard />
      <RestartButton />
      <Controls />
    </div>
    <div className="flex justify-center items-center">
      <GameBoard />
    </div>
  </div>
  
</div>

  );
};

