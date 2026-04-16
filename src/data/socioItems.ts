export type ZoneType = "LLSX" | "QHSX" | "KTTT";

export interface DragItem {
  id: string;
  content: string;
  correctZone: ZoneType;
  explanation: string;
}

export type Difficulty = "EASY" | "MEDIUM" | "HARD";

export const ALL_ITEMS: DragItem[] = [
  // LLSX
  { id: "tlsx_tool", content: "Công cụ lao động", correctZone: "LLSX", explanation: "Yếu tố cơ bản của lực lượng sản xuất" },
  { id: "tlsx_human", content: "Người lao động", correctZone: "LLSX", explanation: "Trọng tâm của lực lượng sản xuất, mang sức lao động" },
  { id: "tlsx_object", content: "Đối tượng lao động", correctZone: "LLSX", explanation: "Vật tự nhiên hay nhân tạo mà lao động tác động vào" },
  { id: "tlsx_tech", content: "Khoa học công nghệ", correctZone: "LLSX", explanation: "Ngày càng trở thành lực lượng sản xuất trực tiếp" },
  { id: "tlsx_skill", content: "Kinh nghiệm sản xuất", correctZone: "LLSX", explanation: "Thuộc về kỹ năng người lao động (phần mềm LLSX)" },
  { id: "tlsx_facility", content: "Cơ sở hạ tầng", correctZone: "LLSX", explanation: "Nhà xưởng, phương tiện vận tải phục vụ sản xuất" },

  // QHSX
  { id: "qhsx_owner", content: "Quan hệ sở hữu", correctZone: "QHSX", explanation: "Quan hệ đối với tư liệu sản xuất là cốt lõi của QHSX" },
  { id: "qhsx_dist", content: "Quan hệ phân phối", correctZone: "QHSX", explanation: "Cách thức phân chia sản phẩm lao động tạo ra" },
  { id: "qhsx_org", content: "Quan hệ tổ chức quản lý", correctZone: "QHSX", explanation: "Sự phân công lao động và vận hành hệ thống SX" },
  { id: "qhsx_class", content: "Vị trí giai cấp", correctZone: "QHSX", explanation: "Vai trò tập đoàn người trong lưu thông, sản xuất" },
  { id: "qhsx_wage", content: "Hình thức trả lương", correctZone: "QHSX", explanation: "Phản ánh trực tiếp quan hệ phân phối trong QHSX" },
  { id: "qhsx_exchange", content: "Trao đổi & Tương hỗ", correctZone: "QHSX", explanation: "Mối liên hệ kinh tế tự nhiên giữa những người SX" },

  // KTTT
  { id: "kttt_law", content: "Pháp luật", correctZone: "KTTT", explanation: "Hệ thống quy định bảo vệ trật tự và giai cấp thống trị" },
  { id: "kttt_state", content: "Nhà nước", correctZone: "KTTT", explanation: "Công cụ bạo lực và hành chính cao nhất của KTTT" },
  { id: "kttt_religion", content: "Tôn giáo", correctZone: "KTTT", explanation: "Hệ tư tưởng tâm linh tác động mạnh đến nhận thức" },
  { id: "kttt_art", content: "Nghệ thuật & Văn hóa", correctZone: "KTTT", explanation: "Phản ánh đời sống tinh thần của hình thái KT-XH" },
  { id: "kttt_party", content: "Đảng phái chính trị", correctZone: "KTTT", explanation: "Đại diện cho lợi ích giai cấp cụ thể" },
  { id: "kttt_philosophy", content: "Triết học (Lý luận)", correctZone: "KTTT", explanation: "Định hướng tư duy lý luận của thời đại" }
];

export const getGameItems = (difficulty: Difficulty): DragItem[] => {
  let count = 6;
  if (difficulty === "MEDIUM") count = 12;
  if (difficulty === "HARD") count = 18;

  const itemsPerZone = count / 3;
  const llsx = ALL_ITEMS.filter(i => i.correctZone === "LLSX").slice(0, itemsPerZone);
  const qhsx = ALL_ITEMS.filter(i => i.correctZone === "QHSX").slice(0, itemsPerZone);
  const kttt = ALL_ITEMS.filter(i => i.correctZone === "KTTT").slice(0, itemsPerZone);

  const selected = [...llsx, ...qhsx, ...kttt];
  return selected.sort(() => Math.random() - 0.5);
};
