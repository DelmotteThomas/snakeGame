import { useGame } from '../context/gameContext'
import { useResetGame } from '../hooks/useResetGame'

export const RestartButton = () => {
  const { gameOver } = useGame()
  const resetGame = useResetGame()

  if (!gameOver) return null

  return (
    <div className="text-center mb-6">
      <button
        onClick={resetGame}
        className="group relative px-10 py-4 bg-linear-to-r from-[--color-snake-primary] to-[--color-snake-secondary] font-black text-xl text-black rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 tracking-wider"
        style={{
          boxShadow: '0 0 20px var(--color-neon-glow), 0 0 40px var(--color-neon-glow)'
        }}
      >
        <span className="relative z-10">▶ RESTART</span>
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
      </button>
    </div>
  )
}