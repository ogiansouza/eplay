import styled from 'styled-components'
import { Breakpoints, colors } from '../../../Styles'

type InputGroupProps = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

type TabButtonProps = {
  isactive: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};
  align-items: flex-end;

  @media (max-width: ${Breakpoints.tablet}) {
    display: block;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    background-color: ${colors.white};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${colors.white};
    width: 100%;

    &.error {
      border: 1px solid red;
    }
  }
  @media (max-width: ${Breakpoints.tablet}) {
    margin-top: 16px;
  }
`
export const TabButton = styled.button<TabButtonProps>`
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
  height: 32px;
  border: none;
  margin-right: 16px;
  cursor: pointer;
  padding: 0 8px;
  background-color: ${(props) =>
    props.isactive ? colors.green : colors.black};

  img {
    margin-right: 8px;
  }
  @media (max-width: ${Breakpoints.tablet}) {
    margin-top: 8px;
    width: 100%;
  }
`
