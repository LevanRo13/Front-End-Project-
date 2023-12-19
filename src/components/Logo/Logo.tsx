import React from 'react';
import './Logo.css';  // Asegúrate de tener el archivo CSS correspondiente

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
        <div className="lines-container">
            <div className="line cyan"></div>
            <div className="line yellow"></div>
            <div className="line cyan"></div>
        </div>
        <div className="text-container">
            <div className="text">SMART</div>
            <div className="text">ARGENTINA</div>
        </div>
    </div>
  );
}

export default Logo;