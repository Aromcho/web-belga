import { classes } from "helpers";
import React from "react";

import {
  StaffMember,
  MemberImg,
  MemberInfo,
  InfoName,
  InfoPos,
  BorderCard,
} from "./memberCard.styles";

export interface MemberCardProps {
  className?: string;
  img?: string;
  name: string;
  position: string;
  rightInfo?: boolean;
}

export const MemberCard = ({
  className,
  img,
  name,
  position,
  rightInfo,
}: MemberCardProps) => {
  return (
    <StaffMember className={classes(className, { "right--info": rightInfo })}>
      <BorderCard />
      <MemberImg
        style={{
          backgroundImage: `url(${img})`,
        }}
      />
      <MemberInfo>
        <InfoName>{name}</InfoName>
        <InfoPos>{position}</InfoPos>
      </MemberInfo>
    </StaffMember>
  );
};
