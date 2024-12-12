// src/screens/ScreeningQuestion.tsx

import React, { useState } from 'react';

interface ScreeningQuestionProps {
  children: React.ReactNode;
}


const ScreeningQuestion: React.FC<ScreeningQuestionProps> = ({ children }) => {
  const [answer, setAnswer] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    console.log('Answer submitted:', answer);
  };

  return (
    <div className="flex flex-col items-start gap-[24px] w-[398px] p-[28px] 16px rounded-[16px]">
      <div className="text-[22px] text-Inter text-black font-bold leading-[28px] font-[Inter]">Screening Question</div>
      <div className="text-[#727272] text-[13px] font-[Inter] font-normal leading-[16px]">*Required Question</div>
    </div>
  );
};

export default ScreeningQuestion;
