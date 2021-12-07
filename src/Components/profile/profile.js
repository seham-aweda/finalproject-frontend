import React from "react";
import Nav from "../nav/nav";
import Update from "./update";
import {Button, Form, FormField} from "semantic-ui-react";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";

const Profile=()=>{
    const navigate=useNavigate()
    const [note,setNote]=React.useState('')
    const [load,setLoad]=React.useState(false)
    const LogoutFromDevices=()=>{
        if(localStorage.getItem('userToken')!==null) {
setLoad(true)
            axios.get('https://fit-at-home1.herokuapp.com/api/users/logoutAll', {
                headers: {
                    'Authorization': localStorage.getItem('userToken')
                }
            }).then(res => {
                if (res.status === 200) {
                    setNote('Your Request Has Been Taken Care Of...')
                    console.log(res)
                } else {
                    setNote(res.data.error)
                    console.log(res)
                }
            })
        }else{
            setLoad(false)
             toast('Please Authenticate')
        }
    }

    const deleteMe=()=>{
        if(localStorage.getItem('userToken')!==null) {
            axios.delete('https://fit-at-home1.herokuapp.com/api/users/delete/me', {
                headers: {
                    'Authorization': localStorage.getItem('userToken')
                }
            }).then(res=>{console.log(res)
            toast(`You Account Has Been Deleted`)
                localStorage.removeItem('userToken')
                setTimeout(()=>{
                    navigate('/')
                },1500)
            })
        }else{
            toast('Please Authenticate')

        }
    }
    return(
        <div>
            {/*{console.log('load',load)}*/}
            {/*{console.log(localStorage.getItem('userToken'))}{!load}*/}
            <Form >
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

            </Form>
            {/*{!load?<Form style={{margin:'40px',fontSize:'2vw',lineHeight:'3vw'}}>*/}
            {/*Please Authenticate  :*/}

            {/*<Button onClick={()=>navigate('/')}>Click Here</Button></Form>:<></>}*/}
            <Nav/>

        </div>
    )
}
export default Profile