import { classes } from "helpers";
import React from "react";

import {
  InputWrapper,
  Label,
  TextareaStyled,
  BottomText,
  ErrorText,
} from "./textarea.styles";

export interface TextareaProps {
  label?: string;
  placeHolder?: string;
  value?: string;
  bottomText?: string;
  error?: boolean;
  errorText?: string;
  className?: string;
  onChange?: (e: any) => void;
  required?: boolean;
}

export const Textarea = ({
  label,
  placeHolder,
  value,
  bottomText,
  className,
  error,
  errorText,
  onChange,
  required,
}: TextareaProps) => {
  return (
    <InputWrapper className={classes(className, { error })}>
      {label && <Label>{label}</Label>}
      <TextareaStyled
        value={value}
        placeholder={placeHolder}
        onChange={onChange}
        autoComplete="off"
        required={required || false}
      />
      {error && <ErrorText>{errorText}</ErrorText>}
      {bottomText && <BottomText>{bottomText}</BottomText>}
    </InputWrapper>
  );
};
