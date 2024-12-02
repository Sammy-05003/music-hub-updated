import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Player } from './components/Player';
import { MainContent } from './components/MainContent';
import { MoodDetector } from './components/MoodDetector';

function App() {
  return (
    <Router>
      <div className="h-screen flex flex-col">
        <div className="flex-1 flex overflow-hidden">
          <Sidebar />
          <div className="flex-1 overflow-auto bg-gradient-to-b from-indigo-900 to-black">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/mood" element={<MoodDetector />} />
            </Routes>
          </div>
        </div>
        <Player />
      </div>
    </Router>
  );
}

export default App;