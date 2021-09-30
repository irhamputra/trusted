import { CSSProperties, ReactChild, ReactNode } from 'react';

export interface ProviderProps {
  children: ReactChild;
}

export interface ProviderContextDefaultProps<T extends any> {
  [p: string]: T;
}

export interface AvatarProps {
  src: string;
  style?: CSSProperties;
  children?: ReactChild;
  alt?: string;
  width?: string | number;
}

export interface BoxProps {
  style?: CSSProperties;
  onClick?: () => void;
  children: ReactNode;
}
