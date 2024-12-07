interface FormHeaderOnlySectionProps {
    topLevelQuestion: string,
    subtitle?: string,
}
const FormHeaderOnlySection: React.FC<FormHeaderOnlySectionProps> = ({ topLevelQuestion, subtitle }) => {
    return (
        <div className="w-[80%] min-h-[70vh] px-[24px] py-[48px] bg-white rounded-2xl flex-col gap-8 inline-flex overflow-auto">
            <div className="flex-col justify-start items-start gap-0 inline-flex">
                <div className="text-black text-2xl font-bold font-['Inter']">{topLevelQuestion}</div>
                {subtitle && <div className="text-black/50 text-xs font-normal font-['Inter'] leading-[18px]">{subtitle}</div>}
            </div>
        </div>
    )
}

export default FormHeaderOnlySection