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
}

export const MemberCard = ({
  className,
  img,
  name,
  position,
}: MemberCardProps) => {
  return (
    <StaffMember className={className}>
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
