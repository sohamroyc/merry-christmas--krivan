
import React from 'react';

const FairyLights: React.FC = () => {
  const colors = [
    'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]',
    'bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.8)]',
    'bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]',
    'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]',
    'bg-pink-400 shadow-[0_0_10px_rgba(244,114,182,0.8)]'
  ];

  return (
    <div className="absolute top-0 left-0 right-0 flex justify-around pointer-events-none z-20 overflow-hidden h-12">
      {Array.from({ length: 25 }).map((_, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="w-0.5 h-4 bg-gray-800" />
          <div
            className={`w-3 h-3 rounded-full animate-pulse ${colors[i % colors.length]}`}
            style={{ animationDelay: `${i * 0.2}s`, animationDuration: '1.5s' }}
          />
        </div>
      ))}
      <div className="absolute top-4 left-0 right-0 border-t border-gray-800/30" />
    </div>
  );
};

export default FairyLights;
