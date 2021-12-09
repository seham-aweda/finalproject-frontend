import React, {useRef} from 'react'
import Countdown, {formatTimeDelta, zeroPad} from 'react-countdown';
import './butt-beginner.css'
import {Button, Icon} from "semantic-ui-react";
import {useNavigate} from "react-router-dom";


const Video = ({video, time, func, exe,text}) => {
    // const [pause,setPause]=React.useState(false)
    const navigate=useNavigate()
    const clockRef = useRef();
    const handleStart = () => clockRef.current.start();
    const handlePause = () => clockRef.current.pause();
    const renderer = ({hours, minutes, seconds, completed}) => {
        if (completed) {
            // Render a completed state

            return 'You are good to go!';
        } else {
            // Render a countdown
            return <span>{zeroPad(minutes)} : {zeroPad(seconds)}</span>;
        }
    };
    // const pausing=()=>{
    //     setPause(true)
    // }
    return (
        <div className={'butt-beginner'}>
          <div className={"video"} >
              <Button basic color='purple'
                      onClick={()=>{navigate('/workouts')}}
              >
                  Back
              </Button>
                   <div style={{padding:'3vw',textAlign:'center',margin:'auto'}}>
                       {exe ? ` Exercise : ${exe}/18` : ""}
                   </div>   {video.slice(video.lastIndexOf('.') + 1) === 'mp4' ?
                    <video autoPlay playsInline muted loop>
                        <source src={video}/>
                    </video> : <img src={video} alt={"Rest"}/>}
            </div>
            <div className={'under-video'} >
                <div className={'description'}>{text}</div>
                <div className={'next'}>
                    {!time.toString().includes('times') ?
                        <><div>
                        <Countdown date={Date.now() + Number(time) * 1000}
                                   renderer={renderer}
                                   ref={clockRef}
                                   onComplete={() => {
                                       console.log('next')
                                       func(true)
                                   }}/><br/><br/>
                    <br/></div>
                            <div style={{display:'flex',justifyContent:'space-around'}}>
                            <Button basic color='purple'
                                type='submit'
                                onClick={handleStart}
                            >
                               <Icon name={'play'}/>
                            </Button>
                            <Button basic color='purple'
                                type='submit'
                                onClick={handlePause}
                            >
                           <i className="fas fa-grip-lines-vertical"></i>
                            </Button></div>
                        </>
                        :
                        <button className="ui huge basic purple right labeled icon button" onClick={() => {
                            func(true)
                        }}>
                            <i className="right arrow icon"></i>
                            Next
                        </button>}
                </div>
                <div className={'skip'}>
                    <button className="ui huge basic purple right labeled icon button" onClick={() => {
                        func(true)
                    }}>
                        <i className="right arrow icon"></i>
                        Skip
                    </button>

                </div>
            </div>
        </div>
    )
}
export default Video
//
// <div className={'butt-beginner'}>
//     <div className={"video"} >
//     <div style={{padding:'3vw',textAlign:'center',margin:'auto'}}> {exe ? ` Exercise : ${exe}/18` : ""}
// </div>   {video.slice(video.lastIndexOf('.') + 1) === 'mp4' ?
//     <video autoPlay muted loop>
//         <source src={video}/>
//     </video> : <img src={video} alt={"Rest"}/>}
// </div>
// <div className={'under-video'} style={{top:video.slice(video.lastIndexOf('.') + 1) === 'mp4' ?'60%':'0%'}}>
//     <div className={'next'}>
//         {!time.toString().includes('times') ?
//             <>
//                 <Countdown date={Date.now() + Number(time) * 1000}
//                            renderer={renderer}
//                            ref={clockRef}
//                            onComplete={() => {
//                                console.log('next')
//                                func(true)
//                            }}/><br/>
//                 <br/>
//                 <div style={{display:'flex',justifyContent:'space-around'}}>
//                     <Button basic color='purple'
//                             type='submit'
//                             onClick={handleStart}
//                     >
//                         <Icon name={'play'}/>
//                     </Button>
//                     <Button basic color='purple'
//                             type='submit'
//                             onClick={handlePause}
//                     >
//                         <i className="fas fa-grip-lines-vertical"></i>
//                     </Button></div>
//             </>
//             :
//             <button className="ui huge basic purple right labeled icon button" onClick={() => {
//                 func(true)
//             }}>
//                 <i className="right arrow icon"></i>
//                 Next
//             </button>}
//     </div>
//     <div className={'skip'}>
//         <button className="ui huge basic purple right labeled icon button" onClick={() => {
//             func(true)
//         }}>
//             <i className="right arrow icon"></i>
//             Skip
//         </button>
//
//     </div>
// </div>
// </div>