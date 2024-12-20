import React, { useState, useRef, forwardRef, useImperativeHandle } from "react";
import "../App.css"; // DEBUG: NEED TO IMPORT HERE BECAUSE ANIM IS IN APP.CSS

interface RequiredTextInputProps {
  placeholder: string;
  label?: string;
  description?: string;
  maxLength?: number;
  height?: number;
}

export interface RequiredTextInputRef {
  validate: () => boolean;
}

const RequiredTextInput = forwardRef<RequiredTextInputRef, RequiredTextInputProps>(
  (
    {
      placeholder,
      label = "Required Text Input",
      description = "This field must not be left unfilled.",
      maxLength = 50,
      height = 1,
    },
    ref
  ) => {
    const [value, setValue] = useState<string>("");
    const [isInvalid, setIsInvalid] = useState<boolean>(false);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const inputValue = e.target.value;
      if (inputValue.length <= maxLength) {
        setValue(inputValue);
        setIsInvalid(false);
      }
    };

    const shakeTime = 500;
    const validateInput = () => {
      if (!value.trim()) {
        setIsInvalid(true);
        inputRef.current?.classList.add("animate-shake");
        setTimeout(() => inputRef.current?.classList.remove("animate-shake"), shakeTime);
        inputRef.current?.focus();
        return false;
      }
      setIsInvalid(false);
      return true;
    };

    // expose the  validate function
    useImperativeHandle(ref, () => ({
      validate: validateInput,
    }));

    return (
      <div className="w-full max-w-md mb-4">
        <label className="block text-sm font-bold text-gray-800 mb-1">
          {label}
        </label>
        <p className="text-sm text-gray-500 mb-2">{description}</p>
        <textarea
          ref={inputRef}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          className={`w-full p-2.5 border rounded-md shadow-sm resize-none transition-all focus:outline-none ${
            isInvalid
              ? "border-red-500 focus:ring-2 focus:ring-red-300 animate-shake"
              : "border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300"
          }`}
          rows={height}
        />
        <div className="text-right mt-1 text-xs text-gray-500">
          {value.length}/{maxLength}
        </div>
        {isInvalid && <p className="text-red-500 text-sm mt-1">This field is required. (EXAMPLE ERROR MESSAGE)</p>}
      </div>
    );
  }
);

export default RequiredTextInput;
