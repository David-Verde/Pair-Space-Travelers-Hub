/* eslint-disable no-unused-vars */
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/header';
import Rockets from './Components/Rockets/Rockets';
import Profile from './Components/Profile';
import AllMission from './Components/Missions/AllMission';

function App() {
  return (

    <div className="App">
      <Header />
      <Routes>
        <Route path="/Missions" element={<AllMission />} />
        <Route path="/" element={<Rockets />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>

  );
}

export default App;

