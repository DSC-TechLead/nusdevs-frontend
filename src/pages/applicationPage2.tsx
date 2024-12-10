
import { useState } from "react"
import ContactInfo from "../components/applicationForm/contactInfo"
import UploadDocument from "../components/applicationForm/uploadDocument"
import ScreeningQuestions from "../components/applicationForm/screeningQuestions"
import PrivacyPolicy from "../components/applicationForm/privacyPolicy"

interface ApplicationPage2Props {
    requestName: string,
    topLevelQuestion: string,
}
const ApplicationPage2: React.FC<ApplicationPage2Props> = ({ requestName, topLevelQuestion }) => {
    const [currentPageNum, setCurrentPageNum] = useState(1)

    return (
        <div className="min-h-[100vh] bg-[#F2F1F2] flex flex-col items-center gap-8">
            <div className="w-full pt-[32px] px-[10px]">
                <div className=" text-black text-lg font-bold font-['Inter']">Apply to {requestName}</div>
            </div>
            <div className="h-[70vh] w-full overflow-auto">
                {
                    currentPageNum == 1
                        ? <ContactInfo />
                        : currentPageNum == 2
                            ? <UploadDocument />
                            : currentPageNum == 3
                                ? <ScreeningQuestions />
                                : <PrivacyPolicy />
                }
            </div>

            <div className="w-[80%] h-[108px] pt-6 pb-9 justify-between items-center inline-flex">
                <div className="justify-start items-center gap-[9px] flex"></div>
                <div className="justify-start items-start flex">
                    {currentPageNum > 1 &&
                        <div className="justify-start items-start flex">
                            <div
                                className="px-7 py-3 bg-transparent rounded-[50px] justify-center items-center gap-2.5 flex"
                                onClick={() => setCurrentPageNum(currentPageNum - 1)}
                            >
                                <div className="text-center text-neutral-500 underline text-base font-medium font-['Inter'] leading-normal">Previous</div>
                            </div>
                        </div>}
                    {currentPageNum < 4 &&
                        <div className="justify-start items-start flex">
                            <div
                                className="px-7 py-3 bg-[#eb5e27] rounded-[50px] justify-center items-center gap-2.5 flex"
                                onClick={() => setCurrentPageNum(currentPageNum + 1)}
                            >
                                <div className="text-center text-white text-base font-medium font-['Inter'] leading-normal">Next</div>
                            </div>
                        </div>}
                    {currentPageNum == 4 &&
                        <div className="justify-start items-start flex">
                            <div className="px-7 py-3 bg-[#eb5e27] rounded-[50px] justify-center items-center gap-2.5 flex">
                                <div className="text-center text-white text-base font-medium font-['Inter'] leading-normal">Submit</div>
                            </div>
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default ApplicationPage2