import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Registration(){

    const [email, setEmail] = useState("")
    const [ password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"

    function createAnAccount(event){
        event.preventDefault()
        setLoading(true)
        const request = axios.post(url,{
            email:email,
            name:name,
            image:image,
            password:password
        })
        
        request.then(()=> navigate("/"))
        request.catch((error)=> alert(error))
        request.catch(()=> setLoading(false))
    }



    return(
        <Screen>
        
        <img src="assets/TrackIt.png" alt=""/>
        <Form onSubmit={createAnAccount}>
        <input data-text="email-input" disabled={loading}  type="email" required value={email} onChange={e=> setEmail(e.target.value)}  placeholder="email"/>
        <input data-text="password-input" disabled={loading} type="password" required value={password} onChange={e=> setPassword(e.target.value)} placeholder="senha"/>
        <input data-text="user-name-input" disabled={loading} type="text" value={name} onChange={e=> setName(e.target.value)} placeholder="nome"/>
        <input data-text="user-image-input" disabled={loading} type="text" value={image} onChange={e=> setImage(e.target.value)}  placeholder="foto"/>
        <button data-text="singup-btn" disabled={loading} type="submit">Entrar</button>
        </Form>
        <Link to="/" data-text="login-link"><div>Já tem uma conta? Faça login!</div></Link>
        </Screen>
    )
}


const Screen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -70px;
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
        padding: 0px 11px;
    }
    input::placeholder{
        
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

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`