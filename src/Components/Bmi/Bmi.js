import React from 'react';
import axios from 'axios'
import './bmi.css'
import underweight from './img/underweight.jpg'
import normalweight from './img/normal-weight.jpg'
import overweight from './img/overweight.jpg'
import obesity from './img/obesity.jpg'
import extremobesity from './img/extremobesity.jpg'
import { useNavigate } from 'react-router-dom';
import {Button, Form, FormField} from "semantic-ui-react";

const Bmi = () => {
    const navigate=useNavigate()
    const [value, setValue] = React.useState({
        weight: '',
        height:''
    })
    const [heightFeet, setHeightFeet] = React.useState('')
    const [weightBound, setWeightBound] = React.useState('')
    const [BMI, setBMI] = React.useState('')
    const [idBMI, setIdBMI] = React.useState('')
    const [showImg, setShowImg] = React.useState(false)
    const [note, setNote] = React.useState('')
    const RangeChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value})
    }
    React.useEffect(() => {
        toLbs(value.weight)
    }, [value.weight])

    React.useEffect(() => {
        toFeet(value.height)
    }, [value.height])

    // convert cm into ft
    const toFeet = (num) => {
        let realFeet = ((num * 0.393700) / 12);
        let feet = Math.floor(realFeet);
        let inches = Math.round((realFeet - feet) * 12);
        setHeightFeet(feet + "'" + inches);
    }
    // convert kg to lbs
    const toLbs = (num) => {
        let nearExact = num / 0.45359237;
        let lbs = Math.floor(nearExact);
        setWeightBound(lbs);
    }

const SetBMIToUser=()=> {
    if (value.weight !== "" && value.height !== "") {
        axios.post('https://fit-at-home1.herokuapp.com/api/bmi/me', value).then(res => {
            console.log(res)
            setBMI(res.data.result)
            setIdBMI(res.data._id)
            setShowImg(true)
        }).catch(err => {
            console.log(err)
        })
    }
    else{
        console.log('fill up there')
    }
}
const savingBMIToUser=()=>{
    if(value.weight && value.height){
        axios.post('https://fit-at-home1.herokuapp.com/api/users/updatingBMI/'+idBMI, value,{
            headers: {
                'Authorization': localStorage.getItem('userToken')
            }}).then(res=> {
            console.log(res)
            if(res.status===200){
            setTimeout(() => {
                navigate('/workouts')
            }, 4000)}
    else{ setNote(res.data.error)}
        }).catch(e=>console.log(e))
    }else{
        setNote('inter your height and weight')
    }
}
    return (
        <>
            {localStorage.getItem('userToken')?

                <div className={"ui container"}>
            <div className="ui inverted segment">
                <div className="ui inverted purple range" id="range-purple-inverted">
                    <input name={"height"} style={{width: "90%"}} type={'range'} min={"0"} max={'245'} step={"1"}
                           value={value.height} onChange={RangeChange}/>
                    <div className="ui small statistics">
                        <div className="ui statistic purple inverted ">
                            <div className="value">
                                {value.height}cm
                            </div>
                            <span className={"imperial"}>{heightFeet} ft</span>
                            <div className="label">
                                Height
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="ui inverted segment">
                <div className="ui inverted purple range" id="range-purple-inverted">
                    <input name={"weight"} style={{width: "90%"}} type={'range'} min={"0"} max={'245'} step={"1"}
                           value={value.weight} onChange={RangeChange}/>
                    <div className="ui small statistics">
                        <div className="ui purple inverted statistic">
                            <div className="value">
                                {value.weight}kg
                            </div>
                            <span className={"imperial"}>{weightBound} lbs</span>
                            <div className="label">
                                Weight
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="ui labeled button" tabIndex="0" >
                <div className="ui gray button" onClick={SetBMIToUser}>
            <i className="weight icon"></i> BMI
                </div>
                <button className="ui basic gray left pointing label">
                    {BMI}
                </button>
            </div>
            <div>
                <img id={"lose"} src={underweight} alt={'underweight'}/>
                    <img id={"normal"} src={normalweight} alt={'normal-weight'}/>
                    <img id={"over"} src={overweight} alt={'overweight'}/>
                    <img id={"obesity"} src={obesity} alt={'obesity'}/>
                    <img id={"extrem"} src={extremobesity} alt={'extremobesity'}/>

                { showImg?
                        BMI<18.5? Array.from(document.querySelectorAll('img')).find(im=>im.getAttribute('id')==='lose').setAttribute('class','chosen')

                    :BMI>=18.5 && BMI<=24.9?Array.from(document.querySelectorAll('img')).find(im=>im.getAttribute('id')==='normal').setAttribute('class','chosen')
                            :BMI>=25 && BMI<=29.9?Array.from(document.querySelectorAll('img')).find(im=>im.getAttribute('id')==='over').setAttribute('class','chosen')
                            :BMI>=30 && BMI<=39.9?Array.from(document.querySelectorAll('img')).find(im=>im.getAttribute('id')==='obesity').setAttribute('class','chosen')
                            :BMI>=40 ?Array.from(document.querySelectorAll('img')).find(im=>im.getAttribute('id')==='extrem').setAttribute('class','chosen')
                            :'':''
                }
            </div>
                <div style={{float:'right'}} ><button className="ui violet basic button" onClick={savingBMIToUser}>Continue</button><p>{note}</p></div>

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
export default Bmi