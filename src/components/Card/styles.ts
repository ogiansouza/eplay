import styled from 'styled-components'

export const CardContainer = styled.div`
  margin-bottom: 40px;
  padding: 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.tertiary};
  h2,
  h3 {
    font-size: 18px;
    font-weight: bolder;
    margin-bottom: 24px;
  }
  .margin-top {
    margin-top: 24px;
  }
  p {
    font-size: 14px;
    line-height: 22px;
  }
`
