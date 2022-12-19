import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CreateHabit(props){

    const {infos, listHabits, setListHabits, setNewHabit} = props
    const [name, setName] = useState("")
    const token = infos.token

    const days = [
        {day:"D",id:7},
        {day:"S",id:1},
        {day:"T",id:2},
        {day:"Q",id:3},
        {day:"Q",id:4},
        {day:"S",id:5},
        {day:"S",id:6}
    ]

    const [daysSelec, setDaysSelec] = useState([])


    function AddHabit(){
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

        const config = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }

        setNewHabit(false)

        useEffect(() => {
            const promise = axios.post(url,{name:name,days:daysSelec},config);
            promise.then(
                res => setListHabits([...listHabits,res.data])   
            )
        },[])
        
    }




    return(
        <Create>
            <input 
            onChange={e => setName(e.target.value)} 
            value={name} 
            placeholder="nome do hábito"/>
            <DayButtons>
                
                {days.map((l)=> <DayButton
                daysSelec={daysSelec} 
                setDaysSelec={setDaysSelec} 
                letra={l.day} 
                key={l.id}
                id={l.id}/>)}

            </DayButtons>
                <CancelButton>Cancelar</CancelButton>
                <SaveButton onClick={AddHabit}>Salvar</SaveButton>
            
        </Create>
    )
}

function DayButton(props){


    const { letra, id, daysSelec, setDaysSelec } = props
    const [selected, setSelected] = useState(false)
    

    function click(){
        if(selected===true){
            setSelected(false)
            setDaysSelec(daysSelec.filter(num => num!=id))
            console.log(daysSelec.filter(num => num!=id))
        }
        else{
            setSelected(true)
            setDaysSelec([...daysSelec,id])
            console.log([...daysSelec,id])
        }
    }


    return(
        <DayButtonStyled onClick={click} s={selected}>{letra}</DayButtonStyled>
    )
}


const Create = styled.div`
    width: 340px;
    height: 180px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    margin: 10px 0px 15px 0px;
    input{
        font-size: 20px;
        color: #666666;
        margin: 18px 18px 0px 19px;
        width: 303px;
        height: 45px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        padding: 0px 11px;
    }
    input::placeholder{
        color: #D4D4D4;
    }
   
`

const DayButtons = styled.div`
    position: absolute;
    top: 71px;
    left: 19px;
    display: flex;
`

const DayButtonStyled = styled.button`
        color: ${props => props.s ? "white" : "#DBDBDB"};
        width:30px ;
        height:30px ;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        background-color: ${props => props.s ? "#CFCFCF" : "white"};
        margin: 0px 2px;
`

const CancelButton = styled.span`
    color: #52B6FF;
    font-size: 16px;
    position: absolute;
    bottom: 23px;
    right: 123px;

`

const SaveButton = styled.button`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 5px;
    font-size: 16px;
    color: white;
    border: none;
    position: absolute;
    bottom: 15px;
    right: 16px;
`

