import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';

export const Links = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    margin-left: 0;
  }
`;

export const HeaderBar = styled.header`
  background-color: ${colors.gray};
  padding: 24px;
  border-radius: 16px;
  margin-top: 40px;
  margin-bottom: 80px;
  a {
    font-weight: 700;
    color: ${colors.white};
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 16px;
    :hover {
      color: ${colors.green};
    }
    @media (max-width: ${breakpoints.tablet}) {
      gap: 4px;
      span {
        display: none;
      }
    }
  }

  img {
    margin-right: 40px;
    @media (max-width: ${breakpoints.tablet}) {
      margin: auto;
    }
  }
`;
export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
    @media (max-width: ${breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;
      ${Links} {
        display: none;
      }
    }
  }
`;

export const Hamburguer = styled.div`
  width: 32px;
  cursor: pointer;
  span {
    width: 100%;
    height: 2px;
    background-color: ${colors.white};
    display: block;
    margin-bottom: 4px;
  }
  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const NavMobile = styled.nav`
  display: none;
  &.is-open {
    display: block;
  }
  @media (min-width: ${breakpoints.tablet}) {
    &.is-open {
      display: none;
    }
  }
`;

export const LinkItem = styled.li`
  @media (max-width: ${breakpoints.tablet}) {
    a {
      display: block;
      padding: 16px 0;
      text-align: center;
    }
  }
`;

export const ButtonCart = styled.a`
  font-weight: 700;
  color: ${colors.white};
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    color: ${colors.green};
  }
  svg {
    font-size: 24px;
  }
`;
