import { Route, Routes } from 'react-router-dom'
import Game from './pages/Game';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App
