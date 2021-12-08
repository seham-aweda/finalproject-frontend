import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Register from "./Components/register/register";
import Profile from "./Components/profile/profile";
import Admin from "./Components/admin/admin";
import AdminSheet from "./Components/admin/AdminSheet";
import Bmi from "./Components/Bmi/Bmi";
import Recipes from "./Components/recipes/recipe";
import Workout from "./Components/workout/workout";
import LogOut from './Components/logout/logout'
import ButtBeginner from "./Components/workout/butt-beginner/butt-beginner1";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Register/>}/>
            <Route path="/bmi" element={<Bmi/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/adminSheet" element={<AdminSheet/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/workouts" element={<Workout/>}/>
            <Route path="/buttBeginner" element={<ButtBeginner/>}/>
            <Route path="/recipes" element={<Recipes/>}/>
            {/*<Route path="/logOut" element={<LogOut/>}/>*/}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
