import styled from 'styled-components'

type CardProps = {
  background: 'black' | 'gray'
}

export const Card = styled.div<CardProps>`
  background-color: ${({ background, theme }) =>
    background === 'black' ? theme.secondary : theme.tertiary};
  border-radius: 8px;
  padding: 8px;
  position: relative;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: contain;
    border-radius: 4px;
  }
`

export const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 8px 0;
  color: ${({ theme }) => theme.primary};
`

export const PriceInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 8px 0;

  .old-price {
    text-decoration: line-through;
    color: ${({ theme }) => theme.tertiary};
    font-size: 0.9rem;
  }

  .current-price {
    color: ${({ theme }) => theme.primary};
    font-weight: bold;
    font-size: 1.1rem;
  }
`

export const DiscountBadge = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: #e66767;
  color: ${({ theme }) => theme.primary};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
  z-index: 1;
`

export const Infos = styled.div`
  display: flex;
  gap: 8px;
  margin: 8px 0;
  flex-wrap: wrap;
`

export const Description = styled.p`
  color: ${({ theme }) => theme.tertiary};
  font-size: 0.9rem;
  line-height: 1.4;
  margin-top: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
