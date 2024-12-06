const radioSelections = [
  { id: "1", title: "Select 1" },
  { id: "2", title: "Select 2" },
  { id: "3", title: "Select 3" },
];

const RadioSelect: React.FC = () => {
  return (
    <fieldset>
      <legend className="text-left text-sm/6 font-semibold text-gray-900">
        Single Select Question
      </legend>
      <p className="text-left text-sm/6 text-gray-600">Description</p>
      <div className="mt-2 space-y-1">
        {radioSelections.map((radioSeletion) => (
          <div key={radioSeletion.id} className="flex items-center">
            <input
              defaultChecked={radioSeletion.id === "1"}
              id={radioSeletion.id}
              name="single-select"
              type="radio"
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
  );
};

export default RadioSelect;
