import type Endereco from '@/models/endereco'

function url(cep: string): string {
  return `https://viacep.com.br/ws/${cep}/json/`
}

export function buscaCep(cep: string): Promise<Endereco>{
  return fetch(`https://viacep.com.br/ws/${cep}/json/`).then(resp => resp.json())
}