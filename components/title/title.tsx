import React from 'react';
import Link from "next/link";

import { Button } from 'components/button';

import {
  TitleContainer,
  TitleText,
  Line
} from './title.styles';
import { classes } from 'helpers';


export interface TitleProps {
  className?: string;
  title?: string;
  textButton?: string;
  linkButton?: string;
  vertical?: boolean;
  buttonStyle?: string;
}

export const Title = ({
  className,
  title,
  textButton = 'Ver más',
  linkButton,
  vertical,
  buttonStyle='outline'
}: TitleProps) => {
  return (
    <TitleContainer className={classes(className, { vertical })}>
      <TitleText>{title}</TitleText>
      <Line />
      <Button className='button--title' text={textButton} type={buttonStyle} link={linkButton}/>
    </TitleContainer>
  );
};
