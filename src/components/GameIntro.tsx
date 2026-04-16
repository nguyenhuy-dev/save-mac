import React from 'react';
import { useNavigate } from 'react-router-dom';

interface GameIntroProps {
  onStart: (mode: 'stage_1' | 'stage_2' | 'stage_3' | 'all') => void;
}

const GameIntro: React.FC<GameIntroProps> = ({ onStart }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center animate-fade-in text-center space-y-8 w-full pb-8">
      <div className="relative">
        <div className="w-40 h-40 md:w-56 md:h-56 bg-slate-800 rounded-full overflow-hidden border-4 border-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.6)] transition-transform hover:scale-105 hover:rotate-3 z-10 relative flex items-center justify-center">
           <img src="/karl_marx.png" alt="Karl Marx" className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
           <span className="text-6xl absolute z-[-1]">🧠</span>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[150px] text-red-600/20 z-0 pointer-events-none">
           ☭
        </div>
      </div>

      <div className="bg-slate-900/80 p-6 rounded-2xl border border-red-500/30 w-full max-w-2xl shadow-xl relative mt-4">
        <div className="absolute -top-4 -left-4 text-4xl">💭</div>
        <p className="text-xl md:text-2xl text-slate-300 font-medium italic">
          "Trắc nghiệm không chỉ là thuộc lòng, mà là vận dụng phép biện chứng để sinh tồn."
        </p>
        <p className="mt-2 text-slate-400 text-sm">Hãy chọn Dòng Thời Gian Lịch Sử để truy tìm chân lý.</p>
      </div>

      <div className="flex flex-col gap-6 w-full items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
          
          {/* Stage 1 */}
          <button 
            onClick={() => onStart('stage_1')}
            className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-left text-white rounded-2xl shadow-lg transform transition hover:-translate-y-1 active:scale-95 border border-blue-500 group"
          >
            <div className="text-4xl group-hover:scale-110 transition-transform bg-white/10 w-16 h-16 flex items-center justify-center rounded-xl">🏛️</div>
            <div>
              <div className="font-black text-lg tracking-wide uppercase text-blue-100">Chương 1</div>
              <div className="text-sm text-blue-200 mt-1 font-medium">Bình Minh Trí Tuệ (Cổ Đại - Trung Cổ)</div>
            </div>
          </button>

          {/* Stage 2 */}
          <button 
            onClick={() => onStart('stage_2')}
            className="flex items-center gap-4 p-4 bg-gradient-to-r from-emerald-900 to-emerald-700 hover:from-emerald-800 hover:to-emerald-600 text-left text-white rounded-2xl shadow-lg transform transition hover:-translate-y-1 active:scale-95 border border-emerald-500 group"
          >
            <div className="text-4xl group-hover:scale-110 transition-transform bg-white/10 w-16 h-16 flex items-center justify-center rounded-xl">📜</div>
            <div>
              <div className="font-black text-lg tracking-wide uppercase text-emerald-100">Chương 2</div>
              <div className="text-sm text-emerald-200 mt-1 font-medium">Vượt Ngục Siêu Hình (Cận Đại - Cổ Điển)</div>
            </div>
          </button>

          {/* Stage 3 */}
          <button 
            onClick={() => onStart('stage_3')}
            className="flex items-center gap-4 p-4 bg-gradient-to-r from-red-900 to-red-700 hover:from-red-800 hover:to-red-600 text-left text-white rounded-2xl shadow-lg transform transition hover:-translate-y-1 active:scale-95 border border-red-500 group md:col-span-1"
          >
            <div className="text-4xl group-hover:scale-110 transition-transform bg-white/10 w-16 h-16 flex items-center justify-center rounded-xl">🚩</div>
            <div>
              <div className="font-black text-lg tracking-wide uppercase text-red-100">Chương 3</div>
              <div className="text-sm text-red-200 mt-1 font-medium">Ngọn Lửa Giai Cấp (Mác - Lênin)</div>
            </div>
          </button>

          {/* Stage ALL */}
          <button 
            onClick={() => onStart('all')}
            className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-900 to-yellow-700 hover:from-purple-800 hover:to-yellow-600 text-left text-white rounded-2xl shadow-[0_0_20px_rgba(234,179,8,0.4)] transform transition hover:-translate-y-1 active:scale-95 border border-yellow-500 group md:col-span-1"
          >
            <div className="text-4xl group-hover:scale-110 transition-transform bg-white/10 w-16 h-16 flex items-center justify-center rounded-xl">🔥</div>
            <div>
              <div className="font-black text-lg tracking-wide uppercase text-yellow-100 animate-pulse">Khảo Thí</div>
              <div className="text-sm text-yellow-200 mt-1 font-medium">Toàn Tập Lịch Sử Triết Học</div>
            </div>
          </button>

        </div>

        <button 
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-medium mt-6 border border-slate-700 hover:border-slate-500 rounded-full px-6 py-2 bg-slate-800/50"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Trở về hành trình lý thuyết
        </button>
      </div>
    </div>
  );
};

export default GameIntro;
