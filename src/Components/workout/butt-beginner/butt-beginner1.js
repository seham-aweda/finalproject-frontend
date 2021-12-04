import React from 'react'
import video from '../videos/butt beginners/butt-beginner-1.mp4'
import Countdown from 'react-countdown';
import {Redirect} from "react-router-dom";
import Video2 from "./butt-beginner2";
import buttBeginnerPlan from "./workout-plans";

const Video1 = () => {
    const[exer,setExer]=React.useState(1)

    const comp=(ele)=>{
        console.log(ele)
        if(ele===true){
        console.log('2',ele)
        setExer(exer+1)}
    }
    return(
        <div>
            {console.log(exer)}
            <div className={"video"}>
                {exer === 1 ? <Video2 video={buttBeginnerPlan[0].anim} time={buttBeginnerPlan[0].time} func={comp}/>:''}
                {exer === 2 ? <Video2 video={buttBeginnerPlan[1].anim} time={buttBeginnerPlan[1].time} func={comp}/>:''}
                {exer === 3 ? <Video2 video={buttBeginnerPlan[2].anim} time={buttBeginnerPlan[2].time} func={comp}/> : ""}
                {exer === 4 ? <Video2 video={buttBeginnerPlan[3].anim} time={buttBeginnerPlan[3].time} func={comp}/>:''}
                {exer === 5 ? <Video2 video={buttBeginnerPlan[4].anim} time={buttBeginnerPlan[4].time} func={comp}/> : ""}
                {exer === 6 ? <Video2 video={buttBeginnerPlan[5].anim} time={buttBeginnerPlan[5].time} func={comp}/>:''}
                {exer === 7 ? <Video2 video={buttBeginnerPlan[6].anim} time={buttBeginnerPlan[6].time} func={comp}/> : ""}
                {exer === 8 ? <Video2 video={buttBeginnerPlan[7].anim} time={buttBeginnerPlan[7].time} func={comp}/>:""}
                {exer === 9 ? <Video2 video={buttBeginnerPlan[8].anim} time={buttBeginnerPlan[8].time} func={comp}/>:"Stop"

                }
            </div>

        </div>
    )
}
export default Video1