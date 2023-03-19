import type { Produto } from "@/models/produtos.js";

const url = "http://localhost:3000/produtos";

export function salvaProduto(produto: Produto): Promise<Produto> {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(produto),
  }).then((resp) => resp.json());
}
