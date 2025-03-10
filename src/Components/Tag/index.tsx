import { TagContainer } from './style';
export type Props = {
  size?: 'small' | 'large';
  children: string;
};

export function Tag({ children, size = 'small' }: Props) {
  return <TagContainer size={size}>{children}</TagContainer>;
}
