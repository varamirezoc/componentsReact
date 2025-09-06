import React, { useState } from 'react';

const Acordeon = ({ title, icon, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w3-card w3-round">
            <button onClick={toggleAccordion} className="w3-button w3-block w3-theme-l1 w3-left-align">
                <i className={`fa ${icon} fa-fw w3-margin-right`}></i> {title}
            </button>
            {isOpen && <div className="w3-container">{children}</div>}
        </div>
    );
};

export default Acordeon;