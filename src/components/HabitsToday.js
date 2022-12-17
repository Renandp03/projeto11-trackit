import styled from "styled-components"
import Navbar from "./Navbar"


export default function HabitsToday(props){

    const { infos } = props
    return(
        <>
        <Navbar infos={infos}/>
        <Title>
            <h1>Segunda, 17/05</h1>
            <h2>Nenhum hábito concluído ainda</h2>
        </Title>
        <HabitStyle>
            <div>
                <h1>Ler 1 capítulo de livro</h1>
                <p>Sequência atual: 3 dias</p>
                <p>Seu recorde: 5 dias</p>
            </div>
            <DoneButton>
                <img src="assets/ok.svg" />
            </DoneButton>
        </HabitStyle>
        </>
    )
}


const Title = styled.div`
    margin: 28px 0px;
    
    h1{
        line-height: 29px;
        font-size: 23px;
        color: #126BA5;
    }
    h2{
        font-size: 18px;
        color: #BABABA;
        line-height: 29px;
    }

`
    




const HabitStyle = styled.div`
    display: flex;
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    position: relative;
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
    background-color: #E7E7E7;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    right: 13px;
`