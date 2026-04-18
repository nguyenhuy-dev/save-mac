import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import SocioEconomicModel from './pages/SocioEconomicModel';
import MatchingGame from './pages/MatchingGame';
import TheoryDetail from './pages/TheoryDetail';

function App() {
  return (
    <div>
      <Routes>
        {/* Đường dẫn mặc định trỏ tới trang bài học / Home */}
        <Route path="/" element={<Home />} />

        {/* Đường dẫn chi tiết từng giai đoạn */}
        <Route path="/theory/:id" element={<TheoryDetail />} />

        {/* Đường dẫn tới trò chơi trắc nghiệm */}
        <Route path="/game" element={<Game />} />
        <Route path="/game/:categoryId" element={<Game />} />
        <Route path="/socio-model" element={<SocioEconomicModel />} />
        <Route path="/matching-game" element={<MatchingGame />} />
      </Routes>
    </div>
  );
}

export default App;
