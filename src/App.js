import { BrowserRouter, Routes, Route} from "react-router-dom"
import GlobalStyled from "./components/GlobalStyled";
import Login from "./components/Login";
import Registration from "./components/Registration"
import Habits from "./components/Habits"
import HabitsToday from "./components/HabitsToday";
import { useState } from "react";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Historic from "./components/Historic";

function App() {

  const [infos, setInfos] = useState([])

  return (
  <>
    <BrowserRouter>
    <GlobalStyled/>
    <Navbar infos={infos} setInfos={setInfos}/>
      <Routes>
        <Route path="/" element={<Login setInfos={setInfos}/>}/>
        <Route path="/cadastro" element={<Registration/>}/>
        <Route path="/habitos" element={<Habits infos ={infos}/>}/>
        <Route path="/hoje" element={<HabitsToday infos={infos}/>}/>
        <Route path="/historico" element={<Historic/>}/>
      </Routes>
      <Footer infos={infos}/>
    </BrowserRouter>
  </>
  );
}

export default App;
