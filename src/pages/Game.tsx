import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { getRandomQuestions, type Question } from '../data/questions';
import { useAudio } from '../hooks/useAudio';
import GameIntro from '../components/GameIntro';
import GamePlay from '../components/GamePlay';
import GameResult from '../components/GameResult';

type GameState = 'START' | 'COUNTDOWN' | 'PLAYING' | 'RESULT';

const TOTAL_LEVELS = 10;

const Game = () => {
  const [gameState, setGameState] = useState<GameState>('START');
  const [gameQuestions, setGameQuestions] = useState<Question[]>([]);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);

  const { playSound, playBgm, stopBgm } = useAudio();

  const currentQuestion = gameQuestions[currentLevel];

  const [gameMode, setGameMode] = useState<'stage_1' | 'stage_2' | 'stage_3' | 'all'>('stage_1');
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

  // Timer logic
  useEffect(() => {
    let timer: number;
    // Tạm dừng đếm ngược khi đang xem chú thích (selectedOption !== null)
    if (gameState === 'PLAYING' && timeLeft > 0 && selectedOption === null) {
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

  const startGame = useCallback((mode: 'stage_1' | 'stage_2' | 'stage_3' | 'all') => {
    setGameMode(mode);
    setGameQuestions(getRandomQuestions(mode, TOTAL_LEVELS));
    setGameState('COUNTDOWN');
    setCountdown(3);
    setCurrentLevel(0);
    setWrongCount(0);
    setTimeLeft(mode === 'all' ? 420 : 360); // 10 câu hỏi, cho 6 phút các màn phụ, 7 phút nếu chơi Khảo Thí tổng hợp
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
    } else {
      playSound('wrong');
      setWrongCount(prev => prev + 1);

      const isExtreme = gameMode === 'all';
      if (isExtreme) setTimeLeft(prev => Math.max(0, prev - 15));

      setFeedback({
        isCorrect: false,
        text: (isExtreme ? "Bị trừ 15s! " : "") + currentQuestion.funFact
      });
    }
  };

  const handleNextLevel = () => {
    const maxWrong = gameMode === 'all' ? 4 : 5;
    // Kiểm tra xem có the game over vì bấm sai quá nhiều chưa
    if (selectedOption !== currentQuestion?.correctAnswer && typeof selectedOption === 'number') {
      if (wrongCount >= maxWrong) {
        setIsWin(false);
        setGameState('RESULT');
        playSound('wrong');
        stopBgm();
        return;
      }
    }

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
  };

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec.toString().padStart(2, '0')}`;
  };

  const renderContent = () => {
    switch (gameState) {
      case 'START':
        return <GameIntro onStart={startGame} />;
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
          timeLeft={timeLeft}
          wrongCount={wrongCount}
          selectedOption={selectedOption}
          feedback={feedback}
          onSelectOption={handleOptionSelect}
          formatTime={formatTime}
          onNext={handleNextLevel}
        />;
      case 'RESULT':
        return <GameResult
          timeLeft={timeLeft}
          wrongCount={wrongCount}
          totalLevels={TOTAL_LEVELS}
          formatTime={formatTime}
          onRestart={() => setGameState('START')}
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

      {/* Floating Minigame Button */}
      <div className="fixed top-6 right-6 z-50">
        <Link
          to="/socio-model"
          className="group flex items-center gap-2 px-5 py-3 bg-slate-800/80 backdrop-blur-md border border-yellow-500/50 hover:border-yellow-400 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.2)] hover:shadow-[0_0_25px_rgba(234,179,8,0.4)] transition-all transform hover:-translate-y-1 active:scale-95"
        >
          <span className="text-xl animate-bounce">🧩</span>
          <span className="font-bold text-yellow-500 tracking-wider hidden md:block group-hover:text-yellow-400">
            Minigame Kinh Tế
          </span>
        </Link>
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