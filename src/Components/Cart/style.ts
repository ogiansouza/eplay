import styled from 'styled-components';
import { colors } from '../../styles';
import { ButtonContainer } from '../Button/style';

import close from '../../images/fechar.png';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  &.is-open {
    display: flex;
  }
`;
export const OverLay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.7;
`;
export const Sidebar = styled.aside`
  max-width: 360px;
  width: 100%;
  background-color: ${colors.gray};
  z-index: 1;
  padding: 40px 16px 0px 16px;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
    background-color: ${colors.green};
    :hover {
      background-color: transparent;
    }
  }
`;
export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};
  margin-bottom: 24px;

  span {
    display: block;
    color: ${colors.lightGray};
    font-size: 12px;
  }
`;

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.white};
  margin-top: 32px;
  margin-bottom: 16px;
`;
export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${colors.lightGray};
  padding: 8px 30px 8px 0;
  position: relative;
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 24px;
  }
  h3 {
    font-size: 16px;
  }
  > div {
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      gap: 8px;
      margin-top: 8px;
      margin-bottom: 16px;
    }
    span {
      font-size: 14px;
      font-weight: bold;
    }
  }
  button {
    width: 16px;
    height: 16px;
    background-image: url(${close});
    background-color: transparent;
    border: none;
    position: absolute;
    top: 8px;
    right: 0;
    cursor: pointer;
  }
`;
