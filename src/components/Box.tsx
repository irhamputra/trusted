import { FC } from 'react';
import { BoxProps } from '../typings';

export const Box: FC<BoxProps> = ({ children, style, onClick }) => {
  return (
    <div style={style} onClick={onClick}>
      {children}
    </div>
  );
};
