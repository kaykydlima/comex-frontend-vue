import type { Categoria } from "@/models/categoria";

const url = 'http://localhost:3000/categorias'

export function salvaCategoria(categoria: Categoria): Promise<Categoria> {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(categoria)
  }).then(resp => resp.json())
}

export function buscaCategorias(): Promise<Categoria[]> {
  return fetch(url).then(resp => resp.json())
}

export function apagarCategoria(categoria: Categoria): Promise<void> {
  return fetch(`${url}/${categoria.id}`, {
    method: 'DELETE'
  }).then(resp => alert(`Categoria ${categoria.nome} deletada com sucesso`))
}