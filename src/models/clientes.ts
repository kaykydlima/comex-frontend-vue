import type Endereco  from './endereco.js'

export default interface Cliente{
    nome: string,
    sobrenome: string,
    cpf: string,
    telefone: string,
    email: string,
    endereco: Endereco 
}

/* {
        logradouro: string,
        numero: number,
        bairro: string,
        cidade: string,
        estado: string,
        pais: string
    } */