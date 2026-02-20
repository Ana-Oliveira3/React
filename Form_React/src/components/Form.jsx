//Atalho para criar projeto em jsx : RAFCE
import './Form.css'
import { useState } from "react"

const Form = () => {
    // 3 - Atuando com os estados das informações
    // Gerenciando os dados
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [role, setRole] = useState("admin");

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleBio = (e) => {
        setBio(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Limpar após enviar os dados
        setName("");
        setEmail("");
        setBio("");
        setRole("");
    }

    return (
        <div>
            {/* 1 - Criando Form */}
            <form onSubmit={handleSubmit}>
                <div>
                    {/* 2 - Criando os labels e Inputs*/}
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" placeholder="Digite o seu nome: " onChange={handleName} value={name} />

                    {/* 3 - Label envolvendo inputs */}
                    <label>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Digite o seu email: " onChange={handleEmail} value={email} />
                    </label>
                </div>

                {/* 6 - Biografia desse usuário */}
                <label>
                    <span>Bio: </span>
                    <textarea name="bio" placeholder="Descrição do Usuário" onChange={handleBio} value={bio}>
                    </textarea>
                </label>

                {/* 7 - Nível desse usuário (Admin, Padrão ou Edição) */}
                <label>
                    <span>Função no sistema: </span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editar</option>
                        <option value="admin">Admin</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default Form