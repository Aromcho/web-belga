import React from 'react';
import { Global as GlobalStyling } from '@emotion/react';

import { Footer } from 'components/footer';
import { Menu } from 'components/menu';

import {
  LayoutWrapper, GlobalStyles
} from './layout.styles';

export interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({children}: LayoutProps) => {
  return (
    <LayoutWrapper>
      <GlobalStyling styles={GlobalStyles} />
      <Menu />
      {children}
      <Footer />
    </LayoutWrapper>
  );
};
