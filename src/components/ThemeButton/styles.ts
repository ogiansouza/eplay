import styled from 'styled-components'

export const ThemeButtonStyled = styled.button`
  position: fixed;
  bottom: 16px;
  left: 16px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => (theme.primary === '#E8E4F0' ? theme.secondary : theme.primary)};
  color: ${({ theme }) => (theme.primary === '#E8E4F0' ? theme.primary : theme.secondary)};
  border: 2px solid ${({ theme }) => theme.quaternary};
  z-index: 100;
  * {
    color: inherit;
  }
`
