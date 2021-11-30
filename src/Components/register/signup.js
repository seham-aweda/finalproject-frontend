import React from 'react';
import axios from 'axios';

const SignUp = () => {
    const [user,setUser]=React.useState({
        username:"",
        email:"",
        password:"",
        password2:"",
        age:""
    })
    const [err,setErr]=React.useState('')


    const handlerChange=(e)=>{
        setUser({
            ...user,[e.target.name]:e.target.value
        })
    }


    const SignUpUser=()=>{
        if(user.password===user.password2){
            axios.post('https://fit-at-home1.herokuapp.com/api/users/register',user).then(res=>{
                console.log('registered',res)
                if(res.status!==201){
                    if(res.data.includes('duplicate')){
                        setErr('Email Already Exist')
                    }else {
                        setErr(res.data)
                    }
                }else{
                    setErr('Welcome To Our Family')
                    setUser({ username:"",
                        email:"",
                        password:"",
                        password2:"",
                        age:""})

                }
            }).catch(e=>{
                console.log(e)
            })
        }else{
            setErr('Your Passwords Must Match')
        }
    }
    return (
        <div className="left">
            <h1>Sign up</h1>

            <input type="text" name="username" value={user.username}  placeholder="Username" onChange={handlerChange}/>
            <input type="text" name="email" value={user.email} placeholder="E-mail" onChange={handlerChange}/>
            <input type="password" name="password" value={user.password} placeholder="Password" onChange={handlerChange}/>
            <input type="password" name="password2" value={user.password2}  placeholder="Retype password" onChange={handlerChange}/>
            <input type="text" name="age" value={user.age}  placeholder="Age" onChange={handlerChange}/>
            {err}
            <input type="submit" name="signup_submit" value="Sign me up" onClick={SignUpUser}/>
        </div>
    )
}
export default SignUp