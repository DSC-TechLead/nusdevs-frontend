import { useState } from "react";
import "./App.css";
import CheckSelect from "./components/checkSelect";
import RadioSelect from "./components/radioSelect";

function App() {
  const checkSelections = [
    { id: "1", title: "Select 1" },
    { id: "2", title: "Select 2" },
    { id: "3", title: "Select 3" },
  ];

  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectId, setSelectId] = useState<string>("1");

  const handleRadioChange = (selectedId: string) => {
    setSelectId(selectedId);
  };

  const handleSelectionChange = (selectedIds: string[]) => {
    setSelectedIds(selectedIds);
  };

  return (
    <div className="App">
      <div className="space-y-5">
        <RadioSelect
          selections={checkSelections}
          selectTitle="Multi Select Questions"
          onSelectionChange={handleRadioChange}
        />
        <div>{selectId}</div>
        <CheckSelect
          selections={checkSelections}
          selectTitle="Multi Select Questions"
          onSelectionChange={handleSelectionChange}
        />
        <div>{selectedIds}</div>
      </div>
    </div>
  );
}

export default App;
