import { Box, Button, Center, Input } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { LoginForm } from "../components/LoginForm";
import { useContext, useState } from "react";
import { welcomeMessage } from "../services/welcome";
import DButton from "../components/DButton";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { useToast } from '@chakra-ui/react'
import { changeLocalStorage } from "../services/storage";

const Home = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {setIsLoggedIn} = useContext(AppContext);
    const navigate = useNavigate();
    const toast = useToast();
    

    const validateUser = async (email: string, password: string) => {
        if (!email || !password) {
            // Verifica se email ou senha estão vazios
            toast({
                title: 'ATENÇÃO',
                description: "Email e senha são obrigatórios!",
                status: 'warning',
                duration: 5000,
                isClosable: true,
            });
            return; // Encerra a função
        }
    
        const loggedIn = await welcomeMessage(email, password);
    
        if (!loggedIn || password !== 'senha123') {
            toast({
                title: 'ATENÇÃO',
                description: "Email ou senha inválidos!",
                status: 'error',
                duration: 9000,
                isClosable: true,
            });
            setEmail(''); // Limpa o campo de email
            setPassword(''); // Limpa o campo de senha
            return;
        }
    
        setIsLoggedIn(true);
        changeLocalStorage({ login: true }); // Altera o localStorage 
        navigate('conta/1'); 
    };

    // const handleLogin = () => {
    //     welcomeMessage(email);
    // };
    return (
        <Box minHeight='100vh' background='teal' padding='25px'>

            <Card>
                <h1 style={{ fontSize: "1.5rem", margin: "0 auto", marginBottom: "15px", fontWeight: "bold", color: "#333", }}>Login</h1>
                <Center>
                    <LoginForm>
                        <Input
                            placeholder="email"
                            variant="filled"
                            width='280px'
                            value={email}
                            type='email'
                            focusBorderColor="teal.400"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            placeholder="password"
                            variant="filled"
                            margin="0 auto"
                            width='280px'
                            focusBorderColor="teal.400"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                        />
                        <DButton 
                            onClick={() => validateUser(email, password)} 
                        />
                    </LoginForm>
                </Center>
            </Card>
        </Box>
    );
}

export default Home;






// import { Box, Button, Center, Input } from "@chakra-ui/react";
// import { Card } from "../components/Card";
// import { LoginForm } from "../components/LoginForm";
// import { useContext, useState } from "react";
// import { welcomeMessage } from "../services/welcome";
// import DButton from "../components/DButton";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../components/AppContext";
// import { useToast } from '@chakra-ui/react'
// import { changeLocalStorage } from "../services/storage";

// const Home = () => {
//     const [email, setEmail] = useState<string>('');
//     const [password, setPassword] = useState<string>('');
//     const {setIsLoggedIn} = useContext(AppContext);
//     const navigate = useNavigate();
//     const toast = useToast();
    

//     const validateUser = async (email: string, password: string) => {
//         const loggedIn = await welcomeMessage(email);

//         if (!loggedIn) { // Verifica se o email foi informado
//             toast({
//                 title: 'ATENÇÃO',
//                 description: "Login Inválido!",
//                 status: 'error',
//                 duration: 9000,
//                 isClosable: true,
//               })
//             setEmail(''); // Limpa o campo de input
//             return; // Encerra a execução da função
//         }

//         setIsLoggedIn(true);
//         changeLocalStorage({login: true}); // Altera o localStorage 
//         navigate('conta/1'); 
//     };

//     // const handleLogin = () => {
//     //     welcomeMessage(email);
//     // };
//     return (
//         <Box minHeight='100vh' background='teal' padding='25px'>

//             <Card>
//                 <h1 style={{ fontSize: "1.5rem", margin: "0 auto", marginBottom: "15px", fontWeight: "bold", color: "#333", }}>Login</h1>
//                 <Center>
//                     <LoginForm>
//                         <Input
//                             placeholder="email"
//                             variant="filled"
//                             width='280px'
//                             value={email}
//                             type='email'
//                             focusBorderColor="teal.400"
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                         <Input
//                             placeholder="password"
//                             variant="filled"
//                             margin="0 auto"
//                             width='280px'
//                             focusBorderColor="teal.400"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             type="password"
//                         />
//                         <DButton 
//                             onClick={() => validateUser(email, password)} 
//                         />
//                     </LoginForm>
//                 </Center>
//             </Card>
//         </Box>
//     );
// }

// export default Home;