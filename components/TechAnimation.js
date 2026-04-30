"use client";

const TechAnimation = () => {
  return (
    <div className="relative w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[280px] aspect-square flex items-center justify-center group mx-auto">
      <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-3xl scale-75 group-hover:scale-100 transition-transform duration-1000"></div>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="relative z-10 w-full h-full opacity-90">
        <circle cx="100" cy="100" r="70" stroke="#f97316" strokeWidth="0.5" fill="none" strokeDasharray="10 40 100 10" className="animate-spin-slow origin-center" style={{ animationDuration: '15s' }} />
        <circle cx="100" cy="100" r="85" stroke="#f97316" strokeWidth="0.2" fill="none" strokeDasharray="50 10 20 50" className="animate-spin-reverse-slow origin-center" style={{ animationDuration: '10s' }} />
        <circle cx="100" cy="100" r="30" fill="url(#grad1)" className="animate-pulse" style={{ animationDuration: '4s' }} />
        <g className="animate-spin-slow origin-center" style={{ animationDuration: '8s' }}>
          <circle cx="170" cy="100" r="3" fill="#fafafa" className="animate-pulse" />
        </g>
        <defs>
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style={{ stopColor: '#f97316', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#0a0a0a', stopOpacity: 0 }} />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default TechAnimation;