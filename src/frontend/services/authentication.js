import axios from "axios"

export const signLogin = async (username, password) => {
    try {
        const response = await axios.post('https://localhost:3001/login', {username, password})
        const token = response.data.token

        localStorage.setItem('token', token)

        return response.data
      } catch (err) {
        if (err.response && err.response.status === 429) {
          throw new Error('ERRO, timed out devido a muitas tentantivas de login!');
        } else {
          throw new Error('ERRO, credenciais inválidas!');
        }
    }
}

export const getToken = () => {
  const token = localStorage.getItem('token')
  return token || null
}