//import Todo from "./components/Todo";
import Bill from "./components/Bill/Bill";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import Preview from "./components/Preview/Preview";
import Success from "./components/Success/Success";
import datas from "./components/datas.json";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Billing from "./components/Billing/Billing";
import Privacypol from "./components/Privacypol/Privacypol.js";

import { useState } from "react";
function App() {

  const [numeroRecibo, setnumeroRecibo]= useState("recibo");
  const [correo, setCorreo]= useState("persona@mail.com");

  

  return (
    <div>
      <Router>
        <Header/>
        <Routes>
        <Route path="" element={<Landing cambiaNumero={numeroRecibo =>setnumeroRecibo(numeroRecibo)}/>}/>
        <Route path="success" element={<Success correo={correo}/>}/>
        <Route path="preview" element={<Preview/>}/>
        <Route path="form" element={<Form/>}/>
        <Route path="bill" element={<Bill/>}/>
        <Route path="billing" element={<Billing numeroRecibo={numeroRecibo} cambiaCorreo={correo =>setCorreo(correo)}/>}/>
        <Route path="privacypol" element={<Privacypol/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
