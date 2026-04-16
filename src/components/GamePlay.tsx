import React from 'react';
import type { Question } from '../data/questions';
import MarxProgress from './MarxProgress';

interface GamePlayProps {
  currentQuestion: Question;
  currentLevel: number;
  totalLevels: number;
  timeLeft: number;
  wrongCount: number;
  selectedOption: number | null;
  feedback: { isCorrect: boolean; text: string } | null;
  onSelectOption: (index: number) => void;
  formatTime: (seconds: number) => string;
  onNext: () => void;
}

const GamePlay: React.FC<GamePlayProps> = ({
  currentQuestion,
  currentLevel,
  totalLevels,
  timeLeft,
  wrongCount,
  selectedOption,
  feedback,
  onSelectOption,
  formatTime,
  onNext
}) => {
  return (
    <div className="flex flex-col space-y-6 animate-scale-in w-full max-w-3xl mx-auto origin-center">
      
      {/* Marx Progress Bar */}
      <MarxProgress currentLevel={currentLevel} totalLevels={totalLevels} />

      {/* Header / Stats */}
      <div className="flex justify-between items-center bg-slate-900/80 p-4 rounded-xl shadow-inner border border-red-500/30">
        <div className="text-lg font-bold text-yellow-500">
          Chướng ngại: {currentLevel + 1}/{totalLevels}
        </div>
        <div className="flex flex-col items-center">
            <div className="text-xs uppercase tracking-widest text-slate-400">Thời Gian</div>
            <div className={`text-3xl font-mono font-black drop-shadow-md ${timeLeft < 60 ? 'text-red-500 animate-pulse' : 'text-slate-100'}`}>
              {formatTime(timeLeft)}
            </div>
        </div>
        <div className="text-lg font-bold text-red-400">
          Mâu thuẫn: {wrongCount}
        </div>
      </div>

      {/* Door Name */}
      <div className="text-center p-5 bg-gradient-to-b from-red-900/80 to-slate-900 rounded-xl border-t-4 border-yellow-500 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>
        <h2 className="text-3xl font-black tracking-widest text-yellow-400 uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          {currentQuestion.doorName}
        </h2>
      </div>

      {/* Question */}
      <div className="text-2xl md:text-3xl font-bold text-center text-slate-100 py-6 min-h-[140px] flex items-center justify-center leading-snug drop-shadow-lg">
        "{currentQuestion.question}"
      </div>

      {/* Feedback alert & Next Button */}
      {feedback && (
        <div className="flex flex-col items-center gap-5 mt-6 animate-expand-flash origin-top">
          <div className={`p-6 rounded-2xl text-center font-bold text-lg shadow-2xl transition-all duration-500 w-full leading-relaxed ${
            feedback.isCorrect 
              ? 'bg-gradient-to-r from-green-700 to-green-600 text-white border-2 border-green-400 animate-fade-in-up' 
              : 'bg-gradient-to-r from-red-800 to-red-600 text-white border-2 border-red-400 animate-fade-in-up'
          }`}>
            <span className="text-2xl block mb-2">{feedback.isCorrect ? '✅ Chính Xác!' : '❌ Sai Lệch!'}</span>
            <span className="opacity-90 font-medium">{feedback.text}</span>
          </div>
          
          <button 
            onClick={onNext}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-full shadow-[0_0_20px_rgba(37,99,235,0.6)] transform hover:scale-105 transition-all animate-pulse drop-shadow-xl text-xl flex items-center gap-2"
          >
            TIẾP THEO <span className="text-2xl">➡</span>
          </button>
        </div>
      )}

      {/* Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        {currentQuestion.options.map((option, index) => {
          let btnClass = "bg-slate-800 hover:bg-slate-700 border-slate-600 text-slate-200 border-b-4";
          
          if (selectedOption === index) {
            if (index === currentQuestion.correctAnswer) {
              btnClass = "bg-green-600 border-green-800 text-white border-b-0 translate-y-1 shadow-[0_0_20px_rgba(34,197,94,0.6)]";
            } else {
              btnClass = "bg-red-600 border-red-800 text-white border-b-0 translate-y-1 shadow-[0_0_20px_rgba(239,68,68,0.6)]";
            }
          }

          return (
            <button
              key={index}
              disabled={selectedOption !== null}
              onClick={() => onSelectOption(index)}
              className={`relative p-5 rounded-xl border-2 text-left font-bold text-lg transition-all duration-300 ease-out transform hover:scale-[1.02] active:scale-[0.97] ${btnClass} disabled:cursor-not-allowed disabled:hover:scale-100 disabled:opacity-90 group overflow-hidden`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Nền hover ảo */}
              <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <span className="inline-block w-8 h-8 rounded-full bg-slate-900/60 text-center leading-8 mr-3 text-sm text-yellow-500 font-black shadow-inner">
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
