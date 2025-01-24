import { welcomeMessage } from './welcome';

describe('welcomeMessage', () => {
  const mockApiResponse = { email: 'thially@dio.bank', password: 'senha123' }; // Dados simulados da API
  jest.mock('../api', () => ({
    api: Promise.resolve(mockApiResponse), // Mock da API retornando os dados simulados
  }));

  it('deve retornar true se o email e a senha forem válidos', async () => {
    // Executa a função com valores válidos
    const response = await welcomeMessage('thially@dio.bank', 'senha123');
    expect(response).toBeTruthy();
  });

  it('deve retornar false se o email for inválido', async () => {
    // Executa a função com um email inválido
    const response = await welcomeMessage('email@invalido.com', 'senha123');
    expect(response).toBeFalsy();
  });

  it('deve retornar false se a senha for inválida', async () => {
    // Executa a função com uma senha inválida
    const response = await welcomeMessage('thially@dio.bank', 'senhaErrada');
    expect(response).toBeFalsy();
  });

  it('deve retornar false se ambos forem inválidos', async () => {
    // Executa a função com email e senha inválidos
    const response = await welcomeMessage('email@invalido.com', 'senhaErrada');
    expect(response).toBeFalsy();
  });
});


// import { welcomeMessage } from './welcome';
// describe('welcomeMessage', () => {

//    // Mock do alert
//    const mockAlert = jest.fn(); 
//    window.alert = mockAlert; 

//    const mockEmail = 'thially@dio.bank' // Mock da variável email

//   it('deve exibir um alert com a mensagem de boas-vindas caso o email seja válido', async() => {
//     //executa a funcao
//     const response = await welcomeMessage(mockEmail); 
//     // Verifica se é verdadeiro
//     expect(response).toBeTruthy();
//   });

//   it('deve exibir um erro caso o email seja inválido', async() => {
//     // Executa a função
//     const response = await welcomeMessage('email@invalido.com');
//     // Verifica se é falso 
//     expect(response).toBeFalsy();
//   });
  
// });  

























// import { welcomeMessage } from './welcome';

// const mockSetIsLoggedIn = jest.fn(); // Função mock
// const mockNavigate = jest.fn();

// jest.mock('react', () => ({
//   ...jest.requireActual('react'), //desestruturação
//   useContext:() => ({
//     setIsLoggedIn: mockSetIsLoggedIn
//   })

// }));

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom') as any, //desestruturação
//   useNavigate: () =>  mockNavigate
// }));

// describe('welcomeMessage', () => {

//    // Mock do alert
//    const mockAlert = jest.fn(); 
//    window.alert = mockAlert; 

//    const mockEmail = 'thially@dio.bank' // Mock da variável email

//   it('deve exibir um alert com a mensagem de boas-vindas caso o email seja válido', async() => {
//     //executa a funcao
//     await welcomeMessage(mockEmail); 
//     // Verifica se o alert foi chamado
//     expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true);
//     // Mensagem esperada com o e-mail fornecido
//     expect(mockNavigate).toHaveBeenCalledWith('/1');
//   });

//   it('deve exibir um erro caso o email seja inválido', async() => {
//     // Executa a função
//     await welcomeMessage('email@invalido.com');
//     // Verifica se o alert foi chamado
//     expect(mockSetIsLoggedIn).not.toHaveBeenCalledWith();
//     // Mensagem esperada com o e-mail fornecido
//     expect(mockAlert).toHaveBeenCalledWith('Email inválido');
//   });
  
// });  