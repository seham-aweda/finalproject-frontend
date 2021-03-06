import React from 'react'
import {Button, Card, Form, FormField, Image, Input} from 'semantic-ui-react'
import './update.css'
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "../Spinner/spinner";

const Update = () => {
    const [currUser, setCurrUser] = React.useState('')
    const [updateUser, setUpdateUser] = React.useState({
        username: '',
        password: '',
        age: ''
    })
    const [updateBMI, setUpdateBMI] = React.useState({
        height: '',
        weight: ''
    })
    React.useEffect(() => {
        getUser()
    }, [])

    const getUser = () => {
        axios.get('https://fit-at-home1.herokuapp.com/api/users/me', {
            headers: {
                'Authorization': sessionStorage.getItem('userToken')
            }
        }).then(res => {
            if (res.status === 200 && res.data._id) {
                toast(res.data.username + ", You are Authorized now", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
                setCurrUser(res.data)
            } else {
                console.log(res)
            }
        }).catch(e => console.log(e))
    }

    const updateUserState = (e) => {
        if (e.target.value !== "") {
            setUpdateUser({...updateUser, [e.target.name]: e.target.value})
        }
    }

    const updateUserInfo = () => {
        const asArray = Object.entries(updateUser);
        const filtered = asArray.filter(([key, value]) => value !== '');
        const UserStrings = Object.fromEntries(filtered);
        axios.put('https://fit-at-home1.herokuapp.com/api/users/update/me', UserStrings, {
            headers: {
                'Authorization': sessionStorage.getItem('userToken')
            }
        }).then(res => {
            console.log(res)
        }).catch(e => console.log(e))
        setUpdateUser({
            username: '',
            password: '',
            age: ''
        })
    }
    const updateBmiState = (e) => {
        if (e.target.value.match(/^[0-9]+$/) !== null) {
            setUpdateBMI({...updateBMI, [e.target.name]: e.target.value})
        }
    }
    const updateBmiInfo = () => {
        const asArray = Object.entries(updateBMI);
        const filtered = asArray.filter(([key, value]) => value !== '');
        const BMIStrings = Object.fromEntries(filtered);

        axios.put('https://fit-at-home1.herokuapp.com/api/bmi/update', BMIStrings, {
            headers: {
                'Authorization': sessionStorage.getItem('userToken')
            }
        }).then(res => {
            console.log(res)
        }).catch(e => console.log(e))
        setUpdateBMI({
            height: '',
            weight: ''
        })
    }
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '2vw'
        }}>{currUser.bmi ?
                <Card >
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='/images/avatar/large/steve.jpg'
                        />
                        <Card.Header>{currUser.username}</Card.Header>
                        <Card.Meta>Active : {currUser.isActive?'????':'????'}</Card.Meta>
                        <Card.Description >
                            <div style={{ display:'flex',justifyContent: 'space-between'}}><span>Weight  :  {currUser.bmi.weight}</span><span>Height  :  {currUser.bmi.height}</span></div>
                            <div style={{ display:'flex',justifyContent: 'space-between'}}><span>Age  :  {currUser.age}</span><span>BMI  :  {currUser.bmi.result}</span></div>

                            E-mail  : {currUser.email}
                        </Card.Description>
                    </Card.Content>
                </Card>
                : <Spinner/>}
            <Form style={{marginTop: '7vw'}}>
                <Form.Group widths='equal'>
                    <FormField
                        id='form-input-control-user-name'
                        control={Input}
                        label='User name'
                        placeholder='User name'
                        name={'username'}
                        onChange={updateUserState}
                    />
                    <FormField
                        id='form-input-control-password'
                        control={Input}
                        label='Password'
                        placeholder='Password'
                        name={'password'}
                        onChange={updateUserState}
                    />
                    <FormField
                        id='form-input-control-age'
                        control={Input}
                        label='Age'
                        placeholder='Age'
                        name={'age'}
                        onChange={updateUserState}
                    />
                    <FormField
                        id='form-button-control-public'
                        control={Button}
                        content='Confirm'
                        label='Click To Update'
                        onClick={updateUserInfo}
                    />
                </Form.Group>
                <br/>
                <Form.Group widths='equal'>
                    <FormField
                        id='form-input-control-height'
                        control={Input}
                        label='Height'
                        placeholder='Height'
                        name={'height'}
                        onChange={updateBmiState}
                    />
                    <FormField
                        id='form-input-control-weight'
                        control={Input}
                        label='Weight'
                        placeholder='Weight'
                        name={'weight'}
                        onChange={updateBmiState}
                    />
                    <FormField
                        id='form-button-control-bmi-public'
                        control={Button}
                        content='Bmi'
                        label='Click To Update Bmi'
                        onClick={updateBmiInfo}

                    />
                </Form.Group>
            </Form>
            <ToastContainer/>

        </div>)

}
export default Update