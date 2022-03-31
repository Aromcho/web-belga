import React from 'react';


import {
  TitleContainer,
  FooterTitleText
} from './titlewithicon.styles';
import { BelgaIsoIcon } from 'components/icons';


export interface TitleWithIconProps {
  className?: string;
  text: string;
}

export const TitleWithIcon = ({ className, text }: TitleWithIconProps) => {
  return (
    <TitleContainer className={className}>
      <BelgaIsoIcon /> <FooterTitleText>{text}</FooterTitleText>
    </TitleContainer>
  );
};
