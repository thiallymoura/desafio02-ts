import { createContext, useEffect, useState } from "react";
import { createLocalStorage, getAllLocalStorage } from "../services/storage";
import { json } from "stream/consumers";


interface IAppContext {
    user: string, // O usuário
    isLoggedIn: boolean, // Se o usuário está logado
    setIsLoggedIn: ( isLoggedIn: boolean) => void // Função para atualizar o estado
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const storage = getAllLocalStorage();

    useEffect(() => {   
        if(storage) {
            const { login } = JSON.parse(storage); // Verifica se o localStorage existe
            setIsLoggedIn(login);
        }
    }, [])

    const user = 'Thi';
    

    return (
        <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
            {children}
        </AppContext.Provider>

    )
}
