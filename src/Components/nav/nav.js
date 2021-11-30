import React from "react";
import {Link} from "react-router-dom";

const Nav=()=>{

    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                    <li>
                        <Link to="/profile"><div><span><i className="bi bi-person"></i></span></div>
                            <span>Mine</span></Link>
                    </li>
                    <li>
                        <Link to="/workouts">Training</Link>
                    </li>
                    <li>
                        <Link to="/recipes">Recipe</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav