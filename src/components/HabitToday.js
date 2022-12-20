import axios from "axios"
import { useState, useEffect } from "react"
import styled from "styled-components"




export default function HabitToday(props){

    const {data, token,} = props
    
    const [check,setCheck] = useState(data.done)


    const [currentSequence, setCurrentSequence] = useState(data.currentSequence)
    const [highestSequence, setHighestSequence] = useState(data.highestSequence)
    const [record,setRecord] = useState(false)
    const numRecord = data.highestSequence
    

    useEffect(()=> {
        if(currentSequence===highestSequence && highestSequence > 0){
            setRecord(true)
        }
    },[])


    function doneFunction(){
        if(currentSequence+1 > highestSequence){
            setCurrentSequence(currentSequence+1)
            setHighestSequence(highestSequence+1)
            setRecord(true)
        }
        else{
            setCurrentSequence(currentSequence+1)
        }
        
    }

    function notDoneFunction(){
        if(currentSequence === highestSequence && record === true){
            setCurrentSequence(currentSequence-1)
            setHighestSequence(highestSequence-1)
            setRecord(false)

        }
        else{
            setCurrentSequence(currentSequence-1)
            setHighestSequence(numRecord)
        }
    }

    
    const config = { 
        headers:{
        Authorization: `Bearer ${token}`
    }
}
    
    function clickDone(){
        const id = data.id
        const urlOn = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
        const urlOff = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
        if(check===false){
            axios.post(urlOn,{},config)
            .then(doneFunction)
            .then(setCheck(true))
            .catch(error => alert(error.response.statusText))
        }
        else{
            axios.post(urlOff,{},config)
            .then(setCheck(false))
            .then(notDoneFunction)
            .catch(error => alert(error.response.statusText))
        }
    }
 
    return(
        <>
        <HabitStyle>
            <div>
                <h1>{data.name}</h1>
                <p>Sequência atual: <Sequence check={check}>{currentSequence} dias</Sequence></p>
                <p>Seu recorde: <Record record={record}>{highestSequence} dias</Record></p>
            </div>
            <DoneButton onClick={clickDone} check={check}>
                <img src="assets/ok.svg" />
            </DoneButton>
        </HabitStyle>
        </>
    )

}


const HabitStyle = styled.div`
    display: flex;
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    position: relative;
    margin-bottom: 10px;
    div{
        
        margin: 13px 0px 17px 15px;
    }
    h1{
        font-size: 20px;
        color: #666666;
        line-height: 25px;
        margin-bottom: 7px;
    }
    p{
        font-size: 13px;
        color: #666666;
        line-height: 16px;
    }
    
`
const DoneButton = styled.div`
width: 69px;
height: 69px;
border-radius: 5px;
background-color: ${props => props.check ? "#8FC549" : "#E7E7E7"};
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 0px;
right: 13px;
transition: all linear .3s;
`

const Sequence = styled.span`
        font-size: 13px;
        color: ${props => props.check ? "#8FC549" : "#666666"};
        line-height: 16px;
    
`

const Record = styled.span`
    font-size: 13px;
    color: ${props => props.record ? "#8FC549" : "#666666"};
    line-height: 16px;
    transition: all linear .3s;
`