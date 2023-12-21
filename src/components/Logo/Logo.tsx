// Logo.tsx
import React from 'react';
import './Logo.css';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`logo-container ${className || ''}`}>
      <div className="lines-container">
        <div className="line cyan"></div>
        <div className="line yellow"></div>
        <div className="line1 cyan"></div>
      </div>
      <div className="text-container">
        <div className="text">SMART</div>
        <div className="text">ARGENTINA</div>
      </div>
    </div>
  );
}

export default Logo;
