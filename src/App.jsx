import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import { countryState } from "./context/CountryProvider";
import LandingPage from "./pages/LandingPage";

function App() {
  const { country } = countryState();
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path={`/${country}`} element={<CountryPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;