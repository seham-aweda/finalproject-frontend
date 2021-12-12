import React, {useRef} from 'react'
import Countdown, {formatTimeDelta, zeroPad} from 'react-countdown';

import {Button, Grid, Icon} from "semantic-ui-react";
import {useNavigate} from "react-router-dom";


const Video = ({video, time, func, exe, text, length}) => {
    const navigate = useNavigate()
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

    return (
        <Grid style={{height:'100vh'}} stackable verticalAlign={'middle'}  >
            <Grid.Row>
                <Grid.Column width={8}>
                    <Button style={{marginTop:'0',marginBottom: '2rem'}} basic color='purple'
                            onClick={() => {
                                navigate('/workouts')
                            }}
                    >
                        Back
                    </Button>
                    {video.slice(video.lastIndexOf('.') + 1) === 'mp4' ?
                        <video style={{width:'100%'}} autoPlay playsInline muted loop>
                            <source src={video}/>
                        </video> : <img style={{width:'100%'}} src={video} alt={"Rest"}/>}
                </Grid.Column>
                <Grid.Column  width={8} textAlign={'center'}>
                    <div className={'under-video'}>
                        {video.slice(video.lastIndexOf('.') + 1) === 'mp4' ?
                            <>
                                <div style={{padding: '2vw', textAlign: 'center'}}>
                                    <h1> {exe ? ` Exercise : ${exe}/${(length + 1) / 2}` : ""}</h1>
                                </div>
                                <div className={'description'}>{text}</div>
                            </> : <div style={{padding: '2vw', textAlign: 'center'}}>
                                <h1 style={{fontSize:'200%',fontStyle: 'italic'}}> Rest</h1>
                            </div>}
                        <div className={'next'} >
                            {!time.toString().includes('times') ?
                                <>
                                    <div style={{fontSize: '3rem',marginTop: '4vw'}}>
                                        <Countdown date={Date.now() + Number(time) * 1000}
                                                   renderer={renderer}
                                                   ref={clockRef}
                                                   onComplete={() => {
                                                       console.log('next')
                                                       func(true)
                                                   }}/><br/><br/>
                                        <br/></div>
                                    <div style={{marginTop: '4vw',display: 'flex', justifyContent: 'space-around'}}>
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
                                <button style={{marginTop: '4vw'}} className="ui huge basic purple right labeled icon button" onClick={() => {
                                    func(true)
                                }}>
                                    <i className="right arrow icon"></i>
                                    Next
                                </button>}
                        </div>
                        <div className={'skip'}>
                            <button style={{marginTop: '4vw'}} className="ui huge basic purple right labeled icon button" onClick={() => {
                                func(true)
                            }}>
                                <i className="right arrow icon"></i>
                                Skip
                            </button>

                        </div>
                    </div>
                </Grid.Column>
            </Grid.Row>


        </Grid>

    )
}
export default Video
