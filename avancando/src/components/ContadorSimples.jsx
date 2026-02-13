import React, { useState } from 'react';

const ContadorSimples = () => {
  const [contador, setContador] = useState(0);

  return (
    <div className="contador-container">
      <p className="contador-display">Contador: {contador}</p>
      <button className="btn-somar" onClick={() => setContador(contador + 1)}>Somar +1</button>
    </div>
  );
};

export default ContadorSimples;