export type Difficulty = "EASY" | "MEDIUM" | "HARD";

export interface MatchingPair {
  id: string;
  term: string;
  definition: string;
  level: Difficulty;
}

export const MATCHING_PAIRS: MatchingPair[] = [
  // EASY
  { id: "pair1", term: "Vật chất", definition: "Là thực tại khách quan, đem lại cho con người trong cảm giác và không phụ thuộc vào cảm giác.", level: "EASY" },
  { id: "pair2", term: "Ý thức", definition: "Là sự phản ánh năng động, sáng tạo thế giới khách quan vào bộ óc con người.", level: "EASY" },
  { id: "pair3", term: "Thực tiễn", definition: "Là hoạt động vật chất có mục đích, mang tính lịch sử - xã hội của con người nhằm cải tạo tự nhiên và xã hội.", level: "EASY" },
  { id: "pair4", term: "Mâu thuẫn", definition: "Sự liên hệ, tác động và chuyển hóa lẫn nhau giữa các mặt đối lập trong một sự vật.", level: "EASY" },
  
  // MEDIUM
  { id: "pair5", term: "Quy luật Mâu thuẫn", definition: "Chỉ ra nguồn gốc và động lực của sự vận động, phát triển.", level: "MEDIUM" },
  { id: "pair6", term: "Quy luật Lượng - Chất", definition: "Chỉ ra cách thức hay phương thức của vận động và phát triển (tích lỹ dần sẽ biến đổi trạng thái).", level: "MEDIUM" },
  { id: "pair7", term: "Phủ định của phủ định", definition: "Chỉ ra khuynh hướng của sự phát triển, diễn ra theo đường xoáy ốc tiến lên.", level: "MEDIUM" },
  { id: "pair8", term: "Chân lý", definition: "Tri thức phù hợp với hiện thực khách quan và được thực tiễn kiểm nghiệm.", level: "MEDIUM" },
  { id: "pair9", term: "Cơ sở hạ tầng", definition: "Toàn bộ những quan hệ sản xuất hợp thành cơ cấu kinh tế của một xã hội.", level: "MEDIUM" },

  // HARD
  { id: "pair10", term: "Giá trị thặng dư (m)", definition: "Phần giá trị do công nhân làm thuê sáng tạo ra vượt quá giá trị sức lao động của họ và bị chiếm không.", level: "HARD" },
  { id: "pair11", term: "Hàng hóa sức lao động", definition: "Là loại hàng hóa đặc biệt, khi sử dụng nó có khả năng tạo ra giá trị mới lớn hơn giá trị của bản thân nó.", level: "HARD" },
  { id: "pair12", term: "Bản chất", definition: "Tổng hợp tất cả những mặt, những mối liên hệ tất nhiên tương đối ổn định bên trong sự vật.", level: "HARD" },
  { id: "pair13", term: "Hiện tượng", definition: "Sự biểu hiện ra bên ngoài của những mối liên hệ tất nhiên, tương đối ổn định trong điều kiện nhất định.", level: "HARD" },
  { id: "pair14", term: "Hình thái kinh tế - xã hội", definition: "Phạm trù chỉ một xã hội ở từng giai đoạn lịch sử nhất định với một kiểu quan hệ sản xuất đặc trưng.", level: "HARD" }
];

export const getMatchingItems = (level: Difficulty): MatchingPair[] => {
  let selectedItems: MatchingPair[] = [];
  
  if (level === "EASY") {
    selectedItems = MATCHING_PAIRS.filter(item => item.level === "EASY");
  } else if (level === "MEDIUM") {
    selectedItems = MATCHING_PAIRS.filter(item => item.level === "EASY" || item.level === "MEDIUM");
  } else {
    selectedItems = [...MATCHING_PAIRS];
  }
  
  return selectedItems;
};
