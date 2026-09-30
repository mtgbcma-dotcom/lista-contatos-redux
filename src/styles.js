import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background: #eef3f7;
    color: #1f2937;
  }

  button,
  input {
    font: inherit;
  }
`

export const Page = styled.main`
  width: min(100% - 32px, 920px);
  margin: 0 auto;
  padding: 48px 0 72px;
`

export const Header = styled.header`
  margin-bottom: 28px;

  h1 {
    color: #123c5a;
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 8px;
  }

  p {
    color: #667788;
    line-height: 1.6;
  }
`

export const List = styled.section`
  display: grid;
  gap: 14px;
`

export const EmptyMessage = styled.p`
  padding: 24px;
  text-align: center;
  background: #fff;
  border-radius: 10px;
  color: #667788;
`
