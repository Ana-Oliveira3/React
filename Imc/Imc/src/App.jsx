import './App.css'
import ImcTable from './Components/imcTable.jsx';
import ImcCalc from './Components/imcCalc.jsx';
import { data } from './data/data';
import { useState } from 'react';

function App() {

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if (!weight || !height) return;

    const weigthFloat = +weight.replace(",", "");
    const heightFloat = +height.replace(",", "");

    const imcResult = (weigthFloat / (heightFloat * heightFloat)).toFixed(2);

    setImc(imcResult);

    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    })

    if (!info) return;

  }

  const resetCalc = (e) => {
    setImc("");
    setInfo("");
    setInfoClass("");
  }

  return (
    <div className="container">
      {/* <h1>IMC</h1> */}
      {!imc ? (<ImcCalc calcImc={calcImc} />) : <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc} />}
    </div>
  )
}

export default App
