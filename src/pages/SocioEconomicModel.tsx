import React, { useState } from 'react';
import { DragBoard } from '../components/dragdrop/DragBoard';
import { getGameItems } from '../data/socioItems';
import type { Difficulty, DragItem } from '../data/socioItems';
import { useNavigate } from 'react-router-dom';

type GameState = 'SELECT' | 'PLAYING' | 'RESULT';

const SocioEconomicModel: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('SELECT');
  const [difficulty, setDifficulty] = useState<Difficulty>('EASY');
  const [items, setItems] = useState<DragItem[]>([]);
  const [isWinResult, setIsWinResult] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleStart = (diff: Difficulty) => {
    setDifficulty(diff);
    setItems(getGameItems(diff));
    setGameState('PLAYING');
  };

  const handleFinish = (isWin: boolean) => {
    setIsWinResult(isWin);
    setGameState('RESULT');
  };

  const getFeedbackMessage = (diff: Difficulty, isWin: boolean) => {
    if (diff === 'EASY') {
      return isWin 
        ? "bạn là người xinh đẹp và giỏi nhất tớ từng biết ✨" 
        : "còn gì tệ hơn bạn có thể làm không 😭";
    } else if (diff === 'MEDIUM') {
      return isWin
        ? "ổn đấy, tư duy bắt đầu lên level rồi 👀"
        : "học triết kiểu này thì Marx cũng bó tay 🥲";
    } else {
      return isWin
        ? "ok respect, trình này không phải dạng vừa đâu 😎"
        : "bro đang phá cách mạng à 💀";
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center p-6 font-sans relative overflow-x-hidden">
      
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-20">
         <div className="absolute top-10 right-10 w-80 h-80 bg-red-700 rounded-full blur-[100px] mix-blend-screen"></div>
         <div className="absolute bottom-10 left-10 w-96 h-96 bg-yellow-600 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>

      <div className="z-10 w-full max-w-5xl mt-6 bg-slate-800/90 backdrop-blur-xl p-8 rounded-[40px] shadow-[0_0_50px_rgba(220,38,38,0.2)] border-2 border-red-900/50">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 uppercase tracking-widest mb-4 drop-shadow-lg">
            Mô Hình Kinh Tế - Xã Hội
          </h1>
          <p className="text-slate-300 italic text-lg max-w-2xl mx-auto">
            Học thuyết hình thái kinh tế - xã hội của Các Mác. Đỉnh cao tư duy lý luận!
          </p>
        </div>

        {gameState === 'SELECT' && (
          <div className="flex flex-col items-center animate-[fadeIn_0.5s_ease-out]">
            <h2 className="text-2xl text-yellow-500 font-bold mb-8 uppercase tracking-widest border-b-2 border-red-500 pb-2">Độ Khó Của Cách Mạng</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl z-20">
               <button onClick={() => handleStart('EASY')} className="p-8 bg-slate-800 border-2 border-green-500/50 hover:bg-green-900/40 rounded-2xl transition-all shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:-translate-y-2 group cursor-pointer text-left focus:outline-none">
                 <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🌱</div>
                 <div className="text-3xl font-black text-green-400 mb-2">Dễ Thoải Mái</div>
                 <ul className="text-slate-300 text-sm list-disc pl-4 space-y-1">
                   <li>Sắp xếp 6 khái niệm</li>
                   <li>Không áp lực, chơi chill</li>
                 </ul>
               </button>
               <button onClick={() => handleStart('MEDIUM')} className="p-8 bg-slate-800 border-2 border-yellow-500/50 hover:bg-yellow-900/40 rounded-2xl transition-all shadow-[0_0_15px_rgba(234,179,8,0.2)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] hover:-translate-y-2 group cursor-pointer text-left focus:outline-none">
                 <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">⚙️</div>
                 <div className="text-3xl font-black text-yellow-400 mb-2">Trung Bình</div>
                 <ul className="text-slate-300 text-sm list-disc pl-4 space-y-1">
                   <li>Sắp xếp 10–12 khái niệm</li>
                   <li>Bắt đầu cần tư duy</li>
                 </ul>
               </button>
               <button onClick={() => handleStart('HARD')} className="p-8 bg-slate-800 border-2 border-red-500/50 hover:bg-red-900/40 rounded-2xl transition-all shadow-[0_0_15px_rgba(220,38,38,0.2)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:-translate-y-2 group cursor-pointer text-left focus:outline-none">
                 <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">💀</div>
                 <div className="text-3xl font-black text-red-500 mb-2">Khó Điên Đảo</div>
                 <ul className="text-slate-300 text-sm list-disc pl-4 space-y-1">
                   <li>Sắp xếp 15+ khái niệm</li>
                   <li className="text-red-400 font-bold">Sai là toang tư tưởng 💀</li>
                 </ul>
               </button>
            </div>
            <button onClick={() => navigate('/')} className="mt-12 text-slate-400 hover:text-white underline underline-offset-4 text-lg">Quay về trang chủ</button>
          </div>
        )}

        {gameState === 'PLAYING' && (
          <DragBoard items={items} difficulty={difficulty} onFinish={handleFinish} onBack={() => setGameState('SELECT')} />
        )}

        {gameState === 'RESULT' && (
          <div className="flex flex-col items-center animate-[fadeIn_0.5s_ease-out]">
            <div className="text-7xl mb-6 py-2 animate-bounce drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              {isWinResult ? "✨" : "💥"}
            </div>
            <h2 className={`text-2xl md:text-3xl font-bold uppercase tracking-widest mb-8 drop-shadow-md text-center ${isWinResult ? "text-green-400" : "text-red-500"}`}>
              {getFeedbackMessage(difficulty, isWinResult)}
            </h2>
            
            <div className={`bg-slate-900/80 p-8 rounded-2xl border-2 shadow-[0_0_30px_rgba(234,179,8,0.3)] mb-10 w-full relative ${isWinResult ? "border-yellow-500": "border-red-500"}`}>
               <div className="absolute -top-4 -left-4 text-4xl">💡</div>
              <p className={`text-2xl font-bold italic text-center leading-relaxed ${isWinResult ? 'text-yellow-500' : 'text-red-400'}`}>
                "Lực lượng sản xuất quyết định quan hệ sản xuất,<br/>và quan hệ sản xuất quyết định kiến trúc thượng tầng."
              </p>
            </div>

            <h3 className="text-yellow-500 text-lg font-bold mb-4 border-b border-yellow-500/50 pb-2 w-full text-center">TỔNG HỢP KIẾN THỨC BÀI CHƠI</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mb-10 text-left">
              {items.map((item) => (
                <div key={item.id} className="bg-slate-800 p-4 rounded-xl border border-slate-600 hover:border-red-500/50 transition-colors shadow-inner flex flex-col group text-sm">
                  <span className="text-yellow-400 font-bold mb-1 uppercase tracking-wider group-hover:text-red-400 transition-colors">
                    {item.content}
                  </span>
                  <span className="text-slate-500 font-mono mb-2 text-xs">[{item.correctZone}]</span>
                  <span className="text-slate-300 leading-snug">{item.explanation}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 w-full justify-center mt-4">
              <button
                 onClick={() => {
                   setItems(getGameItems(difficulty)); // generate new random items
                   setGameState('PLAYING');
                 }}
                 className="px-10 py-5 bg-slate-700 hover:bg-slate-600 text-white font-black text-xl uppercase tracking-widest rounded-full shadow-lg transform transition hover:-translate-y-1 active:scale-95 text-center"
              >
                Chơi lại 🔄
              </button>
              <button
                 onClick={() => setGameState('SELECT')}
                 className="px-10 py-5 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-yellow-100 font-black text-xl uppercase tracking-widest rounded-full shadow-[0_0_30px_rgba(220,38,38,0.5)] transform transition hover:-translate-y-1 active:scale-95 border-b-4 border-red-900 text-center"
              >
                Về chọn mức độ 🚀
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Footer Meme */}
      <div className="z-10 mt-8 text-center text-slate-500 text-sm italic font-medium opacity-50">
        "Vô sản toàn thế giới, liên hiệp lại!"
      </div>
    </div>
  );
};

export default SocioEconomicModel;
