import React from 'react'
import Chart from 'chart.js/auto';
import axios from 'axios'
import {toast} from "react-toastify";
import Spinner from "../Spinner/spinner";
import {Button, Grid, Input, Message, MessageItem} from "semantic-ui-react";
const WeightTracking=()=>{
    const [weightsPersonArray,setWeightsPersonArray]= React.useState([])
    const [updatedDaysArray,setUpdatedDaysArray]=React.useState([])
    const [userWeightHistory,setUserWeightHistory]=React.useState('')
    const [newWeight,setNewWeight]=React.useState({
    weight:''
    })
    const [note,setNote]=React.useState('')
    React.useEffect(()=>{
        getUser()
    },[])
    React.useEffect(()=>{
        if(weightsPersonArray.length>0&& updatedDaysArray.length>0){
        getChart(weightsPersonArray,updatedDaysArray)}
    },[])


    const getUser=()=>{
        axios.get('https://fit-at-home1.herokuapp.com/api/users/me',{headers: {
                'Authorization': sessionStorage.getItem('userToken')
            }}).then(res=>{
            console.log(res.data.weightTracker)
            if(res.status===200) {
                setUserWeightHistory(res.data.weightTracker)
                // console.log(res.data.weightTracker)
            }else{
                toast(res.data)
            }
        })

    }
    const update=()=>{
        const sortedActivities = userWeightHistory.map(obj => {
            return {...obj, date: obj.date.substring(0, obj.date.indexOf('T'))}
        })
        let days = sortedActivities.map(ss => {
            return `${new Date(ss.date).getDate()}/${new Date(ss.date).getMonth()+1}`
        })
        console.log(days)
        setUpdatedDaysArray(days)
        const weights=userWeightHistory.map(obj=>{
            return obj.weight
        })
        console.log(weights)
        setWeightsPersonArray(weights)
    }
    const changeHandler=(e)=>{
        // console.log(e.target.name)
        setNewWeight({...newWeight,[e.target.name]:parseInt(e.target.value)})
    }
    const addWeightToUser=()=>{

        if(newWeight.weight!=="") {
            axios.put('https://fit-at-home1.herokuapp.com/api/users/updatingWeight', newWeight, {
                headers: {
                    'Authorization': sessionStorage.getItem('userToken')
                }
            }).then(res => {
                if(res.status===20){
                console.log('res',res)
                    setUserWeightHistory(res.data.weightTracker)
                }else{
                    console.log('errrr',res)
                    setNote(res.data)
                }
            }).catch(err=>{
                console.log(err)
            })
        }else{
            setNote('Insert Some Weight Please!')
        }
    }
    const DeleteWeightFromUser=(e)=>{
        console.log(e.target.id)
    axios.put('https://fit-at-home1.herokuapp.com/api/users/DeleteWeight/'+e.target.id,{},{
        headers: {
            'Authorization': sessionStorage.getItem('userToken')
        }
    }).then(res=>{
        setUserWeightHistory(res.data.weightTracker)
    }).catch(err=>{
        console.log(err)
    })
    }
    let myChart;
    function getChart(weight,days){
 if (myChart)
       myChart.destroy()
        const ctx = document.getElementById('myChart').getContext('2d');
         myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels:days,
                datasets: [{
                    label: '# of Votes',
                    data: weight,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 2,
                    fill: true,
                    tension: 0.5,
                    hidden:false
                }]
            },
             options: {
                 scales: {
                     y: {
                         suggestedMin: 0,
                         suggestedMax: 200
                     }
                 }
             }
        });
    }
   return(<div>
       {weightsPersonArray.length>0&& updatedDaysArray.length>0?
       <Grid centered>
           <Grid.Row>
               <Grid.Column>
<h1>Weight Tracking...</h1>
       <div style={{ AlignContent:'center', height:'50%',width:'80%'}}>
               <canvas id="myChart"></canvas>
       </div>
               </Grid.Column>
           </Grid.Row>
           <Button content='Add Weight' onClick={addWeightToUser} />
           <Input onChange={changeHandler} name={'weight'} type={'number'} placeholder='Weight...' />
           {note}
           <Grid.Row>
               <Grid.Column >
                   {userWeightHistory?
                       <Message>
                           <Message.Header>My Weight Progress</Message.Header>
                           <Message.List>
                               {userWeightHistory.map(ele => {
                                return <MessageItem key={ele._id}>Weight: {ele.weight} At {ele.date} <Button id={ele._id} content='Delete Weight' onClick={(e)=> {
                                    DeleteWeightFromUser(e)
                                }} />
                                </MessageItem>
                               })}
                           </Message.List>
                       </Message>:<></>}
               </Grid.Column>
           </Grid.Row>
       </Grid>
                   :<Button content='Show Progress' onClick={update} />
       }
   </div>)
}
export default WeightTracking
