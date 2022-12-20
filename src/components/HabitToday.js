import axios from "axios"
import { useState } from "react"
import styled from "styled-components"




export default function HabitToday(props){

    const {data, token} = props
    const id = data.id
    const [check,setCheck] = useState(data.done)
    const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
    const config = { 
        headers:{
        Authorization: `Bearer ${token}`
    }
}
    
    function clickDone(){
        axios.post(url,config)
        .then(setCheck(true))
        .catch(error => alert(error.response.statusText))
    }
 
    return(
        <>
        <HabitStyle>
            <div>
                <h1>{data.name}</h1>
                <p>Sequência atual: {data.currentSequence}</p>
                <p>Seu recorde: {data.highestSequence}</p>
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
`