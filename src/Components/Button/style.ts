import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../styles';
import { Props } from '.';

export const ButtonContainer = styled.button<Props>`
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? colors.green : colors.white)};
  color: ${colors.white};
  background-color: transparent;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  transition: 300ms all;
  cursor: pointer;
  :hover {
    background-color: ${(props) =>
      props.variant === 'primary' ? colors.green : colors.white};
    color: ${(props) =>
      props.variant === 'primary' ? colors.white : colors.black};
  }
`;
export const ButtonLink = styled(Link)`
  border: 2px solid ${colors.white};
  color: ${colors.white};
  background-color: transparent;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 8px;
  :hover {
    background-color: ${colors.white};
    color: ${colors.black};
  }
`;
