import React, { useState } from 'react';
import { Input, VStack } from '@chakra-ui/react';
import { Button } from './Button';
import { welcomeMessage } from '../services/welcome';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const handleLogin = () => {
        welcomeMessage();
  };

  return (
    <VStack spacing={4}>
      <Input
        placeholder="Digite seu email"
        variant="filled"
        width="100%"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Digite sua senha"
        variant="filled"
        margin="0 auto"
        width="100%"
        marginBottom="20px"
        focusBorderColor="teal.400"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <Button
        onClick={handleLogin}
        label="Entrar"
        colorScheme="teal"
        size="sm"
        width="100%"
        height="40px"
        marginTop="5px"
      />
    </VStack>
  );
};
