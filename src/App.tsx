import React, { createContext } from 'react';
import { Header } from './components/Header';
import {

  Box,
  ChakraProvider,

} from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AppContextProvider } from './components/AppContext';
import MainRoutes from './routes';
import { createLocalStorage, getAllLocalStorage } from './services/storage';

function App() {
   
  if(!getAllLocalStorage()){ // Verifica se o localStorage existe
    createLocalStorage(); // Cria o localStorage
  }
  

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>

  );
}

export default App;





{/* <ChakraProvider>
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
    </ChakraProvider> */}