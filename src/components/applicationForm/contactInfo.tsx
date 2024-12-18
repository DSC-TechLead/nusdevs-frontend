import { FormHeader, FormQuestion } from "../formSections";
import TextInput from "../textInput";

const questions = [
  {
    question: "First Name",
    type: "Text Input Short",
    key: "firstName",
  },
  {
    question: "Last Name",
    type: "Text Input Short",
    key: "lastName",
  },
  {
    question: "Major",
    type: "Dropdown",
    key: "major",
  },
  {
    question: "Year of Study",
    type: "Dropdown",
    key: "year",
  },
  {
    question: "Phone Number",
    type: "Text Input Short",
    key: "phoneNumber",
  },
  {
    question: "School Email",
    type: "Text Input Short",
    key: "schoolEmail",
  },
  {
    question: "Telegram Handle",
    type: "Text Input Short",
    key: "telegram",
  },
];

interface ContactInfoProps {
  firstName?: string;
  lastName?: string;
  major?: string;
  year?: string;
  phoneNumber?: string;
  schoolEmail?: string;
  telegram?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  firstName = "Bob",
  lastName = "Bob",
  major = "CS",
  year = "1",
  phoneNumber = "12345678",
  schoolEmail = "bob@u.nus.edu",
  telegram = "@bob",
}) => {
  const contactValues = {
    firstName,
    lastName,
    major,
    year,
    phoneNumber,
    schoolEmail,
    telegram,
  };

  return (
    <div className="w-[80%] h-[70vh] px-[24px] py-[48px] bg-white rounded-2xl flex-col gap-8 inline-flex overflow-auto">
      <FormHeader header="Contact Info" />
      {questions.map((qn) => (
        <TextInput
          key={qn.key}
          label={qn.question}
          placeholder={contactValues[qn.key as keyof ContactInfoProps] || ""}
          description=""
          enableCount={false}
        />
      ))}
    </div>
  );
};

export default ContactInfo;
