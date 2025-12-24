
import React from 'react';

const SantaClaus: React.FC = () => {
  return (
    <div className="relative w-48 h-48 animate-bounce transition-all duration-1000" style={{ animationDuration: '3s' }}>
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl">
        {/* Body */}
        <circle cx="100" cy="140" r="45" fill="#ef4444" />
        <rect x="92" y="100" width="16" height="85" rx="8" fill="white" />
        <rect x="70" y="140" width="60" height="10" rx="5" fill="#1f2937" />
        {/* Face */}
        <circle cx="100" cy="85" r="30" fill="#fecaca" />
        {/* Beard */}
        <path d="M70 85 Q70 125 100 125 Q130 125 130 85" fill="white" />
        {/* Eyes */}
        <circle cx="90" cy="80" r="2.5" fill="#1f2937" />
        <circle cx="110" cy="80" r="2.5" fill="#1f2937" />
        {/* Nose */}
        <circle cx="100" cy="85" r="4" fill="#ef4444" />
        {/* Hat */}
        <path d="M70 70 L100 20 L130 70 Z" fill="#ef4444" />
        <circle cx="100" cy="20" r="6" fill="white" />
        <rect x="70" y="65" width="60" height="10" rx="5" fill="white" />
        {/* Waving Arm */}
        <g className="origin-[130px_130px] animate-[wave_2s_ease-in-out_infinite]">
            <rect x="130" y="125" width="30" height="10" rx="5" fill="#ef4444" />
            <circle cx="165" cy="130" r="8" fill="#fecaca" />
        </g>
      </svg>
      <style>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-30deg); }
        }
      `}</style>
    </div>
  );
};

export default SantaClaus;
