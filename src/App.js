import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Register from "./Components/register/register";
import Profile from "./Components/profile";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Register/>}/>
            <Route path="/bmi" element={"sasaas"}/>
            <Route path="/admin" element={"sasaas"}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/workouts" element={"sasaas"}/>
            <Route path="/recipes" element={"sasaas"}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
