import React from 'react';

interface GameIntroProps {
  onStart: () => void;
}

const GameIntro: React.FC<GameIntroProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center animate-fade-in text-center space-y-6">
      <div className="relative">
        <div className="w-56 h-56 bg-slate-800 rounded-full overflow-hidden border-4 border-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.6)] transition-transform hover:scale-105 hover:rotate-3 z-10 relative">
           <img src="/karl_marx.png" alt="Karl Marx" className="w-full h-full object-cover" />
        </div>
        {/* Nền búa liềm mờ ảo sau lưng */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[180px] text-red-600/20 z-0 pointer-events-none">
           ☭
        </div>
      </div>

      <div className="bg-slate-900/80 p-6 rounded-2xl border border-red-500/30 max-w-lg shadow-xl relative mt-4">
        <div className="absolute -top-4 -left-4 text-4xl">💭</div>
        <p className="text-xl text-slate-300 font-medium italic">
          "Karl Marx đang bị lạc trong ma trận của Sự tha hóa và Khủng hoảng Tư bản! Hãy dùng Phép Biện Chứng để cứu ông ấy ra!"
        </p>
      </div>

      <button 
        onClick={onStart}
        className="mt-8 px-10 py-5 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-yellow-100 font-black text-2xl uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)] transform transition hover:-translate-y-1 active:scale-95 border-b-4 border-red-900"
      >
        Khởi Hành Cứu Mác! 
      </button>
    </div>
  );
};

export default GameIntro;
