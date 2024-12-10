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
                {/* TODO: Insert document upload components */}
            </div>
        </>
    )
}

const Portfolio: React.FC = () => {
    return (
        <>
            <div className="w-[80%] px-[24px] py-[48px] bg-white rounded-2xl flex-col gap-8 inline-flex overflow-auto">
                <FormHeader header="Portfolio" />
                {/* TODO: Insert document upload components */}
            </div>
        </>
    )
}

const CV: React.FC = () => {
    return (
        <>
            <div className="w-[80%] px-[24px] py-[48px] bg-white rounded-2xl flex-col gap-8 inline-flex overflow-auto">
                <FormHeader header="CV" />
                {/* TODO: Insert document upload components */}
            </div>
        </>
    )
}

export default UploadDocument