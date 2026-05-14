const TDHeroBackdrop = () => {
  return (
    <div className="absolute inset-0 -z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Multi-stop gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, hsl(217 38% 18%) 0%, hsl(217 38% 27%) 50%, hsl(220 45% 22%) 100%)",
        }}
      />

      {/* Radial gold glow */}
      <div
        className="absolute inset-0 animate-pulse-gold"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, hsl(45 90% 61% / 0.18) 0%, transparent 50%)",
        }}
      />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(45 90% 61%) 1px, transparent 1px), linear-gradient(90deg, hsl(45 90% 61%) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Drifting blur shapes — slow, ambient */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gold/25 blur-3xl animate-drift-1" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full bg-trust/20 blur-3xl animate-drift-2" />
      <div className="absolute top-[40%] left-[35%] w-[300px] h-[300px] rounded-full bg-gold/15 blur-3xl animate-drift-3" />

      {/* Diagonal shine sweep */}
      <div className="absolute inset-y-0 w-[40%] bg-gradient-to-r from-transparent via-gold/10 to-transparent animate-hero-shine" />

      {/* Top inner glow */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/20 to-transparent" />

      {/* Bottom border fade */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </div>
  );
};

export default TDHeroBackdrop;
