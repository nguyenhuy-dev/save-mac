import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getQuestionsByCategory, type Question } from '../data/questions';
import { useAudio } from '../hooks/useAudio';
import GameIntro from '../components/GameIntro';
import GamePlay from '../components/GamePlay';
import GameResult from '../components/GameResult';

type GameState = 'START' | 'COUNTDOWN' | 'PLAYING' | 'RESULT';

const TOTAL_LEVELS = 10;

const Game = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [gameState, setGameState] = useState<GameState>('START');
  const [gameQuestions, setGameQuestions] = useState<Question[]>([]);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [questionTimeLeft, setQuestionTimeLeft] = useState(15);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);

  const { playSound, playBgm, stopBgm } = useAudio();

  const currentQuestion = gameQuestions[currentLevel];

  const [countdown, setCountdown] = useState<number | null>(null);

  // Countdown logic
  useEffect(() => {
    if (gameState === 'COUNTDOWN' && countdown !== null) {
      if (countdown > 0) {
        const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        return () => clearTimeout(timer);
      } else {
        setGameState('PLAYING');
      }
    }
  }, [gameState, countdown]);

  // Per-Question Timer logic
  useEffect(() => {
    let timer: number;
    if (gameState === 'PLAYING' && selectedOption === null) {
      timer = window.setInterval(() => {
        setQuestionTimeLeft((prev) => {
           if (prev <= 1) {
              clearInterval(timer);
              return 0;
           }
           return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameState, selectedOption]);

  // Handle Question Timeout
  useEffect(() => {
    if (questionTimeLeft === 0 && gameState === 'PLAYING' && selectedOption === null) {
      playSound('wrong');
      setWrongCount(prev => prev + 1);
      
      setFeedback({
        isCorrect: false,
        text: `⏰ Hết giờ! Chậm chạp làm mất đi cơ hội của Đảng. <br/><br/>` + (currentQuestion?.funFact || "")
      });
      setSelectedOption(-1);
    }
  }, [questionTimeLeft, gameState, selectedOption, playSound, currentQuestion]);

  const [isWin, setIsWin] = useState(true);

  const startGame = useCallback((category: string) => {
    setGameQuestions(getQuestionsByCategory(category, TOTAL_LEVELS));
    setGameState('COUNTDOWN');
    setCountdown(3);
    setCurrentLevel(0);
    setWrongCount(0);
    setScore(0);
    setQuestionTimeLeft(15);
    setFeedback(null);
    setSelectedOption(null);
    setIsWin(true);
    playBgm();
  }, [playBgm]);

  const handleOptionSelect = (index: number) => {
    if (selectedOption !== null || !currentQuestion) return;

    setSelectedOption(index);
    const isCorrect = index === currentQuestion.correctAnswer;

    if (isCorrect) {
      playSound('correct');
      const timeBonus = questionTimeLeft * 20;
      const pointsEarned = 100 + timeBonus;
      setScore(prev => prev + pointsEarned);
      
      setFeedback({ 
        isCorrect: true, 
        text: `<div class="text-xl font-black uppercase font-sans mb-3 text-red-800 drop-shadow-sm border-b-2 border-red-200 pb-2">+${pointsEarned} ĐIỂM</div>` + currentQuestion.funFact 
      });
    } else {
      playSound('wrong');
      setWrongCount(prev => prev + 1);

      setFeedback({
        isCorrect: false,
        text: currentQuestion.funFact
      });
    }
  };

  const handleNextLevel = () => {
    playSound('door');
    if (currentLevel < TOTAL_LEVELS - 1) {
      setCurrentLevel(prev => prev + 1);
      setSelectedOption(null);
      setFeedback(null);
      setQuestionTimeLeft(15);
    } else {
      setGameState('RESULT');
      setIsWin(true);
      playSound('win');
      stopBgm();
    }
  };

  const renderContent = () => {
    switch (gameState) {
      case 'START':
        return <GameIntro categoryId={categoryId} onStart={startGame} />;
      case 'COUNTDOWN':
        return (
          <div className="flex flex-col items-center justify-center min-h-[400px] animate-fade-in text-center">
            <div className="text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600 drop-shadow-[0_0_40px_rgba(202,138,4,0.8)] animate-pulse">
              {countdown}
            </div>
            <div className="text-3xl mt-2 text-slate-200 font-bold tracking-widest uppercase">
              Chuẩn bị...
            </div>
          </div>
        );
      case 'PLAYING':
        return <GamePlay
          key={`play-${currentLevel}`}
          currentQuestion={currentQuestion}
          currentLevel={currentLevel}
          totalLevels={TOTAL_LEVELS}
          questionTimeLeft={questionTimeLeft}
          score={score}
          wrongCount={wrongCount}
          selectedOption={selectedOption}
          feedback={feedback}
          onSelectOption={handleOptionSelect}
          onNext={handleNextLevel}
        />;
      case 'RESULT':
        return <GameResult
          score={score}
          wrongCount={wrongCount}
          totalLevels={TOTAL_LEVELS}
          onRestart={() => setGameState('START')}
          isWin={isWin}
        />;
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfaf5] text-stone-800 flex flex-col items-center justify-center p-4 font-serif relative overflow-x-hidden selection:bg-red-800 selection:text-white">

      {/* Ambient Light Decor */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-60">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-100 rounded-full blur-[150px] mix-blend-multiply opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-100 rounded-full blur-[150px] mix-blend-multiply opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-100/20 via-[#fdfaf5] to-[#fdfaf5]"></div>
      </div>

      {/* Main Content Box */}
      <div className="z-10 w-full max-w-4xl bg-white p-4 md:p-12 rounded-xl shadow-[0_20px_60px_-15px_rgba(153,27,27,0.15)] border-2 border-stone-200">

        {renderContent()}

      </div>

      {/* Footer Meme */}
      <div className="z-10 mt-8 text-center text-red-900/60 font-serif italic text-sm font-bold tracking-widest uppercase flex items-center gap-3">
        <span className="text-xl">☭</span> "Vô sản toàn thế giới, liên hiệp lại!" <span className="text-xl">☭</span>
      </div>
    </div>
  );
};

export default Game;