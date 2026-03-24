import logoImg from '@/assets/images/logo.svg'
import styled from 'styled-components'

const LogoImg = styled.img`
  width: 40px;
  height: auto;
`

const Logo = () => {
  return (
    <>
      <LogoImg src={logoImg} alt="Logo" />
    </>
  )
}
export default Logo
