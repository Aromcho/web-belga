import React from "react";

import { Button } from "components/button";

import { StatusWrapper, Text } from "./status.styles";

export interface StatusProps {
  className?: string;
  text?: string;
  textButton?: string;
  buttonStyle?: string;
  linkButton?: string;
}

export const Status = ({
  className,
  text,
  textButton,
  buttonStyle,
  linkButton,
}: StatusProps) => {
  return (
    <StatusWrapper className={className}>
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
