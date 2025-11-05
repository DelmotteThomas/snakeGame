import { CELL_SIZE } from "../constants/gameConfig";

export const Cell = ({ isHead, isBody, isFood }) => {
  return (
    <div
      className={`relative transition-all duration-75 ${
        !isBody && !isFood ? "bg-[--color-board-cell]" : ""
      } `}
      style={{
        width: CELL_SIZE,
        height: CELL_SIZE,
        border: "0.5px solid rgba(30, 39 , 56 , 0.3)",
      }}
    >
      {isFood && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-4 h-4 bg-[--color-food] rounded-full"
            style={{
              animation: "food-glow 1.5s ease-in-out infinite",
              boxShadow:
                "0 0 10px var(--color-food), 0 0 20px var(--color-food)",
            }}
          />
        </div>
      )}
      {isHead && (
        <div
          className="absolute inset-0.5 bg-[--color-snake-head] rounded-sm"
          style={{
            boxShadow:
              "0 0 10px var(--color-neon-glow), 0 0 20px var(--color-neon-glow), inset 0 0 10px rgba(255,255,255,0.5)",
          }}
        />
      )}
      {isBody && !isHead && (
        <div className="absolute inset-1 bg-linear-to-br from-[--color-snake-primary] to-[--color-snake-secondary] rounded-sm animate-pulse"
        style={{
            boxShadow:'0 0 5px var(--color-neon-glow), inset 0 0 5px rgba(0,0,0,0.3)',
        }} />
      )}
    </div>
  );
};
