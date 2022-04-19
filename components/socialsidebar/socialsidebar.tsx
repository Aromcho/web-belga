import React from 'react';
import { classes } from 'helpers';
import Link from "next/link";

import {
  SidebarContainer
} from './socialsidebar.styles';

import {
  FacebookCircleIcon,
  InstaCircleIcon,
  LinkedinCircleIcon,
  YoutubeCircleIcon
} from 'components/icons';

export interface SocialSidebarProps {
  className?: string;
  color?: string | undefined;
  zIndex?: number;
}

export const SocialSidebar = ({ className, color, zIndex }: SocialSidebarProps) => {
  return (
    <SidebarContainer className={classes(className, color ?? 'yellow')} style={{ zIndex: zIndex}}>
      <Link href='https://www.instagram.com/belgainmobiliaria/'><a className='social--link' target='_blank'><InstaCircleIcon /></a></Link>
      <Link href='https://www.facebook.com/inmobiliariabelga/'><a className='social--link' target='_blank'><FacebookCircleIcon /></a></Link>
      <Link href='https://www.youtube.com/channel/UCZ2ZZIQeRORMAUTS0mLDEfg/featured'><a className='social--link' target='_blank'><YoutubeCircleIcon /></a></Link>
      <Link href='https://ar.linkedin.com/company/belga-inmobiliaria'><a className='social--link' target='_blank'><LinkedinCircleIcon /></a></Link>
    </SidebarContainer>
  );
};
