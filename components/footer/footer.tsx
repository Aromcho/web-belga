import { SocialSidebar } from 'components/socialsidebar';
import React from 'react';

import {
  FooterContainer,
  FooterWrapper,
  FooterLeft,
  FooterCenter,
  FooterRight,
  FooterInfo,
  FooterInfoBottom
} from './footer.styles';

export interface FooterProps {

}

export const Footer = ({ }: FooterProps) => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <SocialSidebar color='red'/>
        <FooterLeft>
          <FooterInfo></FooterInfo>
          <FooterInfoBottom></FooterInfoBottom>
        </FooterLeft>

        <FooterCenter>
          <FooterInfo></FooterInfo>
          <FooterInfoBottom></FooterInfoBottom>
        </FooterCenter>

        <FooterRight>
          <FooterInfo></FooterInfo>
          <FooterInfoBottom></FooterInfoBottom>
        </FooterRight>

      </FooterWrapper>
    </FooterContainer>
  );
};
