import { BrowserRouter, Routes, Route} from "react-router-dom"
import GlobalStyled from "./components/GlobalStyled";
import Login from "./components/Login";
import Registration from "./components/Registration"
import Habits from "./components/Habits"
import HabitsToday from "./components/HabitsToday";
import { useState } from "react";
import Navbar from "./components/Navbar"

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
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
