
import styled from "styled-components"
import CreateHabit from "./CreateHabit"
import Habit from "./Habit"
import Footer from "./Footer"
import { useState, useEffect } from "react"
import axios from "axios"

export default function Habits(props){

    const { infos } = props
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
    const [listHabits, setListHabits] = useState()
    const [newHabit, setNewHabit] = useState(false)



    const config = {
        headers:{
            Authorization: `Bearer ${infos.token}`
        }
    }
   
    
    useEffect(() => {
        const promise = axios.get(url,config);
        promise.then(
            res => setListHabits(res.data)
        )
    },[])


    function addHabit(){
        setNewHabit(true)
    }


    if(listHabits!==undefined){
        if(listHabits.length>0){
            return(
        <>
            
            <Screen>
            <Title>Meus hábitos<button onClick={addHabit}>+</button></Title>
            
            {newHabit && <CreateHabit infos={infos} listHabits={listHabits} setListHabits={setListHabits} setNewHabit={setNewHabit}/>}
            {listHabits.map((h)=><Habit listHabits={listHabits} setListHabits={setListHabits} data={h} token={infos.token} key={h.id}/>)}
                
                
            </Screen>
            <Footer/>
        </>
        )
        }
        else{
            return(
                <>
            
            <Screen>
                <Title>Meus hábitos<button onClick={addHabit}>+</button></Title>
                <p>Você não tem nenhum hábito cadastrado ainda. 
                    Adicione um hábito para começar a trackear!</p>   
                {newHabit && <CreateHabit infos={infos} listHabits={listHabits} setListHabits={setListHabits} setNewHabit={setNewHabit}/>}

            </Screen>
            <Footer/>
        </>
            )
        }
    }
    
}


const Title = styled.div`
    margin: 28px 0px;
    font-size: 23px;
    color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button{
        font-size: 27px;
        font-weight: 700;
        width: 40px;
        height: 35px;
        border: none;
        border-radius: 4.6px;
        background-color: #52B6FF;
        color: white;
    }
`

const Screen = styled.div`
    width: 340px;
    display: flex;
    flex-direction: column;
    p{
        font-size: 18px;
        line-height: 22.5px;
        color: #666;
        margin-bottom: 20px;
    }
`



