import type { Produto } from '@/models/produtos'
import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', {
//   state: () => ({ count: 0, name: 'Eduardo' }),
//   getters: {
//     doubleCount: (state) => state.count * 2,
//   },
//   actions: {
//     increment() {
//       this.count++
//     },
//   },
// })

export const useStore = defineStore('produtos', {
  state: () => ({
    produtos: [] as Produto[],
  }),
  getters: {
    getProduto(state) {
      return state.produtos
    }
  },
  actions: {
    addproduto(produto: Produto) {
      this.getProduto.push(produto)
    }
  }
  },
)
