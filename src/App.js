import './App.css';
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from './components/Home.js';
import Start from './components/Start.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path='/Home' element={<Home />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;
