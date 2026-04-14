import React from 'react';

const stageContent = [
  {
    title: '🏛️ Giai đoạn 1: Triết học Cổ đại (Thế kỷ VI TCN - Thế kỷ V)',
    sections: [
      {
        label: 'Bối cảnh',
        content: 'Con người bắt đầu bớt sợ hãi các vị thần và dùng lý trí để quan sát thiên nhiên.'
      },
      {
        label: 'Nội dung chính',
        content: 'Đi tìm "bản nguyên" (nguyên liệu đầu tiên) của vũ trụ.'
      },
      {
        label: 'Các đại diện tiêu biểu',
        content: 'Thales: Khẳng định "Nước là bản nguyên của mọi vật".\n\nHeraclitus: Cho rằng thế giới là một ngọn lửa vĩnh hằng, "không ai tắm hai lần trên một dòng sông" (mọi thứ luôn vận động).\n\nDemoccritus: Đưa ra giả thuyết về "Nguyên tử" - những hạt nhỏ nhất không thể phân chia.'
      },
      {
        label: 'Thông điệp',
        content: 'Đây là nền móng của tư duy khoa học và khách quan.'
      }
    ]
  },
  {
    title: '⛪ Giai đoạn 2: Triết học Trung cổ (Thế kỷ V - Thế kỷ XV)',
    sections: [
      {
        label: 'Bối cảnh',
        content: 'Quyền lực tuyệt đối của Giáo hội tại Châu Âu.'
      },
      {
        label: 'Nội dung chính',
        content: 'Triết học bị biến thành công cụ để giải thích kinh thánh và chứng minh sự tồn tại của Thiên chúa.'
      },
      {
        label: 'Tranh luận tiêu biểu',
        content: 'Cuộc đối đầu giữa Duy thực (khái niệm có trước sự vật) và Duy danh (sự vật có trước, tên gọi chỉ là quy ước).'
      },
      {
        label: 'Thông điệp',
        content: 'Giai đoạn này tuy bị kìm kẹp nhưng đã rèn luyện cho nhân loại khả năng tư duy logic và tranh biện cực kỳ sắc sảo.'
      }
    ]
  },
  {
    title: '🔭 Giai đoạn 3: Triết học Phục hưng & Cận đại (Thế kỷ XV - XVIII)',
    sections: [
      {
        label: 'Bối cảnh',
        content: 'Các cuộc phát kiến địa lý và sự phát triển của khoa học thực nghiệm.'
      },
      {
        label: 'Nội dung chính',
        content: 'Chuyển trọng tâm từ thần linh sang con người. Tranh luận về nguồn gốc của tri thức.'
      },
      {
        label: 'Hai trường phái đối lập',
        content: 'Chủ nghĩa Duy lý (Descartes): Tin rằng mọi tri thức đều đến từ suy luận của bộ não ("Tôi tư duy, nên tôi tồn tại").\n\nChủ nghĩa Duy nghiệm (Bacon, Locke): Tin rằng mọi kiến thức đều phải đến từ trải nghiệm và thí nghiệm thực tế.'
      },
      {
        label: 'Thông điệp',
        content: 'Đây là cuộc cách mạng giải phóng tư duy con người khỏi giáo điều.'
      }
    ]
  },
  {
    title: ' Giai đoạn 4: Triết học Cổ điển Đức (Cuối thế kỷ XVIII - Giữa thế kỷ XIX)',
    sections: [
      {
        label: 'Bối cảnh',
        content: 'Sự phát triển rực rỡ của tư tưởng nước Đức trước thềm Cách mạng công nghiệp.'
      },
      {
        label: 'Nội dung chính',
        content: 'Xây dựng hệ thống triết học đồ sộ về ý thức và sự vận động.'
      },
      {
        label: 'Hai nhân vật then chốt ảnh hưởng đến Mác',
        content: 'Hegel: Cha đẻ của Phép biện chứng. Ông cho rằng mọi thứ phát triển thông qua mâu thuẫn, nhưng ông lại là người Duy tâm (tin vào "Ý niệm tuyệt đối").\n\nFeuerbach: Một nhà Duy vật mạnh mẽ, người khẳng định chính vật chất/con người tạo ra thần thánh chứ không phải ngược lại.'
      },
      {
        label: 'Thông điệp',
        content: 'Là "bệ phóng" lý luận trực tiếp để Mác thực hiện bước nhảy vọt sau này.'
      }
    ]
  }
];

const PhilosophyStages: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const stages = ['Giai đoạn 1', 'Giai đoạn 2', 'Giai đoạn 3', 'Giai đoạn 4'];
  const [currentStage, setCurrentStage] = React.useState(0);

  const handleNextStage = () => {
    if (currentStage < stages.length - 1) {
      setCurrentStage(currentStage + 1);
    } else {
      onNext();
    }
  };

  const handlePreviousStage = () => {
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1);
    }
  };

  const progressPercentage = ((currentStage + 1) / stages.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col p-8 overflow-hidden">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Các giai đoạn cấu thành và phát triển của Triết học
        </h1>
        <p className="text-slate-400 text-lg">Khám phá hành trình phát triển của tư tưởng triết học</p>
      </div>

      {/* Timeline Progress Section */}
      <div className="mb-12">
        {/* Stage Indicators */}
        <div className="flex justify-between mb-6">
          {stages.map((stage, index) => (
            <div
              key={index}
              className={`flex flex-col items-center transition-all duration-300 ${
                index === currentStage ? 'scale-110' : 'scale-100'
              }`}
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm mb-2 transition-all duration-300 ${
                  index <= currentStage
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/50'
                    : 'bg-slate-600 text-slate-300'
                }`}
              >
                {index + 1}
              </div>
              <p
                className={`text-sm font-medium transition-colors duration-300 ${
                  index <= currentStage ? 'text-white' : 'text-slate-400'
                }`}
              >
                {stage}
              </p>
            </div>
          ))}
        </div>

        {/* Continuous Progress Bar */}
        <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-full transition-all duration-500 ease-out shadow-lg shadow-red-500/50"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col mb-12 overflow-y-auto">
        <div className="flex-1 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-12 backdrop-blur border border-slate-600 shadow-2xl">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-8">{stageContent[currentStage].title}</h2>
            <div className="space-y-6">
              {stageContent[currentStage].sections.map((section, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-slate-600/50 hover:border-red-500/30 transition-colors">
                  <h3 className="text-red-400 font-semibold text-lg mb-3">{section.label}</h3>
                  <p className="text-slate-300 text-base leading-relaxed whitespace-pre-line">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center gap-4">
        <button
          onClick={handlePreviousStage}
          disabled={currentStage === 0}
          className={`px-8 py-3 font-bold rounded-lg transition-all duration-300 transform ${
            currentStage === 0
              ? 'bg-slate-600 text-slate-400 cursor-not-allowed opacity-50'
              : 'bg-slate-600 hover:bg-slate-500 text-white hover:shadow-lg hover:-translate-y-1 active:scale-95'
          }`}
        >
          ← Quay lại
        </button>

        <div className="text-white font-semibold text-lg">
          {currentStage + 1} / {stages.length}
        </div>

        <button
          onClick={handleNextStage}
          className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:shadow-lg hover:shadow-red-500/50 hover:-translate-y-1 active:scale-95"
        >
          {currentStage < stages.length - 1 ? 'Tiếp theo →' : 'Hoàn thành →'}
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

export default PhilosophyStages;
