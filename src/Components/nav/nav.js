import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {Icon, Menu, MenuItem, Segment} from "semantic-ui-react";

const Nav=()=>{
    const [truthy,setTruthy]=React.useState({
        Mine:false,
        Training:false,
        Recipe:false,
        LogOut:false
    })
    const navigate=useNavigate()
const Active = (e) =>{
        console.log(truthy[e.target.textContent])
    if(truthy[e.target.textContent]===false) {
        setTruthy({
            ...truthy, [e.target.textContent.toString()]: true
        })
    }
    }
    return(
        <nav>
        <div className="ui inverted four item inverted large bottom fixed menu">
            {console.log(truthy)}
            <a className={truthy.Mine?"active grey item":'item'} onClick={Active} style={{display:'flex',flexDirection:'column'}}>

                    <div style={{width:"fit-content"}}><i style={{color:'#4a16a2'}} className="fas fa-user-circle"></i></div>
                <Link style={{width:'100%',height:'100%'}} to="/profile">
                    Mine</Link>
            </a>
            <a className={truthy.Training?"active grey item":'item'} onClick={Active} style={{display:'flex',flexDirection:'column'}}>
                    <div style={{width:"fit-content"}}><i style={{color:'#4a16a2'}} className="fas fa-dumbbell"></i><br/></div>
                <Link style={{width:'100%'}} to="/workouts">
                    Training</Link>

            </a>
            <a className={truthy.Recipe?"active grey item":'item'} onClick={Active} style={{display:'flex',flexDirection:'column'}}>
                    <div style={{width:"fit-content"}}><i style={{color:'#4a16a2'}} className="fas fa-concierge-bell"></i></div>
                <Link style={{width:'100%'}} to="/recipes">
                    Recipe</Link>

            </a>
            <a className={truthy.LogOut?"active grey item":'item'} onClick={Active} style={{display:'flex',flexDirection:'column'}}>
                    <div style={{width:"fit-content"}}><i style={{color:'#4a16a2'}} className="share square outline icon"></i></div>
                <Link style={{width:'100%'}} to="/logOut">

                    LogOut</Link>

            </a>
        </div>
    </nav>


    )
}
export default Nav
            // <Segment inverted>
            // <Menu compact icon='labeled' attached='bottom' size='large' black inverted secondary widths={4}>
            //     <Menu.Item
            //         name='home'
            //         // active={activeItem === 'home'}
            //         // onClick={this.handleItemClick}
            //     >
            //         <Icon name='user circle' />
            //         Mine
            //         </Menu.Item>
            //     <Menu.Item
            //         name='home'
            //         // active={activeItem === 'home'}
            //         // onClick={this.handleItemClick}
            //     >
            //         <Icon name='dumbbell' />
            //         Training
            //         </Menu.Item>
            //     <Menu.Item
            //         name='messages'
            //         // active={activeItem === 'messages'}
            //         // onClick={this.handleItemClick}
            //     >
            //         <Icon name="concierge bell" />
            //         Recipe
            //         </Menu.Item>
            //     <Menu.Item
            //         name='friends'
            //         // active={activeItem === 'friends'}
            //         onClick={()=>navigate("/workouts")}
            //       >
            //         <Icon name='share square outline icon' />
            //         LogOut
            //     </Menu.Item>
            // </Menu>
            // </Segment>
