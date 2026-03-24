import { MainContainer } from '@/styles/global'
import * as S from './styles'

export type SectionProps = {
  title?: string
  $background?: 'black' | 'gray'
  children: React.ReactNode
}

const Section = ({ title, $background, children }: SectionProps) => {
  return (
    <S.ProductListStyled $background={$background}>
      <MainContainer>
        <S.Title>{title}</S.Title>
        {children}
      </MainContainer>
    </S.ProductListStyled>
  )
}

export default Section
