import * as S from './styles'

export type ButtonProps = {
  children: string | React.ReactNode
  type?: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  $variant?: 'primary' | 'secondary'
  hover?: boolean
  $disabled?: boolean
}

const Button = ({
  children,
  type = 'button',
  title,
  to,
  onClick,
  $variant = 'primary',
  hover = true,
  $disabled = false
}: ButtonProps) => {
  if (type === 'button') {
    return (
      <S.ButtonStyled
        type={type}
        title={title}
        onClick={onClick}
        $variant={$variant}
        className={!hover ? 'disable-hover' : ''}
        disabled={$disabled}
      >
        {children}
      </S.ButtonStyled>
    )
  }
  return (
    <S.ButtonLink title={title} to={to as string}>
      {children}
    </S.ButtonLink>
  )
}

export default Button
