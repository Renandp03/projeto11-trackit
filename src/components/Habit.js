import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";

export default function Habit(props){

    const {token, data, listHabits, setListHabits} = props

    const name = data.name
    const days = data.days
    const id = data.id

    const weekDays = [
        {day:"D",id:7},
        {day:"S",id:1},
        {day:"T",id:2},
        {day:"Q",id:3},
        {day:"Q",id:4},
        {day:"S",id:5},
        {day:"S",id:6}
    ]

   


    function deletHabit(){
       
        const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`
     

        const config = { 
                headers:{
                Authorization: `Bearer ${token}`
            }
        }

        if(window.confirm("Tem certeza que deseja deletar esse hábito?")){
        axios.delete(url,config)
            .then(setListHabits(listHabits.filter((h)=>h.id != id)))
            .catch(error => console.log(error))
        }
    }



    return(
        <HabitStyle>
            <h1 data-text="habit-name">{name}</h1>
            <img onClick={deletHabit} data-text="habit-delete-btn" src="assets/trash.svg"/>
            <DayButtons>
                {weekDays.map((d)=> <DayButton data-text="habit-day" key={d.id} s={days.includes(d.id) && true}>{d.day}</DayButton>)}
            </DayButtons>
        </HabitStyle>
    )
}








const HabitStyle = styled.div`
    position: relative;
    background-color: white;
    width: 340px;
    height: 91px;
    border-radius: 5px;
    margin-bottom: 10px;
    h1{
        font-size: 20px;
        margin: 13px 0px 8px 15px;
        color: #666666;
    }
    img{
        width: auto;
        position: absolute;
        top: 11px;
        right: 10px;
        color: #666666;
    }
`


const DayButtons = styled.div`
    margin-left: 13px;
    display: flex;
`

const DayButton = styled.button`
        color: ${props => props.s ? "white" : "#DBDBDB"};
        width:30px ;
        height:30px ;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        background-color: ${props => props.s ? "#CFCFCF" : "white"};
        margin: 0px 2px;
`