import React from "react";

interface TextButtonProps {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const TextButton: React.FC<TextButtonProps> = ({ text, icon, onClick, className }) => (
  <button
    onClick={onClick}
    className={`btn btn-primary gap-2 ${className}`}
  >
    {icon && <span>{icon}</span>}
    <span>{text}</span>
  </button>
);

export default TextButton;