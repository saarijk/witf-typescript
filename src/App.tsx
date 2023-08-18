import Home from "@/components/Home.tsx";
import Fridge from "@/components/Fridge.tsx";
import { useState } from "react";
import { getDatabase, updateDatabase } from "@/databaseManager";

function App() {
  const [showFridge, setShowFridge] = useState<boolean>(false);

  const handleClick = () => {
    setShowFridge(true);
  };

  const clickReturn = () => {
    setShowFridge(false);
  };

  return (
    <div className="bg-gradient-yellowred h-screen">
      {showFridge ? (
        <Fridge clickReturn={clickReturn} />
      ) : (
        <Home handleClick={handleClick} />
      )}
    </div>
  );
}

export default App;
