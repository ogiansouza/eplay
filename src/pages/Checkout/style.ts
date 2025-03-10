import styled from 'styled-components';
import { colors } from '../../styles';
import { ButtonContainer } from '../../Components/Button/style';

type InputProps = {
  maxWidth?: string;
  marginTop?: string;
};
type RowProps = {
  marginTop?: string;
};
type TabButtonProps = {
  isActive: boolean;
};

export const Container = styled.form`
  ${ButtonContainer} {
    background-color: ${colors.green};
  }
`;

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop};
  align-items: flex-end;
`;
export const InputGroup = styled.div<InputProps>`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : 'auto')};
  flex: auto;
  position: relative;
  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }
  select,
  input {
    width: 100%;
    background-color: ${colors.white};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${colors.gray};
    &.error {
      border: 1px solid red;
    }
  }
`;

export const TabButton = styled.button<TabButtonProps>`
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${(props) =>
    props.isActive ? colors.green : colors.black};
  height: 32px;
  border: none;
  margin-right: 16px;
  padding: 0 8px;
  cursor: pointer;
  img {
    margin-right: 8px;
  }
`;
