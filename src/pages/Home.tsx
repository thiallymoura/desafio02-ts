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
    const {setIsLoggedIn} = useContext(AppContext);
    const navigate = useNavigate();
    const toast = useToast();
    //const [password, setPassword] = useState('');

    const validateUser = async (email: string) => {
        const loggedIn = await welcomeMessage(email);

        if (!loggedIn) { // Verifica se o email foi informado
            toast({
                title: 'ATENÇÃO',
                description: "Login Inválido!",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
            setEmail(''); // Limpa o campo de input
            return; // Encerra a execução da função
        }

        setIsLoggedIn(true);
        changeLocalStorage({login: true}); // Altera o localStorage 
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
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                            type="password"
                        />
                        <DButton 
                            onClick={() => validateUser(email)} 
                        />
                    </LoginForm>
                </Center>
            </Card>
        </Box>
    );
}

export default Home;