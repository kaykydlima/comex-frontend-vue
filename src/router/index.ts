import CadastroCategoria from '@/views/CadastroCategoria.vue';
import CadastroProdutos from '@/views/CadastroProdutos.vue';
import CadastroCliente from '@/views/CadastroCliente.vue';
import CarrinhoCompras from '@/views/CarrinhoCompras.vue'
import Home from '@/views/Home.vue';
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/cadastro-produtos',
        component: CadastroProdutos
    },
    {
        path: '/cadastro-categorias',
        component: CadastroCategoria
    },
    {
        path: '/cadastro-cliente',
        component: CadastroCliente
    },
    {
        path: '/carrinho-compras',
        component: CarrinhoCompras
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;