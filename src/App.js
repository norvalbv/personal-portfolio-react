import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/landing";
import { Portfolio } from "./pages/portfolio";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
