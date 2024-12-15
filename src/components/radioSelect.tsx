import { ErrorProps } from "../interfaces/errorInterface";

interface RadioSelectProps extends ErrorProps {
  selectTitle: string;
  selections: { id: string; title: string }[];
  onSelectionChange: (selected: string) => void;
}

const RadioSelect: React.FC<RadioSelectProps> = (props: RadioSelectProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onSelectionChange(event.target.id);
  };

  return (
    <div className="flex flex-col gap-0">
      <fieldset>
        <legend className="text-left text-sm/6 font-semibold text-gray-900">
          {props.selectTitle}
        </legend>
        <p className="text-left text-sm/6 text-gray-600">Description</p>
        <div className="mt-2 space-y-1">
          {props.selections.map((radioSeletion) => (
            <div key={radioSeletion.id} className="flex items-center">
              <input
                defaultChecked={radioSeletion.id === "1"}
                id={radioSeletion.id}
                name="single-select"
                type="radio"
                onChange={(event) => handleChange(event)}
                className="relative size-4 appearance-none rounded-full border border-gray-300 
              bg-white before:absolute before:inset-1 before:rounded-full before:bg-white 
              checked:border-[#EB5E27] checked:bg-[#EB5E27] focus-visible:outline 
              focus-visible:outline-2 focus-visible:outline-offset-2 
              focus-visible:outline-[#EB5E27] disabled:border-gray-300 
              disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto 
              forced-colors:before:hidden [&:not(:checked)]:before:hidden"
              />
              <label
                htmlFor={radioSeletion.id}
                className="ml-3 block text-sm/6 font-medium text-gray-900"
              >
                {radioSeletion.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
      {props.error && <div className="text-[#F81F1F] text-[12px] w-fit">{props.errorMessage}</div>}
    </div>
  );
};

export default RadioSelect;
