import React from 'react';
import './App.css';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import TopBar from './components/TopBar';
import { Route, Routes } from 'react-router-dom';

const Contact: React.FC = () => <div className="pt-[90px]">This is the Contact page</div>;

function App() {
  return (
    <div className="App">
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
