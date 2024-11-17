import "./index.css";
import { SmoothScrollHero } from "./landingPage/landingPage";
import { Routes, Route } from "react-router-dom";
import { Home } from "./mainPage/Home";
import LoginSignupForm from "./signupPage/signup";
// import HotelSearch from "./test";

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
