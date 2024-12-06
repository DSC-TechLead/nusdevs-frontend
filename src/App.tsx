import "./App.css";
import CheckSelect from "./components/checkSelect";
import RadioSelect from "./components/radioSelect";

function App() {
  return (
    <div className="App">
      <div className="space-y-5">
        <RadioSelect />
        <CheckSelect />
      </div>
    </div>
  );
}

export default App;
