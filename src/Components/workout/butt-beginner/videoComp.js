import React from 'react'
import Countdown, {formatTimeDelta, zeroPad} from 'react-countdown';


const Video = ({video, time, func, exe}) => {
    const renderer = ({hours, minutes, seconds, completed}) => {
        if (completed) {
            // Render a completed state

            return 'You are good to go!';
        } else {
            // Render a countdown
            return <span>{zeroPad(minutes)} : {zeroPad(seconds)}</span>;
        }
    };
    return (
        <div>
            <div className={"video"}>
                {video.slice(video.lastIndexOf('.') + 1) === 'mp4' ?
                    <video autoPlay muted loop>
                        <source src={video}/>
                    </video> : <img src={video} alt={"Rest"}/>}
            </div>
            <div>
                {!time.toString().includes('times') ?
                    <Countdown date={Date.now() + Number(time) * 1000}
                               renderer={renderer}
                               onComplete={() => {
                                   console.log('next')
                                   func(true)
                               }}/> :
                    <button className="ui right labeled icon button" onClick={() => {func(true)}}>
                        <i className="right arrow icon"></i>
                        Next
                    </button>}
            </div>
            {exe ? ` Exercise : ${exe}/18` : ""}
            <button className="ui right labeled icon button" onClick={() => {
                !time.toString().includes('times') ?
                    formatTimeDelta({
                        days: '00',
                        hours: '00',
                        minutes: '00',
                        seconds: '00',
                    })
                    :func(true)}}>
                <i className="right arrow icon"></i>
                Skip
            </button>
        </div>
    )
}
export default Video