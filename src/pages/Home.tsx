import React from 'react';
import { useNavigate } from 'react-router-dom';

const theoryItems = [
  {
    id: 'co-dai',
    stage: 'Giai đoạn 1',
    title: 'Triết học Cổ đại',
    period: 'Thế kỷ VI TCN - Thế kỷ V',
    icon: '🏛️',
    description: 'Khởi nguồn của tư duy logic. Đi tìm bản nguyên vũ trụ và dùng lý trí quan sát thiên nhiên thay vì dựa vào thần linh.',
    color: 'from-blue-500 to-blue-700',
    shadow: 'shadow-blue-500/50',
    image: '/images/1-co-dai.jpg'
  },
  {
    id: 'trung-co',
    stage: 'Giai đoạn 2',
    title: 'Triết học Trung cổ',
    period: 'Thế kỷ V - Thế kỷ XV',
    icon: '⛪',
    description: 'Giai đoạn bị kìm kẹp bởi quyền lực tuyệt đối của Giáo hội, nhưng rèn luyện khả năng tranh biện và tư duy logic cực kỳ sắc sảo.',
    color: 'from-purple-500 to-purple-700',
    shadow: 'shadow-purple-500/50',
    image: '/images/2-trung-co.jpg'
  },
  {
    id: 'phuc-hung',
    stage: 'Giai đoạn 3',
    title: 'Phục hưng & Cận đại',
    period: 'Thế kỷ XV - XVIII',
    icon: '🔭',
    description: 'Chuyển trọng tâm từ thần linh sang con người. Cuộc cách mạng giải phóng tư duy con người khỏi giáo điều tôn giáo.',
    color: 'from-emerald-500 to-emerald-700',
    shadow: 'shadow-emerald-500/50',
    image: '/images/3-phuc-hung.jpg'
  },
  {
    id: 'co-dien-duc',
    stage: 'Giai đoạn 4',
    title: 'Triết học Cổ điển Đức',
    period: 'Cuối TK XVIII - Giữa TK XIX',
    icon: '📜',
    description: 'Hệ thống triết học đồ sộ của Hegel và Feuerbach. Đây là bệ phóng lý luận trực tiếp để Mác thực hiện bước nhảy vọt lịch sử.',
    color: 'from-amber-500 to-amber-700',
    shadow: 'shadow-amber-500/50',
    image: '/images/4-co-dien.jpg'
  },
  {
    id: 'mac-lenin',
    stage: 'Sự tiếp nối vĩ đại',
    title: 'Triết học Mác - Lênin',
    period: 'Từ giữa TK XIX trở đi',
    icon: '🚩',
    description: 'Sự kế thừa tinh hoa nhân loại tạo nên vũ khí tư tưởng sắc bén cho giai cấp công nhân. "Không chỉ giải thích thế giới, mà còn cải tạo thế giới."',
    color: 'from-red-600 to-red-800',
    shadow: 'shadow-red-500/50',
    image: '/images/5-mac-lenin.jpg'
  }
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans relative overflow-x-hidden selection:bg-red-500 selection:text-white">
      
      {/* Background Ambient Decor */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-30">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-700 rounded-full blur-[150px] mix-blend-screen opacity-50"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-700 rounded-full blur-[150px] mix-blend-screen opacity-40"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16 flex flex-col gap-20">
        
        {/* Header / Hero Section */}
        <header className="text-center mt-10 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mb-6 drop-shadow-lg leading-tight">
            Hành Trình Khám Phá <br className="hidden md:block"/> Triết Học Mác - Lênin
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Nắm vững lý luận, thấu hiểu lịch sử và thử thách trí tuệ của bạn qua các chặng đường phát triển rực rỡ của tư tưởng nhân loại.
          </p>
        </header>

        {/* Lý thuyết Section (Theory) */}
        <section className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <div className="h-10 w-2 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Chặng Đường Lý Thuyết</h2>
            </div>
            <p className="hidden md:block text-slate-400 italic">Nhấn vào từng giai đoạn để xem chi tiết 👉</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {theoryItems.map((item, index) => (
              <div 
                key={index}
                onClick={() => navigate(`/theory/${item.id}`)}
                className="group relative bg-slate-800 border border-slate-700/50 rounded-3xl hover:-translate-y-3 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col h-full cursor-pointer transition-all duration-500"
              >
                {/* Glow layer underneath */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} blur opacity-0 group-hover:opacity-30 transition duration-500 z-0`}></div>

                {/* Cover Image */}
                <div className="h-48 w-full relative overflow-hidden z-10 border-b border-slate-700/50">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                  
                  {/* Floating Icon and Badge over Image */}
                  <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow-lg border border-white/20 transform group-hover:scale-105 group-hover:rotate-6 transition-transform duration-300 ${item.shadow}`}>
                      {item.icon}
                    </div>
                    <span className="inline-block px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-xs font-bold text-slate-200 border border-slate-600/50">
                      {item.stage}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="relative z-10 p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                    {item.title}
                  </h3>
                  <p className="text-sm text-blue-400/90 mb-4 font-semibold tracking-wide uppercase">{item.period}</p>
                  
                  <div className="flex-grow flex flex-col justify-between">
                    <p className="text-slate-300 leading-relaxed mb-6 group-hover:text-slate-200 transition-colors duration-300">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center text-sm font-bold text-blue-400 opacity-80 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-300">
                      Khám phá chi tiết <span className="ml-2 text-lg">→</span>
                    </div>
                  </div>
                </div>

                {/* Accent Highlight on Hover Top border */}
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${item.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-20`}></div>
              </div>
            ))}
          </div>
        </section>

        {/* Trắc nghiệm Section (Quiz CTA) */}
        <section className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 shadow-2xl p-10 md:p-16 text-center">
            {/* CTA Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-600 blur-[100px] rounded-[100%]"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="inline-flex items-center justify-center p-4 bg-red-500/10 rounded-full mb-6 border border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                <span className="text-4xl">🎯</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Kiểm Tra Kiến Thức
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                Đã đến lúc áp dụng những gì bạn học được. Tham gia trò chơi trắc nghiệm tương tác để củng cố lý luận và chứng minh bề dày kiến thức của bạn.
              </p>
              
              <button 
                onClick={() => navigate('/game')}
                className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-gradient-to-r from-red-600 to-red-800 rounded-full hover:from-red-500 hover:to-red-700 hover:shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:-translate-y-1 overflow-hidden"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-64 group-hover:h-56 opacity-10"></span>
                <span className="relative flex items-center gap-3 text-lg">
                  Bắt Đầu Trò Chơi Trắc Nghiệm
                  <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
              </button>
            </div>
          </div>
        </section>

      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Home;
