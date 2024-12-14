import React from "react";

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;  
  className?: string; 
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick, className }) => (
  <button
    onClick={onClick}
    className={`icon-button ${className}`}
  >
    {icon && <span className="icon">{icon}</span>}
  </button>
);

export default IconButton;