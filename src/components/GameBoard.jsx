"use client";
import { Cell } from "./Cell"
import { useGame } from "../context/gameContext";
import { GRID_SIZE, CELL_SIZE } from "../constants/gameConfig";

export const GameBoard = () => {
  const { snake, food } = useGame();
  const isSnake = (x, y) => {
    return snake.some((segment) => segment.x === x && segment.y === y);
  };
  const isSnakeHead = (x, y) => {
    return snake[0].x === x && snake[0].y === y;
  };

  const isFood = (x, y) => {
    return food.x === x && food.y === y;
  };

  return (
    <div
      className="relative mb-6  mx-auto"
      style={{
        width: "fit-content",
      }}
    >
      <div
        className="absolute -inset-1 bg-linear-to-r from-[--color-neon-glow] via-
    [--color-purple-accent] to-[--color-neon-glow] rounded-2xl blur opacity-75 animate-pulse"
      ></div>
      <div
        className="relative bg-[--color-board-bg] rounded-xl overflow-hidden
        border-4 border-[--color-board-border]"
        style={{
            width: GRID_SIZE * CELL_SIZE,
            height: GRID_SIZE * CELL_SIZE,
            boxShadow: 'inset 0 0 50px rgba( 0,0,0,0.5)',
        }}
      >
       {Array.from({length:GRID_SIZE}).map((_,row)=>(
                    <div key={row} className="flex">
                        {Array.from({length:GRID_SIZE}).map((_,col)=>(
                            <Cell
                                key={col}
                                isHead={isSnakeHead(col,row)}
                                isBody={isSnake(col,row)}
                                isFood={isFood(col,row)}
                            />
                        ))}
                    </div>
                ))}
        
      </div>
    </div>
  );
};
