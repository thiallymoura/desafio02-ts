import { Box, Text } from "@chakra-ui/react"

interface ICardDados{ 
    mainContent: string,
    content: string
}

const CardDados = ({ mainContent, content}: ICardDados) => {
    return (
        <Box 
            backgroundColor="white"
            minHeight="130px"
            padding={8}
            borderRadius="25px"
        > 
            <Text fontSize="2xl" fontWeight="bold">{mainContent}</Text>
            <Text fontSize="xl" >{content}</Text>
        </Box>
    )
}

export default CardDados;


// const ContaInfo = () => {
//     return (
//         <Center>
//             <SimpleGrid columns={1} spacing={8} paddingTop={100} >
//                 <Box backgroundColor="white" borderRadius="25px" padding="20px" >
//                     <Text fontSize="2xl" fontWeight="bold" color="black">
//                         Informações do Usuário
//                     </Text>
//                     <Text fontSize="lg" color="black" mt={4}>
//                         Nome: 
//                     </Text>
//                     <Text fontSize="lg" color="black" mt={2}>
//                         Email: 
//                     </Text>
//                 </Box>
//             </SimpleGrid>
//         </Center>
//     ); 
// };

// export default ContaInfo;