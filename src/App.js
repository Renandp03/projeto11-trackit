import { BrowserRouter, Routes, Route} from "react-router-dom"
import GlobalStyled from "./components/GlobalStyled";
import Login from "./components/Login";
import Registration from "./components/Registration"

function App() {
  return (
  <>
    <GlobalStyled/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/cadastro" element={<Registration/>}/>
        <Route path="/habitos" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
