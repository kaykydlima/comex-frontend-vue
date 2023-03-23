import { v4 as uuid } from 'uuid';

const data = new Date().toLocaleDateString().split('/').reverse().join('-')

export interface Categoria{
  id: string;
  nome: string;
  criacao: string;
  status: string;
}

export function criaCategoria(nome: string): Categoria {
  return {
    id: uuid(),
    nome: nome,
    criacao: data,
    status: 'ATIVO',
  }
}
