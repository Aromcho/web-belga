import React from "react";
import Link from "next/link";
import { classes } from "helpers/index";

import { MailIcon } from "components/icons";

import { ButtonWrapper, WrapperText, Text } from "./button.styles";

export interface ButtonProps {
  text?: string;
  children?: string;
  className?: string;
  link?: string;
  target?: string;
  onClick?: any;
  arrowText?: boolean;
  style?: string;
  icon?: boolean;
  type?: string;
  sendStatus?: string;
}

export const Button = ({
  link = "#",
  target = "_self",
  text,
  sendStatus,
  className,
  onClick,
  children,
  type,
}: ButtonProps) => {
  if (onClick && !sendStatus) {
    return (
      <ButtonWrapper className={classes(className, type)} onClick={onClick}>
        {text}
      </ButtonWrapper>
    );
  }
  if (sendStatus) {
    return (
      <ButtonWrapper
        className={classes(className, type, sendStatus)}
        onClick={onClick}
      >
        <WrapperText>
          <Text>Enviado</Text>
          <Text>
            <MailIcon />
          </Text>
          <Text>Enviar</Text>
        </WrapperText>
      </ButtonWrapper>
    );
  }
  return (
    <Link href={link} passHref>
      <ButtonWrapper target={target} className={classes(className, type)}>
        {children || text}
      </ButtonWrapper>
    </Link>
  );
};
