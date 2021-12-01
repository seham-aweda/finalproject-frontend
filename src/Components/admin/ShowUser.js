import React from 'react'
import axios from "axios";
import 'semantic-ui-css/semantic.min.css'
import { Button, Card, Image } from 'semantic-ui-react'
const ShowUser=({id,username,age,bmi,email,isActive,weight,height})=>{
    // const deleteByAdmin=()=>{
    //     axios.delete('https://fit-at-home1.herokuapp.com/api/users/delete/'+id).then(res=>{
    //         console.log(res)
    //     }).catch(e=>{console.log(e)})
    // }
    const handler=(e)=>{
        console.log(e.target.id)
    }
    return(
        <div className={"usersheet"}>
                <Card>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='/images/avatar/large/steve.jpg'
                        />
                        <Card.Header>{username}</Card.Header>
                        <Card.Meta>Active : {isActive?'🟢':'🔴'}</Card.Meta>
                        <Card.Description>
                            <div className={"space-between"}><span>Weight  :  {weight}</span><span>Height  :  {height}</span></div>
                            <div className={"space-between"}><span>Age  :  {age}</span><span>BMI  :  {bmi}</span></div>

                            E-mail  : {email}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button id={id} basic color='red' onClick={ handler}>
                                Delete
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
        </div>
    )
}
export default ShowUser