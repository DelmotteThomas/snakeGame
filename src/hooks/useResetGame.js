import { useGame } from "../context/gameContext";
import { INITIAL_SNAKE , INITIAL_DIRECTION, INITIAL_FOOD } from "../constants/gameConfig";
import { useCallback } from "react";


export const useResetGame =() => {
    const {
    snake,
    direction,
    food,
    gameOver,
    score,
    gameStarted,
    //Setter
    setSnake,
    setDirection,
    setFood,
    setGameOver,
    setScore,
    setGameStarted,
    //Ref
    directionQueue,
    currentDirection,
  } = useGame();
  

  const resetGame = useCallback(()=>{
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(INITIAL_FOOD);
    setGameOver(false);
    setScore(0);
    setGameStarted(false);
    directionQueue.current = [];
    currentDirection.current = INITIAL_DIRECTION;
  },[
    
    //Setter
    setSnake,
    setDirection,
    setFood,
    setGameOver,
    setScore,
    setGameStarted,
    //Ref
    directionQueue,
    currentDirection,
  ]);
  return resetGame;
};