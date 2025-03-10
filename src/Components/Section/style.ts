import styled from 'styled-components';
import { Props } from '.';
import { colors } from '../../styles';
import { Card } from '../Product/style';

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'gray' ? colors.gray : colors.black};
  ${Card} {
    background-color: ${(props) =>
      props.background === 'gray' ? colors.black : colors.gray};
  }
  p {
    max-width: 640px;
    font-size: 14px;
    line-height: 22px;
  }
`;
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`;
