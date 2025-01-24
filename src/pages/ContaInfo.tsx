import { Box, Center, Text } from "@chakra-ui/react"

const ContaInfo = () => {
    return (
        <Center>
            <Box p={5} boxShadow="lg" borderRadius="md" bg="teal.500" paddingTop={100} width="100%" maxWidth="500px">
                <Text fontSize="3xl" fontWeight="bold" color="white">
                    Informações do Usuário
                </Text>
                <Text fontSize="lg" color="white" mt={4}>
                    Nome: 
                </Text>
                <Text fontSize="lg" color="white" mt={2}>
                    Email: 
                </Text>
            </Box>
        </Center>
    );
};

export default ContaInfo;














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
