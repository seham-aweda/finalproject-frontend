import React from 'react'
import Nav from "../nav/nav";
import Video1 from "./butt-beginner/butt-beginner1";
import {useNavigate} from "react-router-dom";


const Workout = () => {
const navigate=useNavigate()
    const Move=()=>{
    navigate('/video1')
    }
    return(
        <div>
             <Nav/>
          <button onClick={Move}>Start</button>
        </div>
    )
}
export default Workout