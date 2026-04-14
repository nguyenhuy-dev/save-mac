import React from 'react';

interface MarxProgressProps {
  currentLevel: number;
  totalLevels: number;
}

const MarxProgress: React.FC<MarxProgressProps> = ({ currentLevel, totalLevels }) => {
  // Tính phần trăm chạy từ 0 đến 100% (cấp độ 0 -> totalLevels)
  const progressPercentage = Math.min((currentLevel / totalLevels) * 100, 100);

  return (
    <div className="w-full max-w-2xl mx-auto my-6 px-4">
      <div className="flex justify-between items-center mb-2 text-sm font-bold text-yellow-500 uppercase tracking-widest drop-shadow-md">
        <span>Khủng Hoảng</span>
        <span>Thiên Đường ☭</span>
      </div>
      
      <div className="relative h-4 bg-slate-800 rounded-full border border-red-900/50 shadow-inner overflow-hidden">
        {/* Đường chạy đỏ của Mác */}
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-700 ease-out shadow-[0_0_10px_rgba(220,38,38,0.8)]"
          style={{ width: `${progressPercentage}%` }}
        />
        
        {/* Vệt vạch chia mốc */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-between px-1 opacity-20 pointer-events-none">
          {Array.from({ length: totalLevels + 1 }).map((_, i) => (
            <div key={i} className="w-px h-full bg-yellow-500" />
          ))}
        </div>
      </div>

      {/* Avatar Mác chạy theo dòng */}
      <div className="relative w-full h-12 -mt-10 pointer-events-none">
         <div 
           className="absolute top-0 transition-all duration-700 ease-out -ml-6"
           style={{ left: `${progressPercentage}%` }}
         >
           <img 
              src="/karl_marx.png" 
              alt="Marx Running" 
              className={`w-12 h-12 object-cover rounded-full border-2 border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.8)] bg-slate-800 ${currentLevel > 0 ? 'animate-bounce' : ''}`}
           />
         </div>
      </div>
    </div>
  );
};

export default MarxProgress;
