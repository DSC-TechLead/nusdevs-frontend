import React from "react";

interface LinkButtonProps {
  text: string;       
  href: string;       
  className?: string; // Optional for custom styles
}

const LinkButton: React.FC<LinkButtonProps> = ({ text, href, className }) => (
  <a
    href={href}
    className={`text-[#EB5E27] hover:text-[#BA4A1F] underline decoration-[#EB5E27] hover:decoration-[#BA4A1F] decoration-2 ${className}`}
  >
    {text}
  </a>
);

export default LinkButton;