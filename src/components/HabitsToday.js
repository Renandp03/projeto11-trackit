import { useEffect, useState } from "react"
import styled from "styled-components"
import Navbar from "./Navbar"
import Footer from "./Footer"


export default function HabitsToday(props){

    const { infos } = props


    const token = infos.token
    console.log(token)

    const [ result, setResult] = useState()

    useEffect(()=>{
        fetch('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', {
          method: "GET",
          headers: {"Authorization": `Bearer ${token}`}
        }).then(res => res.json()).then(json => setResult(json));
      },[]);


      console.log(result)



      if(result!== undefined){
        if(result.length > 0){
            return(
            <>
            <Navbar infos={infos}/>
            <Screen>
            <Title>
                <h1>Segunda, 17/05</h1>
                <h2>Nenhum hábito concluído ainda</h2>
            </Title>
            {result.map((h)=> <Habit data={h} />)}
            </Screen>
            <Footer/>
            </>
        )
        }
        else{
            return(
                <>
                    <Navbar infos={infos}/>
                    <Screen>
                    <Title>
                        <h1>Segunda, 17/05</h1>
                        <h2>Nenhum hábito concluído ainda</h2>
                    </Title>
                    <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
                    </Screen>
                    <Footer/>
                </>
        )
        }
        
      }
      else{
        <Text>loading</Text>
      }
    
}



function Habit(props){

    const {data} = props
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

    return(
        <>
        <HabitStyle>
            <div>
                <h1>{data.name}</h1>
                <p>{data.currentSequence}</p>
                <p>{data.highestSequence}</p>
            </div>
            <DoneButton>
                <img src="assets/ok.svg" />
            </DoneButton>
        </HabitStyle>
        </>
    )




}

const Screen = styled.div`
    max-width: 400px;
`

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
    
const Text = styled.p`
    font-size: 18px;
    color: #666666;
    line-height: 22px;
`




