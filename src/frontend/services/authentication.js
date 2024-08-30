import axios from "axios"

export const signLogin = async (username, password) => {
    try {
        const response = await axios.post('http://localhost:3001/login', {username, password})
        const token = response.data.token

        localStorage.setItem('token', token)

        return response.data
      } catch (err) {
        if (err.response && err.response.status === 429) {
          throw new Error('Muitas tentativas de login. Tente novamente mais tarde.');
        } else {
          throw new Error('Erro ao fazer login, verifique novamente as credenciais fornecidas');
        }
    }
}

export const getToken = () => {
  const token = localStorage.getItem('token')
  return token || null
}