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
  value?: string;
  type?: string;
  bottomText?: string;
  errorText?: string;
  className?: string;
  maxLength?: number;
  onChange?: (e: any) => void;
  required?: boolean;
}

export const Input = ({label, placeHolder, value, type, bottomText, className, errorText, onChange, maxLength, required }: InputProps) => {
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
      />
      {className === 'error' && <ErrorText>{errorText}</ErrorText>}
      {bottomText && <BottomText>{bottomText}</BottomText>}
    </InputWrapper>
  )
}