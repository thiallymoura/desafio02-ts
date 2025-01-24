
import { Box } from '@chakra-ui/react';

interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <Box
      backgroundColor="#ffffff"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      gap="10px"
      borderRadius="25px"
      maxWidth='390px'
      height='300px'
      padding="15px"
      margin='190px auto'
      boxShadow="lg"
    >
      {children}
    </Box>
  );
};






// export const Card: React.FC<CardProps> = ({ children }) => {
//   return (
//     <Box
//       backgroundColor="#ffffff"
//       display="flex"
//       justifyContent="center"
//       flexDirection="column"
//       gap="10px"
//       borderRadius="25px"
//       maxWidth='350px'
//       height='300px'
//       margin='120px auto'
//       padding="15px"
//       boxShadow="lg"
//     >
//       {children}
//     </Box>
//   );
// };






















