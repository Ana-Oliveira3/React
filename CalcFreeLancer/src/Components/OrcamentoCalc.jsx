import Button from "./Button.jsx";
import "./OrcamentoCalc.css";
import { useState } from "react";

const OrcamentoCalc = ({ calcBudget }) => {
  const [rate, setRate] = useState("");
  const [hours, setHours] = useState("");
  const [urgent, setUrgent] = useState(false);

  const clearForms = (e) => {
    e.preventDefault();
    setRate("");
    setHours("");
    setUrgent(false);
  };

  const ValidDigits = (text) => {
    // allow digits, commas and dots
    return text.replace(/[^0-9,\.]/g, "");
  };

  const handleRateChange = (e) => {
    const updateValue = ValidDigits(e.target.value);
    setRate(updateValue);
  };

  const handleHoursChange = (e) => {
    const updateValue = ValidDigits(e.target.value);
    setHours(updateValue);
  };

  const handleUrgencyChange = (e) => {
    setUrgent(e.target.checked);
  };

  return (
    <div id="calc-container">
      <h1>Calculadora de Orçamento</h1>
      <form id="orcamento-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="rate">Valor da hora (R$): </label>
            <input
              type="text"
              name="rate"
              id="rate"
              placeholder="Ex: 50"
              value={rate}
              onChange={handleRateChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="hours">Horas estimadas: </label>
            <input
              type="text"
              name="hours"
              id="hours"
              placeholder="Ex: 40"
              value={hours}
              onChange={handleHoursChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="urgent">
              <input
                type="checkbox"
                id="urgent"
                checked={urgent}
                onChange={handleUrgencyChange}
              />{' '}
              Urgente (+20%)
            </label>
          </div>
        </div>

        <div className="action-control">
          <Button
            id="calc-btn"
            text="Calcular"
            action={(e) => calcBudget(e, rate, hours, urgent)}
          />
          <Button id="clear-btn" text="Limpar" action={clearForms} />
        </div>
      </form>
    </div>
  );
};

export default OrcamentoCalc;