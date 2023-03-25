import type Cliente from "@/models/clientes";

const url = 'http://localhost:3000/clientes'

export default function salvaCliente(cliente: Cliente) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(cliente)
  });
}