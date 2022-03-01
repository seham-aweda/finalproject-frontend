import React from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import '../register/register.css'
import {Button} from "semantic-ui-react";

const Admin = () => {
    const navigate = useNavigate();
    const [admin, setAdmin] = React.useState({
        email: '',
        password: ''
    })
    const [note, setNote] = React.useState('')
    const changeHandler = (e) => {
        setAdmin({...admin, [e.target.name]: e.target.value})
    }

    const LogInAdmin = () => {
        axios.post('https://fit-at-home1.herokuapp.com/api/users/login', admin)
            .then(res => {
                if (res.status !== 200) {
                    setNote(res.data)
                } else {
                    if (res.data.user.admin === true) {
                        sessionStorage.setItem("userToken", res.data.token);
                        setNote(`Welcome Back ${res.data.user.username}`)
                        setAdmin({
                            email: '',
                            password: ''
                        })
                        setTimeout(() => {
                            navigate('/adminSheet');
                        }, 1500)
                    } else {
                        setNote('This is an Admin page only')
                    }
                }
            }).catch(e => {
            setNote(e)
        })
    }
    return (
        <>
            <Button basic color='purple'
                    onClick={() => {
                        navigate('/')
                    }}
            >
                Back
            </Button>
            <div className={"middle"}>

                <h1>Welcome Dear Admin</h1>

                <input type="text" name="email" value={admin.email} placeholder="E-mail" onChange={changeHandler}/>
                <input type="password" name="password" value={admin.password} placeholder="Password"
                       onChange={changeHandler}/>
                {note}
                <input type="submit" name="signup_submit" value="log me in" onClick={LogInAdmin}/>

            </div>
        </>
    )
}

export default Admin