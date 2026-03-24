import styled from 'styled-components'
import { breakpoints } from '@/styles/global'
import type { CheckoutProps } from '.'

export const Row = styled.div<CheckoutProps>`
  display: flex;
  align-items: flex-end;
  column-gap: 24px;
  margin-top: 16px;
  margin-top: ${(props) => props.$marginTop || '0px'};
  @media (max-width: ${breakpoints.lgScreen}) {
    display: block;
  }
`

export const InputGroup = styled.div<CheckoutProps>`
  flex: auto;

  max-width: ${(props) => props.$maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select,
  div[data-mask] input {
    background-color: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.primary};
    height: 32px;
    padding: 0 8px;
    width: 100%;
    border-radius: 4px;
    color: ${({ theme }) => theme.secondary};
    option {
      color: ${({ theme }) => theme.secondary};
    }

    &.error {
      border: 2px solid red;
      color: red;
    }
    @media (max-width: ${breakpoints.lgScreen}) {
      margin-top: 16px;
    }
  }
`
export const ButtonGroup = styled.div`
  display: flex;
  column-gap: 16px;
  margin-bottom: 16px;
  svg {
    margin-right: 8px;
  }
  @media (max-width: ${breakpoints.lgScreen}) {
    margin-top: 8px;
    width: 100%;
  }
`
