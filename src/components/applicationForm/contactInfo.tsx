import { FormHeader, FormQuestion } from "../formSections";

const questions = [
  {
    question: "First Name",
    type: "Text Input Short",
  },
  {
    question: "Last Name",
    type: "Text Input Short",
  },
  {
    question: "Major",
    type: "Dropdown",
  },
  {
    question: "Year of Study",
    type: "Dropdown",
  },
  {
    question: "Phone Number",
    type: "Text Input Short",
  },
  {
    question: "School Email",
    type: "Text Input Short",
  },
  {
    question: "Telegram Handle",
    type: "Text Input Short",
  },
];

const ContactInfo: React.FC = () => {
  return (
    <div className="w-[80%] h-[70vh] px-[24px] py-[48px] bg-white rounded-2xl flex-col gap-8 inline-flex overflow-auto">
      <FormHeader header="Contact Info" />
      {questions.map((qn, index) => (
        <FormQuestion key={index} question={qn.question} type={qn.type} />
      ))}
    </div>
  );
};

export default ContactInfo;
