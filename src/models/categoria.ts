import { v4 as uuid } from 'uuid';

const data = new Date().toLocaleDateString().split('/').reverse().join('-')

export interface Categoria{
  uuid: string;
  nome: string;
  criacao: string;
  status: string;
}

export function criaCategoria(nome: string): Categoria {
  return {
    uuid: uuid(),
    nome: nome,
    criacao: data,
    status: 'ATIVO',
  }
}
