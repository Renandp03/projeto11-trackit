import { BrowserRouter, Routes, Route} from "react-router-dom"
import GlobalStyled from "./components/GlobalStyled";
import Login from "./components/Login";
import Registration from "./components/Registration"
import Habits from "./components/Habits"
import HabitsToday from "./components/HabitsToday";
import { useState } from "react";

function App() {

  const [infos, setInfos] = useState([])


  return (
  <>
    <GlobalStyled/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setInfos={setInfos}/>}/>
        <Route path="/cadastro" element={<Registration/>}/>
        <Route path="/habitos" element={<Habits/>}/>
        <Route path="/hoje" element={<HabitsToday infos={infos}/>}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
