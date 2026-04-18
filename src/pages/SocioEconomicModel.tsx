import React, { useState } from 'react';
import { DragBoard } from '../components/dragdrop/DragBoard';
import { getGameItems } from '../data/socioItems';
import type { Difficulty, DragItem, ZoneType } from '../data/socioItems';
import { useNavigate } from 'react-router-dom';

type GameState = 'SELECT' | 'INTRO' | 'PLAYING' | 'RESULT';

const SocioEconomicModel: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('SELECT');
  const [difficulty, setDifficulty] = useState<Difficulty>('EASY');
  const [items, setItems] = useState<DragItem[]>([]);
  const [isWinResult, setIsWinResult] = useState<boolean>(false);
  const [timeScore, setTimeScore] = useState<number>(0);
  const [userPlaced, setUserPlaced] = useState<Record<string, ZoneType>>({});
  const navigate = useNavigate();

  const handleSelectDiff = (diff: Difficulty) => {
    setDifficulty(diff);
    setItems(getGameItems(diff));
    setGameState('INTRO');
  };

  const handleStartGame = () => {
    setGameState('PLAYING');
  };

  const handleFinish = (isWin: boolean, elapsedMs: number, placed: Record<string, ZoneType>) => {
    setIsWinResult(isWin);
    setTimeScore(elapsedMs);
    setUserPlaced(placed);
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
    <div className="min-h-screen bg-[#fdfaf5] text-stone-800 flex flex-col items-center p-6 font-serif relative overflow-x-hidden">
      
      {/* Ambient Light Decor */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-60">
         <div className="absolute top-10 right-10 w-[800px] h-[800px] bg-red-100 rounded-full blur-[150px] mix-blend-multiply opacity-50"></div>
         <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-amber-100 rounded-full blur-[150px] mix-blend-multiply opacity-50"></div>
      </div>

      <div className="z-10 w-full max-w-5xl mt-6 bg-white p-8 rounded-xl shadow-lg border-2 border-stone-200">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-red-950 uppercase tracking-widest mb-4 drop-shadow-sm font-serif">
            Mô Hình Kinh Tế - Xã Hội
          </h1>
          <p className="text-stone-600 italic text-lg max-w-2xl mx-auto font-medium">
            Học thuyết hình thái kinh tế - xã hội của Các Mác. Đỉnh cao tư duy lý luận!
          </p>
        </div>

        {gameState === 'SELECT' && (
          <div className="flex flex-col items-center animate-[fadeIn_0.5s_ease-out]">
            <h2 className="text-2xl text-red-900 font-bold mb-8 uppercase tracking-widest border-b-2 border-red-900/30 pb-2">Độ Khó Của Cách Mạng</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl z-20">
               <button onClick={() => handleSelectDiff('EASY')} className="p-8 bg-stone-50 border-2 border-green-600/60 hover:bg-green-50 rounded-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-1 group cursor-pointer text-left focus:outline-none">
                 <div className="text-6xl mb-4 group-hover:scale-110 transition-transform drop-shadow-sm">🌱</div>
                 <div className="text-2xl font-black text-green-800 mb-2 font-serif uppercase tracking-wider">Dễ Thoải Mái</div>
                 <ul className="text-stone-700 text-sm list-disc pl-4 space-y-1 font-medium">
                   <li>Sắp xếp 6 khái niệm</li>
                   <li>Không áp lực, chơi chill</li>
                 </ul>
               </button>
               <button onClick={() => handleSelectDiff('MEDIUM')} className="p-8 bg-stone-50 border-2 border-amber-500/60 hover:bg-amber-50 rounded-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-1 group cursor-pointer text-left focus:outline-none">
                 <div className="text-6xl mb-4 group-hover:scale-110 transition-transform drop-shadow-sm">⚙️</div>
                 <div className="text-2xl font-black text-amber-800 mb-2 font-serif uppercase tracking-wider">Trung Bình</div>
                 <ul className="text-stone-700 text-sm list-disc pl-4 space-y-1 font-medium">
                   <li>Sắp xếp 12 khái niệm</li>
                   <li>Bắt đầu cần tư duy</li>
                 </ul>
               </button>
               <button onClick={() => handleSelectDiff('HARD')} className="p-8 bg-stone-50 border-2 border-red-800/60 hover:bg-red-50 rounded-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-1 group cursor-pointer text-left focus:outline-none">
                 <div className="text-6xl mb-4 group-hover:scale-110 transition-transform drop-shadow-sm filter sepia opacity-80">💀</div>
                 <div className="text-2xl font-black text-red-900 mb-2 font-serif uppercase tracking-wider">Khó Điên Đảo</div>
                 <ul className="text-stone-700 text-sm list-disc pl-4 space-y-1 font-medium">
                   <li>Sắp xếp 18 khái niệm</li>
                   <li className="text-red-800 font-bold">Sai là toang tư tưởng 💀</li>
                 </ul>
               </button>
            </div>
            <button onClick={() => navigate('/')} className="mt-12 text-red-800 font-bold hover:text-red-600 underline underline-offset-4 tracking-widest text-sm uppercase">Quay về trang chủ</button>
          </div>
        )}

        {gameState === 'INTRO' && (
          <div className="flex flex-col items-center animate-[fadeIn_0.5s_ease-out] w-full max-w-3xl mx-auto text-center">
            <h2 className="text-3xl text-red-900 font-black mb-6 uppercase tracking-widest font-serif drop-shadow-sm">Mục Tiêu Cách Mạng</h2>
            
            <div className="p-8 bg-white border-2 border-stone-300 shadow-md rounded-lg w-full mb-10 text-left relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')]"></div>
              
              <div className="relative z-10 w-full flex items-start gap-4">
                 <div className="text-5xl drop-shadow-sm">{difficulty === 'EASY' ? '🌱' : difficulty === 'MEDIUM' ? '⚙️' : '💀'}</div>
                 <div>
                    <h3 className="text-2xl font-black uppercase text-stone-800 mb-3 tracking-wider font-serif border-b pb-2 border-stone-200">Bạn sẽ phải sắp xếp những gì?</h3>
                    <p className="text-lg text-red-900 font-bold uppercase tracking-widest mb-4">
                      {items.length} Khái niệm cốt lõi
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-stone-700 text-[15px] font-medium marker:text-[#D35400]">
                      {difficulty === 'EASY' && (
                        <>
                          <li>Sắp xếp những khái niệm <strong>cơ bản, sơ khai và cốt lõi nhất</strong> của hình thái kinh tế xã hội.</li>
                          <li>Ví dụ: Người lao động, Công cụ lao động, Nhà nước, Pháp luật.</li>
                          <li>Thích hợp để khởi động và làm quen với bảng Kéo - Thả.</li>
                        </>
                      )}
                      {difficulty === 'MEDIUM' && (
                        <>
                          <li>Bao gồm các khái niệm cốt lõi và <strong>thành phần mở rộng</strong>.</li>
                          <li>Kiến thức trừu tượng hơn: Sở hữu tư nhân, Tổ chức quản lý, Hệ tư tưởng chính trị...</li>
                          <li>Cần có kiến thức tổng quan về bài học triết học để vượt qua.</li>
                        </>
                      )}
                      {difficulty === 'HARD' && (
                        <>
                          <li>Tất cả từ mức Dễ, Trung bình cộng với <strong>ứng dụng thực tiễn vào Thời đại Công nghiệp số và Công nghệ hiện đại</strong>.</li>
                          <li>Ví dụ về Big Data, Trí tuệ Nhân tạo (AI), Chuỗi cung ứng toàn cầu. Khái niệm rất lắt léo đòi hỏi liên hệ thực tiễn cao!</li>
                        </>
                      )}
                    </ul>
                 </div>
              </div>
              
              <div className="relative z-10 bg-amber-50 border-l-4 border-amber-500 p-4 font-bold text-amber-900 text-sm tracking-wide mt-8 shadow-inner">
                ⚠️ LƯU Ý LỚN: Thời gian trắc nghiệm sẽ kích hoạt ngay khi bạn nhấn BẮT ĐẦU.<br/> 
                Bạn chỉ được cấp quyền nhấn "NỘP BÀI" sau khi đã kéo thả vừa khớp tất cả thẻ bài vào 3 trụ cột của hệ thống.
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => setGameState('SELECT')} 
                className="px-8 py-4 bg-white border-2 border-stone-300 hover:border-red-900/30 text-stone-700 font-bold hover:bg-stone-50 rounded-sm font-serif uppercase tracking-widest shadow-sm transition-all"
              >
                Trở lại
              </button>
              <button 
                onClick={handleStartGame} 
                className="px-10 py-4 bg-[#D35400] hover:bg-[#A04000] text-white font-black text-xl tracking-widest uppercase font-serif rounded-sm shadow-[0_5px_15px_-5px_rgba(211,84,0,0.6)] transform transition hover:-translate-y-1 active:scale-95 border border-[#873600] animate-pulse relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                Ngòi nổ Cách mạng 🚀
              </button>
            </div>
          </div>
        )}

        {gameState === 'PLAYING' && (
          <DragBoard items={items} difficulty={difficulty} onFinish={handleFinish} onBack={() => setGameState('SELECT')} />
        )}

        {gameState === 'RESULT' && (
          <div className="flex flex-col items-center animate-[fadeIn_0.5s_ease-out]">
            <div className={`text-7xl mb-6 py-2 drop-shadow-sm ${isWinResult ? "" : "filter sepia opacity-80"}`}>
              {isWinResult ? "✨" : "💥"}
            </div>
            <h2 className={`text-2xl md:text-3xl font-black uppercase tracking-widest mb-8 drop-shadow-sm text-center font-serif ${isWinResult ? "text-green-800" : "text-red-900"}`}>
              {getFeedbackMessage(difficulty, isWinResult)}
            </h2>
            
            <div className={`bg-stone-50 p-8 rounded-lg border-2 shadow-md mb-10 w-full relative ${isWinResult ? "border-green-600": "border-red-800"}`}>
               <div className="absolute -top-4 -left-4 text-4xl filter sepia drop-shadow-sm">💡</div>
               
               <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 pb-6 border-b-2 border-stone-200">
                  <div className="text-center">
                     <span className="block text-[10px] text-stone-500 font-black uppercase tracking-widest">Thời gian hoàn thành</span>
                     <span className="text-3xl font-sans font-black text-[#D35400]">{(timeScore / 1000).toFixed(1)}s</span>
                  </div>
               </div>

              <p className={`text-2xl font-bold italic text-center leading-relaxed font-serif ${isWinResult ? 'text-green-900' : 'text-red-950'}`}>
                "Lực lượng sản xuất quyết định quan hệ sản xuất,<br/>và quan hệ sản xuất quyết định kiến trúc thượng tầng."
              </p>
            </div>

            <h3 className="text-red-900 text-base font-black uppercase tracking-widest mb-4 border-b-2 border-red-900/20 pb-2 w-full text-center font-serif">TỔNG HỢP KẾT QUẢ CỦA BẠN</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full mb-10 text-left">
              {[
                { id: 'LLSX', title: 'Lực lượng sản xuất' },
                { id: 'QHSX', title: 'Quan hệ sản xuất' },
                { id: 'KTTT', title: 'Kiến trúc thượng tầng' }
              ].map(zone => {
                const itemsInZone = items.filter(item => userPlaced[item.id] === zone.id);
                return (
                  <div key={zone.id} className="bg-stone-50 p-5 rounded-xl border-2 border-stone-200 shadow-inner flex flex-col gap-4 relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#3E2723] text-[#F3E5AB] px-4 py-1 rounded-full text-xs font-bold font-serif uppercase tracking-widest shadow-md whitespace-nowrap">
                       {zone.title}
                    </div>
                    <div className="mt-4 flex flex-col gap-3 h-full">
                       {itemsInZone.length === 0 ? (
                          <p className="text-stone-400 italic text-center text-sm py-8 m-auto">Bỏ trống bảng này</p>
                       ) : (
                          itemsInZone.map(item => {
                            const isCorrect = item.correctZone === zone.id;
                            return (
                              <div key={item.id} className={`p-4 rounded-lg border-2 shadow-sm flex flex-col group text-sm relative transition-all ${isCorrect ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'}`}>
                                <div className="absolute top-2 right-2 text-lg drop-shadow-sm">{isCorrect ? '✅' : '❌'}</div>
                                <span className={`font-black mb-1 uppercase tracking-wider pr-6 leading-tight ${isCorrect ? 'text-green-900' : 'text-red-950'}`}>
                                  {item.content}
                                </span>
                                {!isCorrect && (
                                  <span className="text-red-700 font-bold mb-2 text-xs bg-red-100 p-1 rounded inline-block w-fit mt-1">Phải ở: {item.correctZone}</span>
                                )}
                                <span className={`leading-snug font-medium mt-1 pt-2 border-t ${isCorrect ? 'text-green-800 border-green-200' : 'text-red-800 border-red-200'}`}>
                                  {item.explanation}
                                </span>
                              </div>
                            );
                          })
                       )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 w-full justify-center mt-4">
              <button
                 onClick={() => {
                   setItems(getGameItems(difficulty)); // generate new random items
                   setGameState('PLAYING');
                 }}
                 className="px-10 py-4 bg-white border-2 border-stone-300 hover:bg-stone-50 text-stone-700 font-bold text-lg uppercase tracking-widest rounded-sm shadow-sm transform transition hover:-translate-y-1 active:scale-95 text-center"
              >
                Chơi lại 🔄
              </button>
              <button
                 onClick={() => setGameState('SELECT')}
                 className="px-10 py-4 bg-red-900 hover:bg-red-800 text-white font-bold text-lg uppercase tracking-widest rounded-sm shadow-md transform transition hover:-translate-y-1 active:scale-95 border border-red-700 text-center font-serif"
              >
                Về chọn mức độ 🚀
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Footer Meme */}
      <div className="z-10 mt-8 text-center text-red-900/60 font-serif italic text-sm font-bold tracking-widest uppercase flex items-center gap-3">
        <span className="text-xl">☭</span> "Vô sản toàn thế giới, liên hiệp lại!" <span className="text-xl">☭</span>
      </div>
    </div>
  );
};

export default SocioEconomicModel;
