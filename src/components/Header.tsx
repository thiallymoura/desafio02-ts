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
        isLoggedIn && (
          <>
            <Spacer />
              <Button colorScheme='teal' size='sm' onClick={() => logout()}>Sair</Button>

          </>
        )
      }
    </Flex>

  );
};


