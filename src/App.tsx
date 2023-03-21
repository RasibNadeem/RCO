import WelcomePage from "./views/WelcomePage";
import "./App.css";
import { saveDataToLocalStorage } from "./utils";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    saveDataToLocalStorage();
  }, []);

  return (
    <div className="App ">
      <WelcomePage />
    </div>
  );
}

export default App;
