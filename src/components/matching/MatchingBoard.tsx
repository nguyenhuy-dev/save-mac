import React, { useState, useEffect, useMemo } from 'react';
import type { MatchingPair, Difficulty } from '../../data/matchingItems';
import { useAudio } from '../../hooks/useAudio';

interface MatchingBoardProps {
  pairs: MatchingPair[];
  difficulty: Difficulty;
  onFinish: (elapsedMs: number, wrongCount: number) => void;
  onBack: () => void;
}

// Hàm xáo trộn array
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

export const MatchingBoard: React.FC<MatchingBoardProps> = ({ pairs, difficulty, onFinish, onBack }) => {
  const { playSound } = useAudio();
  
  // Khởi tạo và ghi nhớ mảng xáo trộn
  const terms = useMemo(() => shuffleArray(pairs), [pairs]);
  const defs = useMemo(() => shuffleArray(pairs), [pairs]);

  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [selectedTermId, setSelectedTermId] = useState<string | null>(null);
  const [selectedDefId, setSelectedDefId] = useState<string | null>(null);
  const [wrongPair, setWrongPair] = useState<{termId: string, defId: string} | null>(null);
  const [wrongCount, setWrongCount] = useState<number>(0);
  
  const [startTime] = useState<number>(Date.now());
  const [elapsed, setElapsed] = useState<number>(0);

  // Timer update
  useEffect(() => {
    const timer = setInterval(() => {
       setElapsed(Date.now() - startTime);
    }, 1000);
    return () => clearInterval(timer);
  }, [startTime]);

  // Handle Match Logic
  useEffect(() => {
    if (selectedTermId && selectedDefId) {
      if (selectedTermId === selectedDefId) {
        // Khớp
        playSound('correct');
        setMatchedIds(prev => [...prev, selectedTermId]);
        setSelectedTermId(null);
        setSelectedDefId(null);
      } else {
        // Sai
        playSound('wrong');
        setWrongCount(prev => prev + 1);
        setWrongPair({ termId: selectedTermId, defId: selectedDefId });
        // Reset sau 800ms
        setTimeout(() => {
          setSelectedTermId(null);
          setSelectedDefId(null);
          setWrongPair(null);
        }, 800);
      }
    }
  }, [selectedTermId, selectedDefId, playSound]);

  // Handle Win Logic
  useEffect(() => {
    if (matchedIds.length === pairs.length && pairs.length > 0) {
      if (wrongCount >= 5) {
        playSound('lose');
      } else {
        playSound('win');
      }
      setTimeout(() => {
        onFinish(Date.now() - startTime, wrongCount);
      }, 1000);
    }
  }, [matchedIds.length, pairs.length, onFinish, playSound, startTime, wrongCount]);

  const formatElapsed = (ms: number) => {
    const s = Math.floor(ms / 1000);
    const min = Math.floor(s / 60);
    const sec = s % 60;
    return `${min}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full flex flex-col gap-6 items-center">
      {/* Header Stats */}
      <div className="w-full flex justify-between items-center bg-stone-50 p-4 rounded-lg border-2 border-stone-200 shadow-sm gap-4">
        <div className="text-red-900 font-bold uppercase tracking-widest md:text-xl font-serif text-sm">
          Mức độ: {difficulty === "EASY" ? "Dễ 🌱" : difficulty === "MEDIUM" ? "Trung Bình ⚙️" : "Khó 💀"}
        </div>
        <div className="flex gap-4">
           <div className="bg-white px-4 py-2 border rounded font-mono font-bold text-stone-600">
              Sai sót: <span className="text-red-600">{wrongCount}</span>
           </div>
           <div className="bg-white px-4 py-2 border rounded font-mono font-bold text-stone-600">
              ⏱ {formatElapsed(elapsed)}
           </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Cột 1: Khái niệm (Terms) */}
        <div className="flex flex-col gap-3">
           <h3 className="text-center font-black uppercase text-xl text-stone-700 tracking-widest font-serif mb-2 border-b-2 border-stone-200 pb-2">Khái Niệm</h3>
           {terms.map(p => {
             const isMatched = matchedIds.includes(p.id);
             const isSelected = selectedTermId === p.id;
             const isWrong = wrongPair?.termId === p.id;
             
             let btnClass = "bg-white border-stone-300 text-stone-800 hover:border-red-900 shadow-sm hover:shadow-md cursor-pointer";
             if (isMatched) btnClass = "bg-green-100 border-green-500 text-green-900 opacity-60 cursor-not-allowed scale-[0.98]";
             else if (isWrong) btnClass = "bg-red-100 border-red-500 text-red-900 animate-shake";
             else if (isSelected) btnClass = "bg-amber-100 border-amber-500 text-amber-900 ring-4 ring-amber-500/20 scale-[1.02] shadow-md z-10 font-bold";

             return (
               <button 
                 key={p.id}
                 disabled={isMatched || (selectedTermId !== null && selectedDefId !== null)} 
                 onClick={() => setSelectedTermId(selectedTermId === p.id ? null : p.id)}
                 className={`p-4 border-2 rounded-lg font-bold transition-all text-center h-20 flex items-center justify-center font-serif text-lg ${btnClass}`}
               >
                 {p.term}
               </button>
             );
           })}
        </div>

        {/* Cột 2: Diễn giải (Definitions) */}
        <div className="flex flex-col gap-3">
           <h3 className="text-center font-black uppercase text-xl text-stone-700 tracking-widest font-serif mb-2 border-b-2 border-stone-200 pb-2">Nội Dung Mô Tả</h3>
           {defs.map(p => {
             const isMatched = matchedIds.includes(p.id);
             const isSelected = selectedDefId === p.id;
             const isWrong = wrongPair?.defId === p.id;
             
             let btnClass = "bg-white border-stone-300 text-stone-700 hover:border-blue-900 shadow-sm hover:shadow-md cursor-pointer";
             if (isMatched) btnClass = "bg-green-100 border-green-500 text-green-900 opacity-60 cursor-not-allowed scale-[0.98]";
             else if (isWrong) btnClass = "bg-red-100 border-red-500 text-red-900 animate-shake";
             else if (isSelected) btnClass = "bg-blue-50 border-blue-500 text-blue-900 ring-4 ring-blue-500/20 scale-[1.02] shadow-md z-10 font-bold";

             return (
               <button 
                 key={p.id}
                 disabled={isMatched || (selectedTermId !== null && selectedDefId !== null)} 
                 onClick={() => setSelectedDefId(selectedDefId === p.id ? null : p.id)}
                 className={`p-4 border-2 rounded-lg font-medium transition-all text-left min-h-20 flex items-center text-sm sm:text-base leading-snug ${btnClass}`}
               >
                 {p.definition}
               </button>
             );
           })}
        </div>
      </div>

      <div className="mt-8">
        <button
          onClick={onBack}
          className="px-8 py-3 bg-red-900 hover:bg-red-800 text-white font-bold rounded-sm shadow-md transform hover:-translate-y-1 active:scale-95 transition-all uppercase tracking-widest border border-red-700 font-serif"
        >
          Trốn thuật ngữ (Bỏ cuộc)
        </button>
      </div>
    </div>
  );
};
