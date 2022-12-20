import styled from "styled-components";

export default function Historic(){
    return(
        <Screen>
            <Title>Histórico</Title>
            <Text>Em breve você poderá ver o histórico dos seus hábitos aqui!</Text>
        </Screen>
    )
}

const Title = styled.h1`
    font-size: 23px;
    color: #126BA5;
    margin-top: 28px;
`
const Text = styled.p`
    font-size: 18px;
    color: #666666;
    line-height: 22px;
    margin-top: 17px;
`
const Screen = styled.div`
    max-width: 400px;
`