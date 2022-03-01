import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const LogIn = () => {
    const navigate = useNavigate();
    const [loginUser, setLoginUser] = React.useState({
        email: '',
        password: ''
    })
    const [users, setUsers] = React.useState([])
    const [note, setNote] = React.useState('')

    React.useEffect(() => {

        GetAllUsers()

    }, [])

    const GetAllUsers = () => {
        axios.get('https://fit-at-home1.herokuapp.com/api/users').then(res => {
            if (res.status !== 200) {
                setNote(res.data)
            } else {
                setUsers(res.data)
            }
        }).catch(e => setNote(e.message))
    }
    const changeHandler = (e) => {
        setLoginUser({...loginUser, [e.target.name]: e.target.value})
    }

    const LoggingIn = () => {
        const exist = users.find(user => user.email === loginUser.email)
        if (exist) {
            axios.post('https://fit-at-home1.herokuapp.com/api/users/login', loginUser)
                .then(res => {
                    if (res.status !== 200) {
                        setNote(res.data)
                    } else {
                        if (res.data.user.admin !== true) {
                            sessionStorage.setItem("userToken", res.data.token);
                            setNote('Welcome Back')
                            setLoginUser({
                                email: '',
                                password: ''
                            })
                            setTimeout(() => {
                                navigate('/workouts');
                            }, 1500)
                        } else if (res.data.user.admin === true) {
                            setNote('YOU ARE THE ADMIN')
                        } else {
                            setNote('You\'re not a user')
                        }
                    }
                })
                .catch(e => console.log(e))

        } else {
            setNote('Email doesn\'t exist, you probably meant to sign up')
        }
    }

    return (
        <div className="right">
            <span className="loginwith">Sign in</span>
            <input type="text" name="email" value={loginUser.email} placeholder="E-mail" onChange={changeHandler}/>
            <input type="password" name="password" value={loginUser.password} placeholder="Password"
                   onChange={changeHandler}/>
            {note}
            <input type="submit" name="signup_submit" value="log me in" onClick={LoggingIn}/>
        </div>
    )
}
export default LogIn