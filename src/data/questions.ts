export interface Question {
  id: number;
  doorName: string;
  question: string;
  options: string[];
  correctAnswer: number;
  funFact: string;
  explanationHint?: string;
}

const TONG_QUAN_QUESTIONS: Question[] = [
  {
    id: 101, doorName: "Nguồn Gốc Lý Luận",
    question: "Triết học Mác ra đời đã kế thừa trực tiếp từ nền triết học nào?",
    options: ["Triết học Hy Lạp cổ đại", "Triết học trung cổ Kinh viện", "Triết học Cổ điển Đức", "Triết học Khai sáng Pháp"],
    correctAnswer: 2,
    funFact: "C.Mác và Ph.Ăngghen đã kế thừa có phê phán triết học cổ điển Đức, đặc biệt là <b>phép biện chứng của Hêghen (Hegel) và chủ nghĩa duy vật của Phoiơbách (Feuerbach)</b> để xây dựng nên triết học của mình."
  },
  {
    id: 102, doorName: "Cấu Thành Chủ Nghĩa Mác",
    question: "Chủ nghĩa Mác - Lênin được cấu thành từ ba bộ phận lý luận cơ bản nào?",
    options: ["Toán học, Vật lý học và Hóa học", "Triết học, Kinh tế chính trị học và Chủ nghĩa xã hội khoa học", "Sử học, Văn học và Đạo đức học", "Khoa học tự nhiên, Khoa học xã hội và Khoa học tư duy"],
    correctAnswer: 1,
    funFact: "Ba bộ phận này có mối quan hệ thống nhất hữu cơ với nhau. Trong đó, <b>Triết học Mác - Lênin là nền tảng thế giới quan và phương pháp luận chung nhất.</b>"
  },
  {
    id: 103, doorName: "Luận Cương Về Phoiơbách",
    question: "Điền vào chỗ trống luận điểm nổi tiếng của C.Mác: 'Các nhà triết học đã chỉ giải thích thế giới bằng nhiều cách khác nhau, song vấn đề là...'",
    options: ["hiểu rõ thế giới", "cải tạo thế giới", "bảo vệ thế giới", "nhận thức thế giới"],
    correctAnswer: 1,
    funFact: "Câu nói trích từ 'Luận cương về Phoiơbách' (1845), nhấn mạnh <b>thực tiễn là tiêu chuẩn của chân lý và triết học Mác là vũ khí tinh thần để cải tạo xã hội.</b>"
  },
  {
    id: 104, doorName: "Tiền Đề Khoa Học Tự Nhiên",
    question: "Ba phát minh vĩ đại của khoa học tự nhiên thế kỷ XIX làm tiền đề cho sự ra đời của triết học Mác là gì?",
    options: ["Định luật vạn vật hấp dẫn, thuyết tương đối, cơ học lượng tử", "Thuyết tế bào, định luật bảo toàn & chuyển hóa năng lượng, thuyết tiến hóa", "Động cơ hơi nước, điện từ học, hóa học hữu cơ", "Thuyết nhật tâm, vạn vật hấp dẫn, thuyết nguyên tử"],
    correctAnswer: 1,
    funFact: "Ba phát minh này đã bác bỏ quan điểm siêu hình, <b>chứng minh sự thống nhất vật chất của thế giới và tính biện chứng khách quan của tự nhiên.</b>"
  },
  {
    id: 105, doorName: "Đối Tượng Nghiên Cứu",
    question: "Khác với các khoa học cụ thể, đối tượng nghiên cứu của Triết học Mác-Lênin là gì?",
    options: ["Những quy luật cơ học của giới tự nhiên", "Cấu trúc vi mô của vật chất", "Những quy luật vận động, phát triển chung nhất của tự nhiên, xã hội và tư duy", "Những quy luật kinh tế của chủ nghĩa tư bản"],
    correctAnswer: 2,
    funFact: "Triết học Mác - Lênin giải quyết mối quan hệ giữa vật chất và ý thức trên lập trường duy vật biện chứng, từ đó <b>rút ra những quy luật chung nhất chi phối mọi lĩnh vực.</b>"
  },
  {
    id: 106, doorName: "Tiền Đề Kinh Tế - Xã Hội",
    question: "Sự xuất hiện của giai cấp nào trên vũ đài lịch sử là nhân tố chính trị - xã hội quan trọng nhất cho sự ra đời của chủ nghĩa Mác?",
    options: ["Giai cấp tư sản", "Tầng lớp trí thức", "Giai cấp nông dân", "Giai cấp vô sản"],
    correctAnswer: 3,
    funFact: "Sự phát triển của chủ nghĩa tư bản làm bộc lộ mâu thuẫn sâu sắc giữa LLSX và QHSX. <b>Giai cấp vô sản cần một lý luận khoa học dẫn đường, và chủ nghĩa Mác ra đời đáp ứng nhu cầu tất yếu đó.</b>"
  },
  {
    id: 107, doorName: "Thực Chất Cuộc Cách Mạng",
    question: "Đóng góp vĩ đại nhất của C.Mác trong lĩnh vực triết học xã hội (chủ nghĩa duy vật lịch sử) là việc phát hiện ra quy luật gì?",
    options: ["Quy luật giá trị thặng dư", "Quy luật đấu tranh sinh tồn", "Quy luật quan hệ sản xuất phải phù hợp với trình độ phát triển của lực lượng sản xuất", "Quy luật vạn vật hấp dẫn"],
    correctAnswer: 2,
    funFact: "C.Mác đã mở rộng chủ nghĩa duy vật biện chứng vào việc nhận thức lịch sử xã hội, <b>chứng minh lịch sử nhân loại là lịch sử thay thế các hình thái kinh tế - xã hội.</b>"
  },
  {
    id: 108, doorName: "Bản Chất Triết Học Mác",
    question: "Sự thống nhất hữu cơ giữa hai yếu tố nào tạo nên bản chất khoa học và cách mạng của Triết học Mác - Lênin?",
    options: ["Thế giới quan duy tâm và phương pháp luận biện chứng", "Thế giới quan duy vật và phương pháp luận biện chứng", "Đạo đức học và Kinh tế học", "Triết học tự nhiên và Triết học lịch sử"],
    correctAnswer: 1,
    funFact: "Trước Mác, chủ nghĩa duy vật thường gắn với siêu hình, còn phép biện chứng lại mang tính duy tâm. <b>C.Mác đã thống nhất hai yếu tố này tạo thành Chủ nghĩa duy vật biện chứng.</b>"
  },
  {
    id: 109, doorName: "Chức Năng",
    question: "Triết học Mác-Lênin thực hiện hai chức năng cơ bản nào?",
    options: ["Chức năng kinh tế và chức năng chính trị", "Chức năng thế giới quan và chức năng phương pháp luận", "Chức năng thẩm mỹ và chức năng dự báo", "Chức năng giải trí và chức năng giáo dục"],
    correctAnswer: 1,
    funFact: "<b>Thế giới quan duy vật biện chứng giúp con người nhận thức đúng đắn bản chất thế giới; phương pháp luận biện chứng duy vật cung cấp hệ thống nguyên tắc định hướng cho hoạt động thực tiễn.</b>"
  },
  {
    id: 110, doorName: "Vấn Đề Cơ Bản",
    question: "Theo Ph.Ăngghen, vấn đề cơ bản lớn của mọi triết học, đặc biệt là triết học hiện đại, là vấn đề quan hệ giữa:",
    options: ["Con người và tự nhiên", "Cái chung và cái riêng", "Tư duy và tồn tại (Ý thức và Vật chất)", "Lý luận và thực tiễn"],
    correctAnswer: 2,
    funFact: "Cách giải quyết hai mặt của vấn đề cơ bản này (Cái nào có trước? Con người có khả năng nhận thức được thế giới không?) <b>là tiêu chuẩn để phân chia các trường phái: Duy vật và Duy tâm; Khả tri và Bất khả tri.</b>"
  }
];

const VAT_CHAT_QUESTIONS: Question[] = [
  {
    id: 201, doorName: "Định Nghĩa Vật Chất",
    question: "Theo định nghĩa của V.I. Lênin, thuộc tính cơ bản nhất, phổ biến nhất của mọi dạng vật chất là gì?",
    options: ["Có khối lượng và thể tích", "Tồn tại khách quan, độc lập với ý thức của con người", "Luôn bức xạ năng lượng", "Cấu tạo từ các nguyên tử"],
    correctAnswer: 1,
    funFact: "V.I.Lênin định nghĩa: <b>'Vật chất là một phạm trù triết học dùng để chỉ thực tại khách quan...' Nó tồn tại ngoài ý thức và không phụ thuộc vào ý thức.</b>"
  },
  {
    id: 202, doorName: "Khả Năng Nhận Thức",
    question: "Trong định nghĩa vật chất, Lênin khẳng định vật chất 'được cảm giác của chúng ta chép lại, chụp lại, phản ánh'. Điều này nhằm khẳng định quan điểm nào?",
    options: ["Thuyết hoài nghi", "Bất khả tri luận (Không thể nhận thức)", "Khả tri luận (Con người có khả năng nhận thức thế giới)", "Thuyết duy tâm chủ quan"],
    correctAnswer: 2,
    funFact: "Khẳng định này <b>đánh đổ quan điểm của thuyết Bất khả tri, khẳng định thế giới vật chất là hoàn toàn có thể nhận thức được bởi trí tuệ con người.</b>"
  },
  {
    id: 203, doorName: "Nguồn Gốc Ý Thức",
    question: "Theo quan điểm duy vật biện chứng, nguồn gốc tự nhiên của ý thức bao gồm những yếu tố nào?",
    options: ["Sự tiến hóa của các loài thực vật", "Bộ óc người và sự tác động của thế giới khách quan lên bộ óc", "Các xung điện thần kinh", "Sự sắp đặt của đấng tối cao"],
    correctAnswer: 1,
    funFact: "Ý thức là thuộc tính của một dạng vật chất sống có tổ chức cao là bộ óc người. <b>Bộ óc người cùng với thế giới khách quan dội vào nó là nguồn gốc tự nhiên sinh ra ý thức.</b>"
  },
  {
    id: 204, doorName: "Yếu Tố Quyết Định",
    question: "Yếu tố nào đóng vai trò là nguồn gốc xã hội, có ý nghĩa quyết định trực tiếp đến sự hình thành và phát triển của ý thức?",
    options: ["Bản năng sinh tồn", "Giao tiếp phi ngôn ngữ", "Lao động và ngôn ngữ", "Môi trường địa lý"],
    correctAnswer: 2,
    funFact: "Ăngghen khẳng định: <b>'Trước hết là lao động; sau lao động và đồng thời với lao động là ngôn ngữ...'. Đây là hai động lực chủ yếu biến vượn thành người, biến tâm lý động vật thành ý thức.</b>"
  },
  {
    id: 205, doorName: "Mối Quan Hệ Biện Chứng",
    question: "Trong mối quan hệ biện chứng giữa vật chất và ý thức, Triết học Mác - Lênin khẳng định điều gì?",
    options: ["Ý thức sinh ra và quyết định sự tồn tại của vật chất", "Vật chất quyết định ý thức, nhưng ý thức có tính độc lập tương đối và tác động trở lại vật chất", "Vật chất và ý thức tồn tại song song, không tác động lẫn nhau", "Ý thức là một thực thể phi vật chất hoàn toàn tách biệt"],
    correctAnswer: 1,
    funFact: "Vật chất quyết định nguồn gốc, nội dung và bản chất của ý thức. Ngược lại, <b>ý thức thông qua hoạt động thực tiễn của con người có thể làm biến đổi thế giới vật chất.</b>"
  },
  {
    id: 206, doorName: "Bản Chất Của Ý Thức",
    question: "Bản chất của ý thức theo quan điểm duy vật biện chứng là gì?",
    options: ["Là một dạng vật chất tinh vi", "Là sự phản ánh thụ động, máy móc thế giới khách quan", "Là hình ảnh chủ quan của thế giới khách quan, mang tính năng động, sáng tạo", "Là sự hồi tưởng lại của linh hồn"],
    correctAnswer: 2,
    funFact: "C.Mác viết: <b>'Ý niệm chẳng qua chỉ là vật chất được đem chuyển vào trong đầu óc con người và được cải biến đi ở trong đó.' Sự phản ánh này có chọn lọc và mang tính sáng tạo cao.</b>"
  },
  {
    id: 207, doorName: "Phương Thức Tồn Tại",
    question: "Theo Ăngghen, phương thức tồn tại và là thuộc tính cố hữu của vật chất là gì?",
    options: ["Khối lượng", "Vận động", "Đứng im", "Quang hợp"],
    correctAnswer: 1,
    funFact: "Ăngghen khẳng định: <b>'Vận động là phương thức tồn tại của vật chất. Bất cứ ở đâu và lúc nào cũng không có và không thể có vật chất mà không có vận động.'</b>"
  },
  {
    id: 208, doorName: "Đứng Im Tương Đối",
    question: "Theo quan điểm biện chứng duy vật, trạng thái 'đứng im' có tính chất gì?",
    options: ["Là trạng thái tĩnh lặng tuyệt đối của vật chất", "Chỉ xảy ra trong môi trường chân không", "Là trạng thái tương đối, tạm thời, là một trường hợp đặc biệt của vận động", "Là lỗi cảm giác của con người"],
    correctAnswer: 2,
    funFact: "Đứng im chỉ xảy ra trong một quan hệ nhất định và ở một hình thức vận động nhất định. <b>Nó là điều kiện để sự vật tồn tại, giữ được sự phân hóa cấu trúc chưa chuyển thành chất khác.</b>"
  },
  {
    id: 209, doorName: "Không Gian & Thời Gian",
    question: "Triết học Mác - Lênin quan niệm thế nào về không gian và thời gian?",
    options: ["Là những hình thức tồn tại khách quan của vật chất", "Là những khái niệm chủ quan do con người tưởng tượng ra", "Là một cái hộp rỗng chứa vật chất", "Là những thực thể độc lập với vật chất"],
    correctAnswer: 0,
    funFact: "Lênin khẳng định: <b>'Không có gì ngoài vật chất đang vận động, và vật chất đang vận động không thể vận động ở đâu ngoài không gian và thời gian.'</b>"
  },
  {
    id: 210, doorName: "Nguyên Tắc Khách Quan",
    question: "Từ mối quan hệ giữa vật chất và ý thức, Triết học Mác - Lênin rút ra nguyên tắc phương pháp luận nào trong nhận thức và thực tiễn?",
    options: ["Phát huy tối đa trí tưởng tượng", "Mọi chủ trương, đường lối phải xuất phát từ thực tế khách quan, đồng thời phát huy tính năng động chủ quan", "Áp đặt ý chí chủ quan để thay đổi thực tế", "Phó mặc cho hoàn cảnh tự nhiên"],
    correctAnswer: 1,
    funFact: "Việc tôn trọng quy luật khách quan kết hợp với phát huy tính năng động chủ quan của ý thức là <b>chìa khóa để con người cải tạo thành công tự nhiên và xã hội.</b> "
  }
];

const NGUYEN_LY_QUESTIONS: Question[] = [
  {
    id: 301, doorName: "Hai Nguyên Lý",
    question: "Phép biện chứng duy vật được xây dựng trên cơ sở hai nguyên lý cơ bản nào?",
    options: ["Nguyên lý về vật chất và nguyên lý về ý thức", "Nguyên lý về mối liên hệ phổ biến và nguyên lý về sự phát triển", "Nguyên lý về tự nhiên và nguyên lý về xã hội", "Nguyên lý bảo toàn năng lượng và nguyên lý nhiệt động lực học"],
    correctAnswer: 1,
    funFact: "Đây là <b>hai nguyên lý rường cột, là xương sống của toàn bộ hệ thống các quy luật và phạm trù của phép biện chứng duy vật.</b>"
  },
  {
    id: 302, doorName: "Bản Chất Sự Phát Triển",
    question: "Theo quan điểm biện chứng duy vật, sự phát triển có đặc trưng cơ bản là gì?",
    options: ["Là sự vận động tuần hoàn lặp đi lặp lại", "Chỉ là sự tăng lên hay giảm đi về mặt lượng", "Là quá trình vận động đi lên, từ thấp đến cao, từ kém hoàn thiện đến hoàn thiện hơn", "Sự di chuyển vị trí trong không gian"],
    correctAnswer: 2,
    funFact: "Phát triển không phải là mọi sự vận động, mà <b>chỉ là những vận động tạo ra cái mới tiến bộ hơn thay thế cái cũ, mang khuynh hướng đi lên.</b>"
  },
  {
    id: 303, doorName: "Tính Khách Quan",
    question: "Khi nói mối liên hệ phổ biến mang 'tính khách quan', điều đó có nghĩa là gì?",
    options: ["Các mối liên hệ do con người áp đặt cho sự vật", "Mối liên hệ vốn có của các sự vật, hiện tượng, không phụ thuộc vào ý thức con người", "Chỉ tồn tại trong giới tự nhiên vô sinh", "Do một lực lượng siêu nhiên quy định"],
    correctAnswer: 1,
    funFact: "Các sự vật trong vũ trụ từ vi mô đến vĩ mô đều tương tác lẫn nhau theo những quy luật vật lý, hóa học, sinh học, xã hội <b>một cách tự nhiên, độc lập với ý muốn chủ quan của con người.</b>"
  },
  {
    id: 304, doorName: "Sai Lầm Phương Pháp Luận",
    question: "Khi vi phạm nguyên tắc toàn diện trong nhận thức, con người dễ mắc phải sai lầm nào?",
    options: ["Phiếm thần luận", "Chủ nghĩa kinh nghiệm", "Phiến diện, chiết trung và ngụy biện", "Chủ nghĩa duy lý"],
    correctAnswer: 2,
    funFact: "Nhìn nhận sự vật một chiều (phiến diện), kết hợp vô nguyên tắc các mặt đối lập (chiết trung), hoặc cố ý đánh tráo bản chất (ngụy biện) <b>đều là sự phản bội lại quan điểm toàn diện của biện chứng.</b>"
  },
  {
    id: 305, doorName: "Bệnh Bảo Thủ",
    question: "Khuynh hướng bảo thủ, trì trệ, ngại đổi mới là sự vi phạm trực tiếp đối với nguyên lý triết học nào?",
    options: ["Nguyên lý về vật chất", "Nguyên lý về không gian và thời gian", "Nguyên lý về mối liên hệ phổ biến", "Nguyên lý về sự phát triển"],
    correctAnswer: 3,
    funFact: "Bảo thủ là việc bám víu vào cái cũ đã lỗi thời. <b>Nó đi ngược lại quy luật phát triển tất yếu khách quan của vạn vật là luôn sinh thành, biến đổi và tiến lên.</b>"
  },
  {
    id: 306, doorName: "Khuynh Hướng",
    question: "Khuynh hướng chung của sự phát triển diễn ra theo hình thức nào?",
    options: ["Đường thẳng tắp", "Đường tròn khép kín", "Đường xoắn ốc", "Đường dích dắc hỗn loạn"],
    correctAnswer: 2,
    funFact: "Sự phát triển không diễn ra theo đường thẳng mà quanh co, phức tạp, dường như lặp lại cái cũ nhưng trên cơ sở cao hơn. <b>Đường xoắn ốc biểu thị tính kế thừa và khuynh hướng đi lên tiến bộ.</b>"
  },
  {
    id: 307, doorName: "Tính Đa Dạng",
    question: "Tính đa dạng, phong phú của mối liên hệ và sự phát triển đòi hỏi chúng ta phải quán triệt quan điểm phương pháp luận nào?",
    options: ["Quan điểm siêu hình", "Quan điểm lịch sử - cụ thể", "Quan điểm giáo điều", "Quan điểm chủ quan"],
    correctAnswer: 1,
    funFact: "Vì mỗi sự vật, ở mỗi không gian, thời gian khác nhau sẽ có những mối liên hệ khác nhau, nên <b>phải xem xét sự vật gắn liền với hoàn cảnh, điều kiện lịch sử cụ thể sinh ra và chi phối nó.</b>"
  },
  {
    id: 308, doorName: "Nguyên Tắc Toàn Diện",
    question: "Quan điểm toàn diện yêu cầu chúng ta phải làm gì khi xem xét một sự vật, hiện tượng?",
    options: ["Chỉ xem xét mặt tích cực", "Xem xét tất cả các mặt, các mối liên hệ, đồng thời phân biệt được vị trí, vai trò của từng mối liên hệ", "Cào bằng tất cả các đặc điểm như nhau", "Chỉ tập trung vào những khuyết điểm"],
    correctAnswer: 1,
    funFact: "Lênin căn dặn: <b>Để hiểu biết thực sự sự vật, cần phải bao quát và nghiên cứu tất cả các mặt, tất cả các mối liên hệ và quan hệ trung gian của sự vật đó.</b>"
  },
  {
    id: 309, doorName: "Quan Điểm Phát Triển",
    question: "Quan điểm phát triển đòi hỏi nhận thức sự vật như thế nào?",
    options: ["Xem sự vật là tĩnh tại, không đổi", "Dự báo được khuynh hướng vận động, chuyển hóa của sự vật trong tương lai", "Chỉ phân tích quá khứ của sự vật", "Đánh giá sự vật qua một hiện tượng ngẫu nhiên"],
    correctAnswer: 1,
    funFact: "Nhận thức không được dừng lại ở hiện tại mà phải <b>phát hiện ra mầm mống của cái mới, ủng hộ cái mới và tạo điều kiện cho cái mới hợp quy luật phát triển.</b>"
  },
  {
    id: 310, doorName: "Hệ Thống Mở",
    question: "Tính phổ biến của sự phát triển có nghĩa là gì?",
    options: ["Phát triển chỉ có ở xã hội loài người", "Phát triển diễn ra ở mọi lĩnh vực: tự nhiên, xã hội và tư duy", "Phát triển chỉ xảy ra ở giới sinh vật", "Phát triển là đặc quyền của tư duy lý tính"],
    correctAnswer: 1,
    funFact: "Từ sự tiến hóa của các vì sao (tự nhiên), sự thay thế các chế độ xã hội (xã hội), đến sự hoàn thiện của các lý thuyết khoa học (tư duy), <b>tất cả đều tuân theo nguyên lý phát triển.</b>"
  }
];

const QUY_LUAT_QUESTIONS: Question[] = [
  {
    id: 401, doorName: "Hệ Thống Quy Luật",
    question: "Quy luật nào vạch ra 'nguồn gốc, động lực' của sự vận động và phát triển?",
    options: ["Quy luật chuyển hóa từ những sự thay đổi về lượng thành những sự thay đổi về chất và ngược lại", "Quy luật thống nhất và đấu tranh của các mặt đối lập", "Quy luật phủ định của phủ định", "Quy luật bảo toàn năng lượng"],
    correctAnswer: 1,
    funFact: "Trong 3 quy luật: <b>Quy luật Lượng-Chất chỉ ra 'cách thức', Quy luật Mâu thuẫn chỉ ra 'động lực', và Quy luật Phủ định của phủ định chỉ ra 'khuynh hướng' của sự phát triển.</b>"
  },
  {
    id: 402, doorName: "Khái Niệm Điểm Nút",
    question: "Trong quy luật Lượng - Chất, 'Điểm nút' được định nghĩa là gì?",
    options: ["Là điểm mà tại đó lượng bắt đầu biến đổi", "Là trạng thái tĩnh tuyệt đối", "Là điểm giới hạn mà tại đó sự thay đổi về lượng đạt tới mức làm thay đổi căn bản chất của sự vật", "Là sự kết thúc của một quá trình"],
    correctAnswer: 2,
    funFact: "Ví dụ nước đun ở điều kiện tiêu chuẩn, khi nhiệt độ (lượng) đạt tới 100 độ C. <b>100 độ C chính là điểm nút, làm nước sôi và bắt đầu chuyển sang thể khí (chất mới).</b>"
  },
  {
    id: 403, doorName: "Phạm Trù Độ",
    question: "Khái niệm 'Độ' trong quy luật Lượng - Chất chỉ trạng thái gì của sự vật?",
    options: ["Sự phá vỡ cấu trúc cũ", "Khoảng giới hạn mà trong đó sự thay đổi về lượng chưa đủ làm thay đổi căn bản chất của sự vật", "Sự đứng im tuyệt đối", "Bước nhảy vọt"],
    correctAnswer: 1,
    funFact: "Nước từ 0 độ C đến dưới 100 độ C vẫn giữ nguyên trạng thái lỏng. <b>Khoảng nhiệt độ đó chính là 'Độ' – nơi sự vật vẫn là chính nó dù lượng đang rục rịch thay đổi.</b>"
  },
  {
    id: 404, doorName: "Quy Luật Mâu Thuẫn",
    question: "Sự vận động và phát triển của mọi sự vật, hiện tượng trong thế giới khách quan bắt nguồn từ đâu?",
    options: ["Từ cú hích của đấng sáng tạo", "Từ sự tác động cơ học bên ngoài", "Từ sự đấu tranh của các mặt đối lập bên trong chính bản thân sự vật", "Từ sự hòa hợp và đứng im của các yếu tố"],
    correctAnswer: 2,
    funFact: "Lênin nhấn mạnh: <b>'Sự phát triển là một cuộc đấu tranh của các mặt đối lập'. Mâu thuẫn là hiện tượng khách quan và phổ biến sinh ra mọi sự vận động.</b>"
  },
  {
    id: 405, doorName: "Thống Nhất Đối Lập",
    question: "Trong quy luật mâu thuẫn, 'Sự thống nhất của các mặt đối lập' được hiểu như thế nào?",
    options: ["Các mặt đối lập triệt tiêu lẫn nhau hoàn toàn", "Các mặt đối lập liên hệ, ràng buộc, làm tiền đề tồn tại cho nhau", "Các mặt đối lập tách rời nhau tuyệt đối", "Chỉ là sự thỏa hiệp chủ quan"],
    correctAnswer: 1,
    funFact: "Đồng hóa và dị hóa trong cơ thể sinh vật là 2 mặt đối lập. Tuy nhiên, <b>chúng không thể thiếu nhau, lấy nhau làm tiền đề hoạt động tạo nên sự sống. Đó là sự thống nhất.</b>"
  },
  {
    id: 406, doorName: "Đấu Tranh Đối Lập",
    question: "Mối quan hệ giữa sự thống nhất và sự đấu tranh của các mặt đối lập có đặc điểm gì?",
    options: ["Thống nhất là tuyệt đối, đấu tranh là tương đối", "Cả hai đều mang tính chất tương đối, tạm thời", "Thống nhất là tương đối, tạm thời; còn đấu tranh là tuyệt đối", "Thống nhất và đấu tranh cân bằng nhau mãi mãi"],
    correctAnswer: 2,
    funFact: "Sự vật luôn vận động. <b>Sự thống nhất (cân bằng) chỉ tồn tại trong một trạng thái sự vật cụ thể, còn sự đấu tranh (vận động, biến đổi) phá vỡ trạng thái đó là diễn ra liên tục, tuyệt đối.</b>"
  },
  {
    id: 407, doorName: "Phủ Định Biện Chứng",
    question: "Đặc trưng cơ bản phân biệt 'Phủ định biện chứng' với 'Phủ định siêu hình' là gì?",
    options: ["Phủ định biện chứng xóa bỏ hoàn toàn cái cũ (phủ định sạch trơn)", "Phủ định biện chứng mang tính khách quan và tính kế thừa", "Phủ định biện chứng do ngoại lực ép buộc", "Phủ định biện chứng là vòng tròn lặp lại"],
    correctAnswer: 1,
    funFact: "Phủ định siêu hình (như lấy búa đập nát hạt lúa) kết thúc sự phát triển. <b>Phủ định biện chứng (hạt lúa nảy mầm) tiêu sinh cái cũ nhưng kế thừa nguồn gen tạc nên sự phát triển mới.</b>"
  },
  {
    id: 408, doorName: "Phân Loại Mâu Thuẫn",
    question: "Trong xã hội có giai cấp, mâu thuẫn giữa giai cấp thống trị bóc lột và giai cấp bị trị được phân loại là mâu thuẫn gì?",
    options: ["Mâu thuẫn không đối kháng", "Mâu thuẫn đối kháng", "Mâu thuẫn thứ yếu", "Mâu thuẫn bên ngoài"],
    correctAnswer: 1,
    funFact: "Mâu thuẫn đối kháng là mâu thuẫn giữa các lực lượng xã hội có lợi ích căn bản đối lập nhau, không thể điều hòa. <b>Nó thường được giải quyết bằng cách mạng xã hội.</b>"
  },
  {
    id: 409, doorName: "Quy Luật Phủ Định",
    question: "Sự ra đời của chủ nghĩa xã hội thay thế cho chủ nghĩa tư bản là biểu hiện khách quan của quy luật nào?",
    options: ["Quy luật bảo toàn và chuyển hóa năng lượng", "Quy luật Mâu thuẫn", "Quy luật Phủ định của phủ định", "Quy luật Lượng - Chất"],
    correctAnswer: 2,
    funFact: "Lịch sử đi từ xã hội cộng sản nguyên thủy (không có giai cấp) -> bị phủ định bởi xã hội có giai cấp -> cuối cùng bị phủ định để tiến lên <b>chủ nghĩa cộng sản (xã hội không giai cấp ở trình độ rất cao).</b> "
  },
  {
    id: 410, doorName: "Bước Nhảy",
    question: "Sự chuyển hóa cơ bản về chất của sự vật do những thay đổi về lượng trước đó gây ra được gọi là gì?",
    options: ["Hiện tượng", "Bước nhảy", "Sự tiến hóa", "Đứng im"],
    correctAnswer: 1,
    funFact: "Bước nhảy là giai đoạn kết thúc một chu kỳ biến đổi về lượng và mở đầu cho sự vận động của chất mới. <b>Bước nhảy có thể diễn ra đột biến hoặc diễn ra dần dần (tuần tự) tùy bản chất sự vật.</b>"
  }
];

const PHAM_TRU_QUESTIONS: Question[] = [
  {
    id: 501, doorName: "Cái Chung và Cái Riêng",
    question: "Theo phép biện chứng duy vật, mối quan hệ tồn tại giữa 'Cái chung' và 'Cái riêng' được định nghĩa thế nào?",
    options: ["Cái chung tồn tại độc lập, tách rời cái riêng", "Cái chung chỉ tồn tại trong cái riêng, thông qua cái riêng mà biểu hiện sự tồn tại của nó", "Cái riêng bao trùm và rộng hơn cái chung", "Cái chung sinh ra cái riêng"],
    correctAnswer: 1,
    funFact: "Thuộc tính 'Người' (Cái chung) không lơ lửng ngoài không gian. <b>Nó chỉ có thể tồn tại chân thực thông qua cấu trúc sinh học và xã hội của những cá nhân cụ thể như bạn và tôi (Cái riêng).</b>"
  },
  {
    id: 502, doorName: "Sự Chuyển Hóa",
    question: "Trong điều kiện nhất định, 'Cái đơn nhất' (cái đặc thù) có thể chuyển hóa thành phạm trù nào?",
    options: ["Cái không tồn tại", "Cái ngẫu nhiên", "Cái chung (cái phổ biến)", "Cái tất nhiên"],
    correctAnswer: 2,
    funFact: "Một sáng kiến cải tiến kỹ thuật ban đầu chỉ do một cá nhân nghĩ ra (Cái đơn nhất), nhưng sau đó được áp dụng rộng rãi cho toàn ngành (Cái chung). <b>Đây là biểu hiện của sự phát triển cái mới.</b>"
  },
  {
    id: 503, doorName: "Nguyên Nhân - Kết Quả",
    question: "Đặc điểm cơ bản nhất về mặt thời gian trong mối quan hệ nhân - quả là gì?",
    options: ["Nguyên nhân và kết quả xuất hiện cùng lúc", "Kết quả xuất hiện trước, sinh ra nguyên nhân", "Nguyên nhân xuất hiện trước và sản sinh ra kết quả", "Không có tính thứ tự trước sau"],
    correctAnswer: 2,
    funFact: "Mối liên hệ nhân quả là mối liên hệ sản sinh. <b>Phải có sự tác động lẫn nhau gây ra biến đổi (Nguyên nhân) đi trước, thì mới xuất hiện sự biến đổi (Kết quả) đi sau.</b>"
  },
  {
    id: 504, doorName: "Tất Nhiên - Ngẫu Nhiên",
    question: "Tại sao trong hoạt động thực tiễn, khoa học phải dựa vào 'Cái tất nhiên' chứ không thể dựa vào 'Cái ngẫu nhiên'?",
    options: ["Vì cái ngẫu nhiên không bao giờ xảy ra", "Vì cái tất nhiên gắn với bản chất, chi phối chiều hướng vận động tất yếu; còn cái ngẫu nhiên do hoàn cảnh bên ngoài, không ổn định", "Vì cái tất nhiên dễ nhận biết bằng mắt thường", "Vì cái ngẫu nhiên do thần linh tạo ra"],
    correctAnswer: 1,
    funFact: "<b>Cái tất nhiên vạch đường đi cho mình xuyên qua vô số cái ngẫu nhiên.</b> Nhận thức khoa học là quá trình gạt bỏ cái ngẫu nhiên bề ngoài để nắm lấy cái tất nhiên cốt lõi bên trong."
  },
  {
    id: 505, doorName: "Bản Chất - Hiện Tượng",
    question: "Mối quan hệ giữa bản chất và hiện tượng có tính chất mâu thuẫn như thế nào?",
    options: ["Hoàn toàn tách rời nhau", "Hiện tượng luôn phản ánh đúng 100% bản chất", "Bản chất ẩn giấu bên trong, hiện tượng biểu hiện ra bên ngoài, đôi khi hiện tượng xuyên tạc, phản ánh sai lệch bản chất", "Bản chất thay đổi liên tục còn hiện tượng thì đứng im"],
    correctAnswer: 2,
    funFact: "Hiện tượng xuyên tạc bản chất gọi là 'Hiện tượng giả'. C.Mác từng nói: <b>'Nếu hình thái biểu hiện của sự vật và bản chất của sự vật trực tiếp đồng nhất với nhau, thì mọi khoa học sẽ trở nên thừa.'</b>"
  },
  {
    id: 506, doorName: "Nội Dung - Hình Thức",
    question: "Trong mối quan hệ biện chứng giữa nội dung và hình thức, yếu tố nào giữ vai trò quyết định, thường xuyên biến đổi?",
    options: ["Hình thức", "Nội dung", "Cả hai cân bằng", "Không yếu tố nào"],
    correctAnswer: 1,
    funFact: "<b>Nội dung là khuynh hướng phát triển chủ đạo.</b> Khi Lực lượng sản xuất (nội dung) phát triển đến một mức độ mới, nó sẽ đòi hỏi phá vỡ Quan hệ sản xuất cũ (hình thức) để thiết lập hình thức mới phù hợp."
  },
  {
    id: 507, doorName: "Tiêu Chuẩn Chân Lý",
    question: "Theo nhận thức luận Mác-Lênin, tiêu chuẩn duy nhất để kiểm tra tính chân lý của nhận thức lý luận là gì?",
    options: ["Sự thống nhất ý kiến của số đông", "Tính logic của hệ thống lý thuyết", "Thực tiễn", "Các giáo lý tôn giáo"],
    correctAnswer: 2,
    funFact: "Thực tiễn (hoạt động sản xuất vật chất, hoạt động chính trị - xã hội, thực nghiệm khoa học) là <b>cán cân duy nhất để đo lường xem những tri thức con người đạt được có phù hợp với khách quan hay không.</b>"
  },
  {
    id: 508, doorName: "Con Đường Nhận Thức",
    question: "Điền vào chỗ trống luận điểm của V.I.Lênin về con đường biện chứng của sự nhận thức chân lý: 'Từ trực quan sinh động đến..., và từ ... đến thực tiễn.'",
    options: ["cảm giác trực tiếp", "tư duy trừu tượng", "kinh nghiệm chủ quan", "niềm tin tôn giáo"],
    correctAnswer: 1,
    funFact: "Đây là 2 giai đoạn của nhận thức: Nhận thức cảm tính (trực quan sinh động) cung cấp vật liệu; Nhận thức lý tính (tư duy trừu tượng) xử lý vật liệu để tìm ra bản chất quy luật."
  },
  {
    id: 509, doorName: "Khả Năng - Hiện Thực",
    question: "Trong hoạt động thực tiễn, nguyên tắc xử lý mối quan hệ giữa khả năng và hiện thực là gì?",
    options: ["Chỉ dựa vào khả năng vì nó là tương lai", "Dựa vào khả năng và phớt lờ hiện thực", "Hoạt động thực tiễn phải dựa trên hiện thực, không được dựa vào khả năng, nhưng phải tính đến khả năng để định hướng", "Đồng nhất khả năng với hiện thực"],
    correctAnswer: 2,
    funFact: "Chủ trương chính sách phải dựa vào nền tảng kinh tế - xã hội hiện tại (hiện thực), không dựa vào sự mơ mộng viển vông. Nhưng đồng thời <b>phải chuẩn bị điều kiện để biến 'khả năng tốt' thành hiện thực.</b>"
  },
  {
    id: 510, doorName: "Chủ Thể Thực Tiễn",
    question: "Triết học Mác khẳng định lực lượng nào là chủ thể sáng tạo ra lịch sử, đóng vai trò quyết định trong hoạt động thực tiễn cải tạo thế giới?",
    options: ["Các vĩ nhân, lãnh tụ", "Quần chúng nhân dân", "Giai cấp thống trị", "Lực lượng siêu nhiên"],
    correctAnswer: 1,
    funFact: "Chủ nghĩa duy vật lịch sử khẳng định: <b>Quần chúng nhân dân là lực lượng sản xuất cơ bản, là động lực của các cuộc cách mạng xã hội và là người sáng tạo ra các giá trị văn hóa tinh thần.</b>"
  }
];

export const getQuestionsByCategory = (categoryId: string, count: number = 10): Question[] => {
  let pool: Question[] = [];
  switch (categoryId) {
    case 'tong-quan': pool = TONG_QUAN_QUESTIONS; break;
    case 'vat-chat': pool = VAT_CHAT_QUESTIONS; break;
    case 'nguyen-ly': pool = NGUYEN_LY_QUESTIONS; break;
    case 'quy-luat': pool = QUY_LUAT_QUESTIONS; break;
    case 'pham-tru': pool = PHAM_TRU_QUESTIONS; break;
    default:
      pool = [
        ...TONG_QUAN_QUESTIONS,
        ...VAT_CHAT_QUESTIONS,
        ...NGUYEN_LY_QUESTIONS,
        ...QUY_LUAT_QUESTIONS,
        ...PHAM_TRU_QUESTIONS
      ];
      break;
  }

  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, pool.length));
};