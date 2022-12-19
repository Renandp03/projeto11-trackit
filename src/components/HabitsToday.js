import { useEffect, useState } from "react"
import styled from "styled-components"
import 'dayjs/locale/es'
import Footer from "./Footer"


export default function HabitsToday(props){
    
    const { infos } = props
    const token = infos.token
    
    const weekDay = [
        "Domingo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sabado"
    ]
    

    
    const dayjs = require("dayjs")

    const [ result, setResult] = useState()

    useEffect(()=>{
        fetch('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', {
          method: "GET",
          headers: {"Authorization": `Bearer ${token}`}
        }).then(res => res.json()).then(json => setResult(json));
      },[]);

      

      const now = new Date
      const today = now.getDay()
    


      if(result!== undefined){
        if(result.length > 0){
            return(
            <>
            
            <Screen>
            <Title>
                <h1>{weekDay[today]}, {dayjs().format("DD/MM")}</h1>
                <h2>Nenhum hábito concluído ainda</h2>
            </Title>
            {result.map((h)=> <Habit data={h} key={h.id} />)}
            </Screen>
            <Footer/>
            </>
        )
        }
        else{
            return(
                <>
                   
                    <Screen>
                    <Title>
                        <h1>{weekDay[today]}, {dayjs().format("DD/MM")}</h1>
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
    
    function clickDone(){
        alert("apertou")
    }
 
    return(
        <>
        <HabitStyle>
            <div>
                <h1>{data.name}</h1>
                <p>Sequência atual: {data.currentSequence}</p>
                <p>Seu récord: {data.highestSequence}</p>
            </div>
            <DoneButton onClick={clickDone}>
                <img src="assets/ok.svg" />
            </DoneButton>
        </HabitStyle>
        </>
    )

}

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