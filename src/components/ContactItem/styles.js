import styled from 'styled-components'

export const Card = styled.article`
  padding: 20px;
  border: 1px solid #d9e2e8;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 6px 20px rgba(24, 52, 73, 0.05);
`

export const Data = styled.div`
  display: grid;
  gap: 8px;

  h3 {
    color: #123c5a;
    font-size: 20px;
  }

  p {
    color: #667788;
  }
`

export const EditInput = styled.input`
  width: 100%;
  min-height: 40px;
  padding: 0 10px;
  border: 1px solid #cfd8df;
  border-radius: 6px;
`

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

const Button = styled.button`
  min-height: 38px;
  padding: 0 14px;
  border: none;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
`

export const EditButton = styled(Button)`
  background: #1f6f8b;
`

export const SaveButton = styled(Button)`
  background: #2f855a;
`

export const CancelButton = styled(Button)`
  background: #6b7280;
`

export const RemoveButton = styled(Button)`
  background: #c2413b;
`
