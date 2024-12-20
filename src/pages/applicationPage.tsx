import { useState } from "react";
import ContactInfo from "../components/applicationForm/contactInfo";
import UploadDocument from "../components/applicationForm/uploadDocument";
import ScreeningQuestions from "../components/applicationForm/screeningQuestions";
import PrivacyPolicy from "../components/applicationForm/privacyPolicy";

interface ApplicationPageProps {
  requestName: string;
  topLevelQuestion: string;
  privacyPolicyText: string;
}
const ApplicationPage: React.FC<ApplicationPageProps> = ({
  requestName,
  topLevelQuestion,
  privacyPolicyText,
}) => {
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [readPolicy, setReadPolicy] = useState(false);

  //temp text
  privacyPolicyText =
    "Our registered users (“Members”) share their professional identities, engage with their network, exchange knowledge and professional insights, post and view relevant content, learn and develop skills, and find business and career opportunities. Content and data on some of our Services is viewable to non-Members (“Visitors”). We use the term “Designated Countries” to refer to countries in the European Union (EU), European Economic Area (EEA), and Switzerland. Members and Visitors located in the Designated Countries or the UK can review additional information in our European Regional Privacy Notice. If you are in the “Designated Countries”, LinkedIn Ireland Unlimited Company (“LinkedIn Ireland”) will be the controller of your personal data provided to, or collected by or for, or processed in connection with our Services. If you are outside of the Designated Countries, LinkedIn Corporation will be the controller of (or business responsible for) your personal data provided to, or collected by or for, or processed in connection with our Services. As a Visitor or Member of our Services, the collection, use and sharing of your personal data is subject to this Privacy Policy and other documents referenced in this document.";

  const handleSelectionChange = (isSelect: boolean) => {
    setReadPolicy(isSelect);
  };

  return (
    <div className="min-h-[100vh] bg-[#F2F1F2] flex flex-col items-center gap-8">
      <div className="w-full pt-[32px] px-[10px]">
        <div className=" text-black text-lg font-bold font-['Inter']">
          Apply to {requestName}
        </div>
      </div>
      <div className="h-[70vh] w-full overflow-auto">
        {currentPageNum === 1 ? (
          <ContactInfo />
        ) : currentPageNum === 2 ? (
          <UploadDocument />
        ) : currentPageNum === 3 ? (
          <ScreeningQuestions />
        ) : (
          <PrivacyPolicy
            text={privacyPolicyText}
            onSelectedChange={handleSelectionChange}
            isRead={readPolicy}
          />
        )}
      </div>

      <div className="w-[80%] h-[108px] pt-6 pb-9 justify-between items-center inline-flex">
        <div className="justify-start items-center gap-[9px] flex"></div>
        <div className="justify-start items-start flex">
          {currentPageNum > 1 && (
            // TODO: use Link Buttons components
            <div className="justify-start items-start flex">
              <div
                className="px-7 py-3 bg-transparent rounded-[50px] justify-center items-center gap-2.5 flex"
                onClick={() => setCurrentPageNum(currentPageNum - 1)}
              >
                <div className="text-center text-neutral-500 underline text-base font-medium font-['Inter'] leading-normal">
                  Previous
                </div>
              </div>
            </div>
          )}
          {currentPageNum < 4 && (
            // TODO: use Buttons components
            <div className="justify-start items-start flex">
              <div
                className="px-7 py-3 bg-[#eb5e27] rounded-[50px] justify-center items-center gap-2.5 flex"
                onClick={() => setCurrentPageNum(currentPageNum + 1)}
              >
                <div className="text-center text-white text-base font-medium font-['Inter'] leading-normal">
                  Next
                </div>
              </div>
            </div>
          )}
          {currentPageNum === 4 && (
            // TODO: use Buttons components
            // The text here is temporary for button implementation later
            <div className="justify-start items-start flex">
              <div className="px-7 py-3 bg-[#eb5e27] rounded-[50px] justify-center items-center gap-2.5 flex">
                <div className="text-center text-white text-base font-medium font-['Inter'] leading-normal">
                  Submit {readPolicy ? "true" : "false"}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;
