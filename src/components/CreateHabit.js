import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CreateHabit(props){

    const {infos, listHabits, setListHabits, setNewHabit} = props
    const [name, setName] = useState("")
    const [loading,setLoading] = useState(false)
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
        if(name=="" || daysSelec.length==0){
            alert( "Todo hábito precisa ter um nome e pelo menos um dia da semana.")
        }
        else{
            const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

        setLoading(true)
        const dados = {name:name,days:daysSelec}


        const config = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }

       

       const promise = axios.post(url,dados,config)
       promise.then(res => setListHabits([...listHabits,res.data]))
       promise.then(()=>  setNewHabit(false))
        }
        
    }




    return(
        <Create data-text="habit-creat-container">
            <input 
            onChange={e => setName(e.target.value)} 
            value={name} 
            placeholder="nome do hábito"
            data-text="habit-name-input"/>
            <DayButtons>
                
                {days.map((l)=> <DayButton
                daysSelec={daysSelec} 
                setDaysSelec={setDaysSelec} 
                letra={l.day} 
                key={l.id}
                id={l.id}
                data-text="habit-day"/>)}

            </DayButtons>
                <CancelButton data-text="habit-creat-cancel-btn" onClick={()=> setNewHabit(false)}>Cancelar</CancelButton>
                <SaveButton data-text="habit-creat-save-btn" onClick={AddHabit}>{loading ? <img src="assets/loading.svg" alt="loading"/> : "Salvar" }</SaveButton>
            
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
        }
        else{
            setSelected(true)
            setDaysSelec([...daysSelec,id])
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

const CancelButton = styled.button`
    color: #52B6FF;
    font-size: 16px;
    position: absolute;
    bottom: 23px;
    right: 123px;
    border: none;
    background-color: white;

`

const SaveButton = styled.button`
    width: 84px;
    height: 35px;
    opacity: ${props=> props.loading ? "0.7" : "1"};
    background: #52B6FF;
    border-radius: 5px;
    font-size: 16px;
    color: white;
    border: none;
    position: absolute;
    bottom: 15px;
    right: 16px;
    img{
        width: 25px;
    }
`

