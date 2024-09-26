import { styled } from 'styled-components'
import { Colors, breackpoints } from '../../styles'

type Props = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

type TabButtonProps = {
  isActive: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '0px')};
  align-items: flex-end;

  @media (max-width: ${breackpoints.tablet}) {
    display: block;
  }
`
export const InputGroup = styled.div<Props>`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : 'auto')};
  flex: auto;
  label {
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
  }
  input,
  select {
    background-color: ${Colors.white};
    border: 1px solid ${Colors.white};
    height: 32px;
    padding: 0 8px;
    width: 100%;
    cursor: pointer;

    &.error {
      border: 1px solid red;
    }
  }
  @media (max-width: ${breackpoints.tablet}) {
    margin-top: 16px;
  }
`
export const tabButton = styled.button<TabButtonProps>`
  border-radius: 8px;
  margin-bottom: 24px;
  font-weight: bold;
  font-size: 14px;
  color: ${Colors.white};
  background-color: ${(props) =>
    props.isActive ? Colors.green : Colors.black};
  cursor: pointer;
  height: 32px;
  border: none;
  margin-right: 16px;
  padding: 0 8px;

  img {
    margin-right: 8px;
  }

  @media (max-width: ${breackpoints.tablet}) {
    margin-right: 0;
    width: 100%;
  }
`
