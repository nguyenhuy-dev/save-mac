import React, { useState } from 'react';

const timelineEvents = [
  {
    year: '1818',
    icon: '👶',
    title: 'Sự ra đời của một huyền thoại',
    event: 'Sinh ngày 5 tháng 5 tại thành phố Trier, Vương quốc Phổ (Đức).',
    details: 'Sinh ra trong một gia đình trung lưu có truyền thống trí thức. Ít ai ngờ rằng đứa trẻ này sau này sẽ là người "đòi lại công bằng" cho toàn bộ giai cấp lao động thế giới.',
    color: 'from-red-600 to-red-800',
    imagePath: '/images/marx-1818.jpg',

  },
  {
    year: '1835-1841',
    icon: '🎓',
    title: 'Những năm tháng sinh viên "nổi loạn"',
    event: 'Học luật và triết học tại Đại học Bonn và Berlin.',
    details: 'Marx tham gia nhóm "Hegel trẻ", bắt đầu dùng triết học để phê phán tôn giáo và chính trị đương thời. Ông nhận bằng Tiến sĩ Triết học với một luận văn về triết học cổ đại.',
    color: 'from-blue-600 to-blue-800',
    imagePath: '/images/marx-1835.jpg',
  
  },
  {
    year: '1843',
    icon: '💕',
    title: 'Bước ngoặt tình yêu và sự nghiệp',
    event: 'Kết hôn với Jenny von Westphalen và chuyển sang Paris.',
    details: 'Jenny là một tiểu thư quý tộc nhưng đã từ bỏ tất cả để đi theo Marx suốt cuộc đời lưu vong. Tại Paris, Marx gặp Friedrich Engels — bắt đầu một tình bạn vĩ đại nhất lịch sử nhân loại.',
    color: 'from-pink-600 to-pink-800',
    imagePath: '/images/marx-1843.jpg',
    
  },
  {
    year: '1848',
    icon: '',
    title: 'Tuyên ngôn làm rung chuyển thế giới',
    event: 'Xuất bản cuốn "Tuyên ngôn của Đảng Cộng sản".',
    details: 'Giữa làn sóng cách mạng bùng nổ khắp châu Âu, Marx và Engels đã công bố văn kiện này, tuyên bố: "Lịch sử tất cả các xã hội tồn tại từ trước đến nay chỉ là lịch sử đấu tranh giai cấp".',
    color: 'from-yellow-600 to-yellow-800',
    imagePath: '../images/marx-1848.jpg',
  
  },
  {
    year: '1849-1867',
    icon: '📚',
    title: 'Những ngày lưu vong và bộ "Tư bản"',
    event: 'Định cư tại London và xuất bản tập I bộ "Tư bản" (1867).',
    details: 'Đây là giai đoạn khó khăn nhất. Marx sống trong cảnh nghèo túng, thường xuyên phải vào tiệm cầm đồ, nhưng ông vẫn miệt mài ngồi trong thư viện Bảo tàng Anh mỗi ngày để nghiên cứu về kinh tế chính trị.',
    color: 'from-green-600 to-green-800',
    imagePath: '/images/marx-1849.jpg',
   
  },
  {
    year: '1883',
    icon: '✨',
    title: 'Di sản vĩnh cửu',
    event: 'Qua đời ngày 14 tháng 3 tại London.',
    details: 'Marx ra đi trên chiếc ghế bành tại bàn làm việc. Engels đã đọc điếu văn tại mộ ông: "Tên tuổi và sự nghiệp của ông sẽ còn sống mãi qua các thế kỷ".',
    color: 'from-purple-600 to-purple-800',
    imagePath: '/images/marx-1883.jpg',

  }
];

const MacLeninIntro: React.FC<{ onNext: () => void; onBack: () => void }> = ({ onNext, onBack }) => {
  const [currentEvent, setCurrentEvent] = useState(0);

  const handleNext = () => {
    if (currentEvent < timelineEvents.length - 1) {
      setCurrentEvent(currentEvent + 1);
    }
  };

  const handlePrev = () => {
    if (currentEvent > 0) {
      setCurrentEvent(currentEvent - 1);
    }
  };

  const event = timelineEvents[currentEvent];
  const progressPercentage = ((currentEvent + 1) / timelineEvents.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Khái quát cuộc đời của Karl Marx
        </h1>
        <p className="text-slate-400 text-lg">The Revolutionary Timeline</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-slate-300 font-semibold">Tiến trình: {currentEvent + 1} / {timelineEvents.length}</span>
          <span className="text-red-400 font-bold text-xl">{event.year}</span>
        </div>
        <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-red-500 to-red-700 transition-all duration-500 shadow-lg shadow-red-500/50"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col mb-8">
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-10 border border-slate-600 shadow-2xl h-full flex flex-col">
          {/* Timeline Event Header with Image or Emoji */}
          <div className="flex items-start gap-6 mb-8 animate-fade-in">
            <div className="flex-shrink-0 flex items-center justify-center">
              {event.imagePath && (
                <img
                  src={event.imagePath}
                  alt={event.title}
                  className="w-32 h-40 object-cover rounded-lg border-2 border-white/20 shadow-lg"
                  onError={(e) => {
                    // Fallback to emoji if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              )}
            </div>
            <div className="flex-1">
              <div className={`inline-block px-4 py-2 bg-gradient-to-r ${event.color} rounded-full mb-3`}>
                <span className="text-white font-bold text-lg">{event.year}</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">{event.title}</h2>
              <div className={`h-1 w-24 bg-gradient-to-r ${event.color} rounded`}></div>
            </div>
          </div>

          {/* Event Content */}
          <div className="flex-1 space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-600/50">
              <h3 className="text-red-400 font-semibold text-lg mb-2">Sự kiện</h3>
              <p className="text-slate-200 text-lg">{event.event}</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-600/50">
              <h3 className="text-red-400 font-semibold text-lg mb-2">Chi tiết</h3>
              <p className="text-slate-300 text-base leading-relaxed">{event.details}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Dots Navigation */}
      <div className="flex justify-center gap-3 mb-8">
        {timelineEvents.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentEvent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index <= currentEvent
                ? 'bg-red-500 shadow-lg shadow-red-500/50 scale-125'
                : 'bg-slate-600 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            disabled={currentEvent === 0}
            className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
              currentEvent === 0
                ? 'bg-slate-600 text-slate-400 cursor-not-allowed opacity-50'
                : 'bg-slate-600 hover:bg-slate-500 text-white hover:shadow-lg'
            }`}
          >
            ← Quay lại
          </button>
          <button
            onClick={handleNext}
            disabled={currentEvent === timelineEvents.length - 1}
            className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
              currentEvent === timelineEvents.length - 1
                ? 'bg-slate-600 text-slate-400 cursor-not-allowed opacity-50'
                : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white hover:shadow-lg hover:shadow-red-500/50'
            }`}
          >
            Tiếp theo →
          </button>
        </div>

        <button
          onClick={onNext}
          className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:shadow-lg hover:shadow-red-500/50 hover:-translate-y-1 active:scale-95"
        >
          Bắt đầu trò chơi →
        </button>
      </div>

      {/* Back Button */}
      <div className="mt-4 flex justify-start">
        <button
          onClick={onBack}
          className="px-8 py-3 bg-slate-600 hover:bg-slate-500 text-white font-bold rounded-lg transition-all duration-300 transform hover:shadow-lg hover:-translate-y-1 active:scale-95"
        >
          ← Quay lại phần triết học
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default MacLeninIntro;
