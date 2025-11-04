import { useGame } from "../context/gameContext";
import {KEYS, DIRECTIONS} from "../constants/gameConfig";
import { useEffect } from "react";

export const useKeyboard = ()=>{

    const {gameStarted,setGameStarted,directionQueue, currentDirection} = useGame();

    useEffect(()=>{
        const handleKeyPress = (event) =>{
            // Start Game
            if(!gameStarted && event.key.startsWith('Arrow')){
                setGameStarted(true);
            }

            const lastDirection = directionQueue.current.length > 0 
            ? directionQueue.current[directionQueue.current.length - 1]
            : currentDirection.current;

            let newDirection = null;
            switch (event.key){
                case KEYS.ARROW_UP:
                    case 'z':
                    if(lastDirection.y === 0) newDirection = DIRECTIONS.UP;
                    break;
                case KEYS.ARROW_DOWN:
                    case 's':
                    if(lastDirection.y === 0) newDirection = DIRECTIONS.DOWN;
                    break;
                case KEYS.ARROW_LEFT:
                    case 'f':
                    if(lastDirection.x === 0) newDirection = DIRECTIONS.LEFT;
                    break;
                case KEYS.ARROW_RIGHT:
                    case 'q':
                    if(lastDirection.x === 0) newDirection = DIRECTIONS.RIGHT;
                    break;
                default:
                    break;
            }
            if(newDirection && directionQueue.current.length < 2 ){
                directionQueue.current.push(newDirection);
            }
        };
        window.addEventListener('keydown', handleKeyPress);
        return() => window.removeEventListener('keydown', handleKeyPress);
    }, [gameStarted,directionQueue,currentDirection,setGameStarted]);
};