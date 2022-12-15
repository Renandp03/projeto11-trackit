import Navbar from "./Navbar"
import styled from "styled-components"

export default function Habits(){
    return(
        <>
            <Navbar/>
            <Screen>
            <Title>Meus hábitos<button>+</button></Title>
            <p>Você não tem nenhum hábito cadastrado ainda. 
                Adicione um hábito para começar a trackear!</p>
            </Screen>
        </>
        )
}


const Title = styled.div`
    margin: 28px;
    font-size: 23px;
    color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 400px;
    button{
        margin-left: 154px;
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
    max-width: 400px;
    display: flex;
    flex-direction: column;
    p{
        font-size: 18px;
        line-height: 22.5px;
        color: #666;
    }
`


function CreateHabit(){
    return(
    <>


    </>
    )
}

