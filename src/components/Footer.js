import styled from "styled-components";
import { Link } from "react-router-dom";



export default function Footer(){

return(
    <FooterStyled>

    <Link to="/Habits">Hábitos</Link>
    <div>hoje</div>

    </FooterStyled>
)

}


const FooterStyled = styled.div`
    width: 100%;
    max-width: 600px;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div{
        align-self: flex-end;
        background-color: #52B6FF;
        width: 91px;
        height: 91px;
    }

`