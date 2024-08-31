import axios from "axios"
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { getToken } from "../services/authentication"
import Results from './Results'

function SearchCat() {
    const [nome, setNome] = useState("")
    const [catData, setCatData] = useState(null)
    const [error, setError] = useState(null)
    const [errorMessage, setErrorMessage] = useState("")
    const [isLoading, setIsLoading] = useState(true) // Novo estado para carregar o redirecionamento
    const navigate = useNavigate()

    useEffect(() => {
        const token = getToken()
        if (!token) {
            navigate("/") // Redireciona se não houver token
        } else {
            setIsLoading(false) // Desmarca o estado de carregamento se houver um token
        }
    }, [navigate])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const token = getToken()
            console.log(token)

            const response = await axios.get(`https://localhost:3001/getCat/${nome}`, {
                headers: { 'Authorization': `${token}` }
            })

            setCatData(response.data.gato.gato)
            setError(0)
            setErrorMessage('')
        } catch (error) {
            console.log(error)
            setError(1)
            setCatData(null)
            setErrorMessage(error.response?.data?.gato?.mensagem || "Erro desconhecido")
        }

        // Limpar os campos após o submit
        setNome("")
    }

    const redirect = () => {
        navigate('/mainMenu')
    }

    if (isLoading) {
        return <div>Carregando...</div> // Mostra uma mensagem de carregamento enquanto o redirecionamento é processado
    }

    return (
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
            <h2>Buscar Gato Existente</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="nome">Nome do gato:</label>
                    <input
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                        style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                    />
                </div>
                <button type="submit" style={{ padding: "10px 15px", backgroundColor: "#28A745", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                    Buscar
                </button>
                <button onClick={redirect} style={{ margin:"10px", padding: "10px 15px", backgroundColor: "red", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                    Voltar
                </button>
            </form>

            {/* Renderiza o componente Results se catData estiver disponível */}
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            {catData && <Results data={catData} error={error} />}
        </div>
    )
}

export default SearchCat