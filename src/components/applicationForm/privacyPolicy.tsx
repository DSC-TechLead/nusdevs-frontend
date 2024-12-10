import { FormHeader } from "../formSections";

interface PrivacyPolicyProps {
  text: string;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ text }) => {
  return (
    <div className="w-[80%] h-[70vh] overflow-auto px-[24px] py-[48px] bg-white rounded-2xl flex-col gap-8 inline-flex overflow-auto">
      <FormHeader header="Privacy Policy" />
      <div className="p-2 border border-black overflow-auto">
        <p className="text-xs text-justify">{text}</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
