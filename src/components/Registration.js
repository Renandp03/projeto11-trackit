import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Registration(){
    return(
        <Screen>
        
        <img src="assets/TrackIt.png" alt=""/>
        <input type="text" placeholder="email"/>
        <input type="password" placeholder="senha"/>
        <input type="text" placeholder="nome"/>
        <input type="text" placeholder="foto"/>
        <button>Entrar</button>
        <Link to="/"><div>Já tem uma conta? Faça login!</div></Link>
        </Screen>
    )
}


const Screen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 180px;
        margin: 68px 0px 34px 0px;
    }
    input{
        width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin: 3px;
        color: #666666;
        font-size: 20px;
    }
    input::placeholder{
        margin-right: 11px;
    }

    button{
        font-size: 21px;
        width: 303px;
        height: 45px;
        color: white;
        background-color: #52B6FF;
        border: none;
        border-radius: 5px;
        margin: 3px;
    }
    div{

        text-decoration: none;
        color: #52B6FF;
        margin-top: 22px;
        
    }
`