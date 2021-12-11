import React from 'react'
import {Button, Card, Icon, Image} from "semantic-ui-react";
import RecipeInfo from './recipeInfo'
import {Link} from 'react-router-dom'
import {useNavigate} from "react-router-dom";

const OneRecipe = ({ingredients, method, title, photo, id}) => {
    // const navigate=useNavigate()
    return (
        <Card>
            <Image src={`${photo}`}/>
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='date'>Healthy Meal</span>
                </Card.Meta>
                <Card.Description>
                    {ingredients.substr(0, 70).replaceAll('--', `.\n`)}...
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Link to={`/RecipeInfo/${id}`}><Button
                    color='red'

                    icon='fire'
                    label={{basic: true, color: 'red', pointing: 'left', content: 'More'}}
                /> </Link>

            </Card.Content>
        </Card>
    )
}
export default OneRecipe