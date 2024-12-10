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

  const handleSelectionChange = (selectedIds: string[]) => {
    setSelectedIds(selectedIds);
  };

  return (
    <div className="App">
      <div className="space-y-5">
        <RadioSelect />
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
