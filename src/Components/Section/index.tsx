import { Container, Title } from './style';

export type Props = {
  title: string;
  background: 'gray' | 'black';
  children: JSX.Element;
};

export function Section({ title, background, children }: Props) {
  return (
    <Container background={background}>
      <div className="container">
        <Title>{title}</Title>
        {children}
      </div>
    </Container>
  );
}
