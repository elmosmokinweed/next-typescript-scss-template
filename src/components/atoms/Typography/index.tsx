import clsx from 'clsx';
import React, { CSSProperties } from 'react';
import { Color } from 'src/Types/Color';
import styles from './typography.module.scss';

export type TypographyProps = {
  component?: React.ElementType;
  preset?: 'common1' | 'common2' | 'title1';
  color?: Color;
  style?: CSSProperties;
  align?: 'left' | 'center' | 'right';
  className?: string;
};

export const Typography: React.FC<TypographyProps> = ({
  children,
  color = 'paragraph',
  component = 'p',
  preset = 'common1',
  style,
  align,
  className: classNameFromProps,
}) => {
  const className = clsx(
    styles.root,
    styles[preset],
    styles[color],
    styles[align!],
    classNameFromProps
  );

  return React.createElement(component, { style, className }, children);
};
