import React from 'react';
import { useNavigate } from 'react-router-dom';

interface GameIntroProps {
  categoryId?: string;
  onStart: (categoryId: string) => void;
}

const introData: Record<string, { title: string, desc: string, icon: string, color: string }> = {
  'tong-quan': {
    title: 'Sơ lược Triết học Mác - Lênin',
    desc: 'Tìm hiểu về nguồn gốc lịch sử, các bộ phận cấu thành, và sức sống vĩ đại của triết học Mác - Lênin. Trắc nghiệm bao quát các tiền đề khoa học bảo vệ luận điểm duy vật.',
    icon: '🚩',
    color: 'from-red-900 to-red-700'
  },
  'vat-chat': {
    title: 'Vật chất và Ý thức',
    desc: 'Giải mã vấn đề cơ bản của triết học. Củng cố quan điểm duy vật: Vật chất có trước, ý thức có sau. Khám phá mối quan hệ biện chứng giữa vật chất và không thời gian.',
    icon: '🔮',
    color: 'from-blue-900 to-blue-700'
  },
  'nguyen-ly': {
    title: 'Hai Nguyên Lý Cơ Bản',
    desc: 'Mọi thứ luôn liên kết và không ngừng phát triển. Vận dụng quan điểm toàn diện và quan điểm lịch sử - cụ thể để trả lời hóc búa về hai nguyên lý biện chứng.',
    icon: '⚖️',
    color: 'from-emerald-900 to-emerald-700'
  },
  'quy-luat': {
    title: 'Ba Quy Luật Cơ Bản',
    desc: 'Lượng đổi chất đổi, mâu thuẫn đấu tranh, và phủ định của phủ định... Bạn sẽ phải vận dụng não bộ để qua ải các quy luật vận động khắc nghiệt nhất của thực tại.',
    icon: '⚙️',
    color: 'from-amber-900 to-amber-700'
  },
  'pham-tru': {
    title: 'Sáu Cặp Phạm Trù & Nhận Thức',
    desc: 'Hành trình cuối cùng: Cái chung và cái riêng, tất nhiên và ngẫu nhiên... Áp dụng vào thực tiễn để kiểm nghiệm chân lý cuối cùng.',
    icon: '🧠',
    color: 'from-purple-900 to-purple-700'
  }
};

const GameIntro: React.FC<GameIntroProps> = ({ categoryId = 'tong-quan', onStart }) => {
  const navigate = useNavigate();
  const data = introData[categoryId] || introData['tong-quan'];

  return (
    <div className="flex flex-col items-center animate-fade-in text-center space-y-8 w-full pb-8">
      <div className="relative">
        <div className="w-40 h-40 md:w-56 md:h-56 bg-white rounded-full overflow-hidden border-8 border-stone-200 shadow-xl transition-transform hover:scale-105 hover:rotate-3 z-10 relative flex items-center justify-center">
           <img src="/karl_marx.png" alt="Karl Marx" className="w-full h-full object-cover mix-blend-multiply opacity-80 sepia-[.3]" onError={(e) => e.currentTarget.style.display = 'none'} />
           <span className="text-6xl absolute z-[-1] filter drop-shadow-sm">{data.icon}</span>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[150px] text-red-900/5 z-0 pointer-events-none font-serif">
           ☭
        </div>
      </div>

      <div className="bg-stone-50 p-8 rounded-lg border-2 border-stone-200 w-full max-w-2xl shadow-lg relative mt-4">
        <div className="absolute -top-4 -left-4 text-4xl filter sepia opacity-80">💭</div>
        <p className="text-xl md:text-2xl text-red-950 font-medium italic mb-4 font-serif">
          "Trắc nghiệm không chỉ là thuộc lòng, mà là vận dụng phép biện chứng để sinh tồn."
        </p>

        <div className={`mt-6 p-6 rounded-lg border-l-4 border-red-900 bg-white shadow-md text-left flex flex-col md:flex-row items-center gap-6`}>
           <div className="text-6xl drop-shadow-md">{data.icon}</div>
           <div>
              <h2 className="text-2xl font-black text-red-950 uppercase tracking-wider mb-2 font-serif">{data.title}</h2>
              <p className="text-lg text-stone-700 font-medium leading-relaxed">{data.desc}</p>
           </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 w-full items-center mt-4">
        
        <button 
          onClick={() => onStart(categoryId)}
          className="group relative inline-flex items-center justify-center px-14 py-6 font-bold text-red-950 transition-all duration-300 bg-amber-400 border border-amber-300 rounded-sm hover:shadow-[0_0_40px_rgba(251,191,36,0.4)] hover:-translate-y-1 overflow-hidden scale-100 hover:scale-105 active:scale-95 text-2xl tracking-widest uppercase font-serif"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-[150%] group-hover:h-80 opacity-30"></span>
          <span className="relative flex items-center gap-3">
            BẮT ĐẦU TRẮC NGHIỆM
            <svg className="w-8 h-8 transform group-hover:translate-x-3 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
        </button>

        <button 
          onClick={() => navigate('/theory/' + categoryId)}
          className="group flex items-center gap-2 text-stone-500 hover:text-red-900 transition-colors font-bold mt-6 border-b-2 border-stone-300 hover:border-red-900 pb-1"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Học lại lý thuyết phần này
        </button>
      </div>
    </div>
  );
};

export default GameIntro;
