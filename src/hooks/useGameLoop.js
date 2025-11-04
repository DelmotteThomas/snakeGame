import { useGame } from "../context/gameContext";
import {GAME_SPEED, GAME_SIZE, GRID_SIZE} from "../constants/gameConfig";
import { useCallback } from "react";



export const useGameLoop = () =>{
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
        do{
            newFood = {
                x: Math.floor(Math.random() * GRID_SIZE),
                y: Math.floor(Math.random()* GRID_SIZE),
            };
        } while (
            currentSnake.some(
                (segment) => segment.x === newFood.x && segment.y === newFood.y
            )
        );
        return newFood;
    }, []);
};