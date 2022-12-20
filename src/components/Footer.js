import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



export default function Footer(props){

    const { infos, donesUpdate, allHabits } = props
    if(donesUpdate!=undefined){
        
    

    let number = Math.ceil(((donesUpdate.length)*100)/allHabits)

    if(infos.image!=undefined){
        return(
            <FooterStyled>
                <div>
                    <Link to="/habitos"><span>Hábitos</span></Link>
                    <Link to="/hoje">
                        <button>
                            <CircularProgressbar
                             className="CircularProgressbar-inverted"
                             value={number}
                             maxValue={100}
                              text="Hoje"/>
                        </button>
                    </Link>
                    <Link to="/historico"><span>Histórico</span></Link>
                </div>
            </FooterStyled>
        )
    }
    }   
}


const FooterStyled = styled.div`
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    background-color: white;
    
    div{
        color: #52B6FF;
        width: 100%;
        max-width: 600px;
        height: 70px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    span{
        color: #52B6FF;
    }

    button{
        font-size: 18px;
        border: none;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #52B6FF;
        width: 91px;
        height: 91px;
        border-radius: 100%;
        margin-bottom: 30.5px;
    }

`
const CirStyled = styled.div`
    width: 79px;
    height: 79px;
    
`