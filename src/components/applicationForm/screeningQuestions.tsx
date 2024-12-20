import { FormHeader } from "../formSections"

// TODO: add dummy questions similar to in contactInfo.tsx based on Ivy's examples

const ScreeningQuestions: React.FC = () => {
    return (
        <div className="w-[80%] h-[70vh] px-[24px] py-[48px] bg-white rounded-2xl flex-col gap-8 inline-flex overflow-auto">
            <FormHeader header="Screening Questions" subtitle="*Required" />
            { /* TODO: Same as contactInfo.tsx */ }
        </div>
    )
}

export default ScreeningQuestions