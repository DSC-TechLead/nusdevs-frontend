import "./App.css";
import ApplicationPage from "./pages/applicationPage";

function App() {
  return (
    <div className="App">
      <ApplicationPage
        requestName="Dummy Team"
        topLevelQuestion="Contact Info"
        privacyPolicyText=""
      />
    </div>
  );
}

export default App;
