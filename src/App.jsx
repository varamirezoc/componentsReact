import React from 'react';
import Navbar from './componentes/Navbar';
import Profile from './componentes/Profile';
import Acordeon from './componentes/Acordeon';
import Interests from './componentes/Interests';
import AlertBox from './componentes/AlertBox';
import Post from './componentes/Post';
import Events from './componentes/Events';
import FriendRequest from './componentes/FriendRequest';
import Ads from './componentes/Ads';
import Footer from './componentes/Footer';
import './styles/main.css';

const App = () => {
  return (
    <div className="w3-theme-l5">
      <Navbar />
      <div className="w3-container w3-content" style={{ maxWidth: '1400px', marginTop: '80px' }}>
        <div className="w3-row">
          <div className="w3-col m3">
            <Profile />
            <Accordion />
            <Interests />
            <AlertBox />
          </div>
          <div className="w3-col m7">
            <Post />
            <Post />
            <Post />
          </div>
          <div className="w3-col m2">
            <Events />
            <FriendRequest />
            <Ads />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
