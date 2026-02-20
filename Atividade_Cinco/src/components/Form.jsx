import { useState } from "react";
import Button from "./Button";
import "./Form.css";

export default function Form() {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    idade: "",
    telefone: "",
    pais: "",
    bio: "",
    funcao: "",
    senha: "",
    termos: false,
  });

  const [erros, setErros] = useState({});
  const [mensagem, setMensagem] = useState("");

  // Função para formatar telefone
  const formatarTelefone = (valor) => {
    // Remove tudo que não é número
    const apenasNumeros = valor.replace(/\D/g, "");
    
    // Limita a 11 dígitos
    if (apenasNumeros.length > 11) {
      return apenasNumeros.slice(0, 11);
    }

    // Aplica a máscara (11) 99999-9999
    if (apenasNumeros.length === 0) {
      return "";
    } else if (apenasNumeros.length <= 2) {
      return `(${apenasNumeros}`;
    } else if (apenasNumeros.length <= 6) {
      return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2)}`;
    } else {
      return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2, 7)}-${apenasNumeros.slice(7)}`;
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Aplica formatação especial ao telefone
    if (name === "telefone") {
      setFormData((prev) => ({
        ...prev,
        [name]: formatarTelefone(value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const validarFormulario = () => {
    const novasErros = {};

    if (!formData.nome.trim()) {
      novasErros.nome = "Nome é obrigatório";
    }

    if (!formData.email.trim()) {
      novasErros.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      novasErros.email = "Email inválido";
    }

    if (formData.senha.length < 6) {
      novasErros.senha = "Senha deve ter no mínimo 6 caracteres";
    }

    if (!formData.termos) {
      novasErros.termos = "Você deve aceitar os termos";
    }

    setErros(novasErros);
    return Object.keys(novasErros).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validarFormulario()) {
      console.log("Dados do formulário:", formData);
      setMensagem("✓ Cadastro realizado com sucesso!");
      
      setFormData({
        nome: "",
        sobrenome: "",
        email: "",
        idade: "",
        telefone: "",
        pais: "",
        bio: "",
        funcao: "",
        senha: "",
        termos: false,
      });

      setErros({});
      
      setTimeout(() => setMensagem(""), 3000);
    } else {
      setMensagem("✗ Verifique os erros no formulário");
    }
  };

  return (
    <div className="form-container">
      <h1>Formulário de Cadastro</h1>

      {mensagem && (
        <div className={`mensagem ${mensagem.includes("✓") ? "sucesso" : "erro"}`}>
          {mensagem}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nome">Nome *</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className={erros.nome ? "input-erro" : ""}
            />
            {erros.nome && <span className="erro-txt">{erros.nome}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="sobrenome">Sobrenome</label>
            <input
              type="text"
              id="sobrenome"
              name="sobrenome"
              value={formData.sobrenome}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={erros.email ? "input-erro" : ""}
            />
            {erros.email && <span className="erro-txt">{erros.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="idade">Idade</label>
            <input
              type="number"
              id="idade"
              name="idade"
              value={formData.idade}
              onChange={handleChange}
              min="0"
              max="120"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="telefone">Telefone</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              placeholder="(11) 99999-9999"
            />
          </div>

          <div className="form-group">
            <label htmlFor="pais">País</label>
            <select
              id="pais"
              name="pais"
              value={formData.pais}
              onChange={handleChange}
            >
              <option value="">Selecione um país</option>
              <option value="Brasil">Brasil</option>
              <option value="Portugal">Portugal</option>
              <option value="EUA">EUA</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows="3"
            placeholder="Conte um pouco sobre você..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="funcao">Função no Sistema</label>
          <select
            id="funcao"
            name="funcao"
            value={formData.funcao}
            onChange={handleChange}
          >
            <option value="">Selecione uma função</option>
            <option value="admin">Administrador</option>
            <option value="usuario">Usuário</option>
            <option value="editor">Editor</option>
            <option value="visualizador">Visualizador</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="senha">Senha *</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            className={erros.senha ? "input-erro" : ""}
            placeholder="Mínimo 6 caracteres"
          />
          {erros.senha && <span className="erro-txt">{erros.senha}</span>}
        </div>

        <div className="form-group checkbox">
          <input
            type="checkbox"
            id="termos"
            name="termos"
            checked={formData.termos}
            onChange={handleChange}
            className={erros.termos ? "input-erro" : ""}
          />
          <label htmlFor="termos">Aceito os termos e condições *</label>
          {erros.termos && <span className="erro-txt">{erros.termos}</span>}
        </div>

        <div className="form-buttons">
          <Button
            type="submit"
            disabled={!formData.termos}
            className="btn-enviar"
          >
            Enviar Cadastro
          </Button>
          <Button
            onClick={() => {
              setFormData({
                nome: "",
                sobrenome: "",
                email: "",
                idade: "",
                telefone: "",
                pais: "",
                bio: "",
                funcao: "",
                senha: "",
                termos: false,
              });
              setErros({});
              setMensagem("");
            }}
            className="btn-limpar"
          >
            Limpar Formulário
          </Button>
        </div>
      </form>
    </div>
  );
}