import { Fundo, Titulo, SubTitulo } from './styles'
import vetorFundo from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.svg'
import { useState } from 'react'

const HeaderCategories = () => {
  const [voltar] = useState(true)
  const clicar = () => {
    if (voltar) {
      window.history.back()
    }
  }

  return (
    <>
      <Fundo style={{ backgroundImage: `url(${vetorFundo})` }}>
        <Titulo style={{ cursor: 'pointer' }} onClick={clicar}>
          Restaurante
        </Titulo>
        <img src={logo} alt="Logo" />
        <SubTitulo>0 produto(s) no carrinho</SubTitulo>
      </Fundo>
    </>
  )
}

export default HeaderCategories
