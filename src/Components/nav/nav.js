import React from "react";
import {Link} from "react-router-dom";

const Nav=()=>{

    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/profile"><div><span><i style={{color:'#4a16a2'}} className="fas fa-user-circle"></i></span></div>
                            Mine</Link>
                    </li>
                    <li>
                        <Link to="/workouts">
                            <div><i style={{color:'#4a16a2'}} className="fas fa-dumbbell"></i></div>
                            Training</Link>
                    </li>
                    <li>
                        <Link to="/recipes">
                            <div><i style={{color:'#4a16a2'}} className="fas fa-concierge-bell"></i></div>
                            Recipe</Link>
                    </li>
                    <li>
                        <Link to="/logOut">
                            <div><i style={{color:'#4a16a2'}} className="share square outline icon"></i>
                            </div>
                            LogOut</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav