import React from 'react';
import './OrcamentoTable.css';

const OrcamentoTable = ({ total, category, complexityClass, resetCalc }) => {
  const complexityMap = {
    low: 'Baixa',
    medium: 'Média',
    high: 'Alta',
  };

  return (
    <div id="result-container">
      <h2>Resultado do Orçamento</h2>
      <p id="total-value">R$ {total}</p>
      <p id="project-category">
        <strong>Categoria:</strong> {category}
      </p>
      <p id="complexity" className={complexityClass}>
        <strong>Complexidade sugerida:</strong>{' '}
        {complexityMap[complexityClass] || '-'}
      </p>
      <button id="back-btn" onClick={resetCalc}>
        Calcular novamente
      </button>
    </div>
  );
};

export default OrcamentoTable;