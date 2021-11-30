import React from 'react';
import axios from 'axios';
const LogIn = () => {
    return (
        <div className="right">
            <span className="loginwith">Sign in</span>
            <input type="text" name="email"   placeholder="E-mail"/>
            <input type="password" name="password"  placeholder="Password"/>
            <input type="submit" name="signup_submit" value="log me in"/>
        </div>
    )
}
export default LogIn