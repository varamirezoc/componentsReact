import React from 'react';
import Navbar from './componentes/Navbar';
import Profile from './componentes/Perfil';
import Acordeon from './componentes/Acordeon';
import Interests from './componentes/Intereses';
import AlertBox from './componentes/Alerta';
import Post from './componentes/Post';
import Events from './componentes/Eventos';
import FriendRequest from './componentes/SolicitudAmistad';
import Ads from './componentes/Ads';
import Footer from './componentes/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="w3-container w3-content" style={{ maxWidth: '1400px', marginTop: '80px' }}>
        <div className="w3-row">
          {/* Left Column */}
          <div className="w3-col m3">
            <Profile />
            <br />
            <Acordeon title="My Groups" icon="fa-circle-o-notch">
              <p>Some text..</p>
            </Acordeon>
            <Acordeon title="My Events" icon="fa-calendar-check-o">
              <p>Some other text..</p>
            </Acordeon>
            <Acordeon title="My Photos" icon="fa-users">
              <div className="w3-row-padding">
                <br />
                <div className="w3-half">
                  <img src="https://www.w3schools.com/w3images/lights.jpg" style={{ width: '100%' }} className="w3-margin-bottom" alt="Lights" />
                </div>
                <div className="w3-half">
                  <img src="https://www.w3schools.com/w3images/nature.jpg" style={{ width: '100%' }} className="w3-margin-bottom" alt="Nature" />
                </div>
                <div className="w3-half">
                  <img src="https://www.w3schools.com/w3images/mountains.jpg" style={{ width: '100%' }} className="w3-margin-bottom" alt="Mountains" />
                </div>
                <div className="w3-half">
                  <img src="https://www.w3schools.com/w3images/forest.jpg" style={{ width: '100%' }} className="w3-margin-bottom" alt="Forest" />
                </div>
                <div className="w3-half">
                  <img src="https://www.w3schools.com/w3images/nature.jpg" style={{ width: '100%' }} className="w3-margin-bottom" alt="Nature2" />
                </div>
                <div className="w3-half">
                  <img src="https://www.w3schools.com/w3images/snow.jpg" style={{ width: '100%' }} className="w3-margin-bottom" alt="Snow" />
                </div>
              </div>
            </Acordeon>
            <br />
            <Interests />
            <br />
            <AlertBox />
          </div>
          {/* Middle Column */}
          <div className="w3-col m7">
            <div className="w3-row-padding">
              <div className="w3-col m12">
                <div className="w3-card w3-round w3-white">
                  <div className="w3-container w3-padding">
                    <h6 className="w3-opacity">Social Media template by w3.css</h6>
                    <p contentEditable="true" className="w3-border w3-padding">Status: Feeling Blue</p>
                    <button type="button" className="w3-button w3-theme">
                      <i className="fa fa-pencil"></i> Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Post
              avatar="https://www.w3schools.com/w3images/avatar2.png"
              username="John Doe"
              time="1 min"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              images={[
                "https://www.w3schools.com/w3images/lights.jpg",
                "https://www.w3schools.com/w3images/nature.jpg"
              ]}
            />
            <Post
              avatar="https://www.w3schools.com/w3images/avatar5.png"
              username="Jane Doe"
              time="16 min"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              images={[]}
            />
            <Post
              avatar="https://www.w3schools.com/w3images/avatar6.png"
              username="Angie Jane"
              time="32 min"
              content={
                <>
                  <span>Have you seen this?</span>
                  <br />
                  <br />
                  <img src="https://www.w3schools.com/w3images/nature.jpg" style={{ width: '100%' }} className="w3-margin-bottom" alt="Nature" />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </>
              }
              images={[]}
            />
          </div>
          {/* Right Column */}
          <div className="w3-col m2">
            <Events />
            <br />
            <FriendRequest />
            <br />
            <Ads />
            <br />
            <div className="w3-card w3-round w3-white w3-padding-32 w3-center">
              <p><i className="fa fa-bug w3-xxlarge"></i></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;