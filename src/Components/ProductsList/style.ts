import styled from 'styled-components';
import { Props } from '.';
import { breakpoints, colors } from '../../styles';
import { Card } from '../Product/style';

export const Container = styled.section<
  Omit<Props, 'title' | 'games' | 'isLoading'>
>`
  background-color: ${(props) =>
    props.background === 'gray' ? colors.gray : colors.black};
  ${Card} {
    background-color: ${(props) =>
      props.background === 'gray' ? colors.black : colors.gray};
  }
  .container {
    padding: 32px 0;
  }
`;
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  margin-top: 40px;
  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;
