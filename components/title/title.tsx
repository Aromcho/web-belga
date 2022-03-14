import React from 'react';
import Link from "next/link";

import { Button } from 'components/button';

import {
  TitleContainer,
  TitleText,
  Line
} from './title.styles';


export interface TitleProps {
  title?: string;
  textButton?: string;
  linkButton?: string;
  onClick?: () => void;
  link?: () => void;

}

export const Title = ({ title, textButton = 'Ver más', onClick, linkButton }: TitleProps) => {
  return (
    <TitleContainer>
      <TitleText>{title}</TitleText>
      <Line />
      <Button text={textButton} type='outline' onClick={onClick} link={linkButton} />
    </TitleContainer>
  );
};
