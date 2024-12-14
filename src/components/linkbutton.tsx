import React from "react";

interface LinkButtonProps {
  text: string;
  href: string;
  className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ text, href, className }) => (
  <a href={href} className={`link-button ${className}`}>
    {text}
  </a>
);

export default LinkButton;