import axios from "axios"
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import {getToken} from "../services/authentication"

function CreateCat() {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")

  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true) // Novo estado para carregar o redirecionamento

  useEffect(() => {
    const token = getToken()
    if (!token) {
        navigate("/") // Redireciona se não houver token
    } else {
        setIsLoading(false) // Desmarca o estado de carregamento se houver um token
    }
}, [navigate])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const novoGato = {
      name,
      image,
      description,
    };

    try {
        const token = getToken()

        console.log(novoGato)

        const response = await axios.post('https://localhost:3001/addCat', novoGato, {headers: {'Authorization': `${token}`}})

        if (response.status) {
            console.log("sucesso ao adicionar gato")
            navigate("/mainMenu")
        }
    } catch (error) {
        console.error("Erro ao adicionar gato:", error)
    }

    // Limpar os campos após o submit
    setName("")
    setImage("")
    setDescription("")
  }

  const redirect = () => {
    navigate('/mainMenu');
  };

    return (
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
        <h2>Adicionar Gato</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="description">Descrição:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="image">URL da Imagem:</label>
            <input
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </div>
          <button type="submit" style={{ padding: "10px 15px", backgroundColor: "#28A745", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Adicionar Gato
          </button>
          <button onClick={redirect} style={{ margin:"10px", padding: "10px 15px", backgroundColor: "red", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Voltar
          </button>
        </form>
      </div>
    )
}

export default CreateCat