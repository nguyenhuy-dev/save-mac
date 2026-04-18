import React from 'react';
import type { Question } from '../data/questions';
import MarxProgress from './MarxProgress';

interface GamePlayProps {
  currentQuestion: Question;
  currentLevel: number;
  totalLevels: number;
  questionTimeLeft: number;
  score: number;
  wrongCount: number;
  selectedOption: number | null;
  feedback: { isCorrect: boolean; text: string } | null;
  onSelectOption: (index: number) => void;
  onNext: () => void;
}

const GamePlay: React.FC<GamePlayProps> = ({
  currentQuestion,
  currentLevel,
  totalLevels,
  questionTimeLeft,
  score,
  wrongCount,
  selectedOption,
  feedback,
  onSelectOption,
  onNext
}) => {
  return (
    <div className="flex flex-col space-y-6 animate-scale-in w-full max-w-3xl mx-auto origin-center relative">
      
      {/* Cửa sổ bật lên Điểm Số (Score Box) */}
      <div className="absolute -top-10 -right-4 md:-right-20 md:-top-16 transform rotate-6 z-20 animate-fade-in pointer-events-none">
        <div className="bg-[#D35400] border-[6px] border-[#3E2723] rounded-full w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center shadow-xl">
           <span className="text-[10px] md:text-sm font-black text-[#fdfaf5] uppercase tracking-widest mt-1">ĐIỂM SỐ</span>
           <span className="text-xl md:text-3xl font-black text-white leading-none drop-shadow-sm font-serif">{score}</span>
        </div>
      </div>

      {/* Marx Progress Bar */}
      <MarxProgress currentLevel={currentLevel} totalLevels={totalLevels} />

      {/* Header / Stats */}
      <div className="flex justify-between items-center bg-stone-50 border-2 border-stone-200 p-4 rounded-lg shadow-sm relative z-10">
        <div className="text-lg font-bold text-[#3E2723] font-serif uppercase tracking-widest text-sm text-center border-r border-[#3E2723]/20 pr-4">
           <div>Chặng</div>
           <div className="text-xl">{currentLevel + 1}/{totalLevels}</div>
        </div>
        
        <div className="flex flex-col items-center flex-1">
            {/* Countdown timer with purely numeric but styled format */}
            <div className={`flex flex-col items-center justify-center px-6 py-2 rounded-lg border-2 ${questionTimeLeft <= 5 && questionTimeLeft > 0 ? 'bg-red-50 border-red-500 animate-pulse' : 'bg-white border-[#3E2723] shadow-inner'}`}>
               <div className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1">Thời Gian Còn Lại</div>
               <div className={`text-3xl md:text-4xl font-serif font-black drop-shadow-sm ${questionTimeLeft <= 5 && questionTimeLeft > 0 ? 'text-red-600' : 'text-[#3E2723]'}`}>
                 {questionTimeLeft}s
               </div>
            </div>
        </div>

        <div className="text-lg font-bold text-amber-700 font-serif uppercase tracking-widest text-sm text-center border-l border-[#3E2723]/20 pl-4">
          <div>Cảnh báo</div>
          <div className="text-xl text-red-700">{wrongCount}</div>
        </div>
      </div>

      {/* Door Name */}
      <div className="text-center p-5 bg-white rounded-lg border-t-4 border-red-900 shadow-md relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] pointer-events-none"></div>
        <h2 className="text-3xl font-black tracking-widest text-red-950 uppercase font-serif drop-shadow-sm">
          {currentQuestion.doorName}
        </h2>
      </div>

      {/* Question */}
      <div className="text-2xl md:text-3xl font-bold text-center text-stone-800 py-6 min-h-[140px] flex items-center justify-center leading-snug drop-shadow-sm font-serif">
        "{currentQuestion.question}"
      </div>

      {/* Feedback alert & Next Button */}
      {feedback && (
        <div className="flex flex-col items-center gap-5 mt-6 animate-expand-flash origin-top">
          <div className={`p-6 rounded-lg text-center font-bold text-lg shadow-lg transition-all duration-500 w-full leading-relaxed border-2 ${
            feedback.isCorrect 
              ? 'bg-green-50 text-green-900 border-green-500 animate-fade-in-up' 
              : 'bg-red-50 text-red-950 border-red-500 animate-fade-in-up'
          }`}>
            <span className="text-2xl block mb-2">{feedback.isCorrect ? '✅ Chính Xác!' : '❌ Sai!'}</span>
            <span className="opacity-90 font-medium font-serif text-xl" dangerouslySetInnerHTML={{ __html: feedback.text }}></span>
          </div>
          
          <button 
            onClick={onNext}
            className="px-8 py-3 bg-red-900 hover:bg-red-800 text-white font-bold tracking-widest uppercase font-serif rounded-sm shadow-md transform hover:scale-105 transition-all text-xl flex items-center gap-2 border border-red-700"
          >
            TIẾP THEO <span className="text-2xl filter sepia opacity-80">➡</span>
          </button>
        </div>
      )}

      {/* Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        {currentQuestion.options.map((option, index) => {
          let btnClass = "bg-white hover:bg-stone-50 border-stone-300 text-stone-700 border-b-4 hover:border-red-900/30";
          
          if (selectedOption === index) {
            if (index === currentQuestion.correctAnswer) {
              btnClass = "bg-green-100 border-green-500 text-green-950 border-b-0 translate-y-1 shadow-inner";
            } else {
              btnClass = "bg-red-100 border-red-500 text-red-950 border-b-0 translate-y-1 shadow-inner";
            }
          }

          return (
            <button
              key={index}
              disabled={selectedOption !== null}
              onClick={() => onSelectOption(index)}
              className={`relative p-5 rounded-lg border-2 text-left font-bold text-lg transition-all duration-300 ease-out transform hover:scale-[1.02] active:scale-[0.97] ${btnClass} disabled:cursor-not-allowed disabled:hover:scale-100 disabled:opacity-90 group overflow-hidden font-serif`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-red-900/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <span className="inline-block w-8 h-8 rounded-full bg-stone-100 border border-stone-300 text-center leading-[30px] mr-3 text-sm text-red-900 font-black shadow-sm group-hover:bg-red-900 group-hover:text-white transition-colors">
                {String.fromCharCode(65 + index)}
              </span>
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default GamePlay;
