const SupportIcon = ({ className = "w-full h-full" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="supportGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(199, 100%, 45%)" />
          <stop offset="100%" stopColor="hsl(220, 80%, 55%)" />
        </linearGradient>
      </defs>
      
      {/* Background */}
      <circle cx="50" cy="50" r="48" fill="url(#supportGradient)" />
      
      {/* Headset */}
      <path
        d="M25 50 C25 35 35 22 50 22 C65 22 75 35 75 50"
        fill="none"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
      
      {/* Left ear */}
      <rect x="20" y="45" width="10" height="18" rx="4" fill="white" />
      
      {/* Right ear */}
      <rect x="70" y="45" width="10" height="18" rx="4" fill="white" />
      
      {/* Microphone */}
      <path
        d="M75 60 L75 68 Q75 78 50 78"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="50" cy="78" r="5" fill="white" />
      
      {/* Face circle */}
      <circle cx="50" cy="50" r="15" fill="none" stroke="white" strokeWidth="2" opacity="0.5" />
    </svg>
  );
};

export default SupportIcon;