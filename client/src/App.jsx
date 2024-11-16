import "./index.css";
import { SmoothScrollHero } from "./landingPage/landingPage";
import { Routes, Route } from "react-router-dom";
import { CustomKanban } from "./mainPage/toDo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SmoothScrollHero />} />
        <Route path="/home" element={<CustomKanban />} />
      </Routes>
    </>
  );
}

export default App;
