import styled from 'styled-components';
import { colors } from '../../styles';

export const Items = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;
export const Action = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 500ms ease;
`;

export const Item = styled.li`
  position: relative;
  > img,
  video {
    width: 150px;
    height: 150px;
    border: 2px solid ${colors.white};
    border-radius: 8px;
    object-fit: cover;
  }
  :hover {
    ${Action} {
      opacity: 1;
      transition: opacity 500ms ease;
    }
  }
`;
export const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;

  &.visible {
    display: flex;
  }
  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.73);
  }
`;
export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    h4 {
      font-size: 18px;
      font-weight: bold;
    }
    img {
      cursor: pointer;
      border: 1px solid transparent;
      border-radius: 8px;
      padding: 4px;
      :hover {
        border-color: ${colors.white};
      }
    }
  }

  > img,
  iframe {
    display: block;
    width: 100%;
  }
  iframe {
    height: 480px;
    border: none;
  }
`;
