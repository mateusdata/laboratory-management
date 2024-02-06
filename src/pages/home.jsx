import { useContext, useEffect, useState } from "react";
import axiosInstance from "../components/config/axiosInstance";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { Context } from "../context/authContext";
import { MdMarkEmailUnread } from "react-icons/md";
import GlobalLayouts from "../layouts/globalLayouts";

function Home() {

  const {logout } = useContext(Context);
  const [users, setUsers] = useState([]);
  const [responseToken, setResponseToken] = useState([]);


  useEffect(() => {
    axiosInstance.get("/lista-usuarios").then((response) => {
      setUsers(response?.data);
      console.log(response);
    }).catch((erro) => {
      console.log(erro?.response);
      if (erro?.response?.status === 401) {

        setTimeout(() => {
          logout();
        }, 1500);
      }
      setResponseToken(erro?.response?.data?.message);
    })
  }, [logout])
  const getUsers = () => {

    axiosInstance.get("/teste").then((response) => {
      setResponseToken(response?.data);


    }).catch((erro) => {
      console.log(erro?.response);
      if (erro?.response?.status === 401) {

        setTimeout(() => {
          logout();
        }, 1500);
      }
      setResponseToken(erro?.response?.data?.message);
    })
  }
  return (

    <GlobalLayouts>
      <div class="bg-white min-h-screen w-full flex flex-col justify-center items-center text-gray-800">
     
        <h1 class="text-4xl font-bold mb-4">Gestão de Horários de laboratorios</h1>
        <p class="text-lg">Bem-vindo ao nosso site </p>

        <div class="flex flex-row flex-nowrap items-center justify-center gap-2">
          <AiOutlineUserSwitch class="bg-orange-500" size="18" />
          <p>Meu usuário {"Murilo"}</p>
        </div>

        <div class="flex flex-row flex-nowrap items-center justify-center gap-2 mt-5">
          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={getUsers}>Verificar token</button>
          <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => logout()}>Sair</button>

        </div>

        <span class="text-green-800 text-2xl mt-8">{responseToken}</span>

        <div class="bg-gray-50 rou p-4 w-full">
          <div class="grid grid-cols-1w-full  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
           
          </div>
        </div>
      </div>

    </GlobalLayouts>

  );
}

export default Home;
