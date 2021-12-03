import React from 'react';
import axios from 'axios'
import './bmi.css'
import underweight from './img/underweight.jpg'
import normalweight from './img/normal-weight.jpg'
import overweight from './img/overweight.jpg'
import obesity from './img/obesity.jpg'
import extremobesity from './img/extremobesity.jpg'

const Bmi = () => {
    const [value, setValue] = React.useState({
        weight: '',
        height:''
    })
    const [heightFeet, setHeightFeet] = React.useState('')
    const [weightBound, setWeightBound] = React.useState('')
    const [BMI, setBMI] = React.useState('')
    const [idBMI, setIdBMI] = React.useState('')
    const [showImg, setShowImg] = React.useState(false)
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
        axios.post('https://fit-at-home1.herokuapp.com/api/bmi/me', value, {
            headers: {
                'Authorization': localStorage.getItem('userToken')
            }
        }).then(res => {
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

    return (
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
            <div className="ui labeled button" tabIndex="0" onClick={SetBMIToUser}>
                <div className="ui gray button">
            <i className="weight icon"></i> BMI
                </div>
                <a className="ui basic gray left pointing label">
                    {BMI}
                </a>
            </div>
            <div>
                {
                    showImg?
                        Number(BMI)<18.5? <img id={"lose"} src={underweight} alt={'underweight'}/>
                            :Number(BMI)>=18.5 && Number(BMI)<=24.9?<img src={normalweight} alt={'normal-weight'}/>
                            :Number(BMI)>=25 && Number(BMI)<=29.9?<img src={overweight} alt={'overweight'}/>
                            :Number(BMI)>=30 && Number(BMI)<=39.9?<img src={obesity} alt={'obesity'}/>
                            :Number(BMI)>=40 ?<img src={extremobesity} alt={'extremobesity'}/>
                            :'':''
                }
            </div>
        </div>
    )
}
export default Bmi