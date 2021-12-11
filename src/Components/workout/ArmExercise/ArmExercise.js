import React from 'react'
import Video from "./videoComp";
import {buttAdvancedPlan, buttBeginnerPlan, buttIntermediatePlan} from "./arm-workout-plans";
import {useNavigate, useParams} from "react-router-dom";
import {Button, Form, FormField} from "semantic-ui-react";
import Spinner from "../../Spinner/spinner";

const ButtBeginner = () => {
    let [current,setCurrent]=React.useState([])
    const {plan} = useParams();
    React.useEffect(()=>{
        if(plan==='buttBeginnerPlan') {
            setCurrent(buttBeginnerPlan)
        }
        if(plan==='buttIntermediatePlan') {
            setCurrent(buttIntermediatePlan)
        }
        if(plan==='buttAdvancedPlan'){
            setCurrent(buttAdvancedPlan)
        }
    },[])
    const [exer, setExer] = React.useState(1)
    const navigate = useNavigate()
    const comp = (ele) => {
        console.log(ele)
        if (ele === true) {
            console.log('2', ele)
            setExer(exer + 1)
        }
    }
    return (
        <>
            {sessionStorage.getItem('userToken') ?

                <div>
                    {console.log(exer)}
                    {console.log(plan)}
                    {current.length>0?
                    <div className={"videos"}>
                        {exer === 1 ? <Video length={current.length} video={current[0].anim} time={current[0].time}
                                             exe={current[0].exercise} text={current[0].text}
                                             func={comp}/> : ''}
                        {exer === 2 ?
                            <Video length={current.length} video={current[1].anim} time={current[1].time} func={comp}/> : ''}
                        {exer === 3 ? <Video length={current.length} video={current[2].anim} time={current[2].time}
                                             exe={current[2].exercise} text={current[2].text}
                                             func={comp}/> : ""}
                        {exer === 4 ?
                            <Video length={current.length} video={current[3].anim} time={current[3].time} func={comp}/> : ''}
                        {exer === 5 ? <Video length={current.length} video={current[4].anim} time={current[4].time}
                                             exe={current[4].exercise} text={current[4].text}
                                             func={comp}/> : ""}
                        {exer === 6 ?
                            <Video length={current.length} video={current[5].anim} time={current[5].time} func={comp}/> : ''}
                        {exer === 7 ? <Video length={current.length} video={current[6].anim} time={current[6].time}
                                             exe={current[6].exercise} text={current[6].text}
                                             func={comp}/> : ""}
                        {exer === 8 ?
                            <Video length={current.length} video={current[7].anim} time={current[7].time} func={comp}/> : ""}
                        {exer === 9 ? <Video length={current.length} video={current[8].anim} time={current[8].time}
                                             exe={current[8].exercise} text={current[8].text}
                                             func={comp}/> : ""}
                        {exer === 10 ?
                            <Video length={current.length} video={current[9].anim} time={current[9].time} func={comp}/> : ""}
                        {exer === 11 ? <Video length={current.length} video={current[10].anim} time={current[10].time}
                                              exe={current[10].exercise} text={current[10].text}
                                              func={comp}/> : ""}
                        {exer === 12 ? <Video length={current.length} video={current[11].anim} time={current[11].time}
                                              func={comp}/> : ""}
                        {exer === 13 ? <Video length={current.length} video={current[12].anim} time={current[12].time}
                                              exe={current[12].exercise} text={current[12].text}
                                              func={comp}/> : ""}
                        {exer === 14 ? <Video length={current.length} video={current[13].anim} time={current[13].time}
                                              func={comp}/> : ""}
                        {exer === 15 ? <Video length={current.length} video={current[14].anim} time={current[14].time}
                                              exe={current[14].exercise} text={current[14].text}
                                              func={comp}/> : ""}
                        {exer === 16 ? <Video length={current.length} video={current[15].anim} time={current[15].time}
                                              func={comp}/> : ""}
                        {exer === 17 ? <Video length={current.length} video={current[16].anim} time={current[16].time}
                                              exe={current[16].exercise} text={current[16].text}
                                              func={comp}/> : ""}
                        {exer === 18 ?
                            <div style={{textAlign: 'center', padding: '10vw'}}>{'Done For Today, You Can Rest Now'}
                                <br/>
                                <br/>
                                <button className="ui negative huge basic button" onClick={() => navigate('/workouts')}>
                                    <i className="share square outline icon"></i>
                                    DONE
                                </button>
                            </div> : <></>}
                    </div>:<Spinner/>}

                </div>
                :
                <><Form loading style={{height: '90vh', width: '100vw', fontSize: '4vw', fontWeight: '500'}}>
                    You Need To Authenticate
                </Form>
                    <FormField style={{fontSize: '2vw', fontWeight: '500'}}> To Authenticate : <Button
                        onClick={() => navigate('/')}>Click Here</Button></FormField></>
            }
        </>

    )
}
export default ButtBeginner