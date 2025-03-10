import styled from 'styled-components';
import { colors } from '../../styles';
import { TagContainer } from '../Tag/style';
import { Link } from 'react-router-dom';

export const Card = styled(Link)`
  background-color: ${colors.gray};
  border-radius: 8px;
  padding: 8px;
  position: relative;
  text-decoration: none;
  color: ${colors.white};
  display: block;
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`;
export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  display: block;
  margin: 16px 0 8px 0;
`;
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`;
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;
