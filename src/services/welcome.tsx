import { useContext } from "react";
import { api } from "../api";

export const welcomeMessage = async (email: string, password: string): Promise<Boolean> => { // Função para exibir uma mensagem de boas-vindas
  
  const data: any = await api;

    if (email !== data.email || password !== data.password) { // Valida se o email e senha estao corretos
      return false; // Retorna falso se algum deles for inválido
    }
  
    return true; // Retorna verdadeiro se ambos forem válidos
    
};  















  



