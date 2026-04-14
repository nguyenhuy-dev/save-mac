import React, { useState } from 'react';

const flashcards = [
  {
    icon: '🔴',
    title: 'Tiền đề và Sự hình thành',
    content: 'Bước ngoặt: Mác đã làm một việc kinh điển là "đặt Phép biện chứng của Hegel đứng trên hai chân của nó". Ông lấy bộ khung vận động của Hegel nhưng thay nội dung "Ý niệm" bằng "Vật chất".\n\nCộng sự vĩ đại: Friedrich Engels. Không chỉ hỗ trợ tài chính, Engels còn là người cùng Mác viết nên những tác phẩm bất hủ. Họ là biểu tượng của một tình bạn lý tưởng.\n\nĐối tượng hướng tới: Giai cấp vô sản (công nhân) - những người trực tiếp tạo ra của cải nhưng lại bị áp bức.',
    gradient: 'from-red-600 to-red-800',
  },
  {
    icon: '🧠',
    title: 'Các Học thuyết Cốt lõi',
    content: 'Chủ nghĩa Duy vật Lịch sử:\n\nCốt lõi: Tồn tại xã hội quyết định ý thức xã hội.\n\nCơ chế: Kinh tế (Lực lượng sản xuất) thay đổi sẽ kéo theo chính trị, pháp luật, tôn giáo (Kiến trúc thượng tầng) thay đổi theo.\n\nHọc thuyết Giá trị thặng dư:\n\nGiải mã: Nhà tư bản trả lương cho công nhân ít hơn giá trị thực tế họ làm ra. Phần chênh lệch đó chính là "Giá trị thặng dư" bị chiếm đoạt. Đây là chìa khóa để hiểu về sự giàu nghèo trong xã hội tư bản.',
    gradient: 'from-yellow-600 to-yellow-800',
  },
  {
    icon: '🌍',
    title: 'Di sản và Tầm ảnh hưởng',
    content: 'Tác phẩm "Tuyên ngôn của Đảng Cộng sản": Kết thúc bằng câu khẩu hiệu nổi tiếng: "Vô sản tất cả các nước, đoàn kết lại!".\n\nBộ "Tư bản": Một công trình khoa học đồ sộ mà Mác đã dành gần như cả đời để viết, phân tích sâu tận cùng các quy luật của nền kinh tế thế giới.\n\nTính thực tiễn: Triết học của Mác không phải để đọc cho vui, mà là để làm kim chỉ nam cho các cuộc cách mạng giải phóng dân tộc và con người trên toàn cầu.',
    gradient: 'from-orange-600 to-orange-800',
  },
  {
    icon: '🧥',
    title: 'Con người đời thường',
    content: 'Tính cách: Quyết đoán, sắc sảo và cực kỳ ham học. Ông có thể đọc được nhiều thứ tiếng và nghiên cứu toán học để giải trí.\n\nGia đình: Dù sống trong cảnh nghèo khó và lưu vong, ông có một tình yêu sâu sắc với người vợ Jenny và các con.\n\nSở thích: Thích tranh luận tại các câu lạc bộ công nhân và dành hàng giờ trong thư viện Bảo tàng Anh để nghiên cứu.',
    gradient: 'from-purple-600 to-purple-800',
  },
];

const MacLeninIntro: React.FC<{ onNext: () => void; onBack: () => void }> = ({ onNext, onBack }) => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedCard(index);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col p-8 overflow-hidden">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Giới thiệu về Marx-Leninism
        </h1>
        <p className="text-slate-400 text-lg">Khám phá bốn khía cạnh cốt lõi của tư tưởng</p>
      </div>

      {/* Flashcards Grid */}
      <div className="flex-1 grid grid-cols-2 gap-6 mb-12">
        {flashcards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className={`bg-gradient-to-br ${card.gradient} rounded-2xl p-8 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg border border-white/10 group overflow-hidden relative`}
          >
            {/* Background decoration */}
            <div className="absolute -right-10 -bottom-10 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">
              {card.icon}
            </div>

            <div className="relative z-10">
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-100 transition-colors">
                {card.title}
              </h2>
              <p className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                Nhấn để xem chi tiết →
              </p>
            </div>

            {/* Border animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCard !== null && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-2xl max-w-2xl w-full border border-slate-600 shadow-2xl transform transition-all duration-300 scale-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-5xl">{flashcards[selectedCard].icon}</div>
              <div>
                <h2 className="text-3xl font-bold text-white">{flashcards[selectedCard].title}</h2>
                <div className={`h-1 w-20 bg-gradient-to-r ${flashcards[selectedCard].gradient} mt-2 rounded`}></div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-lg mb-6 border border-slate-600/50">
              <p className="text-slate-300 text-lg leading-relaxed whitespace-pre-line">
                {flashcards[selectedCard].content}
              </p>
            </div>

            <button
              onClick={handleCloseModal}
              className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:shadow-lg hover:shadow-red-500/50 active:scale-95"
            >
              Đóng
            </button>
          </div>
        </div>
      )}

      {/* Navigation Button */}
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-8 py-3 bg-slate-600 hover:bg-slate-500 text-white font-bold rounded-lg transition-all duration-300 transform hover:shadow-lg hover:-translate-y-1 active:scale-95"
        >
          ← Quay lại
        </button>
        <button
          onClick={onNext}
          className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:shadow-lg hover:shadow-red-500/50 hover:-translate-y-1 active:scale-95"
        >
          Bắt đầu trò chơi →
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default MacLeninIntro;
