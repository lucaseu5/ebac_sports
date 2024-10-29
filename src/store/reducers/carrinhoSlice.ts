import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../components/Produto/types'

interface CarrinhoState {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho(state, action: PayloadAction<Produto>) {
      const existe = state.itens.find((item) => item.id === action.payload.id)
      if (!existe) {
        state.itens.push(action.payload)
      }
    },
    removerDoCarrinho(state, action: PayloadAction<number>) {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    }
  }
})

export const { adicionarAoCarrinho, removerDoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
