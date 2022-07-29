import { classes } from "helpers";
import React from "react";

import {
  InputWrapper,
  Label,
  InputStyled,
  BottomText,
  ErrorText,
} from "./input.styles";

export interface InputProps {
  label?: string;
  placeHolder?: string;
  value?: string | number;
  type?: string;
  name?: string;
  bottomText?: string;
  error?: boolean;
  errorText?: string;
  className?: string;
  maxLength?: number;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  onClick?: () => void;
  required?: boolean;
  readonly?: boolean;
  min?: number;
  max?: number;
}

export const Input = ({
  label,
  placeHolder,
  value,
  type,
  bottomText,
  error,
  className,
  name,
  errorText,
  onChange,
  onBlur,
  maxLength,
  required,
  readonly = false,
  min,
  max,
}: InputProps) => {
  return (
    <InputWrapper className={classes(className, { error })}>
      {label && <Label>{label}</Label>}
      <InputStyled
        type={type}
        value={value}
        name={name}
        placeholder={placeHolder}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete="off"
        maxLength={maxLength}
        required={required || false}
        readOnly={readonly}
        min={min}
        max={max}
      />
      {error && <ErrorText>{errorText}</ErrorText>}
      {bottomText && <BottomText>{bottomText}</BottomText>}
    </InputWrapper>
  );
};
