import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3E2723] text-[#F3E5AB] font-serif border-t-8 border-[#2D1A11] py-12 px-6 lg:px-12 relative z-50 overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-6 relative z-10">

        {/* Cột 1: Thông tin nhóm */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl drop-shadow-sm">🎓</span>
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest text-[#D35400] drop-shadow-md">
              Đội Ngũ Thực Hiện
            </h3>
          </div>
          <ul className="flex flex-col gap-3 text-[14px] leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-[#D35400] mt-1">■</span>
              <span><strong>Nguyễn Quốc Huy:</strong> Core Logic & Quản lý Git</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D35400] mt-1">■</span>
              <span><strong>Trần Võ Quang Duy:</strong> Lập trình UI/UX</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D35400] mt-1">■</span>
              <span><strong>Phan Trần Hoàng Trân:</strong> Xử lý Dữ liệu - Data</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D35400] mt-1">■</span>
              <span><strong>Nguyễn Xuân Lộc:</strong> Xây dựng Component</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D35400] mt-1">■</span>
              <span><strong>Lê Hoàng Tuấn:</strong> QA/QC & Deploy</span>
            </li>
          </ul>
        </div>

        {/* Cột 2: Phụ lục - Tài liệu tham khảo */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl drop-shadow-sm">📚</span>
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest text-[#D35400] drop-shadow-md">
              Phụ Lục - Tài Liệu
            </h3>
          </div>
          <p className="text-[14px] leading-relaxed italic mb-4">
            Nội dung lý luận và các hệ thống câu hỏi trong dự án được tham khảo và xây dựng dựa trên:
          </p>
          <ul className="flex flex-col gap-3 text-[14px] leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-[#D35400] mt-1">■</span>
              <span className="font-bold text-white">Giáo trình Triết học Mác - Lênin (Dành cho bậc đại học hệ không chuyên lý luận chính trị) - Nhà xuất bản Chính trị quốc gia Sự thật.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D35400] mt-1">■</span>
              <span>Các tài liệu tham khảo tương đương về Triết học Mác - Lênin.</span>
            </li>
          </ul>
        </div>

        {/* Cột 3: Công cụ sử dụng */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl drop-shadow-sm">🤖</span>
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest text-[#D35400] drop-shadow-md">
              Công Cụ Hỗ Trợ
            </h3>
          </div>
          <p className="text-[14px] leading-relaxed bg-[#2D1A11]/60 p-4 rounded border-l-4 border-[#D35400] shadow-inner">
            Dự án có sử dụng <strong>trợ lý AI (Gemini, AI Code Editor)</strong> để hỗ trợ thiết kế cấu trúc dữ liệu JSON, tạo code boilerplate và tối ưu hoá giao diện lập trình. Tuy nhiên, toàn bộ nội dung học thuật đều được đối chiếu chặt chẽ chuyên môn và giáo trình.
          </p>
        </div>

      </div>

      <div className="mt-12 pt-6 border-t border-[#D35400]/30 text-center text-xs opacity-70 tracking-widest uppercase relative z-10">
        <p>© 2024 - Học Viện Lý Luận - Hệ thống Học tập Thực tiễn</p>
      </div>
    </footer>
  );
};

export default Footer;
