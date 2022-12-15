import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Login(){
    return(
        <Screen>
        
        <img src="assets/TrackIt.png" alt=""/>
        <input type="text" placeholder="email"/>
        <input type="text" placeholder="senha"/>
        <Link to="/habitos"><button>Entrar</button></Link>
        <Link to="/cadastro"><div>Não tem uma conta? Cadastre-se!</div></Link>
        </Screen>
    )
}


const Screen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 180px;
        margin-bottom: 34px;
    }
    input{
        width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin: 3px;
        color: #666666;
        font-size: 20px;
        padding: 0px 11px;
    }
    input::placeholder{
        margin: 0px 11px;
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
        color: #52B6FF;
        text-decoration: none;
        text-decoration-line: none;
        margin-top: 22px;
        
    }
`