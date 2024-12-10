import { FormHeader } from "../formSections"

const requiredDocuments = {
    resume: true,
    portfolio: true,
    cv: true
}

const UploadDocument: React.FC = () => {
    return (
        <div className="w-full flex flex-col justify-start items-center gap-3">
            <div className="w-[80%] px-[24px] py-[48px] bg-white rounded-2xl flex-col gap-8 inline-flex overflow-auto">
                <FormHeader header="Upload Documents" />
            </div>
            {requiredDocuments.resume && <Resume />}
            {requiredDocuments.portfolio && <Portfolio />}
            {requiredDocuments.cv && <CV />}
        </div>
    )
}

const Resume: React.FC = () => {
    return (
        <>
            <div className="w-[80%] px-[24px] py-[48px] bg-white rounded-2xl flex-col gap-8 inline-flex overflow-auto">
                <FormHeader header="Resume" />
                {/* Insert something here */}
            </div>
        </>
    )
}

const Portfolio: React.FC = () => {
    return (
        <>
            <div className="w-[80%] px-[24px] py-[48px] bg-white rounded-2xl flex-col gap-8 inline-flex overflow-auto">
                <FormHeader header="Portfolio" />
                {/* Insert something here */}
            </div>
        </>
    )
}

const CV: React.FC = () => {
    return (
        <>
            <div className="w-[80%] px-[24px] py-[48px] bg-white rounded-2xl flex-col gap-8 inline-flex overflow-auto">
                <FormHeader header="CV" />
                {/* Insert something here */}
            </div>
        </>
    )
}

export default UploadDocument