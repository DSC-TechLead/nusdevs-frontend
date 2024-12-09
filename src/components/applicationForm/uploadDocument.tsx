const UploadDocument: React.FC = () => {
    return (
        <div className="w-full flex flex-col justify-start items-center gap-3">
            <div className="w-[80%] px-[24px] py-[48px] bg-white rounded-2xl flex-col gap-8 inline-flex overflow-auto">
                <div className="flex-col justify-start items-start gap-0 inline-flex">
                    <div className="text-black text-2xl font-bold font-['Inter']">Upload Documents</div>
                </div>
            </div>
            <Resume />
            <Portfolio />
            <CV />
        </div>
    )
}

export const Resume: React.FC = () => {
    return (
        <>
            <div className="w-[80%] px-[24px] py-[48px] bg-white rounded-2xl flex-col gap-8 inline-flex overflow-auto">
                <div className="flex-col justify-start items-start gap-0 inline-flex">
                    <div className="text-black text-2xl font-bold font-['Inter']">Resume</div>
                </div>
                {/* Insert something here */}
            </div>
        </>
    )
}

export const Portfolio: React.FC = () => {
    return (
        <>
            <div className="w-[80%] px-[24px] py-[48px] bg-white rounded-2xl flex-col gap-8 inline-flex overflow-auto">
                <div className="flex-col justify-start items-start gap-0 inline-flex">
                    <div className="text-black text-2xl font-bold font-['Inter']">Portfolio</div>
                </div>
                {/* Insert something here */}
            </div>
        </>
    )
}

export const CV: React.FC = () => {
    return (
        <>
            <div className="w-[80%] px-[24px] py-[48px] bg-white rounded-2xl flex-col gap-8 inline-flex overflow-auto">
                <div className="flex-col justify-start items-start gap-0 inline-flex">
                    <div className="text-black text-2xl font-bold font-['Inter']">CV</div>
                </div>
                {/* Insert something here */}
            </div>
        </>
    )
}

export default UploadDocument