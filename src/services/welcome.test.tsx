import { welcomeMessage } from './welcome';

describe('welcomeMessage', () => {
  it('deve exibir um alert com a mensagem de boas-vindas', () => {
    
    // Mock do alert
    const mockAlert = jest.fn(); // Função mock
    window.alert = mockAlert;

    // Executa a função
    welcomeMessage();

    // Verifica se o alert foi chamado com a mensagem correta
    expect(mockAlert).toHaveBeenCalledWith(
      'Boas-vindas a minha primeira aplicação.'
    );
  });
});