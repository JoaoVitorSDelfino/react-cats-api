import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import { signLogin } from "../services/authentication"

function Login() {
  const [login, setLogin] = useState("")
  const [senha, setSenha] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      await signLogin(login, senha)

      navigate("/mainMenu")
      setErrorMessage("")
    } catch (e) {
      console.log(e)
      setErrorMessage("Login ou senha incorretos.")
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "0 auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="login">Usuário:</label>
          <input
            type="text"
            id="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <button type="submit" style={{ padding: "10px 15px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;