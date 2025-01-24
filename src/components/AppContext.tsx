import { createContext, useEffect, useState } from "react";
import { createLocalStorage, getAllLocalStorage } from "../services/storage";

interface IAppContext {
    name: string, // O usuário
    email: string,
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

    const name = 'Thially Moura';
    const email = 'thially@dio.bank';
    

    return (
        <AppContext.Provider value={{ name, email, isLoggedIn, setIsLoggedIn }}>
            {children}
        </AppContext.Provider>

    )
}

// import { createContext, useEffect, useState } from "react";
// import { createLocalStorage, getAllLocalStorage } from "../services/storage";


// interface IAppContext {
//     user: string | null; // Nome do usuário
//     isLoggedIn: boolean; // Indica se o usuário está logado
//     setIsLoggedIn: ( isLoggedIn: boolean) => void // Função para atualizar o estado
//     login: (user: string) => void; // Função para logar o usuário
//     logout: () => void; // Função para deslogar o usuário
// }
  
// export const AppContext = createContext({} as IAppContext);

// export const AppContextProvider = ({ children }: any) => {
//     const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
//       const storage = getAllLocalStorage();
//       if (storage) {
//         const { login } = JSON.parse(storage);
//         return login || false;
//       }
//       return false;
//     });
  
//     const [user, setUser] = useState<string | null>(() => {
//       const storage = getAllLocalStorage();
//       if (storage) {
//         const { user } = JSON.parse(storage);
//         return user || null;
//       }
//       return null;
//     });
  
//     const login = (user: string) => {
//       const data = { user, login: true };
//       createLocalStorage(); // Salva no localStorage
//       setUser(user);
//       setIsLoggedIn(true);
//     };
  
//     const logout = () => {
//       createLocalStorage(); // Limpa o localStorage
//       setUser(null);
//       setIsLoggedIn(false);
//     };
  
//     return (
//       <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn, login, logout }}>
//         {children}
//       </AppContext.Provider>
//     );
//   };



// import { createContext, useEffect, useState } from "react";
// import { createLocalStorage, getAllLocalStorage } from "../services/storage";

// interface IAppContext {
//     user: string, // O usuário
//     isLoggedIn: boolean, // Se o usuário está logado
//     setIsLoggedIn: ( isLoggedIn: boolean) => void // Função para atualizar o estado
// }
  
// export const AppContext = createContext({} as IAppContext);

// export const AppContextProvider = ({ children }: any) => {
//     const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

//     const storage = getAllLocalStorage();

//     useEffect(() => {   
//         if(storage) {
//             const { login } = JSON.parse(storage); // Verifica se o localStorage existe
//             setIsLoggedIn(login);
//         }
//     }, [])

//     const user = 'Thi';
    

//     return (
//         <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
//             {children}
//         </AppContext.Provider>

//     )
// }