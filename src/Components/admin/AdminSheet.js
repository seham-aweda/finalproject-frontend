import React from 'react'
import axios from "axios";
import { Card } from 'semantic-ui-react'
import ShowUser from "./ShowUser";
import './admin.css'
const AdminSheet=()=>{
    const [Users,setUsers]=React.useState([])
    const [Note, setNote] = React.useState('')

    React.useEffect(()=>{
        AllUsers()
    },[])

    const AllUsers=()=>{
        axios.get('https://fit-at-home1.herokuapp.com/api/users').then(res => {
            console.log(res.data)
            if (res.status !== 200) {
                setNote(res.data)
            } else {
                setUsers(res.data)
            }
        }).catch(e => setNote(e))
    }
    return(
        <div className={"cont"}>
            <h1 className={"title"}>All of Your Users</h1>
            <Card.Group>
            {Users?Users.map(user=>{
                if(user.admin!==true) {
                    console.log(user)
              return <ShowUser key={user._id} id={user._id} weight={user.bmi.weight}  height={user.bmi.height} username={user.username} age={user.age} bmi={user.bmi.result} email={user.email} isActive={user.isActive}/>
                }
            }):""}
                </Card.Group>

        </div>
    )
}
export default AdminSheet