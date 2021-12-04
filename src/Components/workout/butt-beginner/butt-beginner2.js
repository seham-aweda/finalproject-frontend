import React from 'react'
import Countdown from 'react-countdown';


const Video2 = ({video,time,func}) => {
    const renderer = ({hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state

            return'You are good to go!';
        } else {
            // Render a countdown
            return <span>{seconds}</span>;
        }
    };
    return(
        <div>
            <div className={"video"}>
                {video.slice(video.lastIndexOf('.')+1)==='mp4'?
                <video autoPlay muted loop>
                    <source src={video}/>
                </video>:<img src={video} alt={"Rest"}/>}
            </div>
            {!time.toString().includes('times') ? <Countdown date={Date.now() + Number(time) * 1000}
                                                  renderer={renderer}
                                                  onComplete={() => {
                                                      console.log('next')
                                                      func(true)
                                                  }}/> : <button className="ui right labeled icon button" onClick={()=>{
                                                      func(true)
            }}>
                <i className="right arrow icon"></i>
                Next
            </button>}
        </div>
    )
}
export default Video2