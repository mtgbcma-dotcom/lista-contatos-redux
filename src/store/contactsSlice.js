import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    {
      id: 1,
      nome: 'Ana Souza',
      email: 'ana.souza@email.com',
      telefone: '(11) 99999-1111'
    },
    {
      id: 2,
      nome: 'Carlos Lima',
      email: 'carlos.lima@email.com',
      telefone: '(31) 98888-2222'
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionarContato: (state, action) => {
      const novoId = state.items.length
        ? Math.max(...state.items.map((contato) => contato.id)) + 1
        : 1

      state.items.push({ id: novoId, ...action.payload })
    },
    removerContato: (state, action) => {
      state.items = state.items.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editarContato: (state, action) => {
      const indice = state.items.findIndex(
        (contato) => contato.id === action.payload.id
      )

      if (indice !== -1) {
        state.items[indice] = action.payload
      }
    }
  }
})

export const { adicionarContato, removerContato, editarContato } =
  contactsSlice.actions

export default contactsSlice.reducer
