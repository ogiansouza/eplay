import styled from 'styled-components'
import { cores } from '../../styles'

export const Form = styled.form`
  display: block;

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  label {
    display: block;
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: bold;
  }

  input {
    background-color: ${cores.fundo};
    border: 1px solid ${cores.fundo};
    height: 32px;
    max-width: 100%;
    width: 100%;
    padding: 0 8px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
  }

  .margin-bottom {
    margin-bottom: 24px;
  }

  .input-1 {
    width: 228px;
  }

  .input-2 {
    width: 155px;
  }

  &.error {
    border: 1px solid red;
  }
`

export const Row = styled.div`
  display: flex;
  gap: 32px;
`
