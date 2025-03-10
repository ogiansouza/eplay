import * as S from './style';

export type Props = {
  type: 'button' | 'link' | 'submit';
  title: string;
  children: string;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
};

export function Button({
  type,
  to,
  children,
  onClick,
  title,
  variant = 'primary',
}: Props): JSX.Element {
  if (type === 'button' || type === 'submit') {
    return (
      <S.ButtonContainer
        variant={variant}
        type={type}
        title={title}
        onClick={onClick}
      >
        {children}
      </S.ButtonContainer>
    );
  }
  return (
    <S.ButtonLink to={to as string} title={title}>
      {children}
    </S.ButtonLink>
  );
}
