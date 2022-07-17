import React, { useEffect } from "react";
import { classes } from "helpers";
import Link from "next/link";
import { SOCIAL } from "config";

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
      <Link href={`${SOCIAL.INSTA}`}>
        <a className="social--link" target="_blank">
          <InstaCircleIcon />
        </a>
      </Link>
      <Link href={`${SOCIAL.FACEBOOK}`}>
        <a className="social--link" target="_blank">
          <FacebookCircleIcon />
        </a>
      </Link>
      <Link href={`${SOCIAL.YOUTUBE}`}>
        <a className="social--link" target="_blank">
          <YoutubeCircleIcon />
        </a>
      </Link>
      <Link href={`${SOCIAL.LINKEDIN}`}>
        <a className="social--link" target="_blank">
          <LinkedinCircleIcon />
        </a>
      </Link>
    </SidebarContainer>
  );
};
