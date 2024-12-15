import logo from "./logo.svg";
import "./App.css";
import CheckSelect from "./components/checkSelect";
import RadioSelect from "./components/radioSelect";
import DateField from "./components/datefield";
import Dropdown from "./components/dropdown";

function App() {
  const selections = [
    {
      id: "1",
      title: "One"
    },
    {
      id: "2",
      title: "Two"
    },
    {
      id: "3",
      title: "Three"
    },
  ]
  return (
    <div className="App flex flex-col gap-4">
      <CheckSelect selectTitle="Title" selections={selections} onSelectionChange={() => { }} error={false} />
      <RadioSelect selectTitle="Title" selections={selections} onSelectionChange={() => { }} error={true} errorMessage="This field is required"/>
      <DateField label="Date" description="Description" type="single" onChange={() => {}} error={true} errorMessage="This field is required"/>
      <Dropdown label="Dropdown" description="Description" error={true} errorMessage="This field is required"/>
    </div>
  );
}

export default App;
