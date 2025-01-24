const conta = {
    email: 'thially@dio.bank',
    password: 'senha123',
    name: 'Thially Moura',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})

