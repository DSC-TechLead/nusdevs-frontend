import React, { useState } from "react";

interface TextInputProps {
  placeholder: string;
  label?: string;
  description?: string;
  maxLength?: number;
  height?: number;
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  label = "Short Input Example",
  description = "This input is self-handled",
  maxLength = 50,
  height = 1,
}) => {
  const [value, setValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length <= maxLength) {
      setValue(inputValue);
    }
  };

  return (
    <div className="text-input-wrapper">
      <label className="text-input-label">{label}</label>
      <p className="text-input-description">{description}</p>
      <div>
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          className="text-input-textarea"
          rows={height}
          style={{ overflow: "hidden" }}
        />
      </div>
      <div className="text-input-counter">
        {value.length}/{maxLength}
      </div>
    </div>
  );
};

export default TextInput;
