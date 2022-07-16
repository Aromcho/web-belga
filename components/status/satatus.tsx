import React from "react";

import { Button } from "components/button";

import { StatusWrapper, Text, ImgWrapper, Img } from "./status.styles";

export interface StatusProps {
  className?: string;
  img?: string;
  text?: string;
  textButton?: string;
  buttonStyle?: string;
  linkButton?: string;
}

export const Status = ({
  className,
  img,
  text,
  textButton,
  buttonStyle,
  linkButton,
}: StatusProps) => {
  return (
    <StatusWrapper className={className}>
      {img && (
        <ImgWrapper>
          <Img src={img} />
        </ImgWrapper>
      )}
      <Text>{text}</Text>
      {linkButton && (
        <Button
          className="button--status"
          text={textButton}
          type={buttonStyle}
          link={linkButton}
        />
      )}
    </StatusWrapper>
  );
};
