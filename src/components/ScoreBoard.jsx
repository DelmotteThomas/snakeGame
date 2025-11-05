import { useGame } from '../context/gameContext'

export const ScoreBoard = () => {
  const { score, gameStarted, gameOver } = useGame()

  return (
    <div className="mb-6 text-center space-y-3">
      <div className="inline-flex items-center gap-4 bg-[--color-board-bg]/80 px-8 py-4 rounded-2xl border-2 border-[--color-board-border]">
        <span className="text-sm md:text-base text-slate-400 font-mono tracking-wider">
          SCORE
        </span>
        <span
          className="text-4xl md:text-5xl font-black text-[--color-score] tabular-nums"
          style={{
            textShadow: '0 0 10px var(--color-neon-glow)'
          }}
        >
          {score.toString().padStart(4, '0')}
        </span>
      </div>

      {!gameStarted && !gameOver && (
        <p className="text-base md:text-lg text-[--color-neon-glow] animate-pulse font-mono">
          ▶ PRESS ANY ARROW TO START
        </p>
      )}

      {gameOver && (
        <div className="space-y-2">
          <p
            className="text-3xl md:text-4xl font-black text-[--color-food] animate-pulse tracking-wider"
            style={{
              textShadow: '0 0 10px var(--color-food), 0 0 20px var(--color-food)'
            }}
          >
            GAME OVER!
          </p>
          <p className="text-sm text-slate-400 font-mono">FINAL SCORE: {score}</p>
        </div>
      )}
    </div>
  )
}