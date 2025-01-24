import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage"

const dioBank = {
    login: false
}


describe('storage', () => {

    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')

    it('Deve retornar o objeto no localStorage com a chave diobank', () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem') //cria uma função mockada
        getAllLocalStorage() // Chama a funcao
        expect(mockGetItem).toHaveBeenCalledWith('diobank') // Verifica se foi chamada
    })

 
    it('Deve criar o objeto no localStorage', () => {
        const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })


    it('Deve alterar o objeto no localStorage', () => {
        changeLocalStorage(dioBank)
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })
})

