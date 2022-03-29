import './App.css'
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import RecipeInfo from './Components/recipes/recipeInfo'

import Register from "./Components/register/register";
import Profile from "./Components/profile/profile";
import Admin from "./Components/admin/admin";
import AdminSheet from "./Components/admin/AdminSheet";
import Bmi from "./Components/Bmi/Bmi";
import Recipes from "./Components/recipes/recipe";
import Workout from "./Components/workout/workout";
import ButtBeginner from "./Components/workout/ButtExercise/butt-beginner1";
import ThighExercise from "./Components/workout/ThighExercise/ThighExercise";
import ABSExercise from "./Components/workout/ABSExercise/ABSExrecise";
import ArmExercise from "./Components/workout/ArmExercise/ArmExercise";
import WeightTracking from "./Components/weightTracking/WeightTraking";

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
                        <Route path="/buttExercise/:plan" element={<ButtBeginner/>}/>
                        <Route path="/ABSExercise/:plan" element={<ABSExercise/>}/>
                        <Route path="/armsExercise/:plan" element={<ArmExercise/>}/>
                        <Route path="/thighExercise/:plan" element={<ThighExercise/>}/>
                        <Route path="/recipes" element={<Recipes/>}/>
                        <Route path="/RecipeInfo/:recipeId" element={<RecipeInfo/>}/>
                        <Route path="/weightTracking" element={<WeightTracking/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
