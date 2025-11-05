export const GameTitle = () => {
  return (
    <div className="text-center mb-8 relative">
      <h1 className="text-6xl md:text-7xl font-black tracking-wider mb-2 relative inline-block">
        <span className="absolute inset-0 blur-lg bg-[--color-neon-glow] opacity-50 animate-pulse"></span>
        <span
          className="relative text-[--color-snake-head]"
          style={{
            textShadow:
              "0 0 10px var(--color-neon-glow), 0 0 20px var(--color-neon-glow), 0 0 30px var(--color-neon-glow)",
          }}
        >
          SNAKE
        </span>
      </h1>
      <div className="text-xs md:text-sm tracking-widest text-[--color-neon-glow] font-mono mt-2">
        ── RETRO EDITION ──
      </div>
    </div>
  );
};