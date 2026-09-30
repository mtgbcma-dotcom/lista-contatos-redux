import { useSelector } from 'react-redux'

import ContactForm from './components/ContactForm'
import ContactItem from './components/ContactItem'
import { EmptyMessage, GlobalStyle, Header, List, Page } from './styles'

const App = () => {
  const contatos = useSelector((state) => state.contatos.items)

  return (
    <>
      <GlobalStyle />
      <Page>
        <Header>
          <h1>Lista de Contatos</h1>
          <p>Cadastro de contatos com React, Redux Toolkit e Styled Components.</p>
        </Header>

        <ContactForm />

        {contatos.length > 0 ? (
          <List>
            {contatos.map((contato) => (
              <ContactItem key={contato.id} contato={contato} />
            ))}
          </List>
        ) : (
          <EmptyMessage>Nenhum contato cadastrado.</EmptyMessage>
        )}
      </Page>
    </>
  )
}

export default App
