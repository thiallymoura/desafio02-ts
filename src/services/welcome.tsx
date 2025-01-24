import { useContext } from "react";
import { api } from "../api";

export const welcomeMessage = async (email: string): Promise<Boolean> => { // Função para exibir uma mensagem de boas-vindas
  
  const data: any = await api;

    if (email !== data.email) { // Verifica se o email foi informado
      return false; // Exibe uma mensagem
    }
    
    return true;
    
  };  















  




// import { useContext } from "react";
// import { api } from "../api";
// import { AppContext } from "../components/AppContext";
// import { useNavigate } from "react-router-dom";

// export const welcomeMessage = async (email: string): Promise<void> => { // Função para exibir uma mensagem de boas-vindas
//   const {setIsLoggedIn} = useContext(AppContext); 
//   const navigate = useNavigate(); 

//   const data: any = await api;

//     if (email !== data.email) { // Verifica se o email foi informado
//       return alert('Email inválido'); // Exibe uma mensagem
//     }
    
//     setIsLoggedIn(true);
//     navigate(`/${data.id}`);
    
//   };  
