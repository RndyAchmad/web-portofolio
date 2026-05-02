"use client";

export default function TechAnimation() {
  return (
    <div className="group relative mx-auto flex aspect-square w-full max-w-45 items-center justify-center sm:max-w-55 md:max-w-65 lg:max-w-70">
      <div className="absolute inset-0 scale-75 rounded-full bg-orange-500/20 blur-3xl transition-transform duration-1000 group-hover:scale-100" />

      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 h-full w-full opacity-90"
      >
        <circle
          cx="100"
          cy="100"
          r="70"
          fill="none"
          stroke="#f97316"
          strokeWidth="0.5"
          strokeDasharray="10 40 100 10"
          className="origin-center animate-spin-slow"
          style={{ animationDuration: "15s" }}
        />

        <circle
          cx="100"
          cy="100"
          r="85"
          fill="none"
          stroke="#f97316"
          strokeWidth="0.2"
          strokeDasharray="50 10 20 50"
          className="origin-center animate-spin-reverse-slow"
          style={{ animationDuration: "10s" }}
        />

        <circle
          cx="100"
          cy="100"
          r="30"
          fill="url(#techGradient)"
          className="animate-pulse"
          style={{ animationDuration: "4s" }}
        />

        <g
          className="origin-center animate-spin-slow"
          style={{ animationDuration: "8s" }}
        >
          <circle cx="170" cy="100" r="3" fill="#fafafa" className="animate-pulse" />
        </g>

        <defs>
          <radialGradient id="techGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}