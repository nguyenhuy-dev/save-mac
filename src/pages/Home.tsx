import React from 'react';
import { useNavigate } from 'react-router-dom';

const theoryItems = [
  {
    id: 'tong-quan',
    stage: 'Phần 1',
    title: 'Sơ lược Triết học Mác - Lênin',
    period: 'Tổng quan',
    icon: '🚩',
    description: 'Tìm hiểu về nguồn gốc, các bộ phận cấu thành, và sức sống mãnh liệt của triết học Mác - Lênin.',
    color: 'from-red-600 to-red-800',
    shadow: 'shadow-red-500/50',
    image: '/images/5-mac-lenin.jpg'
  },
  {
    id: 'vat-chat',
    stage: 'Phần 2',
    title: 'Vật chất và Ý thức',
    period: 'Phạm trù cơ bản',
    icon: '🔮',
    description: 'Vật chất có trước, ý thức có sau. Khám phá mối quan hệ biện chứng giữa vật chất và ý thức.',
    color: 'from-blue-500 to-blue-700',
    shadow: 'shadow-blue-500/50',
    image: '/images/1-co-dai.jpg'
  },
  {
    id: 'nguyen-ly',
    stage: 'Phần 3',
    title: 'Hai Nguyên Lý Cơ Bản',
    period: 'Nguyên lý biện chứng',
    icon: '⚖️',
    description: 'Nguyên lý về mối liên hệ phổ biến và nguyên lý về sự phát triển không ngừng.',
    color: 'from-emerald-500 to-emerald-700',
    shadow: 'shadow-emerald-500/50',
    image: '/images/3-phuc-hung.jpg'
  },
  {
    id: 'quy-luat',
    stage: 'Phần 4',
    title: 'Ba Quy Luật Cơ Bản',
    period: 'Quy luật vận động',
    icon: '⚙️',
    description: 'Lượng đổi chất đổi, Thống nhất và đấu tranh giữa các mặt đối lập, Phủ định của phủ định.',
    color: 'from-amber-500 to-amber-700',
    shadow: 'shadow-amber-500/50',
    image: '/images/4-co-dien.jpg'
  },
  {
    id: 'pham-tru',
    stage: 'Phần 5',
    title: 'Sáu Cặp Phạm Trù',
    period: 'Nhận thức luận',
    icon: '🧠',
    description: 'Cái chung và cái riêng, Nguyên nhân và kết quả... và lý luận nhận thức.',
    color: 'from-purple-500 to-purple-700',
    shadow: 'shadow-purple-500/50',
    image: '/images/2-trung-co.jpg'
  }
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fdfaf5] text-stone-800 font-serif relative overflow-x-hidden selection:bg-red-800 selection:text-white">

      {/* Ambient Light Decor */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-60">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-100 rounded-full blur-[150px] mix-blend-multiply opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-100 rounded-full blur-[150px] mix-blend-multiply opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-100/20 via-[#fdfaf5] to-[#fdfaf5]"></div>
      </div>

      <div className="relative z-10 w-full flex flex-col pb-24">

        {/* Header / Hero Section (Sitting directly above banner) */}
        <header className="text-center mt-12 md:mt-20 px-6 animate-fade-in-up max-w-5xl mx-auto mb-10">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="h-[2px] w-12 md:w-16 bg-red-800/60"></div>
            <span className="mx-4 text-red-900 uppercase tracking-[0.3em] font-bold text-sm md:text-base">Học Viện Lý Luận</span>
            <div className="h-[2px] w-12 md:w-16 bg-red-800/60"></div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-red-950 mb-6 leading-snug font-serif uppercase drop-shadow-sm">
            <span className="block mb-2 text-stone-800">Hành Trình Khám Phá</span>
            <span className="block text-red-900 border-b-2 border-red-900/10 pb-4 inline-block px-8">Triết Học Mác - Lênin</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed font-medium italic">
            "Không có lý luận cách mạng thì không thể có phong trào cách mạng."
          </p>
        </header>

        {/* Academy Portal Section (Two-column layout restricted width) */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row w-full min-h-screen animate-fade-in-up bg-[#fdfaf5] shadow-[0_20px_50px_-10px_rgba(62,39,35,0.4)] border-[6px] border-[#3E2723] rounded-sm overflow-hidden">
            
            {/* Left Sidebar */}
            <div className="w-full lg:w-[320px] xl:w-[350px] bg-[#3E2723] text-[#F3E5AB] p-6 lg:p-8 font-serif shrink-0 border-r-[6px] border-[#2D1A11] relative overflow-hidden shadow-[inset_-10px_0_20px_rgba(0,0,0,0.5)]">
               {/* Pattern overlay */}
               <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')]"></div>
               
               <div className="relative z-10">

                 {/* Chuyên đề */}
                 <div className="border-b-2 border-[#D35400]/40 pb-2 mb-6">
                    <h3 className="text-xl font-bold uppercase tracking-widest text-[#F3E5AB] drop-shadow-md flex items-center gap-2">
                       <span className="text-2xl">⚜️</span> LÝ LUẬN
                    </h3>
                 </div>
                 <ul className="flex flex-col gap-3 text-[13px] uppercase tracking-widest font-bold font-sans">
                    {theoryItems.map((item, idx) => (
                       <li key={idx} onClick={() => navigate(`/theory/${item.id}`)} className="hover:text-white hover:translate-x-1 cursor-pointer transition-all border-b border-[#F3E5AB]/10 pb-3 flex items-center gap-3">
                          <span className="text-[10px] text-[#D35400]">■</span> {item.title}
                       </li>
                    ))}
                 </ul>

                 <div className="border-b-2 border-[#D35400]/40 pb-2 mb-6 mt-10">
                    <h3 className="text-xl font-bold uppercase tracking-widest text-[#F3E5AB] drop-shadow-md flex items-center gap-2">
                       <span className="text-2xl">⚜️</span> THỰC TIỄN
                    </h3>
                 </div>
                 <ul className="flex flex-col gap-3 text-[13px] uppercase tracking-widest font-bold font-sans">
                    <li onClick={() => navigate('/game/on-tap')} className="hover:text-white hover:translate-x-1 cursor-pointer transition-all border-b border-[#F3E5AB]/10 pb-3 flex items-center gap-3">
                       <span className="text-[10px] text-[#D35400]">■</span> BÀI TẬP TRẮC NGHIỆM
                    </li>
                    <li onClick={() => navigate('/socio-model')} className="hover:text-white hover:translate-x-1 cursor-pointer transition-all border-b border-[#F3E5AB]/10 pb-3 flex items-center gap-3">
                       <span className="text-[10px] text-[#D35400]">■</span> MÔ HÌNH KINH TẾ
                    </li>
                    <li onClick={() => navigate('/matching-game')} className="hover:text-white hover:translate-x-1 cursor-pointer transition-all border-b border-[#F3E5AB]/10 pb-3 flex items-center gap-3">
                       <span className="text-[10px] text-[#D35400]">■</span> NỐI GHÉP PHẠM TRÙ
                    </li>
                 </ul>
               </div>
            </div>

            {/* Right Main Content */}
            <div className="flex-1 bg-[#fdfaf5] flex flex-col border-l-4 border-[#3E2723]">
              {/* Banner Image */}
              <div className="w-full h-48 md:h-80 border-b-8 border-[#3E2723] overflow-hidden relative group">
                 <img src="/images/tranh-co-dien.jpg" className="w-full h-full object-cover opacity-90 sepia-[.3] contrast-125 transform group-hover:scale-105 transition-transform duration-1000" onError={(e) => e.currentTarget.src = theoryItems[2].image} alt="Banner Triết Học" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/80 to-transparent"></div>
                 <h2 className="absolute bottom-4 right-6 text-white text-3xl md:text-5xl font-black font-serif uppercase tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] filter sepia-[.2]">
                   Trường phái Triết học
                 </h2>
              </div>

              {/* Decorative Divider */}
              <div className="w-full bg-[#3E2723] text-[#F3E5AB] py-2 flex items-center justify-center gap-6 text-2xl drop-shadow-sm pointer-events-none">
                 <span>🌿</span> <span>~</span> <span>🌿</span> <span>~</span> <span>🌿</span> <span>~</span> <span>🌿</span> <span>~</span> <span>🌿</span>
              </div>

              {/* Horizontal Theory Cards */}
              <div className="p-6 md:p-10 flex flex-col gap-6">
                 {theoryItems.map((item, index) => (
                    <div 
                      key={index} 
                      onClick={() => navigate(`/theory/${item.id}`)}
                      className="group bg-white border border-stone-300 flex flex-col md:flex-row shadow-sm hover:shadow-lg cursor-pointer transition-all duration-300 hover:border-[#D35400]/50"
                    >
                       {/* Image Left */}
                       <div className="w-full md:w-[280px] h-48 md:h-auto shrink-0 relative overflow-hidden border-b md:border-b-0 md:border-r border-stone-300">
                          <img src={item.image} className="w-full h-full object-cover grayscale-[.2] sepia-[.2] group-hover:sepia-0 transform group-hover:scale-105 transition-all duration-700" alt={item.title} />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-stone-900/10 mix-blend-multiply pointer-events-none"></div>
                          <div className={`absolute top-2 left-2 w-8 h-8 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-sm border border-white text-sm`}>
                             {item.icon}
                          </div>
                          <div className="absolute bottom-2 left-2 bg-[#fdfaf5] px-2 py-1 text-[10px] font-black text-red-950 uppercase border border-stone-300">
                             {item.stage}
                          </div>
                       </div>
                       
                       {/* Content Right */}
                       <div className="p-5 md:p-6 flex flex-col justify-between flex-1">
                          <div>
                             <h3 className="font-bold text-red-950 text-xl uppercase leading-snug group-hover:text-[#D35400] transition-colors font-serif mb-2">{item.title}</h3>
                             <p className="text-xs text-stone-500 font-bold uppercase tracking-widest my-2 font-sans border-b border-red-900/10 pb-3">Phần: {item.period} &mdash; Nguồn: Karl Marx</p>
                             <p className="text-sm text-stone-700 font-medium line-clamp-3 leading-relaxed mt-3">
                                {item.description}
                             </p>
                          </div>
                          <div className="mt-6 flex items-center justify-end text-xs font-bold text-red-900 uppercase tracking-widest group-hover:text-[#D35400] transition-colors">
                             Nghiên cứu <span className="ml-2 font-serif text-lg">→</span>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
              {/* Thước Phim Lịch Sử (Video Section moved below Theory) */}
              <section className="animate-fade-in-up w-full relative z-10 px-6 md:px-10 mt-10 mb-16 max-w-6xl mx-auto" style={{ animationDelay: '0.3s' }}>
                 <div className="flex flex-col items-center justify-center mb-10 relative">
                    <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-[#3E2723]/30 to-transparent top-1/2"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#3E2723] uppercase tracking-widest bg-[#fdfaf5] px-8 relative z-10 font-serif border-x-4 border-[#3E2723]">Thước Phim Lịch Sử</h2>
                 </div>
                 
                 <div className="w-full bg-[#3E2723] p-2 md:p-3 shadow-xl rounded-sm">
                    <div className="border-2 border-[#D35400]/40 p-1 md:p-2 bg-[#fdfaf5]/10">
                       <div className="w-full aspect-video bg-black relative shadow-inner">
                         <iframe
                           className="absolute top-0 left-0 w-full h-full"
                           src="https://www.youtube.com/embed/qw_U8Hb_aK4"
                           title="Video Giới thiệu Triết học Mác - Lênin"
                           frameBorder="0"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                           allowFullScreen
                         ></iframe>
                       </div>
                    </div>
                 </div>
                 
                 <div className="text-center px-4 -mt-4 relative z-20">
                    <div className="inline-block bg-[#fdfaf5] border-2 border-[#3E2723] px-6 py-3 shadow-md text-[#3E2723] text-base italic font-bold">
                      Triết học không chỉ là giải thích thế giới, mà vấn đề là cải tạo thế giới.
                    </div>
                 </div>
              </section>

              {/* Trắc nghiệm Section (Quiz CTA) */}
              <section className="animate-fade-in-up px-6 md:px-10 pb-20 max-w-6xl mx-auto" style={{ animationDelay: '0.4s' }}>
                 <div className="relative rounded-xl overflow-hidden bg-red-950 shadow-[0_20px_50px_-10px_rgba(153,27,27,0.4)] p-10 md:p-16 text-center border-4 border-red-900">
                    <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')]"></div>

                    <div className="relative z-10 flex flex-col items-center">
                       <div className="inline-flex items-center justify-center p-5 bg-white/10 rounded-full mb-8 border-2 border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                         <span className="text-4xl drop-shadow-md">⚔️</span>
                       </div>
                       <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 font-serif uppercase tracking-widest drop-shadow-lg">
                         Thực Tiễn & Lý Luận
                       </h2>
                       <p className="text-lg text-amber-100/90 max-w-2xl mx-auto mb-10 leading-relaxed font-medium italic">
                         Sự thống nhất giữa lý luận và thực tiễn qua các bài khảo thí khoa học. Hãy chứng minh bề dày kiến thức của bạn.
                       </p>

                       <div className="flex flex-col md:flex-row gap-4 flex-wrap justify-center w-full max-w-4xl mx-auto">
                         <button
                           onClick={() => navigate('/game/on-tap')}
                           className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-red-950 transition-all duration-300 bg-amber-400 rounded-sm hover:bg-amber-300 hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] hover:-translate-y-1 uppercase tracking-widest text-sm shadow-xl flex-1 max-w-[300px]"
                         >
                           <span className="relative flex items-center gap-3 text-center">
                             BÀI TẬP TRẮC NGHIỆM ⚡
                           </span>
                         </button>

                         <button
                           onClick={() => navigate('/socio-model')}
                           className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-transparent rounded-sm border-2 border-amber-400 hover:bg-amber-400/10 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:-translate-y-1 uppercase tracking-widest text-sm flex-1 max-w-[300px]"
                         >
                           <span className="relative flex items-center gap-3 text-center">
                             MÔ HÌNH KINH TẾ 🧩
                           </span>
                         </button>

                         <button
                           onClick={() => navigate('/matching-game')}
                           className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-blue-900 rounded-sm border-2 border-blue-400 hover:bg-blue-800 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-1 uppercase tracking-widest text-sm flex-1 max-w-[300px]"
                         >
                           <span className="relative flex items-center gap-3 text-center">
                             NỐI GHÉP PHẠM TRÙ 🔗
                           </span>
                         </button>
                       </div>
                    </div>
                 </div>
              </section>
            </div>
          </div>
        </div>
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
