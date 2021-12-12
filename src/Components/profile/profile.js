import React from "react";
import Nav from "../nav/nav";
import Update from "./update";
import {Button, Form, FormField} from "semantic-ui-react";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate()
    const [note, setNote] = React.useState('')

    const LogoutFromDevices = () => {
        if (sessionStorage.getItem('userToken') !== null) {
            axios.get('https://fit-at-home1.herokuapp.com/api/users/logoutAll', {
                headers: {
                    'Authorization': sessionStorage.getItem('userToken')
                }
            }).then(res => {
                if (res.status === 200) {
                    setNote('Your Request Has Been Taken Care Of...')
                    console.log(res)
                    setTimeout(() => {
                        navigate('/')
                    }, 1500)
                } else {
                    setNote(res.data.error)
                    console.log(res)
                }
            })
        } else {
            // setLoad(false)
            toast('Please Authenticate')
        }
    }

    const deleteMe = () => {
        if (sessionStorage.getItem('userToken') !== null) {
            axios.delete('https://fit-at-home1.herokuapp.com/api/users/delete/me', {
                headers: {
                    'Authorization': sessionStorage.getItem('userToken')
                }
            }).then(res => {
                console.log(res)
                toast(`You Account Has Been Deleted`)
                sessionStorage.removeItem('userToken')
                setTimeout(() => {
                    navigate('/')
                }, 1500)
            })
        } else {
            toast('Please Authenticate')

        }
    }
    return (
        <div>
            {sessionStorage.getItem('userToken') ?
                <>
                    <Form>
                        <Update/>

                        <Form.Group>
                            <FormField
                                id='form-button-control-logoutall-public'
                                control={Button}
                                content='LogOut'
                                label='LogOut From All Devices'
                                onClick={LogoutFromDevices}
                            />
                            <FormField
                                id='form-button-control-delete-public'
                                control={Button}
                                content='Delete'
                                label='Delete Me'
                                onClick={deleteMe}

                            />
                        </Form.Group>
                        {note}
                    </Form>
                    <div style={{height: '55px'}}>
                        <Nav/></div>
                </>
                :

                <><Form loading style={{height: '90vh', width: '100vw', fontSize: '4vw', fontWeight: '500'}}>
                    You Need To Authenticate
                </Form>
                    <FormField style={{fontSize: '2vw', fontWeight: '500'}}> To Authenticate : <Button
                        onClick={() => navigate('/')}>Click Here</Button></FormField></>
            }

        </div>
    )
}
export default Profile
