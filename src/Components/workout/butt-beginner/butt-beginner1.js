import React from 'react'
import Video from "./videoComp";
import buttBeginnerPlan from "./workout-plans";
import {useNavigate} from "react-router-dom";

const ButtBeginner = () => {
    const[exer,setExer]=React.useState(1)
 const navigate=useNavigate()
    const comp=(ele)=>{
        console.log(ele)
        if(ele===true){
        console.log('2',ele)
        setExer(exer+1)}
    }
    return(
        <div>
            {console.log(exer)}
            <div className={"videos"}>
                {exer === 1 ? <Video video={buttBeginnerPlan[0].anim} time={buttBeginnerPlan[0].time} exe={buttBeginnerPlan[0].exercise} text={buttBeginnerPlan[0].text} func={comp}/>:''}
                {exer === 2 ? <Video video={buttBeginnerPlan[1].anim} time={buttBeginnerPlan[1].time} func={comp}/>:''}
                {exer === 3 ? <Video video={buttBeginnerPlan[2].anim} time={buttBeginnerPlan[2].time} exe={buttBeginnerPlan[2].exercise} text={buttBeginnerPlan[2].text} func={comp}/> : ""}
                {exer === 4 ? <Video video={buttBeginnerPlan[3].anim} time={buttBeginnerPlan[3].time} func={comp}/>:''}
                {exer === 5 ? <Video video={buttBeginnerPlan[4].anim} time={buttBeginnerPlan[4].time} exe={buttBeginnerPlan[4].exercise} text={buttBeginnerPlan[4].text} func={comp}/> : ""}
                {exer === 6 ? <Video video={buttBeginnerPlan[5].anim} time={buttBeginnerPlan[5].time} func={comp}/>:''}
                {exer === 7 ? <Video video={buttBeginnerPlan[6].anim} time={buttBeginnerPlan[6].time} exe={buttBeginnerPlan[6].exercise} text={buttBeginnerPlan[6].text} func={comp}/> : ""}
                {exer === 8 ? <Video video={buttBeginnerPlan[7].anim} time={buttBeginnerPlan[7].time} func={comp}/>:""}
                {exer === 9 ? <Video video={buttBeginnerPlan[8].anim} time={buttBeginnerPlan[8].time} exe={buttBeginnerPlan[8].exercise} text={buttBeginnerPlan[8].text} func={comp}/>:""}
                {exer === 10 ? <Video video={buttBeginnerPlan[9].anim} time={buttBeginnerPlan[9].time} func={comp}/>:""}
                {exer === 11 ? <Video video={buttBeginnerPlan[10].anim} time={buttBeginnerPlan[10].time} exe={buttBeginnerPlan[10].exercise} text={buttBeginnerPlan[10].text} func={comp}/>:""}
                {exer === 12 ? <Video video={buttBeginnerPlan[11].anim} time={buttBeginnerPlan[11].time} func={comp}/>:""}
                {exer === 13 ? <Video video={buttBeginnerPlan[12].anim} time={buttBeginnerPlan[12].time} exe={buttBeginnerPlan[12].exercise} text={buttBeginnerPlan[12].text} func={comp}/>:""}
                {exer === 14 ? <Video video={buttBeginnerPlan[13].anim} time={buttBeginnerPlan[13].time} func={comp}/>:""}
                {exer === 15 ? <Video video={buttBeginnerPlan[14].anim} time={buttBeginnerPlan[14].time} exe={buttBeginnerPlan[14].exercise} text={buttBeginnerPlan[14].text} func={comp}/>:""}
                {exer === 16 ? <Video video={buttBeginnerPlan[15].anim} time={buttBeginnerPlan[15].time} func={comp}/>:""}
                {exer === 17 ? <Video video={buttBeginnerPlan[16].anim} time={buttBeginnerPlan[16].time} exe={buttBeginnerPlan[16].exercise} text={buttBeginnerPlan[16].text} func={comp}/>:""}
                {exer === 18 ? <Video video={buttBeginnerPlan[17].anim} time={buttBeginnerPlan[17].time} func={comp}/>:""}
                {exer === 19 ? <Video video={buttBeginnerPlan[18].anim} time={buttBeginnerPlan[18].time} exe={buttBeginnerPlan[18].exercise} text={buttBeginnerPlan[18].text} func={comp}/>:""}
                {exer === 20 ? <Video video={buttBeginnerPlan[19].anim} time={buttBeginnerPlan[19].time} func={comp}/>:""}
                {exer === 21 ? <Video video={buttBeginnerPlan[20].anim} time={buttBeginnerPlan[20].time} exe={buttBeginnerPlan[20].exercise} text={buttBeginnerPlan[20].text} func={comp}/>:""}
                {exer === 22 ? <Video video={buttBeginnerPlan[21].anim} time={buttBeginnerPlan[21].time} func={comp}/>:""}
                {exer === 23 ? <Video video={buttBeginnerPlan[22].anim} time={buttBeginnerPlan[22].time} exe={buttBeginnerPlan[22].exercise} text={buttBeginnerPlan[22].text} func={comp}/>:""}
                {exer === 24 ? <Video video={buttBeginnerPlan[23].anim} time={buttBeginnerPlan[23].time} func={comp}/>:""}
                {exer === 25 ? <Video video={buttBeginnerPlan[24].anim} time={buttBeginnerPlan[24].time} exe={buttBeginnerPlan[24].exercise} text={buttBeginnerPlan[24].text} func={comp}/>:""}
                {exer === 26 ? <Video video={buttBeginnerPlan[25].anim} time={buttBeginnerPlan[25].time} func={comp}/>:""}
                {exer === 27 ? <Video video={buttBeginnerPlan[26].anim} time={buttBeginnerPlan[26].time} exe={buttBeginnerPlan[26].exercise} text={buttBeginnerPlan[26].text} func={comp}/>:""}
                {exer === 28 ? <Video video={buttBeginnerPlan[27].anim} time={buttBeginnerPlan[27].time} func={comp}/>:""}
                {exer === 29 ? <Video video={buttBeginnerPlan[28].anim} time={buttBeginnerPlan[28].time} exe={buttBeginnerPlan[28].exercise} text={buttBeginnerPlan[28].text} func={comp}/>:""}
                {exer === 30 ? <Video video={buttBeginnerPlan[29].anim} time={buttBeginnerPlan[29].time} func={comp}/>:""}
                {exer === 31 ? <Video video={buttBeginnerPlan[30].anim} time={buttBeginnerPlan[30].time} exe={buttBeginnerPlan[30].exercise} text={buttBeginnerPlan[30].text} func={comp}/>:""}
                 {exer === 32 ? <Video video={buttBeginnerPlan[31].anim} time={buttBeginnerPlan[31].time} func={comp}/>:""}
                {exer === 33 ? <Video video={buttBeginnerPlan[32].anim} time={buttBeginnerPlan[32].time} exe={buttBeginnerPlan[32].exercise} text={buttBeginnerPlan[32].text} func={comp}/>:""}
                 {exer === 34 ? <Video video={buttBeginnerPlan[33].anim} time={buttBeginnerPlan[33].time} func={comp}/>:""}
                {exer === 35 ? <Video video={buttBeginnerPlan[34].anim} time={buttBeginnerPlan[34].time} exe={buttBeginnerPlan[34].exercise} text={buttBeginnerPlan[34].text} func={comp}/>:""}
                {exer === 36 ? <div style={{textAlign:'center',padding:'10vw'}}>{'Done For Today, You Can Rest Now'}
                    <br/>
                    <br/>
                    <button className="ui negative huge basic button" onClick={()=>navigate('/workouts')}>
                        <i className="share square outline icon"></i>
                       DONE
                    </button> </div>:<></>}
            </div>

        </div>
    )
}
export default ButtBeginner