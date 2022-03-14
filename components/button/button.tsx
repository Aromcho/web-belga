import React from 'react';
import Link from 'next/link';
import { classes } from 'helpers/index';

import { ButtonWrapper } from './button.styles';


export interface ButtonProps {
  text?: string;
  children?: string;
  className?: string;
  link?: string;
  target?: string;
  onClick?: any;
  arrowText?: boolean;
  style?: string;
  icon?: boolean;
  type?: string;
}

export const Button = ({ link = '#', target = '_self', text, className, onClick, children, type }: ButtonProps) => {
  if (onClick) {
    return (
      <ButtonWrapper className={classes(className, type)} onClick={onClick}>
        {text}
      </ButtonWrapper>
    );
  }
  return (
    <Link href={link} passHref>
      <ButtonWrapper target={target} className={classes(className, type)} >
        {children || text}
      </ButtonWrapper>
    </Link>
  );
};

