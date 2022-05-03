import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LandingPage from "./pages/landing/landing";
import PortfolioPage from "./pages/portfolio";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<LandingPage />}></Route> */}
        <Route path="/" element={<PortfolioPage />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
