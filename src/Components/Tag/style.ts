import styled from 'styled-components';
import { colors } from '../../styles';
import { Props } from '.';

export const TagContainer = styled.span<Props>`
  border-radius: 8px;
  background-color: ${colors.green};
  padding: ${(props) => (props.size === 'large' ? '8px 16px' : '4px 6px')};
  font-size: ${(props) => (props.size === 'large' ? '16px' : '10px')};
  font-weight: 700;
`;
