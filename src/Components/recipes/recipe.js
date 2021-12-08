import React from 'react'
import Nav from "../nav/nav";
import {Button, Form, FormField} from "semantic-ui-react";
import {useNavigate} from "react-router-dom";

const Recipes = () => {
    const navigate=useNavigate()
    return(
        <>
            {localStorage.getItem('userToken')?

                <div>
            <Nav/>
            new
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
export default Recipes