import clsx from 'clsx';
import React, { CSSProperties } from 'react';
import styles from './container.module.scss';

export type ComponentProps = {
  component?: React.ElementType;
  className?: string;
  style?: CSSProperties;
};

export const Container: React.FC<ComponentProps> = ({
  children,
  style,
  component = 'div',
  className: classNameFromProps,
}) => {
  const className = clsx(styles.root, classNameFromProps);

  return React.createElement(component, { style, className }, children);
};
