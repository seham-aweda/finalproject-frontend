import React from 'react';
import './register.css'
import backgroundVideo from '../media/background video.mp4'
import SignUp from "./signup";
import LogIn from "./login";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    return (
        <div className={"container"}>
            <div className={"video"}>
                <video width="100%" height={"100%"} src={backgroundVideo} autoPlay muted loop/>
            </div>
            <div className={"form"}>
                <div id="login-box">

                    <SignUp/>
                    <div className="or">OR</div>
                    <LogIn/>
                    <div className={'Admin'} onClick={()=>{
                        navigate('/admin')
                    }}> <input type={"submit"} value={'Admin'}/></div>
                </div>
            </div>
            
        </div>
    )
}

export default Register
