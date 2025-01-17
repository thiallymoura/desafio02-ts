import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

interface ButtonProps {
  onClick: () => void;
  label: string;
  colorScheme?: string;
  size?: string;
  width?: string;
  marginTop?: string;
  height?: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <ChakraButton 
      onClick={onClick} 
      colorScheme="teal" 
      size="md" 
      width="100%"
    >
      {label}
    </ChakraButton>
  );
};