import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./Navigation/Navigation";
import HomePage from "./HomePage/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/aboutme"></Route>
        <Route path="/booking"></Route>
      </Routes>
    </Router>
  );
}

export default App;
