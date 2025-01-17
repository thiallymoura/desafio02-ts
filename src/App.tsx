import React from 'react';
import { Header } from './components/Header/Header';
import { Card } from './components/Card';
import {LoginForm} from './components/LoginForm';
import {
  Center,
  ChakraProvider,
  Box,
} from '@chakra-ui/react'
import { login } from './services/login';


function App() {
  return (
    <ChakraProvider>
      <Header />
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box />
        <Card>
            <h1 style={{ fontSize: "1.5rem", margin: "0 auto", marginBottom: "20px", fontWeight: "bold", color: "#333", }}>Login</h1>
            <Center>
              <LoginForm />
            </Center>
          </Card>
      </Box>
    </ChakraProvider>
  );
}

export default App;


{/* <Input
placeholder="Digite seu email"
margin='0 auto'
variant="filled"
width="80%"
alignItems="center"
marginBottom="10px" />
<Input placeholder="Digite sua senha"
variant="filled"
margin='0 auto'
width="80%"
marginBottom="10px"
focusBorderColor="teal.400" />
<Center>
<Button onClick={login}
  colorScheme='teal'
  size='sm'
  width='80%'
  height={'40px'}
  marginTop='5px'
>
  Entrar
</Button> */}