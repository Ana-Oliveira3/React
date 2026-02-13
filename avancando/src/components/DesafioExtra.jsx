import React, { useState } from 'react';

const DesafioExtra = () => {
  const [numero, setNumero] = useState(10);

  const aumentar = () => {
    setNumero(prev => prev + 5);
  };

  const diminuir = () => {
    setNumero(prev => Math.max(0, prev - 5));
  };

  return (
    <div className="desafio-container">
      <p className="numero-display">Número: {numero}</p>
      <button className="btn-aumentar" onClick={aumentar}>Aumentar +5</button>
      <button className="btn-diminuir" onClick={diminuir}>Diminuir -5</button>
    </div>
  );
};

export default DesafioExtra;