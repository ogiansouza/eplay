import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
  padding: 24px;
  margin-bottom: 40px;
  border-radius: 8px;
  background-color: ${colors.gray};
  h2,
  h3 {
    font-size: 18px;
    font-weight: bold;
    color: ${colors.white};
    margin-bottom: 24px;
  }
  .margin-top {
    margin-top: 24px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }
`;
