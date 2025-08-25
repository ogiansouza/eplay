import styled from 'styled-components'
import { colors } from '../../styles'

type TabButtonProps = {
  isActive: boolean
}

type InputGroupProps = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};
`

export const InfoGroup = styled.div<InputGroupProps>`
  display: flex;
  flex-direction: column;
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin: 8px 0;
  }

  option {
    color: ${colors.black};
  }

  input,
  select {
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${colors.white};
    background-color: ${colors.white};
    color: ${colors.black};
    widht: 100%;

    &.error {
      border: 1px solid red;
    }
  }
`

export const TabButton = styled.button<TabButtonProps>`
  background-color: ${(props) =>
    props.isActive ? colors.green : colors.black};
  padding: 8px;
  border-radius: 8px;
  border: none;
  height: 32px;
  margin-right: 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;

  img {
    margin-right: 8px;
  }
`
