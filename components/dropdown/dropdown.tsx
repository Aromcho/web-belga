import React from 'react';

import {
  DropdownStyled,
  Label,
  List
} from './dropdown.styles';

export interface dropdownProps {
  className?: string;
  placeholder: string;
  children?: any;
  value?: any;
}

export const Dropdown = ({value, className, placeholder, children}: dropdownProps) => {
  const [open, setOpen] = React.useState(false);
  return (
    <DropdownStyled className={className}>
      <Label onClick={() => setOpen(!open)}>{value || placeholder}</Label>
      {open && <List>
        {children}
      </List>}
    </DropdownStyled>
  );
};
