<template>
    <form class="container">
    <h1>Cadastro produtos</h1>
    <div class="d-flex flex-column gap-3 mb-3">
        <label for="nome" class="form-group">Nome:
          <input type="text" class="form-control" id="nome" placeholder="Fulano" v-model="cliente.nome" required>
        </label>
        <label for="sobrenome" class="form-group">Sobrenome:
          <input type="text" id="sobrenome" class="form-control" placeholder="De Tal" v-model="cliente.sobrenome" required>
        </label>
        <label for="cpf" class="form-group">CPF:
          <input type="string" id="cpf" class="form-control" placeholder="000.000.000-00" v-model="cliente.cpf" min="1" required>
        </label>
        <label for="email" class="form-group">Email:
          <input type="text" id="email" class="form-control" v-model="cliente.email" placeholder="email@email.com" required>
        </label>
        <label for="telefone" class="form-group">Telefone:
          <input type="text" id="telefone" class="form-control" placeholder="(11) 0000-0000" v-model="cliente.telefone" required>
        </label>
        <label for="cep" class="d-flex flex-wrap flex-column gap-2 mb-3">CEP:
          <input class="form-control w-25" type="text"  @blur="buscaEndereco" id="cep" v-model="cep" placeholder="00000-000" v-mask="'#####-###'" required>
        </label>
        <div class="form-group border p-4 rounded">
          <div class="d-flex gap-2 flex-wrap">
            <label for="logradouro" class="d-flex flex-wrap gap-2 w-75">Logradouro:
              <input class="form-control" type="text" id="logradouro" v-model="endereco.logradouro" required>
            </label>
            <label for="numero" class="d-flex flex-wrap gap-2 width">Número:
              <input class="form-control" type="text" id="numero" v-model="endereco.numero" required>
            </label>
          </div>
          <label for="bairro" class="w-75">Bairro:
              <input class="form-control" type="text" id="bairro" v-model="endereco.bairro" required>
          </label>
          <div class="d-flex gap-2 flex-wrap">
            <label for="cidade" class="w-75">Cidade:
              <input class="form-control" type="text" id="cidade" v-model="endereco.localidade" required>
            </label>
            <label for="estado" class="width line-break">Estado:
              <input class="form-control" type="text" id="estado" v-model="endereco.uf" required>
            </label>
            <input type="tel" v-mask="'##/##/####'" />
          </div>
        </div>
      </div>
    <button type="submit" class="btn btn d-flex gap-2" @click.prevent="salvaNovoCliente"><i class="bi bi-save"></i> Salvar</button>
  </form>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import * as yup from 'yup'
import salvaCliente from '@/services/clientes-services';
import { buscaCep } from '@/services/endereco-services';
import type Cliente from '@/models/clientes';
import type Endereco from '@/models/endereco';

const cep = ref('');
const endereco = reactive({
  logradouro: '',
  numero: '',
  bairro: '',
  localidade: '',
  uf: ''
}) as Endereco;
const cliente = reactive({
  nome: '',
  sobrenome: '',
  cpf: '',
  email: '',
  telefone: '',
  endereco  
}) as Cliente;

function buscaEndereco(){
  buscaCep(cep.value).then(end => {
    endereco.bairro = end.bairro
    endereco.logradouro = end.logradouro
    endereco.localidade = end.localidade
    endereco.uf = end.uf
    endereco.numero = end.numero
  });
  console.log('blur funciona')
}

function salvaNovoCliente(){
  salvaCliente(cliente);
}
</script>
<style scoped>
  .width {
    width: 75px;
  }
</style>