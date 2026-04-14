export interface Question {
  id: number;
  doorName: string;
  question: string;
  options: string[];
  correctAnswer: number;
  funFact: string;
}

const RAW_QUESTIONS: Question[] = [
  {
    id: 1,
    doorName: "Cửa Gỗ Mục Nát",
    question: "Theo Các Mác, động lực chủ yếu của sự phát triển xã hội có giai cấp là gì?",
    options: ["Tình yêu thương lan tỏa", "Sức mạnh siêu nhiên", "Đấu tranh giai cấp", "Sự tiến bộ của kỹ thuật AI"],
    correctAnswer: 2,
    funFact: "Chính xác! Lịch sử tất cả các xã hội cho đến nay là lịch sử đấu tranh giai cấp."
  },
  {
    id: 2,
    doorName: "Cửa Sắt Kiên Cố",
    question: "Khái niệm nào sau đây quyết định ý thức theo chủ nghĩa duy vật biện chứng?",
    options: ["Vật chất", "Tinh thần", "Lực lượng vô hình", "Giấc mơ trưa"],
    correctAnswer: 0,
    funFact: "Chuẩn! Vật chất có trước, ý thức có sau. Không có thực sao vực được đạo!"
  },
  {
    id: 3,
    doorName: "Cửa Laser Bí Ẩn",
    question: "Sự vật luôn luôn...?",
    options: ["Thích thì nằm yên", "Vận động và phát triển không ngừng", "Đi lùi về quá khứ", "Chỉ lặp lại y hệt nhau"],
    correctAnswer: 1,
    funFact: "Không có gì là bất biến cả! Bạn đã nắm chắc nguyên lý này rồi."
  },
  {
    id: 4,
    doorName: "Cửa Không Gian Tứ Chiều",
    question: "Sự thay đổi về 'Lượng' đến một độ nhất định sẽ dẫn đến điều gì?",
    options: ["Sự bất ổn tâm lý", "Sự thay đổi về 'Chất'", "Mất trắng", "Bữa cơm thêm hạt gạo"],
    correctAnswer: 1,
    funFact: "Tích tiểu thành đại. Lượng đủ thì chất sẽ nhảy vọt! Đừng vội nản."
  },
  {
    id: 5,
    doorName: "Hang Động Của Sự Thật",
    question: "Nguồn gốc và động lực của sự phát triển là gì?",
    options: ["Mâu thuẫn", "Ý muốn cá nhân", "Bản tính vũ trụ", "Số trời đã định"],
    correctAnswer: 0,
    funFact: "Quá đỉnh! Mâu thuẫn chính là hạt nhân của phép biện chứng."
  },
  {
    id: 6,
    doorName: "Tường Gạch Lạnh Lẽo",
    question: "Mác bảo: 'Thực tiễn là tiêu chuẩn của...' điều gì?",
    options: ["Công việc", "Chân lý", "Lương tháng", "Tình bạn"],
    correctAnswer: 1,
    funFact: "Làm mà không có thực tiễn như nói mớ. Chỉ có thực tiễn mới kiểm chứng được!"
  },
  {
    id: 7,
    doorName: "Cổng Rồng Đỏ",
    question: "Tư tưởng triết học của Mác tập trung phê phán triết học của bộ đôi nào?",
    options: ["Socrates - Plato", "Hegel - Feuerbach", "Kant - Locke", "Phở - Bún bò"],
    correctAnswer: 1,
    funFact: "Hegel lộn ngược, Feuerbach duy vật máy móc. Mác đến để ráp lại cho chuẩn!"
  },
  {
    id: 8,
    doorName: "Ma Trận Biện Chứng",
    question: "Phủ định của phủ định đại diện cho hình ảnh đường cong nào?",
    options: ["Đường thẳng tắp", "Vòng tròn lặp vô tận", "Đường xoáy ốc", "Biểu đồ sập hầm"],
    correctAnswer: 2,
    funFact: "Vòng sau cao cấp hơn vòng trước. Không phải đi lùi, mà là sự trở lại ở mức độ cao hơn."
  },
  {
    id: 9,
    doorName: "Hàng Rào Tư Bản",
    question: "Theo Các Mác, giá trị thặng dư (m) sinh ra từ đâu?",
    options: ["Từ máy móc", "Từ tiền đẻ ra tiền", "Từ lưu thông hàng hóa", "Từ sức lao động bị bóc lột"],
    correctAnswer: 3,
    funFact: "Bí mật vĩ đại nhất của sự giàu có trong tư bản chủ nghĩa chính là đây!"
  },
  {
    id: 10,
    doorName: "Ống Khói Nhà Máy",
    question: "Tiền tệ có chức năng gì theo kinh tế chính trị?",
    options: ["Ăn được", "Là thước đo giá trị", "Để khoe của", "Chỉ là tờ giấy"],
    correctAnswer: 1,
    funFact: "Tiền tệ là hàng hóa đặc biệt dùng làm vật ngang giá chung!"
  },
  {
    id: 11,
    doorName: "Bức Tường Phông Bạt",
    question: "Khái niệm nào chỉ toàn bộ hoạt động vật chất có mục đích của con người?",
    options: ["Lao động", "Giải trí", "Thực tiễn", "Ảo tưởng"],
    correctAnswer: 2,
    funFact: "Thực tiễn bao gồm sản xuất vật chất, biến đổi chính trị xã hội và thực nghiệm khoa học."
  },
  {
    id: 12,
    doorName: "Động Vô Thần",
    question: "Chủ nghĩa duy vật biện chứng do ai sáng lập?",
    options: ["C. Mác và Ph. Ăng-ghen", "V.I. Lê-nin", "Feuerbach", "Cộng đồng mạng"],
    correctAnswer: 0,
    funFact: "Đôi bạn thân vĩ đại đã làm nên cú lội ngược dòng trong lịch sử triết học!"
  },
  {
    id: 13,
    doorName: "Bậc Thang Phân Tranh",
    question: "Giai cấp là những tập đoàn người khác nhau về...?",
    options: ["Sở thích âm nhạc", "Địa vị trong hệ thống sản xuất", "Thói quen ăn uống", "Quốc tịch"],
    correctAnswer: 1,
    funFact: "Túm lại là việc ai làm chủ tư liệu sản xuất và ai làm thuê!"
  },
  {
    id: 14,
    doorName: "Khung Cửa Trừu Tượng",
    question: "Cái chung chỉ tồn tại bên trong...?",
    options: ["Không gian hẹp", "Tập hợp trống", "Cái riêng", "Bao bì đóng gói"],
    correctAnswer: 2,
    funFact: "Không có cái chung lơ lửng, nó bắt buộc phải nằm trong những sự vật/hiện tượng cụ thể!"
  },
  {
    id: 15,
    doorName: "Cửa Báo Động Đỏ",
    question: "Mối liên hệ phổ biến có tính chất gì?",
    options: ["Khách quan, phổ biến, đa dạng", "Kỳ ảo, phép thuật, bí mật", "Tạm thời, giả dối, ngẫu nhiên", "Chỉ xuất hiện trên TV"],
    correctAnswer: 0,
    funFact: "Vạn vật đều có dây mơ rễ má với nhau, không gì có thể đứng tách rời hoàn toàn!"
  }
];

// Hàm trộn và lấy ngẫu nhiên n câu hỏi
export const getRandomQuestions = (count: number = 5): Question[] => {
  const shuffled = [...RAW_QUESTIONS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
