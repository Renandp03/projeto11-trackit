import styled from "styled-components";

export default function Habit(){
    return(
        <HabitStyle>
            <h1>Ler 1 capítulo de livro</h1>
            <img src="assets/trash.svg"/>
            <DayButtons>
                <DayButton>D</DayButton>
                <DayButton>S</DayButton>
                <DayButton>T</DayButton>
                <DayButton>Q</DayButton>
                <DayButton>Q</DayButton>
                <DayButton>S</DayButton>
                <DayButton>S</DayButton>
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
        color: #DBDBDB;
        width:30px ;
        height:30px ;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        background-color: white;
        margin: 0px 2px;
`