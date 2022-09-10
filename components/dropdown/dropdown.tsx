import React from 'react';

import {
  DropdownStyled,
  Label,
  List,
  DivClose
} from './dropdown.styles';

export interface DropdownProps {
  className?: string;
  placeholder: string;
  children?: any;
  value?: any;
  close?: boolean;
}

export const Dropdown = ({value, className, placeholder, children, close}: DropdownProps) => {

  React.useEffect(() => {
    if(typeof close === "boolean"){
      setOpen(false);
    }
  }, [close])

  const [open, setOpen] = React.useState(false);
  
  return (
    <DropdownStyled className={className}>
      <Label onClick={() => setOpen(!open)}>{value || placeholder}</Label>
      {open &&
        <>
          <DivClose onClick={() => setOpen(false)}/>
          <List onMouseLeave={() => setOpen(false)}>
            {children}
          </List>
        </>
      }
    </DropdownStyled>
  );
};
