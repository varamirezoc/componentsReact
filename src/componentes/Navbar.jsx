import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGlobe, faUser, faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className="w3-top">
        <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
            <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2" href="javascript:void(0);" onClick={() => document.getElementById('navDemo').classList.toggle('w3-show')}>
            <FontAwesomeIcon icon={faBars} />
            </a>
            <a href="#" className="w3-bar-item w3-button w3-padding-large w3-theme-d4">
            <FontAwesomeIcon icon={faHome} className="w3-margin-right" />Logo
            </a>
            <a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="News">
            <FontAwesomeIcon icon={faGlobe} />
            </a>
            <a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Account Settings">
            <FontAwesomeIcon icon={faUser} />
            </a>
            <a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Messages">
            <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <div className="w3-dropdown-hover w3-hide-small">
            <button className="w3-button w3-padding-large" title="Notifications">
                <FontAwesomeIcon icon={faBell} />
                <span className="w3-badge w3-right w3-small w3-green">3</span>
            </button>
            <div className="w3-dropdown-content w3-card-4 w3-bar-block" style={{ width: '300px' }}>
                <a href="#" className="w3-bar-item w3-button">One new friend request</a>
                <a href="#" className="w3-bar-item w3-button">John Doe posted on your wall</a>
                <a href="#" className="w3-bar-item w3-button">Jane likes your post</a>
            </div>
            </div>
            <a href="#" className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="My Account">
            <img src="https://www.w3schools.com/w3images/avatar2.png" className="w3-circle" style={{ height: '23px', width: '23px' }} alt="Avatar" />
            </a>
        </div>
        <div id="navDemo" className="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large">
            <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 1</a>
            <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 2</a>
            <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 3</a>
            <a href="#" className="w3-bar-item w3-button w3-padding-large">My Profile</a>
        </div>
        </div>
    );
};

export default Navbar;