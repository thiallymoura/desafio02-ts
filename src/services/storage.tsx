interface IDDioBank {
    login: boolean
}

const dioBank = {
    login: false
}

export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem('diobank'); // Retorna o localStorage
}

export const createLocalStorage = (): void => { 
    localStorage.setItem('diobank', JSON.stringify(dioBank)); // Cria o localStorage
}

export const changeLocalStorage = (dioBank: IDDioBank) => {
    localStorage.setItem('diobank', JSON.stringify(dioBank));
    
}