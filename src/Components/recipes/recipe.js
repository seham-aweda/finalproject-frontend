import React from 'react'
import Nav from "../nav/nav";
import {Button, CardGroup, Form, FormField} from "semantic-ui-react";
import {useNavigate} from "react-router-dom";
import OneRecipe from "./stylingCard";
import axios from 'axios'

const Recipes = () => {
    const [recipes,setRecipes]=React.useState('')
    const navigate=useNavigate()

    React.useEffect(()=>{
        AllRecipes()
    },[])
    const AllRecipes=()=>{
        axios.get('https://fit-at-home1.herokuapp.com/api/recipe/getAllRecipes').then(res=>{
            console.log(res.data)
            setRecipes(res.data)
        }).catch(err=>console.log(err))
    }
    return(
        <div >
            {localStorage.getItem('userToken')?
                <div>
                    {recipes? <CardGroup itemsPerRow={5} stackable>
                        {recipes.map(recipe=>{
                    return <OneRecipe id={recipe._id} ingredients={recipe.ingredients} method={recipe.methods} title={recipe.title} photo={recipe.photo}/>
                        })}
                    </CardGroup> :'loading'}
        </div>
                :
                <><Form loading style={{height:'90vh',width:'100vw',fontSize:'4vw',fontWeight:'500'}}>
                    You Need To Authenticate
                </Form>
                    <FormField style={{fontSize:'2vw',fontWeight:'500'}}>  To Authenticate  : <Button onClick={()=>navigate('/')}>Click Here</Button></FormField></>
            }
            <Nav/>
        </div>

    )
}
export default Recipes