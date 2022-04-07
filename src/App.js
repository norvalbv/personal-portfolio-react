import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/landing";
import { Portfolio } from "./pages/portfolio";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
