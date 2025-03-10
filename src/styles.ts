import { createGlobalStyle } from 'styled-components';

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
};

export const colors = {
  white: '#EEEEEE',
  black: '#111',
  gray: '#333',
  green: '#10AC84',
  lightGray: '#A3A3A3',
};

export const GolbalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
  }

  body{
    background-color: ${colors.black};
    color: ${colors.white};

  }
  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`;
