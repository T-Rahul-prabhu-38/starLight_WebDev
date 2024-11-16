import "./index.css";
import { SmoothScrollHero } from "./landingPage/landingPage";
import { Routes, Route } from "react-router-dom";
import { Home } from "./mainPage/toDo";
import LoginSignupForm from "./signupPage/signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SmoothScrollHero />} />
        <Route path="/LoginSignupForm" element={<LoginSignupForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
