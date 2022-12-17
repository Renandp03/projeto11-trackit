import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


export default function Login(props){

    const {setInfos} = props
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
    const navigate = useNavigate()


    function makeLogin(event){
        event.preventDefault()
        setLoading(true)

        const request = axios.post(url,{
            email:email,
            password:password
        })
        request.then(response => {
            setInfos(response.data)
            console.log(response.data)
            navigate("/hoje")
        })
    }


    return(
        <Screen>
        
        <img src="assets/TrackIt.png" alt=""/>
        <form onSubmit={makeLogin}>
            <input type="text"required
            value={email} 
            onChange={e=> setEmail(e.target.value)} 
            placeholder="email"/>

            <input type="password" required 
            value={password} 
            onChange={e=>setPassword(e.target.value)}
            placeholder="senha"/>

            <button type="submit" disabled={loading}>{loading ? <img src="loading1.svg" alt="loading"/> : "Entrar" }</button>
        </form>
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
        background-color: ${props=> props.loading ? "#F2F2F2" : "white"};
        font-size: 20px;
        padding: 0px 11px;
        box-sizing: border-box;
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
        opacity: ${props=> props.loading ? "0.7" : "1"};
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
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`