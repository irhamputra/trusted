import { FC } from 'react';
import { AvatarProps } from '../typings';

export const Avatar: FC<AvatarProps> = ({ src, alt, style, width }) => {
  return <img src={src} style={style} alt={alt} width={width} />;
};
