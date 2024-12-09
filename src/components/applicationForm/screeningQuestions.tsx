const ScreeningQuestions: React.FC = () => {
    return (
        <div className="w-[80%] h-[70vh] px-[24px] py-[48px] bg-white rounded-2xl flex-col gap-8 inline-flex overflow-auto">
            <div className="flex-col justify-start items-start gap-0 inline-flex">
                <div className="text-black text-2xl font-bold font-['Inter']">Screening Questions</div>
            </div>
            <div className="w-full h-[68px] flex-col justify-start items-start">
                <div className="h-[68px] flex-col justify-start items-start gap-2 flex">
                    <div className="h-[18px] flex-col justify-start items-start gap-0.5 flex">
                        <div className="text-neutral-500 text-sm font-bold font-['Inter'] leading-[18px]">First Name*</div>
                    </div>
                    <div className="w-full h-[42px] px-4 py-3 bg-gray-100 rounded-md border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                        <div className="basis-0 text-neutral-400 text-sm font-normal font-['Inter'] leading-[18px]">Ivy</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScreeningQuestions