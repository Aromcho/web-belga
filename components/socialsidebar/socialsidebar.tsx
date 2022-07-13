import React, { useEffect } from "react";
import { classes } from "helpers";
import Link from "next/link";

import { SidebarContainer } from "./socialsidebar.styles";

import {
  FacebookCircleIcon,
  InstaCircleIcon,
  LinkedinCircleIcon,
  YoutubeCircleIcon,
} from "components/icons";

export interface SocialSidebarProps {
  className?: string;
  color?: string | undefined;
  zIndex?: number;
  showWithOffset?: boolean;
}

export const SocialSidebar = ({
  className,
  color,
  zIndex,
  showWithOffset,
}: SocialSidebarProps) => {
  const [showSidebar, setShowSidebar] = React.useState<boolean>(
    !showWithOffset ? true : false
  );

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 400
        ? setShowSidebar(true)
        : setShowSidebar(!showWithOffset ? true : false);
    });
  }, []);

  return (
    <SidebarContainer
      className={classes(className, color ?? "yellow", { show: showSidebar })}
      style={{ zIndex: zIndex }}
    >
      <Link href="https://www.instagram.com/belgainmobiliaria/">
        <a className="social--link" target="_blank">
          <InstaCircleIcon />
        </a>
      </Link>
      <Link href="https://www.facebook.com/inmobiliariabelga/">
        <a className="social--link" target="_blank">
          <FacebookCircleIcon />
        </a>
      </Link>
      <Link href="https://www.youtube.com/channel/UCZ2ZZIQeRORMAUTS0mLDEfg/featured">
        <a className="social--link" target="_blank">
          <YoutubeCircleIcon />
        </a>
      </Link>
      <Link href="https://ar.linkedin.com/company/belga-inmobiliaria">
        <a className="social--link" target="_blank">
          <LinkedinCircleIcon />
        </a>
      </Link>
    </SidebarContainer>
  );
};
