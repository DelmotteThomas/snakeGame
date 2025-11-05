import { useGame } from "../context/gameContext";
import { GAME_SPEED, GRID_SIZE } from "../constants/gameConfig";
import { useEffect, useCallback } from "react";

export const useGameLoop = () => {
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

  const generateFood = useCallback((currentSnake) => {
    let newFood;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
    } while (
      currentSnake.some(
        (segment) => segment.x === newFood.x && segment.y === newFood.y
      )
    );
    return newFood;
  }, []);

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const moveSnake = () => {
      let nextDirection = direction;
      if (directionQueue.current.length > 0) {
        nextDirection = directionQueue.current.shift();
        setDirection(nextDirection);
        currentDirection.current = nextDirection;
      }
      setSnake((prevSnake) => {
        // Ajoute la direction a la tete
        const newHead = {
          x: prevSnake[0].x + nextDirection.x,
          y: prevSnake[0].y + nextDirection.y,
        };
        // Verifier que la
        if (
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE
        ) {
          setGameOver(true);
          return prevSnake;
        }

        // Vérifier que la nourriture ne tombe pas sur le corps
        if (
          prevSnake.some(
            (segment) => segment.x === newHead.x && segment.y === newHead.y
          )
        ) {
          setGameOver(true);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        // Vérifier si le serpent mange la nourriture
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore((s) => s + 10);
          setFood(generateFood(newSnake));
        } else {
          newSnake.pop();
        }
        return newSnake;
      });
    };
    const gameInterval =setInterval(moveSnake , GAME_SPEED);
    return()=> clearInterval(gameInterval);
  },[
    direction,
    food,
    snake,
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
  ]);
};
