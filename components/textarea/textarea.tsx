import React from 'react';

import {
  InputWrapper,
  Label,
  TextareaStyled,
  BottomText,
  ErrorText
} from './textarea.styles';

export interface TextareaProps { 
  label?: string;
  placeHolder?: string;
  value?: string;
  bottomText?: string;
  errorText?: string;
  className?: string;
  onChange?: (e: any) => void;
  required?: boolean;
}

export const Textarea = ({label, placeHolder, value, bottomText, className, errorText, onChange, required }: TextareaProps) => {
  return (
    <InputWrapper className={className}>
      {label && <Label>{label}</Label>}
      <TextareaStyled 
        value={value}
        placeholder={placeHolder} 
        onChange={onChange}
        autoComplete='off'
        required={required || false}
      />
      {className === 'error' && <ErrorText>{errorText}</ErrorText>}
      {bottomText && <BottomText>{bottomText}</BottomText>}
    </InputWrapper>
  )
}