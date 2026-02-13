import React, { useState } from 'react';

const AlterandoNome = () => {
  const [nome, setNome] = useState("Maria");

  return (
    <div className="nome-container">
      <p className="nome-display">Nome: {nome}</p>
      <button className="btn-alterar" onClick={() => setNome("João")}>Alterar para João</button>
    </div>
  );
};

export default AlterandoNome;