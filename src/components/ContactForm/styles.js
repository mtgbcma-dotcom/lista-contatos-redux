import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1.2fr 1.2fr 1fr auto;
  gap: 10px;
  padding: 20px;
  margin-bottom: 24px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(24, 52, 73, 0.08);

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

export const Input = styled.input`
  min-height: 44px;
  padding: 0 12px;
  border: 1px solid #cfd8df;
  border-radius: 7px;
  outline: none;

  &:focus {
    border-color: #1f6f8b;
  }
`

export const AddButton = styled.button`
  min-height: 44px;
  padding: 0 18px;
  border: none;
  border-radius: 7px;
  background: #1f6f8b;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #185a70;
  }
`
