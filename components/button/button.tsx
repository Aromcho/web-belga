import React from 'react';
import Link from 'next/link';
import { classes } from 'helpers/index';

import { ButtonWrapper } from './button.styles';


export interface ButtonProps {
  text?: string;
  children?: string;
  className?: string;
  type?: string;
  link?: string;
  target?: string;
  onClick?: any;
  arrowText?: boolean;
  style?: string;
  icon?: boolean;
}

export const Button = ({ link = '#', target = '_self', text, className, type, onClick, children, arrowText = false, icon = true }: ButtonProps) => {
  if (onClick) {
    return (
      <ButtonWrapper className={classes(className, { linear: type === 'linear' })} onClick={onClick}>
        {text}
      </ButtonWrapper>
    );
  }
  return (
    <Link href={link} passHref>
      <ButtonWrapper target={target} className={classes(className, { linear: type === 'linear' })} >
        {children || text}
      </ButtonWrapper>
    </Link>
  );
};

