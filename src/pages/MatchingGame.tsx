import React, { useState } from 'react';
import { MatchingBoard } from '../components/matching/MatchingBoard';
import { getMatchingItems } from '../data/matchingItems';
import type { Difficulty, MatchingPair } from '../data/matchingItems';
import { useNavigate } from 'react-router-dom';

type GameState = 'SELECT' | 'INTRO' | 'PLAYING' | 'RESULT';

const MatchingGame: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('SELECT');
  const [difficulty, setDifficulty] = useState<Difficulty>('EASY');
  const [pairs, setPairs] = useState<MatchingPair[]>([]);
  const [timeScore, setTimeScore] = useState<number>(0);
  const [wrongCountResult, setWrongCountResult] = useState<number>(0);
  const navigate = useNavigate();

  const handleSelectDiff = (diff: Difficulty) => {
    setDifficulty(diff);
    setPairs(getMatchingItems(diff));
    setGameState('INTRO');
  };

  const handleStartGame = () => {
    setGameState('PLAYING');
  };

  const handleFinish = (elapsedMs: number, wrongCount: number) => {
    setTimeScore(elapsedMs);
    setWrongCountResult(wrongCount);
    setGameState('RESULT');
  };

  const getFeedbackMessage = () => {
    if (wrongCountResult === 0) return "TUYỆT ĐỐI KHÔNG SAI MỘT TỪ NÀO! LÝ LUẬN ĐÃ THẤM NHUẦN!";
    if (wrongCountResult <= 3) return "XUẤT SẮC! BẠN VẬN DỤNG CÁC PHẠM TRÙ RẤT TỐT.";
    if (wrongCountResult <= 7) return "NHẦM LẪN CHÚT ĐỈNH! MÂU THUẪN ĐANG GIÚP BẠN TIẾN BỘ.";
    return "CHỦ NGHĨA KINH HIỆM BỊ ĐÁNH BẠI. HÃY THỬ LẠI LẦN SAU!";
  };

  return (
    <div className="min-h-screen bg-[#fdfaf5] text-stone-800 flex flex-col items-center p-6 font-serif relative overflow-x-hidden">
      
      {/* Ambient Light Decor */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-60">
         <div className="absolute top-10 right-10 w-[800px] h-[800px] bg-red-100 rounded-full blur-[150px] mix-blend-multiply opacity-50"></div>
         <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-amber-100 rounded-full blur-[150px] mix-blend-multiply opacity-50"></div>
      </div>

      <div className="z-10 w-full max-w-5xl mt-6 bg-white p-8 rounded-xl shadow-lg border-2 border-stone-200">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-red-950 uppercase tracking-widest mb-4 drop-shadow-sm font-serif">
            NỐI GHÉP PHẠM TRÙ
          </h1>
          <p className="text-stone-600 italic text-lg max-w-2xl mx-auto font-medium">
            Học thuyết kinh điển với sự xáo trộn tư duy. Hãy giữ vững sự tập trung!
          </p>
        </div>

        {gameState === 'SELECT' && (
          <div className="flex flex-col items-center animate-[fadeIn_0.5s_ease-out]">
            <h2 className="text-2xl text-red-900 font-bold mb-8 uppercase tracking-widest border-b-2 border-red-900/30 pb-2">Chọn Độ Khó</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl z-20">
               <button onClick={() => handleSelectDiff('EASY')} className="p-8 bg-stone-50 border-2 border-green-600/60 hover:bg-green-50 rounded-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-1 group cursor-pointer text-left focus:outline-none">
                 <div className="text-6xl mb-4 group-hover:scale-110 transition-transform drop-shadow-sm">🌱</div>
                 <div className="text-2xl font-black text-green-800 mb-2 font-serif uppercase tracking-wider">Tập Tành</div>
                 <ul className="text-stone-700 text-sm list-disc pl-4 space-y-1 font-medium">
                   <li>4 khái niệm cơ bản</li>
                 </ul>
               </button>
               <button onClick={() => handleSelectDiff('MEDIUM')} className="p-8 bg-stone-50 border-2 border-amber-500/60 hover:bg-amber-50 rounded-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-1 group cursor-pointer text-left focus:outline-none">
                 <div className="text-6xl mb-4 group-hover:scale-110 transition-transform drop-shadow-sm">⚙️</div>
                 <div className="text-2xl font-black text-amber-800 mb-2 font-serif uppercase tracking-wider">Khá Nhanh</div>
                 <ul className="text-stone-700 text-sm list-disc pl-4 space-y-1 font-medium">
                   <li>9 khái niệm</li>
                   <li>Bắt đầu lú lẫn</li>
                 </ul>
               </button>
               <button onClick={() => handleSelectDiff('HARD')} className="p-8 bg-stone-50 border-2 border-red-800/60 hover:bg-red-50 rounded-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-1 group cursor-pointer text-left focus:outline-none">
                 <div className="text-6xl mb-4 group-hover:scale-110 transition-transform drop-shadow-sm filter sepia opacity-80">💀</div>
                 <div className="text-2xl font-black text-red-900 mb-2 font-serif uppercase tracking-wider">Ma Trận</div>
                 <ul className="text-stone-700 text-sm list-disc pl-4 space-y-1 font-medium">
                   <li>14 khái niệm siêu dài</li>
                   <li>Dễ đọc nhầm, hoa mắt</li>
                 </ul>
               </button>
            </div>
            <button onClick={() => navigate('/')} className="mt-12 text-red-800 font-bold hover:text-red-600 underline underline-offset-4 tracking-widest text-sm uppercase">Quay về trang chủ</button>
          </div>
        )}

        {gameState === 'INTRO' && (
          <div className="flex flex-col items-center animate-[fadeIn_0.5s_ease-out] w-full max-w-3xl mx-auto text-center">
            <h2 className="text-3xl text-red-900 font-black mb-6 uppercase tracking-widest font-serif drop-shadow-sm">Nhiệm vụ của bạn</h2>
            
            <div className="p-8 bg-white border-2 border-stone-300 shadow-md rounded-lg w-full mb-10 text-left relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')]"></div>
              
              <div className="relative z-10 w-full flex flex-col md:flex-row items-center md:items-start gap-6">
                 <div className="text-7xl drop-shadow-sm">{difficulty === 'EASY' ? '🌱' : difficulty === 'MEDIUM' ? '⚙️' : '💀'}</div>
                 <div>
                    <h3 className="text-2xl font-black uppercase text-stone-800 mb-3 tracking-wider font-serif border-b pb-2 border-stone-200">Bạn sẽ phải làm gì?</h3>
                    <p className="text-lg text-red-900 font-bold uppercase tracking-widest mb-4">
                      TÌM VÀ NỐI {pairs.length} CẶP TỪ
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-stone-700 text-[15px] font-medium marker:text-blue-600">
                      <li>Sẽ có 2 bảng trên màn hình. Bảng trái là <strong>Tên khái niệm</strong>. Bảng phải là <strong>Nội dung định nghĩa</strong>.</li>
                      <li>Nhiệm vụ của bạn là click vào 1 Khái niệm (bên trái), rồi tìm nội dung đúng (bên phải) và click vào nó.</li>
                      <li>Nếu chọn đúng, chúng sẽ khóa lại. Nếu sai, bạn bị tính 1 sai sót và phải chọn lại từ đầu.</li>
                      <li>Tranh thủ nhớ thật kĩ chứ đừng có bấm liều nha!</li>
                    </ul>
                 </div>
              </div>
              
              <div className="relative z-10 bg-amber-50 border-l-4 border-amber-500 p-4 font-bold text-amber-900 text-sm tracking-wide mt-8 shadow-inner">
                ⚠️ Dành cho tư duy: Bạn có thể chọn Nội dung bên phải trước, rồi mới bấm Tên bên trái cũng được nhé!
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => setGameState('SELECT')} 
                className="px-8 py-4 bg-white border-2 border-stone-300 hover:border-red-900/30 text-stone-700 font-bold hover:bg-stone-50 rounded-sm font-serif uppercase tracking-widest shadow-sm transition-all"
              >
                Đổi ý (Quay lại)
              </button>
              <button 
                onClick={handleStartGame} 
                className="px-10 py-4 bg-blue-900 hover:bg-blue-800 text-white font-black text-xl tracking-widest uppercase font-serif rounded-sm shadow-[0_5px_15px_-5px_rgba(30,58,138,0.6)] transform transition hover:-translate-y-1 active:scale-95 border border-blue-950 animate-pulse relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                TIẾN HÀNH GHÉP NỐI ⚡
              </button>
            </div>
          </div>
        )}

        {gameState === 'PLAYING' && (
          <MatchingBoard pairs={pairs} difficulty={difficulty} onFinish={handleFinish} onBack={() => setGameState('SELECT')} />
        )}

        {gameState === 'RESULT' && (
          <div className="flex flex-col items-center animate-[fadeIn_0.5s_ease-out]">
            <div className="text-7xl mb-6 py-2 drop-shadow-sm">
              {wrongCountResult === 0 ? "🏆" : wrongCountResult <= 3 ? "👏" : "💦"}
            </div>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest mb-8 drop-shadow-sm text-center font-serif text-blue-900">
              {getFeedbackMessage()}
            </h2>
            
            <div className="bg-stone-50 p-8 rounded-lg border-2 shadow-md mb-10 w-full md:w-3/4 mx-auto border-blue-600 relative">
               <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                  <div className="text-center">
                     <span className="block text-xs text-stone-500 font-black uppercase tracking-widest mb-2">Thời gian của bạn</span>
                     <span className="text-5xl font-sans font-black text-blue-800">{(timeScore / 1000).toFixed(1)}s</span>
                  </div>
                  <div className="hidden sm:block w-px h-16 bg-stone-300"></div>
                  <div className="text-center">
                     <span className="block text-xs text-stone-500 font-black uppercase tracking-widest mb-2">Số lần ghép lệch</span>
                     <span className="text-5xl font-sans font-black text-red-600">{wrongCountResult}</span>
                  </div>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 w-full justify-center mt-4">
              <button
                 onClick={() => {
                   setPairs(getMatchingItems(difficulty)); 
                   setGameState('PLAYING');
                 }}
                 className="px-10 py-4 bg-white border-2 border-stone-300 hover:bg-stone-50 text-stone-700 font-bold text-lg uppercase tracking-widest rounded-sm shadow-sm transform transition hover:-translate-y-1 active:scale-95 text-center"
              >
                 Thử thách lại 🔄
              </button>
              <button
                 onClick={() => setGameState('SELECT')}
                 className="px-10 py-4 bg-blue-900 hover:bg-blue-800 text-white font-bold text-lg uppercase tracking-widest rounded-sm shadow-md transform transition hover:-translate-y-1 active:scale-95 border border-blue-950 text-center font-serif"
              >
                 Chơi mức khác 🚀
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchingGame;
