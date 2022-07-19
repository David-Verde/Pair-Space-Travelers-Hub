/* eslint-disable no-unused-vars */
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Rockets from './Components/Rockets/Rockets';
import Profile from './Components/Profile';
import store from './configureStore';
import AllMission from './Components/Missions/AllMission';

function App() {
  return (

    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>

  );
}

export default App;
