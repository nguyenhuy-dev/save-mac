import React, { useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const theoryData: Record<string, any> = {
  'tong-quan': {
    title: 'Sơ lược Triết học Mác - Lênin',
    period: 'Tổng quan',
    color: 'from-red-600 to-rose-900',
    glowColor: 'bg-red-600',
    icon: '🚩',
    quote: '"Các nhà triết học đã chỉ giải thích thế giới bằng nhiều cách khác nhau, song vấn đề là cải tạo thế giới." - C. Mác',
    image: '/images/5-mac-lenin.jpg',
    videoUrl: 'https://www.youtube.com/embed/KW89urLGxNY', // Thay bằng link video bài giảng của bạn
    sections: [
      {
        label: '1. Khái niệm',
        content: [
          'Hệ thống quan điểm duy vật biện chứng về tự nhiên, xã hội và tư duy.',
          'Là thế giới quan và phương pháp luận khoa học của giai cấp công nhân và nhân dân lao động trong việc nhận thức và cải tạo thế giới.'
        ],
        imageUrl: '/images/tong-quan-1.jpg'
      },
      {
        label: '2. Nguồn gốc ra đời',
        content: [
          'Kinh tế - xã hội: Sự củng cố của phương thức sản xuất tư bản chủ nghĩa và sự xuất hiện của giai cấp vô sản.',
          'Tiền đề khoa học tự nhiên: Thuyết tiến hóa, định luật bảo toàn năng lượng, thuyết tế bào.',
          'Nguồn gốc lý luận: Kế thừa Triết học cổ điển Đức (Hegel, Feuerbach), Kinh tế chính trị Anh, và Chủ nghĩa xã hội không tưởng Pháp.'
        ],
        imageUrl: '/images/tong-quan-2.jpg'
      }
    ]
  },
  'vat-chat': {
    title: 'Vật chất và Ý thức',
    period: 'Phạm trù cơ bản',
    color: 'from-blue-600 to-indigo-800',
    glowColor: 'bg-blue-600',
    icon: '🔮',
    quote: '"Vật chất là một phạm trù triết học dùng để chỉ thực tại khách quan được đem lại cho con người trong cảm giác, được cảm giác của chúng ta chép lại, chụp lại, phản ánh, và tồn tại không lệ thuộc vào cảm giác." - V.I. Lênin',
    image: '/images/1-co-dai.jpg',
    videoUrl: 'https://www.youtube.com/embed/nlmtgzotDBc', // Thay bằng link video bài giảng của bạn
    sections: [
      {
        label: '1. Vật chất',
        content: [
          'Vật chất cái tồn tại khách quan bên ngoài ý thức con người.',
          'Vận động là phương thức tồn tại, là thuộc tính cố hữu của vật chất.',
          'Không gian, thời gian là hình thức tồn tại của vật chất.'
        ],
        imageUrl: '/images/vat-chat-1.jpg'
      },
      {
        label: '2. Ý thức',
        content: [
          'Nguồn gốc tự nhiên: Hình thành từ bộ não người và sự phản ánh của thế giới khách quan.',
          'Nguồn gốc xã hội: Lao động và ngôn ngữ.',
          'Bản chất: Sự phản ánh năng động, sáng tạo thế giới khách quan vào bộ óc con người; mang bản chất xã hội.'
        ],
        imageUrl: '/images/vat-chat-2.jpg'
      },
      {
        label: '3. Mối quan hệ',
        content: [
          'Vật chất quyết định nguồn gốc, nội dung, bản chất và sự biến đổi của ý thức.',
          'Ý thức có tính độc lập tương đối, tác động trở lại thế giới vật chất thông qua hoạt động thực tiễn của con người.'
        ],
        imageUrl: '/images/vat-chat-3.jpg'
      }
    ]
  },
  'nguyen-ly': {
    title: 'Hai Nguyên Lý Cơ Bản',
    period: 'Phép biện chứng',
    color: 'from-emerald-600 to-teal-900',
    glowColor: 'bg-emerald-500',
    icon: '⚖️',
    quote: '"Phép biện chứng là môn khoa học về những quy luật phổ biến của sự vận động và sự phát triển của tự nhiên, của xã hội loài người và của tư duy." - Ph. Ăngghen',
    image: '/images/3-phuc-hung.jpg',
    videoUrl: 'https://www.youtube.com/embed/U22P-1gZ5g0', // Thay bằng link video bài giảng của bạn
    sections: [
      {
        label: '1. Nguyên lý về mối liên hệ phổ biến',
        content: [
          'Mối liên hệ là sự quy định, tác động và chuyển hóa lẫn nhau giữa các sự vật, hiện tượng.',
          'Tính chất: Tính khách quan, phổ biến, đa dạng, phong phú.',
          'Ý nghĩa phương pháp luận: Trong nhận thức và thực tiễn cần có quan điểm toàn diện, tránh phiến diện, siêu hình.'
        ],
        imageUrl: '/images/nguyen-ly-1.jpg'
      },
      {
        label: '2. Nguyên lý về sự phát triển',
        content: [
          'Phát triển là quá trình vận động từ thấp đến cao, từ kém hoàn thiện đến hoàn thiện hơn.',
          'Tính chất: Tính khách quan, phổ biến, đa dạng, kế thừa.',
          'Ý nghĩa phương pháp luận: Cần tuân thủ quan điểm lịch sử - cụ thể và quan điểm phát triển.'
        ],
        imageUrl: '/images/nguyen-ly-2.jpg'
      }
    ]
  },
  'quy-luat': {
    title: 'Ba Quy Luật Cơ Bản',
    period: 'Quy luật vận động',
    color: 'from-amber-600 to-yellow-900',
    glowColor: 'bg-amber-500',
    icon: '⚙️',
    quote: '"Bất cứ ở trong giới tự nhiên hay trong lịch sử, cho đến nay, mọi sự biến đổi về chất đều là kết quả của sự thay đổi về lượng." - Ph. Ăngghen',
    image: '/images/4-co-dien.jpg',
    videoUrl: 'https://www.youtube.com/embed/I7aj5tjiqA4', // Thay bằng link video bài giảng của bạn
    sections: [
      {
        label: '1. Quy luật Lượng - Chất',
        content: [
          'Chỉ ra CÁCH THỨC của sự vận động và phát triển.',
          'Chất là tính quy định khách quan vốn có; Lượng là quy mô, trình độ, nhịp điệu phát triển.',
          'Sự tích lũy dần về lượng vượt qua "Độ" sẽ dẫn đến bước "Nhảy", tạo ra chất mới thay thế chất cũ.'
        ],
        imageUrl: '/images/quy-luat-1.jpg'
      },
      {
        label: '2. Quy luật Mâu thuẫn',
        content: [
          'Chỉ ra NGUỒN GỐC và ĐỘNG LỰC của sự vận động, phát triển.',
          'Sự vật luôn chứa mặt đối lập, chúng vừa thống nhất vừa đấu tranh với nhau.',
          'Sự đấu tranh để giải quyết mâu thuẫn làm sự vật cũ mất đi, sự vật mới ra đời.'
        ],
        imageUrl: '/images/quy-luat-2.jpg'
      },
      {
        label: '3. Phủ định của Phủ định',
        content: [
          'Chỉ ra KHUYNH HƯỚNG của sự phát triển (theo hình xoáy ốc).',
          'Sự ra đời của cái mới bao giờ cũng đi kèm sự kế thừa những yếu tố tích cực của cái cũ.',
          'Quy luật này phản ánh tính chất chu kỳ của sự vận động, tiến lên không ngừng.'
        ],
        imageUrl: '/images/quy-luat-3.jpg'
      }
    ]
  },
  'pham-tru': {
    title: 'Sáu Cặp Phạm Trù',
    period: 'Nhận thức luận',
    color: 'from-purple-600 to-fuchsia-900',
    glowColor: 'bg-purple-600',
    icon: '🧠',
    quote: '"Thực tiễn là tiêu chuẩn duy nhất để kiểm tra chân lý." - V.I. Lênin',
    image: '/images/2-trung-co.jpg',
    videoUrls: [
      'https://www.youtube.com/embed/wcXvDbS5Ulo', // Link 1
      'https://www.youtube.com/embed/ig4Sx3ZGLiU', // Link 2 (thay bằng link thực tế)
      'https://www.youtube.com/embed/MqaCs9i67hY', // Link 3 (thay bằng link thực tế)
      'https://www.youtube.com/embed/o7QYP-3IFUM', // Link 4 (thay bằng link thực tế)
      'https://www.youtube.com/embed/kjaFeVLu8Tg', // Link 5 (thay bằng link thực tế)
      'https://www.youtube.com/embed/-E6p0Qeqtng', // Link 6 (thay bằng link thực tế)
    ],
    sections: [
      {
        label: '1. Sáu cặp phạm trù cơ bản',
        content: [
          '1. Cái chung - Cái riêng.',
          '2. Nguyên nhân - Kết quả.',
          '3. Tất nhiên - Ngẫu nhiên.',
          '4. Nội dung - Hình thức.',
          '5. Bản chất - Hiện tượng.',
          '6. Khả năng - Hiện thực.'
        ],
        imageUrl: '/images/pham-tru-1.jpg'
      },
      {
        label: '2. Nhận thức luận',
        content: [
          'Nhận thức là sự phản ánh thế giới khách quan vào bộ óc con người dựa trên thực tiễn.',
          'Con đường nhận thức biểu hiện qua quá trình: Từ trực quan sinh động đến tư duy trừu tượng, rồi từ tư duy trừu tượng quay về thực tiễn.',
          'Thực tiễn là cơ sở, động lực, mục đích của nhận thức và là tiêu chuẩn duy nhất của chân lý.'
        ],
        imageUrl: '/images/pham-tru-2.jpg'
      }
    ]
  }
};

const TheoryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const data = useMemo(() => theoryData[id || ''], [id]);

  useEffect(() => {
    // Scroll to top on load effectively
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#fdfaf5] text-stone-800 font-serif flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4 text-red-950">Không tìm thấy nội dung</h1>
        <button onClick={() => navigate('/')} className="text-red-800 hover:text-red-600 underline font-bold uppercase tracking-widest text-sm">Quay lại trang chủ</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdfaf5] text-stone-800 font-serif relative overflow-x-hidden selection:bg-red-800 selection:text-white pb-24">

      {/* Banner Hero Image */}
      <div className="relative w-full h-[50vh] lg:h-[60vh] overflow-hidden flex flex-col justify-end rounded-b-[40px] shadow-[0_20px_50px_-10px_rgba(153,27,27,0.1)] animate-fade-in-down mb-16 bg-stone-300">
        {data.image && (
          <img
            src={data.image}
            alt={data.title}
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-40 sepia-[.4] transform hover:scale-[1.03] transition-transform duration-[10s]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#fdfaf5] via-[#fdfaf5]/70 to-transparent z-0"></div>

        {/* Navigation Top Inside Banner */}
        <div className="absolute top-6 left-6 right-6 z-20 flex justify-between items-center">
          <button
            onClick={() => navigate('/')}
            className="group flex items-center gap-3 px-5 py-2.5 rounded-sm bg-white/80 backdrop-blur-md border-2 border-stone-300 hover:border-red-900/50 text-stone-800 hover:text-red-900 transition-all shadow-md uppercase tracking-wider text-xs font-bold"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Trở Về Mục Lục</span>
          </button>

          <div className="hidden md:flex gap-2">
            {Object.keys(theoryData).map((key) => (
              <div
                key={key}
                className={`h-2 rounded-full transition-all duration-500 shadow-sm border border-stone-300 ${key === id ? `w-8 ${data.glowColor}` : 'w-3 bg-stone-400/50 hover:bg-stone-500 cursor-pointer'}`}
                onClick={() => navigate(`/theory/${key}`)}
                title={theoryData[key].title}
              />
            ))}
          </div>
        </div>

        {/* Hero Title Area inside Banner */}
        <div className="relative z-10 container max-w-5xl mx-auto px-6 pb-12 w-full text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 bg-white/80 backdrop-blur-md border-2 border-stone-300 rounded-sm shadow-lg">
              <span className="text-2xl drop-shadow-sm">{data.icon}</span>
              <span className="font-extrabold text-red-950 tracking-widest uppercase text-sm">{data.period}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-red-950 drop-shadow-sm mb-2 uppercase">{data.title}</h1>
          </div>

          <div className="md:max-w-xs text-right">
            <button
              onClick={() => navigate('/game/' + id)}
              className={`w-full md:w-auto px-8 py-4 bg-gradient-to-r ${data.color} hover:opacity-90 rounded-sm font-bold text-lg text-white shadow-[0_10px_30px_rgba(153,27,27,0.3)] transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 uppercase tracking-wide border border-red-900/50`}
            >
              Trắc Nghiệm <span>⚔️</span>
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Quote Block */}
        {data.quote && (
          <div className="relative mb-20 px-8 py-10 bg-white rounded-lg border-2 border-stone-200 shadow-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className={`absolute top-0 left-0 w-2 h-full rounded-l-lg bg-gradient-to-b ${data.color}`}></div>
            <span className="absolute -top-6 -left-2 text-7xl text-stone-300 font-serif opacity-50">"</span>
            <p className="text-2xl md:text-3xl text-red-950 font-medium italic leading-relaxed text-center px-4 md:px-12">
              {data.quote.split('-')[0]}
            </p>
            <p className="text-right mt-6 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-red-950">
              - {data.quote.split('-')[1]}
            </p>
          </div>
        )}

        {/* Video Block */}
        {(data.videoUrl || (data.videoUrls && data.videoUrls.length > 0)) && (
          <div className="mb-20 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
            <div className="flex items-center gap-4 mb-8">
              <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${data.color} shadow-md text-xl font-black text-white`}>
                ▶
              </div>
              <h3 className="text-3xl font-bold text-red-950 tracking-wide font-serif">
                Video Bài Giảng
              </h3>
            </div>

            {data.videoUrl ? (
              <div className={`p-2 lg:p-3 rounded-2xl bg-gradient-to-br ${data.color} shadow-2xl`}>
                <div className="bg-stone-900 rounded-xl overflow-hidden aspect-video relative shadow-inner">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={data.videoUrl}
                    title="Video bài giảng lý thuyết"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                  </iframe>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.videoUrls?.map((url: string, index: number) => (
                  <div key={index} className={`p-1.5 rounded-2xl bg-gradient-to-br ${data.color} shadow-xl transform transition-transform hover:scale-[1.02] duration-300`}>
                    <div className="bg-stone-900 rounded-xl overflow-hidden aspect-video relative shadow-inner">
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src={url}
                        title={`Video bài giảng - Phần ${index + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                      </iframe>
                    </div>
                    <div className="text-center mt-3 mb-1">
                      <span className="text-white font-bold text-sm tracking-widest uppercase drop-shadow-md"> {index + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Detailed Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {data.sections.map((sec: any, idx: number) => (
            <div
              key={idx}
              className={`bg-white rounded-lg p-8 lg:p-10 border-2 border-stone-200 hover:border-red-900/40 transition-all duration-300 shadow-lg group ${idx === data.sections.length - 1 && data.sections.length % 2 !== 0 ? 'md:col-span-2' : ''}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${data.color} shadow-md text-xl font-black text-white`}>
                  {idx + 1}
                </div>
                <h3 className="text-2xl font-bold text-red-950 tracking-wide font-serif">
                  {sec.label}
                </h3>
              </div>
              <div className="w-16 h-1 bg-red-900/20 rounded-full mb-6 group-hover:bg-red-800 transition-colors"></div>
              <ul className="text-[1.1rem] text-stone-700 leading-relaxed font-medium list-disc ml-5 space-y-3 marker:text-red-800">
                {sec.content.map((point: string, i: number) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {sec.imageUrl && (
                <div className="mt-8 w-full relative rounded-lg overflow-hidden group/image border-2 border-stone-200 shadow-md">
                  {/* Fallback pattern if image is broken/loading */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-400 bg-stone-50 transition-colors -z-10 shadow-inner border-2 border-dashed border-stone-300 min-h-[250px]">
                    <span className="text-4xl filter sepia opacity-60 mb-2">🖼️</span>
                    <span className="uppercase tracking-widest text-xs font-bold opacity-70">
                      {sec.imageUrl.replace('/images/', '')}
                    </span>
                  </div>
                  <img
                    src={sec.imageUrl}
                    alt={sec.label}
                    className="w-full h-auto min-h-[100px] object-contain bg-white grayscale-[0.1] sepia-[0.1] group-hover/image:scale-[1.02] group-hover/image:sepia-0 group-hover/image:grayscale-0 transition-all duration-700 relative z-10"
                    onError={(e) => {
                      // Hide broken image icon, fallback to div beneath
                      e.currentTarget.style.opacity = '0';
                    }}
                    onLoad={(e) => {
                      e.currentTarget.style.opacity = '1';
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Banner Area */}
        <div className="relative overflow-hidden rounded-xl p-12 md:p-20 text-center border-4 border-red-900 bg-red-950 shadow-[0_20px_50px_-10px_rgba(153,27,27,0.4)] animate-fade-in-up" style={{ animationDelay: '0.5s' }}>

          {/* Pattern overlay for classic look */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')]"></div>

          <div className={`absolute -top-24 -right-24 w-64 h-64 ${data.glowColor} rounded-full blur-[100px] opacity-20 z-0 pointer-events-none`}></div>
          <div className={`absolute -bottom-24 -left-24 w-64 h-64 ${data.glowColor} rounded-full blur-[100px] opacity-20 z-0 pointer-events-none`}></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-wider font-serif drop-shadow-md">
              Bạn đã thấm nhuần kiến thức?
            </h2>
            <p className="text-xl text-amber-100/80 mb-10 leading-relaxed font-medium italic">
              Không có thực tiễn, lý luận chỉ là lý thuyết suông. Hãy tham gia bài thi trắc nghiệm để chứng minh năng lực hiểu biết của bạn.
            </p>
            <button
              onClick={() => navigate('/game/' + id)}
              className={`group relative inline-flex items-center justify-center px-12 py-5 font-bold text-red-950 transition-all duration-300 bg-amber-400 rounded-sm hover:bg-amber-300 hover:shadow-[0_0_50px_rgba(251,191,36,0.3)] hover:-translate-y-1 overflow-hidden shadow-xl border border-amber-300`}
            >
              <span className="relative flex items-center gap-3 text-xl tracking-wide uppercase">
                TIẾN VÀO TRUY TÌM CHÂN LÝ
                <svg className="w-7 h-7 transform group-hover:translate-x-3 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default TheoryDetail;
