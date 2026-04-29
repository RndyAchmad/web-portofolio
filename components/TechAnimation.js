// components/TechAnimation.js
"use client"

const TechAnimation = () => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center group">
      <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-75 group-hover:scale-100 transition-transform duration-1000"></div>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="relative z-10 w-full h-full opacity-80">
        <circle cx="100" cy="100" r="70" stroke="#06b6d4" strokeWidth="0.5" fill="none" strokeDasharray="10 40 100 10" className="animate-spin-slow origin-center" style={{ animationDuration: '15s' }} />
        <circle cx="100" cy="100" r="85" stroke="#06b6d4" strokeWidth="0.2" fill="none" strokeDasharray="50 10 20 50" className="animate-spin-reverse-slow origin-center" style={{ animationDuration: '10s' }} />
        <circle cx="100" cy="100" r="30" fill="url(#grad1)" className="animate-pulse" style={{ animationDuration: '4s' }} />
        <g className="animate-spin-slow origin-center" style={{ animationDuration: '8s' }}>
          <circle cx="170" cy="100" r="3" fill="#fafafa" className="animate-pulse" />
        </g>
        <defs>
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#09090b', stopOpacity: 0 }} />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default TechAnimation;