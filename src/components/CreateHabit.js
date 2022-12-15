import styled from "styled-components";

export default function CreateHabit(){
    return(
        <Create>
            <input placeholder="nome do hábito"/>
            <DayButtons>
                <DayButton>D</DayButton>
                <DayButton>S</DayButton>
                <DayButton>T</DayButton>
                <DayButton>Q</DayButton>
                <DayButton>Q</DayButton>
                <DayButton>S</DayButton>
                <DayButton>S</DayButton>
            </DayButtons>
                <CancelButton>Cancelar</CancelButton>
                <SaveButton>Salvar</SaveButton>
            
        </Create>
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

const DayButton = styled.button`
        color: #DBDBDB;
        width:30px ;
        height:30px ;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        background-color: white;
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

