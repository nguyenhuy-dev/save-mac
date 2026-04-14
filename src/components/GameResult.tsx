import React, { useMemo } from 'react';
import MarxProgress from './MarxProgress';

interface GameResultProps {
  timeLeft: number;
  wrongCount: number;
  totalLevels: number;
  formatTime: (seconds: number) => string;
  onRestart: () => void;
  isWin: boolean;
}

const GameResult: React.FC<GameResultProps> = ({ timeLeft, wrongCount, totalLevels, formatTime, onRestart, isWin }) => {

  const resultMessage = useMemo(() => {
    if (!isWin) return "Bạn đã bị Chủ nghĩa Duy vật nuốt chửng.";
    if (wrongCount === 0) return "TUYỆT ĐỈNH! Bạn là Người Duy Vật Trí Tuệ Mác-Lênin tuyệt đối! Karl Marx đã được giải cứu thành công mỹ mãn!";
    if (wrongCount <= 3) return `Bạn mắc kẹt trong mâu thuẫn ${wrongCount} lần. Nhưng "Lượng đổi, Chất đổi", cuối cùng bạn vẫn cứu được Các Mác!`;
    return `Bạn sai ${wrongCount} lần! Rất may Quy luật Phủ định của Phủ định đã cứu vớt bạn. Các Mác đã thoát ra, nhưng hơi chóng mặt!`;
  }, [isWin, wrongCount]);

  const resultMessageLarge = useMemo(() => {
    if (wrongCount <= 2) return "THẮNG LỢI VỪA VỪA!";
    if (wrongCount === 0) return "THẮNG LỢI VẺ VANG!";
    return `THẤT BẠI CAY ĐẮNG`;
  }, [isWin, wrongCount]);

  return (
    <div className="flex flex-col items-center animate-fade-in text-center w-full max-w-2xl mx-auto space-y-8">
      
      {/* Biểu đồ chạy */}
      <div className="w-full opacity-70">
        <MarxProgress currentLevel={isWin ? totalLevels : Math.floor(totalLevels / 2)} totalLevels={totalLevels} />
      </div>

      <div className="relative">
        <div className={`text-8xl mb-2 filter drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] ${isWin ? 'animate-bounce' : 'animate-spin-slow'}`}>
          {isWin ? '☭' : '💀'}
        </div>
      </div>
      
      <h2 className={`text-5xl font-black uppercase tracking-widest text-transparent bg-clip-text drop-shadow-md ${isWin ? 'bg-gradient-to-r from-yellow-300 to-yellow-600' : 'bg-gradient-to-r from-red-500 to-red-800'}`}>
        {resultMessageLarge}
      </h2>
      
      <div className="p-8 bg-slate-900/90 rounded-3xl border-2 border-yellow-500/40 shadow-2xl relative">
        <div className="absolute -top-3 -left-3 text-3xl">⭐</div>
        <div className="absolute -bottom-3 -right-3 text-3xl">⭐</div>
        <p className="text-2xl text-slate-200 font-medium italic leading-relaxed">
          "{resultMessage}"
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 w-full mt-4">
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-600 shadow-inner">
            <div className="text-slate-400 text-sm uppercase font-bold tracking-wider mb-2">Đồng Hồ Đã Dừng</div>
            <div className="text-4xl font-black text-yellow-500">{formatTime(timeLeft)}</div>
          </div>
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-600 shadow-inner">
            <div className="text-slate-400 text-sm uppercase font-bold tracking-wider mb-2">Tổng Sai Sót</div>
            <div className="text-4xl font-black text-red-500">{wrongCount}</div>
          </div>
      </div>

      <button 
        onClick={onRestart}
        className="mt-10 px-12 py-5 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-slate-900 font-black text-2xl rounded-full shadow-[0_0_30px_rgba(234,179,8,0.4)] transform transition hover:-translate-y-1 active:scale-95 border-b-4 border-yellow-700 w-full md:w-auto"
      >
        {isWin ? 'Tái Thiết Trật Tự Mới' : 'Làm Lại Cách Mạng'}
      </button>
    </div>
  );
};

export default GameResult;
