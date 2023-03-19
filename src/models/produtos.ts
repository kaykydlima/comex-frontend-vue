import type { Categoria } from "./categoria";

export interface Produto {
  nome: string;
  preco: string;
  quantidadeEstoque: number;
  descricaoProduto: string;
  categoria: string;
  url: string;
}

export function criaProduto(nome: string, preco: string, quantidadeEstoque: number, descricaoProduto: string, categoria: string, url: string): Produto{
  return{
    nome,
    preco,
    quantidadeEstoque,
    descricaoProduto,
    categoria,
    url
  }
}