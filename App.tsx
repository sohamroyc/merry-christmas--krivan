
import React, { useState } from 'react';
import Snowfall from './components/Snowfall';
import FairyLights from './components/FairyLights';
import SantaClaus from './components/SantaClaus';
import { getHolidayWisdom } from './services/geminiService';
import { ChristmasWish } from './types';

const App: React.FC = () => {
  const [wish, setWish] = useState<ChristmasWish | null>(null);
  const [showGift, setShowGift] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpenGift = async () => {
    setLoading(true);
    const data = await getHolidayWisdom("Krivan");
    setWish(data);
    setShowGift(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#fcf6f5] relative flex flex-col items-center overflow-x-hidden pb-20 selection:bg-red-200">
      <Snowfall />
      <FairyLights />

      {/* Hero Section */}
      <section className="relative z-20 flex flex-col items-center justify-center pt-24 pb-16 px-4 text-center animate-slide-down-fade">
        <div className="mb-6 animate-float">
          <SantaClaus />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-red-600 drop-shadow-sm mb-4 animate-glow">
          Merry Christmas, <span className="text-green-700">my little star</span> 🎄✨
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-lg italic font-medium opacity-0 animate-slide-up-fade delay-200">
          “To Krivan — the one who makes our world sparkle.”
        </p>
      </section>

      {/* Memories Photo Section */}
      <section className="relative z-20 w-full max-w-4xl px-6 py-8 flex flex-col items-center opacity-0 animate-slide-up-fade delay-400">
        <h2 className="font-pacifico text-3xl text-green-800 mb-10 text-center">Favorite Memories with Krivan ✨</h2>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center">
          {/* Photo 1: Polaroid Style */}
          <div className="bg-white p-4 pb-12 shadow-xl transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 border border-gray-100">
            <div className="w-64 h-64 bg-gray-200 overflow-hidden relative group">
              <img 
                src="/images/image1.jpg" 
                alt="image1" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-red-600/10 mix-blend-overlay"></div>
            </div>
            <p className="font-pacifico text-gray-700 text-center mt-6 text-xl">Our Little Legend</p>
          </div>

          {/* Photo 2: Polaroid Style */}
          <div className="bg-white p-4 pb-12 shadow-xl transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 border border-gray-100">
            <div className="w-64 h-64 bg-gray-200 overflow-hidden relative group">
              <img 
                src="/images/image2.jpg" 
                alt="image2" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-green-600/10 mix-blend-overlay"></div>
            </div>
            <p className="font-pacifico text-gray-700 text-center mt-6 text-xl">Pure Joy</p>
          </div>
        </div>
      </section>

      {/* Heartfelt Note Section */}
      <section className="relative z-20 w-full max-w-3xl px-6 py-12 opacity-0 animate-slide-up-fade delay-600">
        <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl border-4 border-dashed border-red-600 shadow-2xl relative overflow-hidden transition-all hover:shadow-red-200/50">
          <div className="absolute -top-4 -right-4 text-5xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>❄️</div>
          <div className="absolute -bottom-4 -left-4 text-5xl opacity-20 rotate-12 animate-float" style={{ animationDelay: '2s' }}>🎁</div>
          
          <h2 className="font-pacifico text-3xl text-red-600 mb-6 border-b-2 border-red-100 pb-2">
            Dear Krivan...
          </h2>
          <div className="space-y-4 text-gray-800 text-lg leading-relaxed">
            <p className="opacity-0 animate-slide-up-fade delay-800">
              I just want you to know something — I love you so, so much.
            </p>
            <p className="opacity-0 animate-slide-up-fade" style={{ animationDelay: '1s' }}>
              You are the cutest, most lovable little human, and you have this quiet superpower of making everyone smile without even trying.
            </p>
            <p className="opacity-0 animate-slide-up-fade" style={{ animationDelay: '1.2s' }}>
              Watching you grow, laugh, and be you makes me insanely proud.
              No matter how tall you get or how fast time runs, you’ll always be my little brother — my joy, my responsibility, my favorite blessing.
            </p>
            <p className="opacity-0 animate-slide-up-fade" style={{ animationDelay: '1.4s' }}>
              This Christmas, I wish you endless happiness, big dreams, and a heart that always stays this pure.
              Never forget how deeply loved you are.
            </p>
            <p className="pt-4 font-semibold text-green-800 opacity-0 animate-slide-up-fade" style={{ animationDelay: '1.6s' }}>
              Always here. Always yours. ❤️🎄
            </p>
            <p className="text-right font-pacifico text-2xl text-red-500 opacity-0 animate-slide-up-fade" style={{ animationDelay: '1.8s' }}>
              Merry Christmas, my star.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Gift Section */}
      <section className="relative z-20 flex flex-col items-center py-12 opacity-0 animate-slide-up-fade" style={{ animationDelay: '2s' }}>
        {!showGift ? (
          <button
            onClick={handleOpenGift}
            disabled={loading}
            className="group relative px-10 py-5 bg-red-600 text-white rounded-full text-2xl font-bold shadow-xl hover:bg-red-700 transition-all hover:scale-110 active:scale-95 disabled:opacity-50 flex items-center gap-3 overflow-hidden"
          >
            <span className="relative z-10">{loading ? "Wrapping Magic..." : "Open Krivan's Gift 🎁"}</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        ) : (
          <div className="bg-white/95 p-8 rounded-2xl shadow-2xl border-2 border-red-200 max-w-md text-center animate-fade-in-scale">
            <div className="text-4xl mb-4 text-yellow-500 animate-bounce">✨</div>
            <h3 className="text-2xl font-bold text-red-600 mb-2">{wish?.title}</h3>
            <p className="text-gray-700 mb-6 italic">"{wish?.message}"</p>
            <div className="bg-green-50 p-4 rounded-xl border border-green-200">
              <span className="block text-sm uppercase tracking-widest text-green-600 font-bold mb-1">Santa's Wisdom</span>
              <p className="text-green-900 font-medium">{wish?.advice}</p>
            </div>
            <button 
              onClick={() => setShowGift(false)}
              className="mt-6 text-sm text-gray-400 hover:text-red-500 transition-colors"
            >
              Close and make a wish
            </button>
          </div>
        )}
      </section>

      {/* Illustrations Section */}
      <section className="relative z-20 w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 px-6 py-12">
        {[
          { icon: '⛄', text: 'Be Cool', delay: '2.2s' },
          { icon: '🦌', text: 'Stand Tall', delay: '2.4s' },
          { icon: '🍬', text: 'Stay Sweet', delay: '2.6s' },
          { icon: '⭐', text: 'Shine On', delay: '2.8s' }
        ].map((item, idx) => (
          <div 
            key={idx} 
            className="flex flex-col items-center p-4 bg-white/40 rounded-2xl opacity-0 animate-slide-up-fade backdrop-blur-sm transition-all hover:bg-white/60 hover:-translate-y-2 cursor-default"
            style={{ animationDelay: item.delay }}
          >
            <span className="text-6xl mb-2 drop-shadow-lg">{item.icon}</span>
            <span className="text-gray-600 font-medium">{item.text}</span>
          </div>
        ))}
      </section>

      {/* Final Section */}
      <footer className="relative z-20 mt-12 px-6 text-center opacity-0 animate-slide-up-fade" style={{ animationDelay: '3s' }}>
        <p className="text-2xl md:text-3xl font-pacifico text-green-800 drop-shadow-sm">
          No matter how big you grow, you’ll always be my little brother.
        </p>
        <div className="mt-8 flex justify-center gap-4 text-4xl">
           <span className="animate-bounce" style={{ animationDelay: '0s' }}>🎄</span>
           <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🏠</span>
           <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🥛</span>
           <span className="animate-bounce" style={{ animationDelay: '0.6s' }}>🍪</span>
        </div>
        <p className="mt-12 text-gray-400 text-sm italic">
          Merry Christmas, Krivan ❤️
        </p>
        <p className="mt-2 text-gray-400 text-xs">
          Made with love for my favorite blessing • 2024
        </p>
      </footer>

      {/* Background Decor */}
      <div className="fixed -bottom-20 -left-20 w-80 h-80 bg-green-700/10 rounded-full blur-3xl pointer-events-none animate-float" style={{ animationDuration: '8s' }} />
      <div className="fixed -top-20 -right-20 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none animate-float" style={{ animationDuration: '10s', animationDelay: '1s' }} />
    </div>
  );
};

export default App;
