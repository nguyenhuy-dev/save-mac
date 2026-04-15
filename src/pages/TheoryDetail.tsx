import React, { useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const theoryData: Record<string, any> = {
  'co-dai': {
    title: 'Triết học Cổ đại',
    period: 'Thế kỷ VI TCN - Thế kỷ V',
    color: 'from-blue-600 to-indigo-800',
    glowColor: 'bg-blue-600',
    icon: '🏛️',
    quote: '"Trong vũ trụ này, mọi thứ đều đang trôi chảy, không ai có thể tắm hai lần trên cùng một dòng sông." - Heraclitus',
    image: '/images/1-co-dai.jpg',
    sections: [
      {
        label: '1. Bối cảnh lịch sử bứt phá',
        content: 'Đây là giai đoạn hoàng kim của các quốc gia thành bang như Ti-lê, A-ten (Hy Lạp). Nền tư hữu chiếm hữu nô lệ xuất hiện, thay thế cộng sản nguyên thủy. Thương mại đường biển bùng nổ, thúc đẩy khoa học đo lường và hàng hải. Quan trọng nhất, sự dư thừa của cải tạo ra một tầng lớp "quý tộc nhàn rỗi" - họ không phải sản xuất tay chân, được rảnh rỗi để bắt đầu "trầm ngâm" nhìn lên bầu trời và suy nghĩ về bản chất vạn vật.'
      },
      {
        label: '2. Cú hạ bệ thần linh vĩ đại',
        content: 'Bước ngoặt lớn nhất của Triết học Cổ đại là việc con người dũng cảm ly khai khỏi thế giới quan thần thoại (Thần Zeus, Poseidon...). Lần đầu tiên, lý trí (Logos) lên ngôi thay cho niềm tin mù quáng (Mythos). Các triết gia tiên phong cố gắng đi tìm "bản nguyên" - chất liệu nền tảng tự nhiên khơi nguồn ra vũ trụ. Họ lấy tự nhiên để giải thích tự nhiên, đó là tư tưởng Duy vật ngây thơ nhưng vĩ đại.'
      },
      {
        label: '3. Phái Tự nhiên học và Bản nguyên Vũ trụ',
        content: '• Thales: "Vạn vật bắt nguồn từ Nước".\n• Anaximenes: "Không khí là nguồn cội".\n• Heraclitus: "Lửa là bản nguyên". Ông nổi tiếng với phép biện chứng sơ khai, khẳng định vạn vật luôn sinh ra và tiêu diệt trong một "dòng chảy" bất tận.\n• Democritus: Cha đẻ của Thuyết Nguyên tử thần thánh. Ông khẳng định vũ trụ bao gồm các "Nguyên tử" cứng và "Khoảng trống". Nguyên tử bay lượn, va chạm tạo ra vạn vật. Điều này đi trước vật lý học hàng nghìn ngăm.'
      },
      {
        label: '4. Đỉnh cao Tư duy: Socrates & Plato ở Athens',
        content: 'Khi khoa học tự nhiên bão hòa, trọng tâm triết học chuyển hướng sang Con người và Đạo đức.\n• Socrates: Nhà triết học vĩ đại không bao giờ viết sách. Ông dùng thuật "rập hỏi" (hỏi vặn) để phá vỡ sự kiêu ngạo vô tri của người khác, nhấn mạnh "Hãy tự biết lấy mình".\n• Plato: Sáng lập Thuyết phân chia hai thế giới. 1 thế giới các Sự Vật Tạm Bợ (ta dùng giác quan để nhìn) và 1 Thế giới Ý Niệm vĩnh hằng hoàn hảo. Đây là nền tảng của phái Duy tâm khách quan huyền thoại.'
      },
      {
        label: '5. Aristotle: Bộ Bách khoa toàn thư Hy Lạp',
        content: 'Aristotle là học trò xuất sắc nhất của Plato, nhưng lại phát ngôn: "Tôi yêu Plato, nhưng tôi yêu Chân lý hơn". Ông dao động giữa Duy vật và Duy tâm, nhưng đã hệ thống hóa mọi ngành khoa học thời đó (Vật lý, Sinh học, Luân lý). Ông sáng lập ra Logic học Hình thức (Tam đoạn luận), một thành tựu khổng lồ làm khung xương cho hệ thống tư duy nhân loại 2000 năm sau.'
      }
    ]
  },
  'trung-co': {
    title: 'Triết học Trung cổ',
    period: 'Thế kỷ V - Thế kỷ XV',
    color: 'from-purple-600 to-fuchsia-900',
    glowColor: 'bg-purple-600',
    icon: '⛪',
    quote: '"Triết học phải chịu uốn mình làm đứa tớ gái ngoan ngoãn của Thần học, làm công cụ củng cố Đức tin." - Thomas Aquinas',
    image: '/images/2-trung-co.jpg',
    sections: [
      {
        label: '1. Đêm trường Tăm tối bao phủ Châu Âu',
        content: 'Đế chế La Mã Tây phương sụp đổ năm 476, mở ra chế độ phong kiến phân quyền lỏng lẻo. Bù lại sự yếu kém của vương quyền, Giáo hội Công giáo Rome thâu tóm toàn bộ quyền lực tư tưởng và ruộng đất. Con người hoàn toàn phục tùng Chúa, coi mạng sống trần gian chỉ là trạm trung chuyển để lên Thiên Đàng.'
      },
      {
        label: '2. Số phận của Triết học thời Kinh viện (Scholasticism)',
        content: 'Khoa học bị coi là dị giáo. Triết học bị "tước đoạt" tính độc lập, trở thành công cụ biện hộ cho Kinh Thánh. Các nhà tư tưởng (thường là tu sĩ) được giao nhiệm vụ "chứng minh sự tồn tại của Thượng đế bằng logic" thay vì bằng đức tin thuần túy. Họ nhốt mình trong các tu viện, mổ xẻ từng câu từ trong sách Thánh để xây dựng một pháo đài giáo lý bất khả xâm phạm.'
      },
      {
        label: '3. Cuộc đấu trí lịch sử: Duy Thực vs Duy Danh',
        content: 'Hàng trăm năm, tu sĩ tranh cãi nảy lửa rách cả họng về Bản thể của Khái niệm chung (Borversals):\n• Phái Duy Thực (Realism): Cho rằng Khái niệm Chung (như bản tính con người, hay Chúa Trời) là thứ TỒN TẠI THẬT TRƯỚC HẾT. Các cá thể con người cụ thể chỉ là phiên bản lỗi của cái Bản tính rạng rỡ kia.\n• Phái Duy Danh (Nominalism): Cãi lại rằng chỉ có Sự vật Cụ thể mới là có thật (người này, cái cây nọ có thật). Còn "Khái niệm chung" chỉ là âm thanh, là CÁI TÊN do bộ não nhào nặn ra (Tư tưởng này chứa mầm mống duy vật sơ khai ác liệt).'
      },
      {
        label: '4. Đỉnh tháp Thần Học Thomas Aquinas',
        content: 'Thomas Aquinas là bộ não vĩ đại nhất giai đoạn này. Sự xâm nhập của tư tưởng logic Aristotle từ Ả Rập sang Châu Âu làm rung chuyển đức tin. Aquinas đã khéo léo bẻ cong, cắt xén và "Rửa tội" cho triết học Aristotle. Ông tạo ra "5 con đường chứng minh Thượng đế tồn tại" bằng nguyên lý nhân quả (Ví dụ: Mọi thứ đều phải có nguyên nhân sinh ra nó, lần ngược lên mãi phải có Nguyên Nhân Đầu Tiên, đó là Chúa).'
      },
      {
        label: '5. Di sản chôn giấu dưới tro tàn',
        content: 'Tuy bị giáo hội đè bẹp, nhưng chính thói quen phải tranh luận bằng logic thép về những điều nhỏ nhặt nhất trong nhiều thế kỷ đã mài giũa bộ não người Tây Âu thành một thứ vũ khí sắc bén phi thường. Đây là bệ phóng kín đáo chờ ngày Phục hưng bùng nổ, khi bộ não rèn luyện từ Kinh viện đó được thả tự do xoay trục sang khám phá Khoa học.'
      }
    ]
  },
  'phuc-hung': {
    title: 'Phục Hưng & Cận đại',
    period: 'Thế kỷ XV - XVIII',
    color: 'from-emerald-600 to-teal-900',
    glowColor: 'bg-emerald-500',
    icon: '🔭',
    quote: '"Tôi tư duy, bởi vì tôi đã quyết định nghi ngờ mọi thứ trừ chính bản thân việc tôi đang nghi ngờ." - René Descartes',
    image: '/images/3-phuc-hung.jpg',
    sections: [
      {
        label: '1. Rạng đông của Nhân lý thời kỳ Phục hưng',
        content: 'Ba phát minh vĩ đại (La bàn, Thuốc súng, Máy in) và các Chuyến đi khám phá địa lý (Columbus, Magellan) đã giáng một đòn chí mạng vào bức tường thần học. Trái đất hóa ra hình cầu, không có rìa thế giới. Thiên văn vật lý (Copernicus, Bruno, Galileo) đạp đổ thuyết Địa tâm của Chúa. Con người quay lại nghiên cứu mỹ thuật, tôn vinh vẻ đẹp hình thể trần tục và đòi quyền được hạnh phúc.'
      },
      {
        label: '2. Francis Bacon và sức mạnh của Tri thức học (Duy nghiệm)',
        content: 'Triết trung cổ ngồi tranh cãi "Chúa có bao nhiêu thiên thần trên đầu mũi kim". Bacon đạp đổ tất cả, hét lên: "Tri thức là sức mạnh!". Ông sáng lập Phương pháp Quy nạp. Con người phải lấy cảm giác làm cốt, bước ra cánh đồng, làm thí nghiệm từ cái cụ thể đúc kết thành chân lý, chứ không phải vắt óc suy luận suông trên mây.'
      },
      {
        label: '3. Huyền thoại Descartes và Lưỡi gươm Duy lý',
        content: 'Trái ngược với Bacon, Descartes không tin vào mắt thần. Mắt có thể nhìn ảo ảnh, tay có thể sờ mù. Ông nghi ngờ sạch sành sanh mọi thứ. Chỉ còn lại 1 thứ nghi ngờ được: Rút cục là AI đang thao tác sự NGHI NGỜ này? À, chính là LÝ TRÍ! Lời sấm truyền "Cogito, ergo sum" (Tôi tư duy, nên tôi tồn tại) nổ ra. Ông cho rằng tri thức siêu việt nhất phải là hình học, toán học rập khuôn tiên nghiệm trong não.'
      },
      {
        label: '4. Tính chất Siêu Hình Học Cận đại (Điểm mù vô vọng)',
        content: 'Tuy chói lọi, triết học thời này bị lây nhiễm bởi lực cơ học Newton. Mọi triết gia đều nhìn tự nhiên như một chiếc đồng hồ cơ khí tinh xảo khổng lồ. Vạn vật là các mảnh ghép bất biến đứng im cạnh nhau, không hề có vận động phát triển vòng vèo. Quan điểm siêu hình này giết chết bất cứ phép biện chứng nhỏ lùi nào. Điều này khóa chặt cánh cửa lý giải lịch sử và cuộc sống sống động.'
      },
      {
        label: '5. Kỷ nguyên của Khai Sáng (Enlightenment Pháp)',
        content: 'Thế kỷ 18 chứng kiến triết học bước từ thư viện xuống đường phố đấu tranh chính trị. Voltaire, Rousseau, Montesquieu xé toạc tấm áo bù nhìn của vương quyền tôn giáo để tuyên truyền rầm rộ quyền tự do cá nhân, dân chủ lập pháp, Tam quyền phân lập. Khai sáng chính là nhát rìu chặt đứt đầu vua Louis 16 trong cuộc Cách mạng Pháp (1789) - một sự kết tinh cực độ của vũ khí lý luận.'
      }
    ]
  },
  'co-dien-duc': {
    title: 'Cổ điển Đức & Tiền Mác',
    period: 'Cuối TK XVIII - Nửa đầu TK XIX',
    color: 'from-amber-600 to-yellow-900',
    glowColor: 'bg-amber-500',
    icon: '📜',
    quote: '"Lịch sử nhân loại chẳng qua chỉ là sự tiến triển ý thức về Tự do của Ý Niệm Tuyệt Đối." - G.W.F. Hegel',
    image: '/images/4-co-dien.jpg',
    sections: [
      {
        label: '1. Nước Đức bấy giờ: Lùn kinh tế, Khổng lồ triết học',
        content: 'Khác biệt hoàn toàn Anh Pháp đang bận rộn hái ra tiền công nghiệp và chém vua lật đổ chính trị, nước Đức vẫn chia rẽ rách nát gồm hơn 300 lãnh địa nhỏ mọn. Tuy nhiên, giới trí thức Đức đã thăng hoa dạt tới cảnh giới tối thượng về năng lực trừu tượng. Họ bù lấp lại sự thất bại ngoài đời bằng cuộc đại bạo động kỳ ảo trong đầu óc.'
      },
      {
        label: '2. Sự phê phán vĩ đại của Immanuel Kant',
        content: 'Kant ném quả bom lớn khi chia trí óc loài người làm đôi ranh giới: "Thế giới hiện tượng" (những gì ta hiểu được qua màu sắc, không thời gian) và "Vật tự thân" (Bản chất sâu hút không ai biết, ta vĩnh viễn không thể kháo thấu!). Điều này làm lung chuyển cả Duy Vật lẫn Duy Tâm trước đó, định hình nên học thuyết "Bất khả tri" (Agnosticism).'
      },
      {
        label: '3. Phép thuật Biện chứng tuyệt đối của Hegel',
        content: 'Khác với Kant bảo 1 nửa không hiểu được, Hegel hất cẳng bảo: Hiểu được ráo! Hegel tuyên xưng vũ trụ ban nguyên là khối "Ý niệm tuyệt đối". Khối não khổng lồ này tự phân mảnh thành tự nhiên, động vật, con người, sau đó vận động tiến hóa thành lịch sử để cuối cùng Ý niệm "Nhận thức lại chính nó". Vận động này tuân trọn vẹn Quy luật Lượng chất, Phủ định, Mâu thuẫn. Hệ thống Hegel đồ sộ như một Kim tự tháp tột bậc vĩ đại của trường phái Duy Tâm.'
      },
      {
        label: '4. Đòn báng súng Duy vật của Ludwig Feuerbach',
        content: 'Cực ghét cái sương mù mê hồ của Hegel, Feuerbach hẩy Hegel văng xuống đất. Feuerbach gầm lên: Con người bằng da bằng thịt mới là có thật nhất! Chúa hay Ý niệm Tuyệt đối chỉ là cái bóng bị bóp méo do con người phóng chiếu nỗi sợ của mình lên rèm không trung mù mịt mà thôi. Hãy vứt bỏ Thần đạo, quay về với Tình yêu loài người thấm đượm Anthropocentrism (Con người làm chuẩn mực).'
      },
      {
        label: '5. Vực thẳm giằng xé của Tiền nhân',
        content: 'Triết học đã đến mức nghẽn cổ chai: Cầm Hegel thì có vận động luân chuyển biện chứng huy hoàng cực kỳ, nhưng đó lại là Duy tâm hư cấu. Cầm Feuerbach thì đúng thực tế Duy vật cứng rắn, nhưng lại tĩnh như pho tượng siêu hình. Phải có một thiên tài thần thánh để kết hợp hai thứ kim cương này lại. Karl Marx lộ diện, mang một cây búa sắc bén đập tan các lớp phòng thủ cuối cùng để chiết xuất tạo nên lịch sử Mới.'
      }
    ]
  },
  'mac-lenin': {
    title: 'Đỉnh cao Mác - Lênin',
    period: 'Tầm nhìn vĩnh cửu từ giữa thế kỷ XIX',
    color: 'from-red-600 to-rose-900',
    glowColor: 'bg-red-600',
    icon: '🚩',
    quote: '"Vô sản tất cả các nước, đoàn kết lại! Các anh chẳng có gì để mất ngoài những xiềng xích, nhưng sẽ có cả một thế giới để giành lấy!" - Tuyên ngôn C. Sản',
    image: '/images/5-mac-lenin.jpg',
    sections: [
      {
        label: '1. Sức ép từ vạc dầu Tư bản Châu Âu',
        content: 'Giữa thế kỷ 19, Cách mạng công nghiệp đẻ ra Giai cấp Vô sản. Số giờ làm việc 14-16h/ngày, đồng lương chết đói, lao động phụ nữ trẻ em bị bóc lột cùng cực. Phong trào công nhân đập phá máy móc nổ ra khắp nước Anh, xưởng dệt Lyon ở Pháp, thợ dệt Silezia vùng Đức sục sôi máu lửa. Tuy nhiên đám đông dũng cảm ấy chỉ như bầy sói mù đường, vì thiếu một Đăng tiêu lý luận sáng soi.'
      },
      {
        label: '2. Lật tung Phép Biện Chứng từ "Đầu" đứng sang "Chân"',
        content: 'Karl Marx, con ông luật sư Do Thái, và Friedrich Engels, con trưởng đại học xẻng nhà máy, đã chạm tay. Marx phát giác ra: Hegel hoàn toàn có lý, quy luật biện chứng là dòng chảy thật, NHƯNG nó không nằm trên Trời (Ý niệm). Nó chính bản là thế giới VẬT CHẤT, từ tự nhiên tới xã hội vô thức. Ý thức chỉ là miếng gương phản chiếu của thực tiễn vật chất. Khai sinh 100% Chủ Nghĩa Duy Vật Biện Chứng.'
      },
      {
        label: '3. Viên ngọc vô giá: Duy Vật Lịch Sử - Cơ Sở Hạ Tầng',
        content: 'Phát minh vĩ đại đầu tiên: Mác bảo vứt hết đạo đức, nghệ thuật, luật pháp hão huyền đi! Một xã hội có tồn tại được hay không quyết chí ở việc phải SẢN XUẤT RA CỦA CẢI (Lực lượng sản xuất). Quy trình sở hữu tài sản (Quan hệ sản xuất) cấu kết thành cái "Móng Nhà" (Cơ sở hạ tầng), mọi bộ máy Cảnh sát quân đội, Luật pháp, Văn hóa (Kiến trúc thượng tầng) phải được xây nương trên cái móng nhà đó!'
      },
      {
        label: '4. Vạch trần sự dối trá lớn nhất: Giá Trị Thặng Dư',
        content: 'Phát minh siêu đẳng thứ hai: Viết trong bộ "Tư Bản" (Das Kapital). Tại sao công nhân làm bạt mạng vẫn nghèo, giới chủ ngồi hút xì gà lại tỷ phú? Tư bản mua một thứ hàng hóa vô địch: "Sức lao động". Tư bản trả 5$ đủ để bù tiền gạo nước qua ngày con người (Giá trị của sức lao động). NHƯNG con người bước vào xưởng tự đẻ ra tận 30$ tiền sản phẩm (Giá trị tự phát sinh). Chủ túi đút vô túi riêng 25$. Khoản 25$ chính là máu - là Giá Trị Thặng Dư tuyệt mật.'
      },
      {
        label: '5. Ánh lửa Lênin ở Phương Đông',
        content: 'Ngót nghét đầu thế kỷ 20, Chủ nghĩa tư bản phình to nanh vuốt thành Chủ nghĩa Đế quốc (các độc quyền xâu xé trái đất chia chác thuộc địa gây Thế chiến 1). V.I Lênin kế thừa kho báu của Marx, lập lên đảng Bôn-sê-vích dũng mãnh đập tan chế độ Nga Hoàng suy đồi đốn mạt. Lênin cắm cờ Cách mạng Tháng 10 năm 1917, thổi tung chuỗi mắt xích tư bản yếu nhất để dựng nên cường quốc Liên bang Soviet rực lửa bảo kê cho loài người áp bức toàn cầu.'
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
      <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Không tìm thấy nội dung</h1>
        <button onClick={() => navigate('/')} className="text-blue-400 hover:text-blue-300 underline">Quay lại trang chủ</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 font-sans relative overflow-x-hidden selection:bg-white selection:text-black pb-24">

      {/* Banner Hero Image */}
      <div className="relative w-full h-[50vh] lg:h-[60vh] overflow-hidden flex flex-col justify-end rounded-b-[40px] shadow-2xl animate-fade-in-down mb-12">
        {data.image && (
          <img
            src={data.image}
            alt={data.title}
            className="absolute inset-0 w-full h-full object-cover transform hover:scale-[1.03] transition-transform duration-[10s]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>

        {/* Navigation Top Inside Banner */}
        <div className="absolute top-6 left-6 right-6 z-20 flex justify-between items-center">
          <button
            onClick={() => navigate('/')}
            className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 hover:bg-white/10 text-slate-200 hover:text-white transition-all shadow-lg"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span className="font-semibold text-sm tracking-wide">Trở Về Mục Lục</span>
          </button>

          <div className="hidden md:flex gap-2">
            {Object.keys(theoryData).map((key, i) => (
              <div
                key={key}
                className={`h-2 rounded-full transition-all duration-500 shadow-xl border border-white/20 ${key === id ? `w-8 ${data.glowColor}` : 'w-3 bg-white/30 hover:bg-white/50 cursor-pointer'}`}
                onClick={() => navigate(`/theory/${key}`)}
                title={theoryData[key].title}
              />
            ))}
          </div>
        </div>

        {/* Hero Title Area inside Banner */}
        <div className="relative z-10 container max-w-5xl mx-auto px-6 pb-12 w-full text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-4 px-4 py-1.5 bg-black/40 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
              <span className="text-2xl drop-shadow-md">{data.icon}</span>
              <span className="font-bold text-white tracking-wide">{data.period}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-2xl mb-2">{data.title}</h1>
          </div>

          <div className="md:max-w-xs text-right">
            <button
              onClick={() => navigate('/game')}
              className={`w-full md:w-auto px-8 py-4 bg-gradient-to-r ${data.color} hover:opacity-90 rounded-2xl font-bold text-lg text-white shadow-[0_0_30px_rgba(255,255,255,0.2)] transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2`}
            >
              Trắc Nghiệm Mục Này <span>⚔️</span>
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Quote Block */}
        {data.quote && (
          <div className="relative mb-20 px-8 py-10 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl border border-slate-700/50 shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className={`absolute top-0 left-0 w-2 h-full rounded-l-3xl bg-gradient-to-b ${data.color}`}></div>
            <span className="absolute -top-6 -left-2 text-7xl text-slate-700 font-serif opacity-50">"</span>
            <p className="text-2xl md:text-3xl text-slate-300 font-light italic leading-relaxed text-center px-4 md:px-12">
              {data.quote.split('-')[0]}
            </p>
            <p className="text-right mt-6 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-400 to-slate-200">
              - {data.quote.split('-')[1]}
            </p>
          </div>
        )}

        {/* Detailed Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {data.sections.map((sec: any, idx: number) => (
            <div
              key={idx}
              className={`bg-[#121A2F]/80 backdrop-blur-xl rounded-[2rem] p-8 lg:p-10 border border-slate-700/60 hover:border-slate-500 transition-all duration-300 shadow-xl group ${idx === data.sections.length - 1 && data.sections.length % 2 !== 0 ? 'md:col-span-2' : ''}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${data.color} shadow-lg text-xl font-black text-white/90`}>
                  {idx + 1}
                </div>
                <h3 className="text-2xl font-bold text-white tracking-wide">
                  {sec.label}
                </h3>
              </div>
              <div className="w-12 h-1 bg-slate-700 rounded-full mb-6 group-hover:bg-slate-500 transition-colors"></div>
              <p className="text-[1.1rem] text-slate-300/90 leading-relaxed whitespace-pre-line font-medium">
                {sec.content}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner Area */}
        <div className="relative overflow-hidden rounded-[3rem] p-12 md:p-20 text-center border border-slate-700/50 shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="absolute inset-0 bg-slate-800/80 backdrop-blur-2xl z-0"></div>
          <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${data.color} z-10`}></div>
          <div className={`absolute -top-24 -right-24 w-64 h-64 ${data.glowColor} rounded-full blur-[100px] opacity-20 z-0`}></div>
          <div className={`absolute -bottom-24 -left-24 w-64 h-64 ${data.glowColor} rounded-full blur-[100px] opacity-20 z-0`}></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Bạn đã thấm nhuần kiến thức?
            </h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium">
              Không có thực tiễn, lý luận chỉ là lý thuyết suông. Hãy tham gia bài thi trắc nghiệm để chứng minh năng lực hiểu biết của bạn.
            </p>
            <button
              onClick={() => navigate('/game')}
              className={`group relative inline-flex items-center justify-center px-12 py-5 font-bold text-white transition-all duration-300 bg-gradient-to-r ${data.color} rounded-full hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] hover:-translate-y-1 overflow-hidden scale-100 hover:scale-105 active:scale-95`}
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-[150%] group-hover:h-80 opacity-10"></span>
              <span className="relative flex items-center gap-3 text-xl tracking-wide">
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
