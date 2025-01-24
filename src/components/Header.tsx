import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { AppContext } from '../components/AppContext';
import { useNavigate } from 'react-router-dom';
import { changeLocalStorage } from '../services/storage';


export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext); //destruturando do context para o setIsLoggedIn
  const navigate = useNavigate();


  const logout = () => {
    changeLocalStorage({login: false}); // Altera o localStorage
    setIsLoggedIn(false); // Altera o setIsLoggedIn
    navigate('/'); // Volta para a home
  }

  return (

    <Flex background={'white'} position={'fixed'} top= {0} width={'100%'} zIndex={1} padding='10px' paddingRight={5} paddingLeft={5}>
      <Box>
        <Center>
          <Text fontSize='20px' fontWeight='bold' color='black'>Dio Bank</Text>
        </Center>
      </Box>
      {
        isLoggedIn &&  (
          <>
            <Spacer />
              <Button colorScheme='teal' size='sm' onClick={() => logout()}>Sair</Button>

          </>
        )
      }
    </Flex>

  );
};





















// import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react';
// import { useContext, useState } from 'react'; // Import do useState
// import { AppContext } from '../components/AppContext';
// import { useNavigate } from 'react-router-dom';
// import { changeLocalStorage } from '../services/storage';

// export const Header = () => {
//   const { isLoggedIn, setIsLoggedIn } = useContext(AppContext); // Desestruturando o contexto
//   const navigate = useNavigate();
//   const [showBackButton, setShowBackButton] = useState(true); // Inicialização do estado

//   const logout = () => {
//     changeLocalStorage({ login: false }); // Atualiza o localStorage
//     setIsLoggedIn(false); // Atualiza o contexto
//     navigate('/'); // Redireciona para a página inicial
//   };

//   const goBack = () => {
//     navigate(-1); // Volta para a página anterior
//     setShowBackButton(false); // Atualiza o estado para ocultar o botão
//   };

//   return (
//     <Flex
//       background="white"
//       position="fixed"
//       top={0}
//       width="100%"
//       zIndex={1}
//       padding="10px"
//       paddingRight={5}
//       paddingLeft={5}
//     >
//       <Box>
//         <Center>
//           <Text fontSize="20px" fontWeight="bold" color="black">
//             Dio Bank
//           </Text>
//         </Center>
//       </Box>
//       {isLoggedIn && (
//         <>
//           <Spacer />
//           {showBackButton && (
//             <Button colorScheme="teal" size="sm" onClick={goBack}>
//               Voltar
//             </Button>
//           )}
//           <Button colorScheme="teal" size="sm" onClick={logout}>
//             Sair
//           </Button>
//         </>
//       )}
//     </Flex>
//   );
// };


