const checkSelections = [
  { id: "1", title: "Select 1" },
  { id: "2", title: "Select 2" },
  { id: "3", title: "Select 3" },
];

const CheckSelect: React.FC = () => {
  return (
    <fieldset>
      <legend className="text-left text-sm/6 font-semibold text-gray-900">
        Multi Select Question
      </legend>
      <p className="text-left text-sm/6 text-gray-600">Description</p>
      <div className="mt-2 space-y-1">
        {checkSelections.map((checkSelection) => (
          <div className="flex gap-3">
            <div className="flex h-6 shrink-0 items-center">
              <div className="group grid size-4 grid-cols-1">
                <input
                  id={checkSelection.id}
                  name="check-select"
                  type="checkbox"
                  className="col-start-1 row-start-1 appearance-none rounded border 
                  border-gray-300 bg-white checked:border-[#EB5E27] 
                  checked:bg-[#EB5E27] indeterminate:border-[#EB5E27] focus-visible:outline 
                  focus-visible:outline-2 focus-visible:outline-offset-2 
                  focus-visible:outline-i[#EB5E27] disabled:border-gray-300 
                  disabled:bg-gray-100 disabled:checked:bg-gray-100 
                  forced-colors:appearance-auto"
                />
                <svg
                  fill="none"
                  viewBox="0 0 14 14"
                  className="pointer-events-none col-start-1 row-start-1 size-3.5 
                  self-center justify-self-center stroke-white 
                  group-has-[:disabled]:stroke-gray-950/25"
                >
                  <path
                    d="M3 8L6 11L11 3.5"
                    strokeWidth={0.01}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-0 group-has-[:checked]:opacity-100"
                  />
                </svg>
              </div>
            </div>
            <div className="text-sm/6">
              <label htmlFor="comments" className="font-medium text-gray-900">
                {checkSelection.title}
              </label>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default CheckSelect;
