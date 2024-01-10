import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./Components/Quiz";
import Result from "./Components/Result";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Key change: Using the element prop within Route */}
        <Route path="/result" element={<Result />} />
        <Route path="/" element={<Quiz />} />
      </Routes>
    </Router>
  );
};

export default App;
