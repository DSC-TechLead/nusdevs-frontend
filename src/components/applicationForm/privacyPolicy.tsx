import PdfViewerComponent from "../pdfViewer"

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="w-[80%] h-[70vh] overflow-auto px-[24px] py-[48px] bg-white rounded-2xl flex-col gap-8 inline-flex overflow-auto">
            <div className="flex-col justify-start items-start gap-0 inline-flex">
                <div className="text-black text-2xl font-bold font-['Inter']">Privacy Policy</div>
            </div>
            <PdfViewerComponent />
            <div className="checkbox">

            </div>
        </div>
    )
}

export default PrivacyPolicy