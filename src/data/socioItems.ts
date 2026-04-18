export type ZoneType = "LLSX" | "QHSX" | "KTTT";
export type Difficulty = "EASY" | "MEDIUM" | "HARD";

export interface DragItem {
  id: string;
  content: string;
  correctZone: ZoneType;
  explanation: string;
  level: Difficulty;
}

export const ALL_ITEMS: DragItem[] = [
  // ==========================================
  // LEVEL: EASY (Cơ bản, cốt lõi nhất)
  // ==========================================
  {
    id: "ez_llsx_1", content: "Người lao động", correctZone: "LLSX", level: "EASY",
    explanation: "Nhân tố hàng đầu, giữ vai trò quyết định nhất trong lực lượng sản xuất nhờ vào thể lực và trí lực."
  },
  {
    id: "ez_llsx_2", content: "Công cụ lao động", correctZone: "LLSX", level: "EASY",
    explanation: "Yếu tố động nhất, cách mạng nhất của lực lượng sản xuất, là thước đo trình độ chinh phục tự nhiên."
  },
  {
    id: "ez_qhsx_1", content: "Quan hệ sở hữu về tư liệu sản xuất", correctZone: "QHSX", level: "EASY",
    explanation: "Quan hệ xuất phát điểm, giữ vai trò quyết định toàn bộ cấu trúc của quan hệ sản xuất."
  },
  {
    id: "ez_qhsx_2", content: "Quan hệ phân phối sản phẩm", correctZone: "QHSX", level: "EASY",
    explanation: "Là kết quả của quá trình sản xuất, chi phối trực tiếp đến lợi ích và động lực của người lao động."
  },
  {
    id: "ez_kttt_1", content: "Nhà nước", correctZone: "KTTT", level: "EASY",
    explanation: "Thiết chế quyền lực chính trị mạnh mẽ nhất, tiêu biểu nhất cho bộ máy của giai cấp thống trị."
  },
  {
    id: "ez_kttt_2", content: "Pháp luật", correctZone: "KTTT", level: "EASY",
    explanation: "Hệ thống quy phạm do Nhà nước ban hành, là công cụ bạo lực để bảo vệ trật tự kinh tế - xã hội."
  },

  // ==========================================
  // LEVEL: MEDIUM (Mở rộng, chi tiết cấu thành)
  // ==========================================
  {
    id: "md_llsx_1", content: "Đối tượng lao động", correctZone: "LLSX", level: "MEDIUM",
    explanation: "Bộ phận của giới tự nhiên được con người đưa vào quá trình sản xuất (có sẵn hoặc nhân tạo)."
  },
  {
    id: "md_llsx_2", content: "Khoa học lý thuyết", correctZone: "LLSX", level: "MEDIUM",
    explanation: "Đang ngày càng thâm nhập sâu vào sản xuất, trở thành một lực lượng sản xuất trực tiếp."
  },
  {
    id: "md_qhsx_1", content: "Quan hệ tổ chức, quản lý", correctZone: "QHSX", level: "MEDIUM",
    explanation: "Cách thức phân công lao động xã hội, có thể thúc đẩy hoặc kìm hãm quá trình sản xuất."
  },
  {
    id: "md_qhsx_2", content: "Sở hữu tư nhân", correctZone: "QHSX", level: "MEDIUM",
    explanation: "Hình thái sở hữu là mầm mống sinh ra sự phân hóa giai cấp và bóc lột sức lao động."
  },
  {
    id: "md_kttt_1", content: "Hệ tư tưởng chính trị", correctZone: "KTTT", level: "MEDIUM",
    explanation: "Hình thái ý thức xã hội phản ánh trực tiếp và tập trung nhất cơ sở hạ tầng kinh tế."
  },
  {
    id: "md_kttt_2", content: "Đảng phái chính trị", correctZone: "KTTT", level: "MEDIUM",
    explanation: "Tổ chức thiết chế đại diện cao nhất cho lợi ích và ý chí của một giai cấp cụ thể trong xã hội."
  },

  // ==========================================
  // LEVEL: HARD (Vận dụng vào công nghiệp & công nghệ hiện đại)
  // ==========================================
  {
    id: "hd_llsx_1", content: "Hệ thống Robot tự động hóa", correctZone: "LLSX", level: "HARD",
    explanation: "Dạng công cụ lao động hiện đại bậc nhất, nơi tri thức của con người được 'khách thể hóa' vào máy móc."
  },
  {
    id: "hd_llsx_2", content: "Trình độ Code & Kỹ năng phần mềm", correctZone: "LLSX", level: "HARD",
    explanation: "Hàm lượng chất xám chuyên môn cao của người lao động trong nền sản xuất công nghiệp kỹ thuật số."
  },
  {
    id: "hd_qhsx_1", content: "Sở hữu dữ liệu lớn (Big Data) & Bản quyền", correctZone: "QHSX", level: "HARD",
    explanation: "Hình thức chiếm hữu tư liệu sản xuất phi vật thể cực kỳ quan trọng trong nền kinh tế tư bản số."
  },
  {
    id: "hd_qhsx_2", content: "Chuỗi cung ứng toàn cầu", correctZone: "QHSX", level: "HARD",
    explanation: "Biểu hiện quy mô lớn của quan hệ tổ chức, phân công lao động mang tính quốc tế hóa cao độ."
  },
  {
    id: "hd_kttt_1", content: "Luật an ninh không gian mạng", correctZone: "KTTT", level: "HARD",
    explanation: "Thiết chế pháp lý mới của Nhà nước nhằm bảo vệ trật tự an ninh và cơ sở hạ tầng thời đại Internet."
  },
  {
    id: "hd_kttt_2", content: "Đạo đức trong Trí tuệ nhân tạo (AI Ethics)", correctZone: "KTTT", level: "HARD",
    explanation: "Hệ tư tưởng và chuẩn mực hành vi mới sinh ra để phản ánh và điều chỉnh sự phát triển của công nghệ."
  }
];

export const getGameItems = (difficulty: Difficulty): DragItem[] => {
  let selectedItems: DragItem[] = [];

  // Logic cộng dồn kiến thức theo độ khó
  // Dễ: 6 câu Easy
  // Trung bình: 6 câu Easy + 6 câu Medium = 12 câu
  // Khó: 6 câu Easy + 6 câu Medium + 6 câu Hard = 18 câu

  if (difficulty === "EASY") {
    selectedItems = ALL_ITEMS.filter(item => item.level === "EASY");
  } else if (difficulty === "MEDIUM") {
    selectedItems = ALL_ITEMS.filter(item => item.level === "EASY" || item.level === "MEDIUM");
  } else if (difficulty === "HARD") {
    selectedItems = ALL_ITEMS; // Lấy toàn bộ 18 câu
  }

  // Thuật toán Fisher-Yates để xáo trộn mảng ngẫu nhiên (chuyên nghiệp hơn Math.random() - 0.5)
  for (let i = selectedItems.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [selectedItems[i], selectedItems[j]] = [selectedItems[j], selectedItems[i]];
  }

  return selectedItems;
};