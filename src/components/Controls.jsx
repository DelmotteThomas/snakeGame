export const Controls = () => {
  return (
    <div className="text-center">
      <p className="text-xs md:text-sm text-slate-500 font-mono mb-3 tracking-wider">
        USE ARROW KEYS TO PLAY
      </p>
      <div className="flex justify-center gap-2">
        {['↑', '↓', '←', '→'].map(arrow => (
          <kbd
            key={arrow}
            className="w-10 h-10 flex items-center justify-center bg-[--color-board-bg] rounded-lg border-2 border-[--color-board-border] text-[--color-neon-glow] font-bold text-lg shadow-lg hover:border-[--color-neon-glow] transition-colors"
          >
            {arrow}
          </kbd>
        ))}
      </div>
      <div className="mt-6 text-center text-xs text-slate-600 font-mono">
        TIP: Eat food to grow and increase score
      </div>
    </div>
  )
}