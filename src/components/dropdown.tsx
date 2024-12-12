import React, { useState } from "react";

interface DropdownProps {
    label: string;
    description: string;
    placeholder?: string;
  }

const Dropdown: React.FC<DropdownProps> = ({
    label,
    description,
    placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const options = ["Option 1", "Option 2", "Option 3"];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectOption = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col items-start gap-2 w-[398px] ml-10 mb-20">
      {/* Dropdown Title */}
      <h2 className="text-[#171717] font-inter text-sm font-bold leading-[18px]">{label}</h2>

      {/* Description */}
      <p className="text-[#A3A3A3] font-inter text-xs font-normal leading-[18px]">
        {description}
      </p>

      {/* Dropdown Trigger */}
      <button
        onClick={toggleDropdown}
        className={`w-full text-left border border-gray-300 p-2 rounded-md flex justify-between items-center ${
            isOpen ? "border-orange-600" : "hover:border-orange-600"
          } transition duration-200`}
      >
        <span>{selected || placeholder}</span>
        {isOpen ? (
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.77 12.79a.75.75 0 01-1.06-.02L10 9.293l-3.71 3.475a.75.75 0 01-1.04-1.08l4.25-4a.75.75 0 011.04 0l4.25 4a.75.75 0 01-.02 1.06z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.707l3.71-3.475a.75.75 0 011.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          )
        }
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="mt-2 w-full border border-gray-300 rounded-md shadow-md p-2">
          <div className="py-1">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => selectOption(option)}
                className="block w-full text-left px-4 py-2 hover:bg-orange-600 hover:text-black rounded-md transition duration-200"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
