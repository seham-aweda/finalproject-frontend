import React from 'react'
import axios from "axios";
import {Button, Card, Form, FormField} from 'semantic-ui-react'
import ShowUser from "./ShowUser";
import './admin.css'
import {useNavigate} from 'react-router-dom';
import Spinner from "../Spinner/spinner";
const AdminSheet=()=>{
      const navigate = useNavigate();
    const [Users,setUsers]=React.useState([])
    const [currentUserId,setCurrentUserId]=React.useState('')

    React.useEffect(()=>{
        AllUsers()
    },[])
    React.useEffect(()=>{
        HasBeenDeleted(currentUserId)
    },[currentUserId])

    const AllUsers=()=>{
        axios.get('https://fit-at-home1.herokuapp.com/api/users').then(res => {
            console.log(res.data)
            if (res.status !== 200) {
                console.log(res.data)
            } else {
                setUsers(res.data)}

        }).catch(e => console.log(e))
    }
    const LogOutUser=()=>{
        sessionStorage.removeItem('userToken')
         setTimeout(() => {
                          navigate('/');
                      }, 1500)
    }
   const getIdFromSon=(id)=>{
       setCurrentUserId(id)
    }

    const HasBeenDeleted=(id)=>{
        let copyUsers=[...Users]
       setUsers(copyUsers.filter(user=>user._id!==id)
       )    }
    return(
        <>
            {sessionStorage.getItem('userToken')?

                <div className={"cont"}>
            <h3> Hello Admin </h3>
            <button className="ui negative basic button" onClick={LogOutUser}>
                <i className="share square outline icon"></i>
                Log Me Out
            </button>
            <h1 className={"title"}>All of Your Users</h1>
            <Card.Group>
            {Users?Users.map(user=>{
                if(user.admin!==true) {
                    if (user.bmi) {
                        console.log(user)
                        return <ShowUser method={getIdFromSon} key={user._id} id={user._id} weight={user.bmi.weight} height={user.bmi.height}
                                         username={user.username} age={user.age} bmi={user.bmi.result}
                                         email={user.email} isActive={user.isActive}/>
                    }
                }
            }):<Spinner/>}
                </Card.Group>
        </div>
                :
                <><Form loading style={{height:'90vh',width:'100vw',fontSize:'4vw',fontWeight:'500'}}>
                    You Need To Authenticate
                </Form>
                    <FormField style={{fontSize:'2vw',fontWeight:'500'}}>  To Authenticate  : <Button onClick={()=>navigate('/')}>Click Here</Button></FormField></>
            }
        </>

    )
}
export default AdminSheet