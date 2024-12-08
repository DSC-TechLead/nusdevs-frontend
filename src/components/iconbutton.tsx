import React from "react";

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;  
  className?: string;    //Optional: Custom Styling
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick, className }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center w-12 h-12 bg-[#EB5E27] text-white rounded-full hover:bg-[#EB5E27] active:bg-[#BA4A1F] focus:outline-none focus:ring-2 focus:ring-[#EB5E27] ${className}`}
  >
    {icon && <span className="text-lg">{icon}</span>}
  </button>
);

export default IconButton;