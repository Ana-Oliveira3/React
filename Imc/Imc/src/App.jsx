import './App.css';
import OrcamentoTable from './Components/OrcamentoTable.jsx';
import OrcamentoCalc from './Components/OrcamentoCalc.jsx';
import { data } from './data/projetoData';
import { useState } from 'react';

function App() {

  const [total, setTotal] = useState("");
  const [category, setCategory] = useState("");
  const [complexityClass, setComplexityClass] = useState("");

  const calcBudget = (e, rate, hours, urgent) => {
    e.preventDefault();
    if (!rate || !hours) return;

    const rateFloat = +rate.replace(",", "");
    const hoursFloat = +hours.replace(",", "");

    let budget = rateFloat * hoursFloat;
    if (urgent) budget *= 1.2; // 20% extra for urgency
    budget = budget.toFixed(2);

    setTotal(budget);

    data.forEach((item) => {
      if (budget >= item.min && budget <= item.max) {
        setCategory(item.classification);
        setComplexityClass(item.infoClass);
      }
    });
  };

  const resetCalc = () => {
    setTotal("");
    setCategory("");
    setComplexityClass("");
  };

  return (
    <div className="container">
      {!total ? (
        <OrcamentoCalc calcBudget={calcBudget} />
      ) : (
        <OrcamentoTable
          total={total}
          category={category}
          complexityClass={complexityClass}
          resetCalc={resetCalc}
        />
      )}
    </div>
  );
}

export default App
