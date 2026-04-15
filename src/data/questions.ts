export interface Question {
  id: number;
  doorName: string;
  question: string;
  options: string[];
  correctAnswer: number;
  funFact: string;
}

const STAGE_1_QUESTIONS: Question[] = [
  { 
    id: 101, doorName: "Athens Hùng Tráng", 
    question: "Triết gia Cổ đại nào cho rằng 'Nước' là bản nguyên của mọi vật?", 
    options: ["Anaximander", "Thales", "Anaximenes", "Aristotle"], 
    correctAnswer: 1, 
    funFact: "Thales xứ Milet là triết gia đầu tiên, ông nhìn thấy sự sống nào cũng cần nước để đâm chồi!" 
  },
  { 
    id: 102, doorName: "Ngọn Lửa Milet", 
    question: "Câu nói 'Không ai tắm hai lần trên cùng một dòng sông' phản ánh khuynh hướng triết học nào của Heraclitus?", 
    options: ["Biện chứng chất phác", "Siêu hình duy vật", "Duy tâm chủ quan", "Thuyết linh hồn bất diệt"], 
    correctAnswer: 0, 
    funFact: "Heraclitus là ông tổ của ý niệm về sự vận động và biến đổi không ngừng (biện chứng) của vũ trụ thời sơ khai." 
  },
  { 
    id: 103, doorName: "Mảnh Vỡ Hạt Nhân", 
    question: "Hạt nhân trong Thuyết Nguyên tử của Democritus cho rằng vũ trụ cấu tạo từ hai yếu tố cơ bản nào?", 
    options: ["Đất và Lửa", "Vật chất và Ý niệm", "Nguyên tử và Khoảng trống", "Hữu thể và Vô thể"], 
    correctAnswer: 2, 
    funFact: "Democritus cho rằng vạn vật cấu tạo từ những hạt siêu nhỏ không thể phân chia (Atom) bay lượn trong Khoảng trống." 
  },
  { 
    id: 104, doorName: "Độc Dược Socrates", 
    question: "Phương pháp triết lý thuật 'đỡ đẻ' (Maieutics) của Socrates bản chất là gì?", 
    options: ["Tranh luận và đặt câu hỏi để người đối thoại tự nhận ra mâu thuẫn", "Dùng diễn giảng để truyền thụ kiến thức một chiều", "Đọc luận văn để giác ngộ học trò", "Chứng minh bằng các thí nghiệm toán học"], 
    correctAnswer: 0, 
    funFact: "Ông không viết một chữ nào, chỉ lang thang ngoài phố và đặt những câu hỏi sắc lẹm khiến đối phương tự bị dồn vào chân tường." 
  },
  { 
    id: 105, doorName: "Hang Thạch Động", 
    question: "Sự phân chia thế giới của Plato dựa trên sự đối lập giữa hai thế giới nào?", 
    options: ["Thế giới Tự nhiên và Thế giới Xã hội", "Thế giới Vật chất và Thế giới Tinh thần", "Thế giới Ý Niệm (hoàn hảo) và Thế giới Sự vật (tạm bợ)", "Thế giới Đất và Thế giới Trời"], 
    correctAnswer: 2, 
    funFact: "Theo luận điểm cực cường Duy tâm khách quan, Plato cho rằng thực tại ta thấy chỉ là cái bóng trên tường của một thế giới Ý Niệm vĩnh cửu." 
  },
  { 
    id: 106, doorName: "Kinh Viện Cổ", 
    question: "Vai trò thực sự của triết học trong thời kỳ Kinh viện (Scholasticism) Trung cổ là gì?", 
    options: ["Nghiên cứu cấu trúc tự nhiên", "Củng cố quyền lực của vua chúa", "Làm công cụ lý luận để chứng minh bảo vệ giáo lý Thần học", "Thúc đẩy các công trình vật lý thiên văn"], 
    correctAnswer: 2, 
    funFact: "Hơn 1000 năm bị bao trùm bởi Giáo hội, triết học mất tính độc lập, trở thành 'kẻ hầu người hạ' cho Kinh Thánh." 
  },
  { 
    id: 107, doorName: "Cuộc Chiến Ngôn Từ", 
    question: "Phái Duy Danh (Nominalism) thời Trung Cổ tranh luận rằng Bản thể cấu tạo nên thực tại là gì?", 
    options: ["Chỉ có các khái niệm chung là tồn tại thực", "Chỉ có các sự vật cá biệt, cụ thể mới tồn tại thực", "Vật chất không mang tính tồn tại", "Chúa là ngọn nguồn bản thể cá biệt"], 
    correctAnswer: 1, 
    funFact: "Duy Danh bào chữa rằng 'tính người' hay 'Chúa' chỉ là cái tên con người đặt ra, chỉ có bản ngã vật chất hiển hiện cụ thể trước mắt mới có thật." 
  },
  { 
    id: 108, doorName: "Lâu Đài Logic", 
    question: "Thomas Aquinas đã sử dụng hệ thống triết học của ai để thiết lập nền tảng logic cho thần học Thiên Chúa giáo?", 
    options: ["Hệ thống của Plato", "Hệ thống logic của Aristotle", "Chủ nghĩa Duy vật của Democritus", "Toán học của Pythagoras"], 
    correctAnswer: 1, 
    funFact: "Aquinas mượn hệ thống logic suy luận đồ sộ và logic phân loại của Aristotle để 'đóng khung' và bảo vệ Kinh Thánh một cách có vẻ lý trí." 
  },
  { 
    id: 109, doorName: "Mặt Trời Mọc", 
    question: "Đặc trưng tư duy cốt lõi tạo nên cuộc cách mạng trong nhận thức của các triết gia Hy Lạp cổ đại là gì?", 
    options: ["Sử dụng ma thuật để lý giải hiện tượng", "Lấy giới tự nhiên để tự giải thích giới tự nhiên", "Đề cao vai trò của Đấng kiến tạo vô hình", "Áp dụng phương pháp thực nghiệm hiện đại"], 
    correctAnswer: 1, 
    funFact: "Bước tiến lịch sử lớn nhất: họ cắt đứt với ma thuật (Mythos) và dùng lý trí (Logos) để giải thích thế giới tự nhiên tự thân." 
  },
  { 
    id: 110, doorName: "Ngôi Đền Đổ", 
    question: "Trục tranh luận xuyên suốt lịch sử triết học bắt nguồn từ thời cổ đại là cuộc đối đầu giữa:", 
    options: ["Biện chứng và Phân tích luận", "Duy vật luận và Duy tâm luận", "Chủ nghĩa kinh nghiệm và Khoa học", "Triết lý Đạo đức và Triết lý Chính trị"], 
    correctAnswer: 1, 
    funFact: "Cuộc đấu tranh xem 'Vật chất' hay 'Ý thức' cái nào có trước, định khuôn cho cả chặng đường hàng thiên niên kỷ." 
  }
];

const STAGE_2_QUESTIONS: Question[] = [
  { 
    id: 201, doorName: "Biển Khơi Giông Bão", 
    question: "Chủ nghĩa nhân văn thời Phục hưng lấy khái niệm nào làm chuẩn mực trọng tâm để đánh giá thực tại?", 
    options: ["Các giá trị tôn giáo thuần túy", "Sự tiến hóa của bộ máy tự nhiên", "Con người trần tục và vẻ đẹp trần thế", "Quy luật cơ học Newton"], 
    correctAnswer: 2, 
    funFact: "Con người đòi lại vị trí trung tâm, tước bỏ Thần quyền để tự định hình giá trị bản ngã sống động." 
  },
  { 
    id: 202, doorName: "Căn Phòng Kính", 
    question: "Phương pháp Quy nạp của F. Bacon chủ trương tri thức phải xuất phát từ đâu?", 
    options: ["Từ những chân lý tiên nghiệm siêu phàm", "Từ quan sát, thực nghiệm các dữ kiện cụ thể đến kết luận chung", "Từ lập luận diễn dịch dựa trên Kinh thánh", "Từ suy luận toán học thuần túy"], 
    correctAnswer: 1, 
    funFact: "Khởi đầu của Chủ nghĩa Duy nghiệm: phải sờ chép thí nghiệm hàng trăm sự kiện rồi mới đúc rút quy luật." 
  },
  { 
    id: 203, doorName: "Mê Cung Trí Não", 
    question: "Trường phái Duy lý của Descartes khẳng định yếu tố nào là cội nguồn duy nhất đáng tin cậy của Chân lý?", 
    options: ["Trải nghiệm giác quan", "Niềm tin được thừa nhận bởi số đông", "Hoạt động tư duy nội quan của Lý trí", "Các dữ kiện tự nhiên đo lường được"], 
    correctAnswer: 2, 
    funFact: "Descartes cho rằng mắt có thể mù, tai có thể lừa, chỉ có sự nghi ngờ bằng Lý trí (Cogito ergo sum) mới là chắc chắn." 
  },
  { 
    id: 204, doorName: "Cuốn Tẩy Trắng", 
    question: "John Locke miêu tả tâm trí con người khi mới sinh ra (Tabula rasa) mang hàm ý gì về nguồn gốc nhận thức?", 
    options: ["Nhận thức đã được lập trình sẵn bởi Thượng đế", "Mọi tri thức đều ghi chép được nhờ trải nghiệm phản ánh thế giới khách quan", "Trí óc con người có các khuôn mẫu nhận thức tiên nghiệm", "Trí não là một hệ thống suy luận logic trừu tượng hỗn độn"], 
    correctAnswer: 1, 
    funFact: "Ý tưởng 'tờ giấy trắng' đánh gục tư tưởng quý tộc cho rằng có những người sinh ra đã được cài sẵn trí tuệ 'vương quyền'." 
  },
  { 
    id: 205, doorName: "Lỗ Hổng Không Gian", 
    question: "Đặc điểm phương pháp luận thống trị trong Triết học tự nhiên Cận đại Tây Âu là gì?", 
    options: ["Phương pháp siêu hình - tĩnh tại - cơ học", "Phương pháp biện chứng linh hoạt", "Phương pháp thống kê ngẫu nhiên", "Phương pháp chiêm tinh học"], 
    correctAnswer: 0, 
    funFact: "Quá ám ảnh vật lý của Newton, các triết gia tưởng cả vũ trụ tự nhiên cũng cô lập, tĩnh lặng như mảnh rắp của một cái đồng hồ." 
  },
  { 
    id: 206, doorName: "Bức Tường Đức", 
    question: "Học thuyết 'Bất khả tri' (Agnosticism) của Kant nằm ở khái niệm tách biệt nào?", 
    options: ["Giữa Đạo đức và Pháp luật", "Giữa Chủ thể và Khách thể", "Giữa 'Thế giới hiện tượng' và 'Vật tự thân'", "Giữa Không gian và Thời gian"], 
    correctAnswer: 2, 
    funFact: "Kant phủ định sức mạnh của trí óc khi cho rằng 'Vật tự thân' là thứ con người mãi vĩnh viễn không thể chạm tới tới bản chất thật." 
  },
  { 
    id: 207, doorName: "Ý Niệm Tuyệt Đối", 
    question: "Ưu điểm lịch sử vĩ đại nhất trong triết học của G.W.F. Hegel là gì?", 
    options: ["Ông giải thích triệt để vai trò của kinh tế", "Xây dựng lại toàn bộ phép Biện chứng thành một hệ thống lý luận chặt chẽ", "Ủng hộ con đường bạo lực cách mạng", "Khẳng định vật chất là nguồn gốc của Ý thức"], 
    correctAnswer: 1, 
    funFact: "Dù là hệ thống Duy tâm, nhưng Hegel lần đầu tiên mô tả toàn bộ tự nhiên, lịch sử, tinh thần như một quá trình vận động chuyển hóa không ngừng." 
  },
  { 
    id: 208, doorName: "Thần Điện Sụp Đổ", 
    question: "L. Feuerbach phê phán Hegel dựa trên lập trường triết lý cốt lõi nào?", 
    options: ["Duy vật biện chứng", "Duy tâm siêu hình", "Duy vật nhân bản (nhân giáo hóa)", "Duy lý cực đoan"], 
    correctAnswer: 2, 
    funFact: "Feuerbach kéo Thượng đế xuống đất, khẳng định Tự nhiên có trước, và Chúa thực chất là phóng ảnh của bản tính con người." 
  },
  { 
    id: 209, doorName: "Bánh Răng Cổ Điển", 
    question: "Trở ngại lớn nhất khiến chủ nghĩa duy vật của Feuerbach mất đi vai trò cải tạo thế giới là gì?", 
    options: ["Thiếu vắng hoàn toàn tính Biện chứng lịch sử", "Nhấn mạnh quá mức yếu tố kinh tế tài chính", "Khước từ nghiên cứu tự nhiên khách quan", "Không đả kích tôn giáo mạnh mẽ"], 
    correctAnswer: 0, 
    funFact: "Ông xét con người một cách tĩnh lặng sinh học, không hiểu được việc con người cải tạo thế giới qua thực tiễn thì xã hội mới chuyển động." 
  },
  { 
    id: 210, doorName: "Thanh Kiếm Nhút Nhát", 
    question: "Đặc tính 'Cách mạng trong tư tưởng nhưng rụt rè trong thực tiễn' của triết học Cổ điển Đức phản ánh điều kiện nào?", 
    options: ["Giai cấp tư sản Đức quá hùng mạnh, không cần cách mạng", "Sự thỏa hiệp của giai cấp tư sản Đức trước chính quyền phong kiến vì họ yếu ớt kinh tế", "Quần chúng nhân dân Đức chưa biết chữ", "Ảnh hưởng của chiến tranh triền miên"], 
    correctAnswer: 1, 
    funFact: "Không làm được cách mạng chặt đầu vua như dân Pháp, giới học giả Đức chỉ có thể cày nát lý trí bằng các ý luận đồ sộ trong giảng đường." 
  }
];

const STAGE_3_QUESTIONS: Question[] = [
  { 
    id: 301, doorName: "Xưởng Máy Lịch Sử", 
    question: "Đóng góp vĩ đại nhất của K. Marx trong việc cải tạo Phép biện chứng của Hegel là gì?", 
    options: ["Hệ thống hóa toàn bộ các ví dụ bằng phương trình toán", "Tước bỏ lớp vỏ Thần bí Duy tâm và đặt nó lên nền tảng Duy vật thực tiễn", "Thêm quy luật Đấu tranh sinh tồn của Darwin vào", "Chia tách Biện chứng tự nhiên và Biện chứng xã hội"], 
    correctAnswer: 1, 
    funFact: "Mác nói rõ: 'Phép biện chứng của Hegel đang đứng lộn đầu, phải dựng nó đứng bằng hai chân tư duy vật chất'." 
  },
  { 
    id: 302, doorName: "La Bàn Chỉ Lối", 
    question: "Tiêu chuẩn tối cao để kiểm chứng một Chân lý trong triết học Mác-Lênin là gì?", 
    options: ["Sự hoàn chỉnh logic của văn bản", "Số lượng học giả ủng hộ quan điểm", "Hoạt động thực tiễn cải tạo thế giới khách quan", "Phân tích số liệu thống kê học"], 
    correctAnswer: 2, 
    funFact: "Làm thuyết thì hay đến đâu, ra đời sống trồng lúa không mọc, chế máy móc không chạy thì cũng đi tong!" 
  },
  { 
    id: 303, doorName: "Động Lực Tuyệt Mật", 
    question: "Mâu thuẫn cơ bản nhất thúc đẩy sự chuyển biến hình thái kinh tế xã hội là sự xung đột giữa:", 
    options: ["Quản lý nhà nước và Thể chế pháp luật", "Mức độ Lực lượng sản xuất và Tính chất của Quan hệ sản xuất", "Tư bản tài chính và Tư bản công nghiệp", "Sự bùng nổ dân số và Sản lượng lương thực"], 
    correctAnswer: 1, 
    funFact: "Lực lượng Sản Xuất liên tục tiến vũ bão (máy móc, kỹ năng mới), ép cái Quan Hệ Sở Hữu cũ kìm hãm nó phải đứt tung (Cách mạng)." 
  },
  { 
    id: 304, doorName: "Bóng Ma Tha Hóa", 
    question: "Theo Mác, nội hàm sâu xa của hiện tượng 'Tha hóa lao động' trong chế độ Tư bản là:", 
    options: ["Người lao động lười nhác và dối trá hơn do bị bóc lột", "Sản phẩm do công nhân tạo ra lại trở thành quyền lực đối lập thống trị, nô dịch ngược lại họ", "Nhà tư bản không biết sử dụng đúng trình độ công nhân", "Máy móc phế bỏ chức năng cơ bắp của con người"], 
    correctAnswer: 1, 
    funFact: "Công lao của bạn trần trụi hóa thành tiền vốn của sếp, tiền đó sếp mang đi mua công nghệ hoặc đuổi việc đàn áp lại bạn." 
  },
  { 
    id: 305, doorName: "Mỏ Vàng Huyết Dụ", 
    question: "Nguồn gốc duy nhất trực tiếp sinh ra 'Giá trị thặng dư (m)' cho nhà tư bản là gì?", 
    options: ["Sức lao động sống của công nhân vắt kiệt trong quá trình sản xuất", "Sự hao mòn khấu hao của máy móc và công nghệ cao", "Kỹ năng lưu thông hàng hóa qua lại trên thị trường để tìm giá rẻ", "Chính sách lách thuế của bộ phận kế toán"], 
    correctAnswer: 0, 
    funFact: "Bí mật tuyệt đỉnh: Tư bản mua Sức Lực với giá chỉ đủ ăn, nhưng sức lực ấy lại làm việc thừa rôi sinh thêm tiền, đó là giá trị thặng dư." 
  },
  { 
    id: 306, doorName: "Nhân Quả", 
    question: "Cặp phạm trù Biện chứng chỉ ra rằng: Ý thức xã hội có khả năng...", 
    options: ["Phát triển hoàn toàn độc lập với Tồn tại xã hội", "Chỉ lặp lại cơ học những thay đổi cơ sở của Tồn tại xã hội", "Có tính độc lập tương đối, thường tụt hậu nhưng cũng có khả năng đi trước dự báo Tồn tại xã hội", "Luôn đóng vai trò quyết định ngược vĩnh viễn Tồn tại xã hội."], 
    correctAnswer: 2, 
    funFact: "Tồn tại XH (kinh tế) đi trước. Nhưng có những định luật khoa học thiên tài đi sâu 100 năm kéo Tồn tại đi lên (Dự báo)." 
  },
  { 
    id: 307, doorName: "Nhân Dân Vĩ Đại", 
    question: "Phép biện chứng duy vật lịch sử khẳng định lực lượng lượng chân chính tạo ra lịch sử là:", 
    options: ["Những nhân vật xuất chúng và lãnh tụ được định mệnh sinh ra", "Lực lượng thần thánh hoặc ý niệm khách quan", "Quần chúng nhân dân lao động", "Tầng lớp tư sản trí thức tinh hoa"], 
    correctAnswer: 2, 
    funFact: "Không có hàng triệu người đập đá, dệt vải, cầm súng thì một cá nhân anh hùng cũng rụng trước binh nhì!" 
  },
  { 
    id: 308, doorName: "Tư Bản Phân Kỳ", 
    question: "Việc phân chia 'Tư bản bất biến (c)' và 'Tư bản khả biến (v)' nhằm mục đích khám phá ra điều cốt lõi gì?", 
    options: ["Máy móc hay tiền đóng vai trò cao hơn ở khâu phân phối", "Vạch trần nguồn gốc chính xác tạo ra lượng Giá trị thặng dư (chỉ v tự sinh, c chỉ chuyển giá trị)", "Tính toán chu kỳ lưu động tư bản thương mại", "Điều chỉnh mức thuế thu nhập doanh nghiệp"], 
    correctAnswer: 1, 
    funFact: "Tư liệu SX (C) không mọc thêm giá trị mới. Sức người (V) bằng xương thịt mới có năng lực nở 1 đồng ra 3 đồng." 
  },
  { 
    id: 309, doorName: "Vòng Lặp Chết Chóc", 
    question: "Tính phá sản tất yếu của chủ nghĩa Tư bản mang nền tảng sâu xa nhất là:", 
    options: ["Sự phẫn nộ tâm lý theo cảm tính của giai cấp nghèo", "Quy luật Mâu thuẫn tất yếu giữa sản xuất xã hội hóa ngày càng cao và sở hữu tư nhân tư bản", "Quy luật suy kiệt tài nguyên của trái đất", "Định lý tăng Entropy vật lý"], 
    correctAnswer: 1, 
    funFact: "Quá trình chia nhau sản xuất thì toàn cầu tham gia gộp sức, lớn nhưng lợi nhuận chỉ rơi vào tay rất ít cá nhân, cái mâu thuẫn đó sẽ phá vỡ cái phễu." 
  },
  { 
    id: 310, doorName: "Ngọn Đuốc Nước Nga", 
    question: "Thành tựu lý luận to lớn nhất của V.I Lenin đối với chủ nghĩa Mác ở giai đoạn TCN Đế quốc chủ nghĩa là gì?", 
    options: ["Hoàn thiện học thuyết đấu tranh trực tiếp thay vì đàm phán chính trị", "Chuyển hóa Thuyết Đấu tranh giai cấp vào quy luật tự nhiên vật lý", "Phát hiện ra Cách mạng Vô sản có thể thắng lợi ở một khâu yếu nhất của Đế quốc tư bản", "Tạo lập chủ nghĩa tư bản nhà nước thay thế hoàn toàn tư bản tư nhân"], 
    correctAnswer: 2, 
    funFact: "Mác bảo phải Cách mạng nổ ra cùng lúc ở Anh, Pháp mới được. Lênin cãi lại, tìm đúng chỗ mắt xích Nga Hoàng mục nát đánh cái chết luôn!" 
  }
];

export const getRandomQuestions = (mode: 'stage_1' | 'stage_2' | 'stage_3' | 'all', count: number): Question[] => {
  let pool: Question[] = [];
  if (mode === 'stage_1') pool = STAGE_1_QUESTIONS;
  else if (mode === 'stage_2') pool = STAGE_2_QUESTIONS;
  else if (mode === 'stage_3') pool = STAGE_3_QUESTIONS;
  else {
    pool = [...STAGE_1_QUESTIONS, ...STAGE_2_QUESTIONS, ...STAGE_3_QUESTIONS];
  }

  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, pool.length));
};
