import './App.css';

import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from './components/Home.js';
import Start from './components/Start.js';
import Profile from './components/Profile.js';
import Fight from './components/Fight.js';
import Tabs from './components/Tabs.js';
import InfoPage from './components/InfoPage.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Start />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Profile' element={<Profile/>} />
          <Route path='/Fight' element={<Fight />} />
          <Route path='/Tabs' element={<Tabs />} />
          <Route path='/InfoPage' element={<InfoPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
