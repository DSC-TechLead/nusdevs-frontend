import { useState } from "react";
import { FormHeader } from "../formSections";

interface PrivacyPolicyProps {
  text: string;
  onSelectedChange: (isSelect: boolean) => void;
  isRead: boolean;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({
  text,
  onSelectedChange,
  isRead,
}) => {
  const handleChange = () => {
    onSelectedChange(!isRead);
  };

  return (
    <div className="w-[80%] h-[70vh] overflow-auto px-[24px] py-[48px] bg-white rounded-2xl flex-col gap-8 inline-flex overflow-auto">
      <FormHeader header="Privacy Policy" />
      <div className="p-2 border border-black overflow-auto flex-auto">
        <p className="text-xs text-justify">{text}</p>
      </div>
      <div className="flex gap-3">
        <div className="flex h-6 shrink-0 items-center">
          <div className="group grid size-4 grid-cols-1">
            <input
              name="check-select"
              type="checkbox"
              checked={isRead}
              onChange={() => handleChange()}
              className="col-start-1 row-start-1 appearance-none rounded border 
                  border-gray-300 bg-white checked:border-[#EB5E27] 
                  checked:bg-[#EB5E27] indeterminate:border-[#EB5E27] focus-visible:outline 
                  focus-visible:outline-2 focus-visible:outline-offset-2 
                  focus-visible:outline-i[#EB5E27] disabled:border-gray-300 
                  disabled:bg-gray-100 disabled:checked:bg-gray-100 
                  forced-colors:appearance-auto"
            />
            <svg
              fill="none"
              viewBox="0 0 14 14"
              className="pointer-events-none col-start-1 row-start-1 size-3.5 
                  self-center justify-self-center stroke-white 
                  group-has-[:disabled]:stroke-gray-950/25"
            >
              <path
                d="M3 8L6 11L11 3.5"
                strokeWidth={1}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-0 group-has-[:checked]:opacity-100"
              />
            </svg>
          </div>
        </div>
        <div className="text-sm/6">
          <p className="font-medium text-gray-900 text-left">
            I accept the <u>Privacy Policy</u> as well as the{" "}
            <u>Terms & Conditions</u>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
