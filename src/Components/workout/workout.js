import React from 'react'
import Nav from "../nav/nav";
import {useNavigate} from "react-router-dom";
import './workout.css'
import Challenge from "./challenge";
import buttBeginner from './videos/Beginners-Butt.jpg'
import buttIntermediate from './videos/buttIntermediate.jpeg'
import buttAdvanced from './videos/buttAdvanced.jpg'
import thighBeginner from './videos/thighBeginner.jpg'
import thighIntermediate from './videos/thighIntermediate.jpg'
import thighAdvanced from './videos/thighAdvanced.jpg'
import armBeginner from './videos/armBeginner.jpg'
import armIntermediate from './videos/arms.jpg'
import armAdvanced from './videos/armIntermediate.jpg'
import absBeginner from './videos/abs begin ner.jpg'
import absIntermediate from './videos/abs.jpg'
import absAdvanced from './videos/absIntermediate.jpg'
const Workout = () => {
const navigate=useNavigate()
    const Move=()=>{
    navigate('/buttBeginner')
    }
    return(
        <div className="parent">
            <div className="Header">
             <h1>Pick A Challenge & FIRE The Place Out</h1>
            </div>
            <div className="contain ButtBeginner" onClick={()=> navigate('/buttBeginner')}>
                <Challenge photo={buttBeginner} header={'Butt'} level={'Beginner'} time={11}/>
            </div>
            <div className="contain ButtIntermediate">
                <Challenge photo={buttIntermediate} header={'Butt'} level={'Intermediate'} time={11}/>
            </div>
            <div className="contain ButtAdvanced">
                <Challenge photo={buttAdvanced} header={'Butt'} level={'Advanced'} time={11}/>
            </div>
            <div className="contain ThighBeginner">
                <Challenge photo={thighBeginner} header={'Thigh'} level={'Beginner'} time={11}/>
            </div>
            <div className="contain ThighIntermediate">
                <Challenge photo={thighIntermediate} header={'Thigh'} level={'Intermediate'} time={11}/>
            </div>
            <div className="contain ThighAdvanced">
                <Challenge photo={thighAdvanced} header={'Thigh'} level={'Advanced'} time={11}/>
            </div>
            <div className="contain ABSBeginner">
                <Challenge photo={absBeginner} header={'ABS'} level={'Beginner'} time={11}/>
            </div>
            <div className="contain ABSIntermediate">
                <Challenge photo={absIntermediate} header={'ABS'} level={'Intermediate'} time={11}/>
            </div>
            <div className="contain ABSAdvanced">
                <Challenge photo={absAdvanced} header={'ABS'} level={'Advanced'} time={11}/>
            </div>
            <div className="contain ArmBeginner">
                <Challenge photo={armBeginner} header={'Arm'} level={'Beginner'} time={11}/>
            </div>
            <div className="contain ArmIntermediate">
                <Challenge photo={armIntermediate} header={'Arm'} level={'Intermediate'} time={11}/>
            </div>
            <div className="contain ArmAdvanced">
                <Challenge photo={armAdvanced} header={'Arm'} level={'Advanced'} time={11}/>
            </div>
            <div className="Footer">
                <h4 style={{textAlign:'center',fontSize:'140%',letterSpacing:'3px'}}>You Can Do ANYTHING,Believe In Yourself</h4>
            </div>
            <Nav/>
        </div>
    )
}
export default Workout