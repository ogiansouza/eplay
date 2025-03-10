import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';
import { TagContainer } from '../Tag/style';

export const Banner = styled.div`
  width: 100%;
  height: 480px;
  display: block;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.56);
  }
  ${TagContainer} {
    margin-right: 8px;
  }
  .container {
    height: 100%;
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 0;
    padding-top: 20px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    background-size: cover;
  }
`;
export const Infos = styled.div`
  max-width: 290px;
  padding: 16px;
  background-color: ${colors.black};
  font-weight: bold;

  h2 {
    font-size: 32px;
  }
  div {
    margin: 16px 0;
    p,
    span {
      font-size: 18px;
    }
    span {
      text-decoration: line-through;
    }
  }
`;
