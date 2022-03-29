import React from 'react'
import Nav from "../nav/nav";
import {Link, useNavigate} from "react-router-dom";
import './workout.css'
import Challenge from "./challenge";
import buttBeginner from './videos/exercise-page/Beginners-Butt.jpg'
import buttIntermediate from './videos/exercise-page/buttIntermediate.jpeg'
import buttAdvanced from './videos/exercise-page/buttAdvanced.jpg'
import thighBeginner from './videos/exercise-page/thighBeginner.jpg'
import thighIntermediate from './videos/exercise-page/thighIntermediate.jpg'
import thighAdvanced from './videos/exercise-page/thighAdvanced.jpg'
import armBeginner from './videos/exercise-page/armBeginner.jpg'
import armIntermediate from './videos/exercise-page/arms.jpg'
import armAdvanced from './videos/exercise-page/armIntermediate.jpg'
import absBeginner from './videos/exercise-page/abs begin ner.jpg'
import absIntermediate from './videos/exercise-page/abs.jpg'
import absAdvanced from './videos/exercise-page/absIntermediate.jpg'
import {Button, Form, FormField} from "semantic-ui-react";

const Workout = () => {
    const navigate = useNavigate()

    return (
        <>
            {sessionStorage.getItem('userToken') ?

                <div className="parent">
                    <div className="Header">
                        <h1>Pick A Challenge & FIRE The Place Out</h1>
                    </div>
                    <Link to={`/buttExercise/buttBeginnerPlan`}>
                        <div className="contain ButtBeginner">
                            <Challenge photo={buttBeginner} header={'Butt'} level={'Beginner'} time={11}/>
                        </div>
                    </Link>
                    <Link to={`/buttExercise/buttIntermediatePlan`}>
                        <div className="contain ButtIntermediate">
                            <Challenge photo={buttIntermediate} header={'Butt'} level={'Intermediate'} time={11}/>
                        </div>
                    </Link>
                    <Link to={`/buttExercise/buttAdvancedPlan`}>
                        <div className="contain ButtAdvanced">
                            <Challenge photo={buttAdvanced} header={'Butt'} level={'Advanced'} time={11}/>
                        </div>
                    </Link>

                    <Link to={`/thighExercise/thighBeginnerPlan`}>
                        <div className="contain ThighBeginner">
                            <Challenge photo={thighBeginner} header={'Thigh'} level={'Beginner'} time={11}/>
                        </div>
                    </Link>
                    <Link to={`/thighExercise/thighIntermediatePlan`}>
                        <div className="contain ThighIntermediate">
                            <Challenge photo={thighIntermediate} header={'Thigh'} level={'Intermediate'} time={11}/>
                        </div>
                    </Link>
                    <Link to={`/thighExercise/thighAdvancedPlan`}>
                        <div className="contain ThighAdvanced">
                            <Challenge photo={thighAdvanced} header={'Thigh'} level={'Advanced'} time={11}/>
                        </div>
                    </Link>
                    <Link to={`/ABSExercise/ABSBeginnerPlan`}>
                        <div className="contain ABSBeginner">
                            <Challenge photo={absBeginner} header={'ABS'} level={'Beginner'} time={11}/>
                        </div>
                    </Link>
                    <Link to={`/ABSExercise/ABSIntermediatePlan`}>
                        <div className="contain ABSIntermediate">
                            <Challenge photo={absIntermediate} header={'ABS'} level={'Intermediate'} time={11}/>
                        </div>
                    </Link>
                    <Link to={`/ABSExercise/ABSAdvancedPlan`}>
                        <div className="contain ABSAdvanced">
                            <Challenge photo={absAdvanced} header={'ABS'} level={'Advanced'} time={11}/>
                        </div>
                    </Link>
                    <Link to={`/armsExercise/armsBeginnerPlan`}>
                        <div className="contain ArmBeginner">
                            <Challenge photo={armBeginner} header={'Arm'} level={'Beginner'} time={11}/>
                        </div>
                    </Link>
                    <Link to={`/armsExercise/armsIntermediatePlan`}>
                        <div className="contain ArmIntermediate">
                            <Challenge photo={armIntermediate} header={'Arm'} level={'Intermediate'} time={11}/>
                        </div>
                    </Link>
                    <Link to={`/armsExercise/armsAdvancedPlan`}>
                        <div className="contain ArmAdvanced">
                            <Challenge photo={armAdvanced} header={'Arm'} level={'Advanced'} time={11}/>
                        </div>
                    </Link>
                    <div className="Footer">
                        <h4 style={{textAlign: 'center', fontSize: '140%', letterSpacing: '3px'}}>You Can Do
                            ANYTHING,Believe In Yourself</h4>
                    </div>
                    <div className='nav'>
                        <Nav/>
                    </div>
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
export default Workout