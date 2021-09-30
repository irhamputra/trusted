import React, { FC, CSSProperties, ReactChild } from 'react';

interface AvatarProps {
  src: string;
  style?: CSSProperties;
  children?: ReactChild;
  alt?: string;
  width?: string | number;
}

export const Avatar: FC<AvatarProps> = ({ src, alt, style, width }) => {
  return <img src={src} style={style} alt={alt} width={width} />;
};
