import { Route, Routes } from 'react-router-dom'
import Game from './pages/Game';
import SocioEconomicModel from './pages/SocioEconomicModel';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/socio-model" element={<SocioEconomicModel />} />
      </Routes>
    </div>
  );
}

export default App
