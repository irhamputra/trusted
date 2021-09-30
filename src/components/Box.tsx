import React, { FC, CSSProperties, ReactNode } from 'react';

interface BoxProps {
  style?: CSSProperties;
  onClick?: () => void;
  children: ReactNode;
}

export const Box: FC<BoxProps> = ({ children, style, onClick }) => {
  return (
    <div style={style} onClick={onClick}>
      {children}
    </div>
  );
};
