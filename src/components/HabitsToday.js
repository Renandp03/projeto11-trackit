import { useEffect, useState } from "react"
import styled from "styled-components"
import 'dayjs/locale/es'
import HabitToday from "./HabitToday"


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
        let dones = result.filter((h)=> h.done===true)
        
        if(result.length > 0){
            return(
            <>
            
            <Screen>
            <Title>
                <h1>{weekDay[today]}, {dayjs().format("DD/MM")}</h1>
                {dones.length===0 && <h2>Nenhum hábito concluído ainda</h2>}
                {dones.length>0 && <h3>{Math.floor(((dones.length)*100)/result.length)}% dos hábitos concluídos</h3>}
            </Title>
            {result.map((h)=> <HabitToday token={token} data={h} key={h.id} />)}
            </Screen>
        
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
                  
                </>
        )
        }
      }
      else{
        <Screen><GifLoading src="assets/loading1.svg"/></Screen>
      }
    
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
    h3{
        font-size: 18px;
        color: #8FC549;
        line-height: 29px;
    }

`  
const Text = styled.p`
    font-size: 18px;
    color: #666666;
    line-height: 22px;
`
const GifLoading = styled.img`
    width: 80px;
`