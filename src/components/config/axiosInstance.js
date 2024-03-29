import axios from 'axios';
/*apigestaohorarios.vercel.app http://localhost:3001*/
/*
acesse a api na rota / vai falar as rotas que existe
*/
const axiosInstance = axios.create({
  baseURL: 'https://6b95-179-54-108-103.ngrok-free.app/api',
});

axiosInstance.interceptors.request.use((config) => {
  const recoverUser = JSON.parse(localStorage.getItem("usuario"));
  if (recoverUser && recoverUser.token) {
    config.headers.Authorization = `Bearer ${recoverUser.token}`;
  }
  return config;
});

//esse arquivo de configuração serve pra recumepar o token do usuario
export default axiosInstance;
