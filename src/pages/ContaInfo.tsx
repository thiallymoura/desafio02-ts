import { Box, Button, Center, SimpleGrid, Spacer } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import CardDados from "../components/CardDados";

const ContaInfo = () => {
    const navigate = useNavigate(); // Para navegar entre as páginas
    const { isLoggedIn, name, email } = useContext(AppContext); // Adicione "user" ao contexto

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/"); // Redireciona para a página inicial
        }
    }, [isLoggedIn, navigate]);

    if (!isLoggedIn) {
        return null; // Evita renderizar conteúdo antes do redirecionamento
    }

    function viewAccount() {
        navigate('/conta/1');
    }

    return (
        <Center>
            <SimpleGrid columns={1} spacing={8} paddingTop={100}>
                <Box backgroundColor="white" borderRadius="25px" padding="20px">
                    {name && email ? (
                        <CardDados mainContent={`Seja bem-vinda, ${name}!`}
                            content={`Email: ${email}`} />
                    ) : (
                        "Carregando informações do usuário..."
                    )}

                    <>
                        <Center>
                            <Button colorScheme='teal' size='sm' onClick={() => viewAccount()}>Vizualizar Conta</Button>
                        </Center>
                    </>
                </Box>
            </SimpleGrid>
        </Center>
    );
};

export default ContaInfo;






















// import { Box, Center, SimpleGrid, Text } from "@chakra-ui/react"

// const ContaInfo = () => {
//     return (
//         <Center>
//             <SimpleGrid columns={2} spacing={8} paddingTop={100}>
//                 <Box p={5} boxShadow="lg" borderRadius="md" bg="teal.500" paddingTop={100} width="100%" maxWidth="500px">
//                     <Text fontSize="3xl" fontWeight="bold" color="white">
//                         Informações do Usuário
//                     </Text>
//                     <Text fontSize="lg" color="white" mt={4}>
//                         Nome:
//                     </Text>
//                     <Text fontSize="lg" color="white" mt={2}>
//                         Email:
//                     </Text>
//                 </Box>
//             </SimpleGrid>
//         </Center>
//     );
// };

// export default ContaInfo;












// import { Text} from "@chakra-ui/react"
// import { Link } from "react-router-dom";
// import { AppContext } from "../components/AppContext";

// const ContaInfo = () => {
//     return (
//         <>
//             <Text fontSize='3xl' fontWeight='bold'>
//                 Informações da conta
//             </Text>
//             <Link to='/conta/1'>
//                 <Text fontSize='xl'>
//                     Conta
//                 </Text>
//             </Link>

//         </>
//     )
// }
