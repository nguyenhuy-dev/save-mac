import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import MarxProgress from './MarxProgress';

interface GameResultProps {
  score: number;
  wrongCount: number;
  totalLevels: number;
  formatTime: (seconds: number) => string;
  onRestart: () => void;
  isWin: boolean;
}

const GameResult: React.FC<GameResultProps> = ({ score, wrongCount, totalLevels, formatTime, onRestart, isWin }) => {
  const navigate = useNavigate();

  const resultMessage = useMemo(() => {
    if (!isWin) return "Bạn đã bị Chủ nghĩa Duy vật nuốt chửng do chậm trễ hoặc sai quá nhiều.";
    if (wrongCount === 0) return "TUYỆT ĐỈNH! Tốc độ như tư duy ánh sáng! Karl Marx đã được giải cứu thành công mỹ mãn!";
    if (wrongCount <= 3) return `Bạn mắc sai lầm ${wrongCount} lần. Nhưng "Lượng đổi, Chất đổi", cuối cùng bạn vẫn cứu được Các Mác!`;
    return `Bạn sai ${wrongCount} lần! Rất may Quy luật Phủ định của Phủ định đã cứu vớt bạn. Các Mác đã thoát ra, nhưng hơi chóng mặt!`;
  }, [isWin, wrongCount]);

  const resultMessageLarge = useMemo(() => {
    if (!isWin) return `THẤT BẠI CAY ĐẮNG`;
    if (wrongCount <= 2) return "THẮNG LỢI VẺ VANG!";
    if (wrongCount === 0) return "THẮNG LỢI TUYỆT ĐỐI!";
    return "THẮNG LỢI VỪA VỪA!";
  }, [isWin, wrongCount]);

  return (
    <div className="flex flex-col items-center animate-fade-in text-center w-full max-w-2xl mx-auto space-y-8 font-serif">

      {/* Biểu đồ chạy */}
      <div className="w-full opacity-70">
        <MarxProgress currentLevel={isWin ? totalLevels : Math.floor(totalLevels / 2)} totalLevels={totalLevels} />
      </div>

      <div className="relative">
        <div className={`text-8xl mb-2 filter drop-shadow-sm ${isWin ? 'animate-bounce text-amber-500' : 'animate-spin-slow filter sepia'}`}>
          {isWin ? '☭' : '💀'}
        </div>
      </div>

      <h2 className={`text-5xl font-black uppercase tracking-widest text-transparent bg-clip-text drop-shadow-sm ${isWin ? 'bg-gradient-to-r from-red-800 to-red-950' : 'bg-gradient-to-r from-stone-500 to-stone-800'}`}>
        {resultMessageLarge}
      </h2>

      <div className="p-8 bg-white rounded-lg border-2 border-stone-200 shadow-md relative">
        <div className="absolute -top-3 -left-3 text-3xl filter sepia opacity-80">⭐</div>
        <div className="absolute -bottom-3 -right-3 text-3xl filter sepia opacity-80">⭐</div>
        <p className="text-2xl text-stone-700 font-medium italic leading-relaxed">
          "{resultMessage}"
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 w-full mt-4">
        <div className="bg-[#fdfaf5] p-6 rounded-lg border-4 border-[#D35400] shadow-[0_10px_20px_-10px_rgba(211,84,0,0.5)] transform hover:scale-105 transition-transform duration-500">
          <div className="text-stone-500 text-sm uppercase font-bold tracking-wider mb-2">Tổng Điểm</div>
          <div className="text-5xl font-black text-[#D35400] font-sans animate-pulse">{score}</div>
        </div>
        <div className="bg-stone-50 p-6 rounded-lg border-2 border-stone-200 shadow-inner">
          <div className="text-stone-500 text-sm uppercase font-bold tracking-wider mb-2">Tổng Sai Sót</div>
          <div className="text-4xl font-black text-red-700 font-sans">{wrongCount}</div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full justify-center">
        <button
          onClick={onRestart}
          className="px-8 py-4 bg-red-900 hover:bg-red-800 text-white font-bold text-xl tracking-widest uppercase font-serif rounded-sm shadow-md transform transition hover:-translate-y-1 active:scale-95 border border-red-700 w-full sm:w-auto"
        >
          {isWin ? 'Tiếp Tục Cách Mạng' : 'Làm Lại Lịch Sử'}
        </button>

        <button
          onClick={() => navigate('/')}
          className="px-8 py-4 bg-white hover:bg-stone-50 text-stone-700 font-bold text-xl tracking-widest uppercase font-serif rounded-sm shadow-sm transform transition hover:-translate-y-1 active:scale-95 border-2 border-stone-300 w-full sm:w-auto"
        >
          Trở Về Trang Chủ
        </button>
      </div>
    </div>
  );
};

export default GameResult;
