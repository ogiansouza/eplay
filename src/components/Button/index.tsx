import * as S from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant: 'primary' | 'secondary'
  disabled?: boolean
}

export default function Button({
  type,
  children,
  title,
  to,
  onClick,
  disabled,
  variant = 'primary'
}: Props) {
  if (type === 'button' || type === 'submit')
    return (
      <S.ButtonContain
        variant={variant}
        type={type}
        title={title}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </S.ButtonContain>
    )
  return (
    <S.ButtonLink to={to as string} title={title}>
      {children}
    </S.ButtonLink>
  )
}
