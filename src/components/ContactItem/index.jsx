import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { editarContato, removerContato } from '../../store/contactsSlice'
import {
  Actions,
  CancelButton,
  Card,
  Data,
  EditButton,
  EditInput,
  RemoveButton,
  SaveButton
} from './styles'

const ContactItem = ({ contato }) => {
  const dispatch = useDispatch()
  const [editando, setEditando] = useState(false)
  const [nome, setNome] = useState(contato.nome)
  const [email, setEmail] = useState(contato.email)
  const [telefone, setTelefone] = useState(contato.telefone)

  const salvar = () => {
    if (!nome.trim() || !email.trim() || !telefone.trim()) {
      return
    }

    dispatch(
      editarContato({
        id: contato.id,
        nome: nome.trim(),
        email: email.trim(),
        telefone: telefone.trim()
      })
    )
    setEditando(false)
  }

  const cancelar = () => {
    setNome(contato.nome)
    setEmail(contato.email)
    setTelefone(contato.telefone)
    setEditando(false)
  }

  return (
    <Card>
      {editando ? (
        <Data>
          <EditInput
            aria-label="Editar nome completo"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
          <EditInput
            aria-label="Editar e-mail"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <EditInput
            aria-label="Editar telefone"
            value={telefone}
            onChange={(event) => setTelefone(event.target.value)}
          />
        </Data>
      ) : (
        <Data>
          <h3>{contato.nome}</h3>
          <p>{contato.email}</p>
          <p>{contato.telefone}</p>
        </Data>
      )}

      <Actions>
        {editando ? (
          <>
            <SaveButton type="button" onClick={salvar}>
              Salvar
            </SaveButton>
            <CancelButton type="button" onClick={cancelar}>
              Cancelar
            </CancelButton>
          </>
        ) : (
          <EditButton type="button" onClick={() => setEditando(true)}>
            Editar
          </EditButton>
        )}

        <RemoveButton
          type="button"
          onClick={() => dispatch(removerContato(contato.id))}
        >
          Remover
        </RemoveButton>
      </Actions>
    </Card>
  )
}

export default ContactItem
