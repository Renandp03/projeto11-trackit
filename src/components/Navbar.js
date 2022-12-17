import { Link } from "react-router-dom";
import styled from "styled-components";


export default function Navbar(props){
    const { infos } = props
    return(
        <NavStyled>
            <div>
                <Link to="/"><Logo src="assets/TrackItLogo.png" alt="logo"/></Link>
                <Perfil src={infos!= undefined ? infos.image : "assets/TrackItPerfil.png"}/>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.div`
    z-index: 1;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 600px;
    }
`
const Logo = styled.img`
    width: 97px;
    margin: 0px 18px;
`
const Perfil = styled.img`
    margin: 0px 18px;
    width: 51px;
    height: 51px;
    border-radius: 100%;
`
