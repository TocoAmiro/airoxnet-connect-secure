const AiroxNetLogo = ({ className = "w-full h-full" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Circle with Gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(199, 100%, 40%)" />
          <stop offset="100%" stopColor="hsl(220, 80%, 50%)" />
        </linearGradient>
        <linearGradient id="shineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>
      
      {/* Main Circle */}
      <circle cx="100" cy="100" r="95" fill="url(#logoGradient)" />
      
      {/* Shine Effect */}
      <ellipse cx="70" cy="60" rx="50" ry="30" fill="url(#shineGradient)" />
      
      {/* Shield Icon */}
      <path
        d="M100 35 L145 55 L145 100 C145 130 125 155 100 170 C75 155 55 130 55 100 L55 55 Z"
        fill="none"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* WiFi Waves inside shield */}
      <path
        d="M100 140 L100 130"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M80 115 Q100 95 120 115"
        fill="none"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M65 100 Q100 70 135 100"
        fill="none"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
      
      {/* Lock keyhole */}
      <circle cx="100" cy="130" r="6" fill="white" />
    </svg>
  );
};

export default AiroxNetLogo;