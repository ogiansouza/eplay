import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  as: 'button' | 'link'
  htmlType?: 'button' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
  disabled?: boolean
}

const Button = ({
  as,
  title,
  to,
  onClick,
  children,
  htmlType = 'button',
  disabled
}: Props) => {
  if (as === 'button') {
    return (
      <ButtonContainer
        title={title}
        onClick={onClick}
        type={htmlType}
        disabled={disabled}
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}
export default Button
