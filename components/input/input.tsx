import React from 'react';

import {
  InputWrapper,
  Label,
  InputStyled,
  BottomText,
  ErrorText
} from './input.styles';

export interface InputProps {
  label?: string;
  placeHolder?: string;
  value?: string | number;
  type?: string;
  bottomText?: string;
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
  className,
  errorText,
  onChange,
  maxLength,
  required,
  readonly= false,
  min,
  max
}: InputProps) => {
  return (
    <InputWrapper className={className}>
      {label && <Label>{label}</Label>}
      <InputStyled
        type={type}
        value={value}
        placeholder={placeHolder}
        onChange={onChange}
        autoComplete='off'
        maxLength={maxLength}
        required={required || false}
        readOnly={readonly}
        min={min}
        max={max}
      />
      {className === 'error' && <ErrorText>{errorText}</ErrorText>}
      {bottomText && <BottomText>{bottomText}</BottomText>}
    </InputWrapper>
  )
}