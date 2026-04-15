import { useState, useEffect, useCallback } from 'react';
import { getRandomQuestions, type Question } from '../data/questions';
import { useAudio } from '../hooks/useAudio';
import GameIntro from '../components/GameIntro';
import GamePlay from '../components/GamePlay';
import GameResult from '../components/GameResult';
import PhilosophyStages from '../components/PhilosophyStages';
import MacLeninIntro from '../components/MacLeninIntro';

type GameState = 'PHILOSOPHY_STAGES' | 'MAC_LENIN_INTRO' | 'START' | 'PLAYING' | 'RESULT';

const TOTAL_LEVELS = 5;

const Game = () => {
  const [gameState, setGameState] = useState<GameState>('PHILOSOPHY_STAGES');
  const [gameQuestions, setGameQuestions] = useState<Question[]>([]);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);

  const { playSound, playBgm, stopBgm } = useAudio();

  const currentQuestion = gameQuestions[currentLevel];

  // Timer logic
  useEffect(() => {
    let timer: number;
    if (gameState === 'PLAYING' && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && gameState === 'PLAYING') {
      setGameState('RESULT');
      playSound('wrong');
      stopBgm();
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft, playSound, stopBgm]);

  const [isWin, setIsWin] = useState(timeLeft > 0);

  const handleNextFromPhilosophy = useCallback(() => {
    setGameState('MAC_LENIN_INTRO');
  }, []);

  const handleNextFromMacLenin = useCallback(() => {
    setGameState('START');
  }, []);

  const handleBackFromMacLenin = useCallback(() => {
    setGameState('PHILOSOPHY_STAGES');
  }, []);

  const startGame = useCallback(() => {
    // Lấy 5 câu hỏi ngẫu nhiên mới mỗi khi bắt đầu
    setGameQuestions(getRandomQuestions(TOTAL_LEVELS));
    setGameState('PLAYING');
    setCurrentLevel(0);
    setWrongCount(0);
    setTimeLeft(300);
    setFeedback(null);
    setSelectedOption(null);
    playBgm();
  }, [playBgm]);

  const handleOptionSelect = (index: number) => {
    if (selectedOption !== null || !currentQuestion) return;

    setSelectedOption(index);
    const isCorrect = index === currentQuestion.correctAnswer;

    if (isCorrect) {
      playSound('correct');
      setFeedback({ isCorrect: true, text: currentQuestion.funFact });
      setTimeout(() => {
        playSound('door'); 
        if (currentLevel < TOTAL_LEVELS - 1) {
          setCurrentLevel(prev => prev + 1);
          setSelectedOption(null);
          setFeedback(null);
        } else {
          setGameState('RESULT');
          playSound('win');
          stopBgm();
        }
      }, 5000);
    } else {
      playSound('wrong');
      setWrongCount(prev => prev + 1);
      setFeedback({ isCorrect: false, text: currentQuestion.explanationHint || "Sai lầm thảm hại! Quan điểm đó đã đi ngược lại với Mác." });
      setTimeout(() => {
        setSelectedOption(null);
        setFeedback(null);
      }, 5000);

      if (wrongCount === 4) {
        setIsWin(false);
        setGameState('RESULT');
        playSound('wrong');
        stopBgm();
      }
    }
  };

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec.toString().padStart(2, '0')}`;
  };

  const renderContent = () => {
    switch (gameState) {
      case 'PHILOSOPHY_STAGES':
        return <PhilosophyStages onNext={handleNextFromPhilosophy} />;
      case 'MAC_LENIN_INTRO':
        return <MacLeninIntro onNext={handleNextFromMacLenin} onBack={handleBackFromMacLenin} />;
      case 'START':
        return <GameIntro onStart={startGame} />;
      case 'PLAYING':
        return <GamePlay 
          currentQuestion={currentQuestion}
          currentLevel={currentLevel}
          totalLevels={TOTAL_LEVELS}
          timeLeft={timeLeft}
          wrongCount={wrongCount}
          selectedOption={selectedOption}
          feedback={feedback}
          onSelectOption={handleOptionSelect}
          formatTime={formatTime}
        />;
      case 'RESULT':
        return <GameResult 
          timeLeft={timeLeft}
          wrongCount={wrongCount}
          totalLevels={TOTAL_LEVELS}
          formatTime={formatTime}
          onRestart={startGame}
          isWin={isWin}
        />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-4 font-sans relative overflow-x-hidden selection:bg-red-500 selection:text-white">
      
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-20">
         <div className="absolute top-20 left-20 w-96 h-96 bg-red-700 rounded-full blur-[120px] mix-blend-screen"></div>
         <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-yellow-600 rounded-full blur-[150px] mix-blend-screen"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/40 via-slate-900 to-slate-900 max-w-7xl"></div>
      </div>

      {/* Main Content Box */}
      <div className="z-10 w-full max-w-4xl bg-slate-800/90 backdrop-blur-xl p-8 rounded-[40px] shadow-[0_0_50px_rgba(220,38,38,0.3)] border-2 border-red-900/50">
        
        {renderContent()}
        
      </div>
      
      {/* Footer Meme */}
      <div className="z-10 mt-8 text-center text-slate-500 text-sm italic font-medium opacity-50">
        "Vô sản toàn thế giới, liên hiệp lại!"
      </div>
    </div>
  );
};

export default Game;