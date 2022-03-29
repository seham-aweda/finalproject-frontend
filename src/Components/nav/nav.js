import React from "react";
import {useNavigate} from "react-router-dom";
import {Icon, Menu, MenuItem} from "semantic-ui-react";
import {toast, ToastContainer} from "react-toastify";

const Nav = () => {
    const [activeItem, setActiveItem] = React.useState('')

    const navigate = useNavigate()
    const Active = (e, {name}) => {
        setActiveItem(name)
        if (name === 'Mine') {
            navigate('/profile')
        }
        if (name === 'Training') {
            navigate('/workouts')
        }
        if (name === 'Recipes') {
            navigate('/recipes')
        }
        if (name === 'Tracking') {
            navigate('/weightTracking')
        }

        if (sessionStorage.getItem('userToken') !== null) {
            if (name === 'LogOut') {
                sessionStorage.removeItem('userToken')
                toast('You Have Logged Out')
                setTimeout(() => {
                    navigate('/')
                }, 2000)
            }
        } else {
            toast('Please Authenticate', {theme: 'dark'})
        }
    }


    return (<>

            <Menu style={{height: '50px'}} icon fluid fixed={'bottom'} size={'large'} inverted widths={5}>
                <MenuItem
                    name='Mine'
                    active={activeItem === 'Mine'}
                    onClick={Active}
                ><i style={{color: '#4a16a2'}} className="fas fa-user-circle"></i>
                    &nbsp; &nbsp;       Mine
                </MenuItem>
                <MenuItem
                    name='Training'
                    active={activeItem === 'Training'}
                    onClick={Active}
                ><i style={{color: '#4a16a2'}} className="fas fa-dumbbell"></i>
                    &nbsp; &nbsp;   Training
                </MenuItem>
                <MenuItem
                    name='Recipes'
                    active={activeItem === 'Recipes'}
                    onClick={Active}
                ><i style={{color: '#4a16a2'}} className="fas fa-concierge-bell"></i>
                    &nbsp; &nbsp;     Recipes
                </MenuItem>
                <MenuItem
                    name='Tracking'
                    active={activeItem === 'Tracking'}
                    onClick={Active}
                ><Icon name={"weight"} style={{color: '#4a16a2'}}/>
                    &nbsp; &nbsp;    Weight Tracking
                </MenuItem>
                <MenuItem
                    name='LogOut'
                    active={activeItem === 'LogOut'}
                    onClick={Active}
                ><i style={{color: '#4a16a2'}} className="share square outline icon"></i>
                    &nbsp; &nbsp;     LogOut
                </MenuItem>
            </Menu>
            <ToastContainer theme={'dark'}/></>

    )
}
export default Nav
