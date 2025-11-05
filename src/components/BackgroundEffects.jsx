export const BackgroundEffects = () => {
  return (
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[--color-purple-accent] rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[--color-neon-glow] rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
      ></div>
    </div>
  )
}