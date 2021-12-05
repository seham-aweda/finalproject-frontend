import React from 'react'
const Challenge = ({photo,header,level,time}) => {
    return (
        <>
            <p style={{ paddingLeft:'10px',fontSize:'140%',color:'#4a16a2',fontWeight:'600'}}>{header.toUpperCase()} WORKOUT</p>
            <img className="ui image" src={photo}/>
                <div className="content">
                    <h2>{header}</h2>
                    <h3 style={{paddingBottom:'15px'}}>{level}</h3>
                    <div>{time} minutes</div>
                </div>
        </>
    )
}
export default Challenge
