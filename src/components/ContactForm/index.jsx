import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { adicionarContato } from '../../store/contactsSlice'
import { AddButton, Form, Input } from './styles'

const ContactForm = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!nome.trim() || !email.trim() || !telefone.trim()) {
      return
    }

    dispatch(
      adicionarContato({
        nome: nome.trim(),
        email: email.trim(),
        telefone: telefone.trim()
      })
    )

    setNome('')
    setEmail('')
    setTelefone('')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        aria-label="Nome completo"
        placeholder="Nome completo"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <Input
        aria-label="E-mail"
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        aria-label="Telefone"
        placeholder="Telefone"
        value={telefone}
        onChange={(event) => setTelefone(event.target.value)}
      />
      <AddButton type="submit">Adicionar</AddButton>
    </Form>
  )
}

export default ContactForm
