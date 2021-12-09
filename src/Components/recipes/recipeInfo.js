import React from 'react'
import {useParams} from "react-router-dom";
import axios from 'axios'
import {Grid, Image, Message} from "semantic-ui-react";
const RecipeInfo=()=>{
    const {recipeId } =useParams();
    const [recipe,setRecipe]=React.useState([])

    React.useEffect(()=>{
        getRecipeById()
    },[])
    const getRecipeById=()=>{
        axios.get('https://fit-at-home1.herokuapp.com/api/recipe/byId/'+recipeId).then(res=>{
            console.log(res)
            if(res.status===200){
                setRecipe(res.data)
            }else{
                console.log('Something Went Wrong')
            }
        }).catch(err=>console.log(err))
    }

    function replaceCommaLine(data) {
        //convert string to array and remove whitespace
        let dataToArray = data.split('--').map(item => item.trim());
        //convert array to string replacing comma with new line
        return dataToArray.map(ele=>{
            return <Message.Item>{ele}</Message.Item>
        });
    }
    return(<div>
        {console.log(recipe)}
        {recipe.length>0?<>
            <h1>Healthy Meal</h1>
        <Grid divided stackable verticalAlign={'middle'}>
            <Grid.Column width={4}>
                <Image src={`${recipe[0].photo}`} size='large' />
            </Grid.Column>
            <Grid.Column width={3}>
                <Message>
                    <Message.Header>{recipe[0].title}</Message.Header>
                    <Message.List>
               {replaceCommaLine(recipe[0].ingredients)}
                    </Message.List>
                </Message>

            </Grid.Column>
            <Grid.Column width={9}>
                <Message>    <Message.List>
                    {replaceCommaLine(recipe[0].methods)}
                </Message.List>
                </Message>
            </Grid.Column>
        </Grid>
        </>:"loading"}
        </div>)
}
export default RecipeInfo