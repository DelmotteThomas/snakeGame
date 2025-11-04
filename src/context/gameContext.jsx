import { useState } from "react";
import { createContext } from "react";
import { INITIAL_DIRECTION, INITIAL_FOOD, INITIAL_SNAKE } from "../constants/gameConfig";
import { useRef } from "react";

const GameContext = createContext(null);

export const useGame = () => {
    const context = useContext(GameContext);
    if(!context){
        throw new Error('useGame must be wuthin a gameProvider');
    }
    return context;
};

export const GameProvider = ({children})=>{
    const [snake,setSnake] = useState(INITIAL_SNAKE);
    const [direction, setDirection]= useState(INITIAL_DIRECTION);
    const [food,setFood] = useState(INITIAL_FOOD);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore]=useState(0);
    const [gameStarted, setGameStarted]= useState(false);

    const directionQueue = useRef([]);
    const currentDirection = useRef(INITIAL_DIRECTION);

    const value={
        //state
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


    };

    return <GameContext.Provider value={value}>{children}</GameContext.Provider>
};
