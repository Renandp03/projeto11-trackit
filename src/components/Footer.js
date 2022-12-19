import styled from "styled-components";
import { Link } from "react-router-dom";



export default function Footer(){

return(
    <FooterStyled>
        <div>
            <Link to="/Habitos"><span>Hábitos</span></Link>
            <Link to="/hoje"><button>hoje</button></Link>
            <Link to="/Habitos"><span>Histórico</span></Link>
        </div>
    </FooterStyled>
)

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