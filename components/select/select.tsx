import React from 'react';
import CustomSelect from 'react-select'

import {
  SelectWrapper
} from './select.styles';

export interface selectProps {
  options: {
    value: string | number;
    label: string
  }[];
  isMulti?: boolean;
  styles?: any;
  placeholder?: string;
  className?: string;
  hideSelectedOptions?: boolean;
  isSearchable?: boolean;
  onChange?: (opt: any) => void;
  value?: {
    value: string | number;
    label: string
  }[];
}

export const Select = ({value, onChange, isSearchable = true, hideSelectedOptions = false, className, options, isMulti = false, styles, placeholder}: selectProps) => {
  return (
    <SelectWrapper className={className}>
      <CustomSelect 
        value={value}
        isSearchable={isSearchable}
        hideSelectedOptions={hideSelectedOptions}
        options={options}
        isMulti={isMulti}
        placeholder={placeholder}
        onChange={onChange}
        noOptionsMessage={() => "No hay opciones"}
        styles={{
          indicatorsContainer: (provided: any, state: any) => ({
            display: 'none'
          }),
          menu: (provided: any, state: any) => ({
            ...provided,
            zIndex: 99999
          }),
          singleValue: (provided: any, state: any) => ({
            ...provided,
            color: '#000',
            fontSize: 14,
            fontWeight: 300,
            lineHeight: 20
          }),
          placeholder: (provided: any, state: any) => ({
            ...provided,
            margin: '0 2px',
            color: '#000',
            fontSize: 14,
            fontWeight: 300,
          }),
          valueContainer: (provided: any, state: any) => ({
            ...provided,
            padding: 0,
            height: 40
          }),
          control: (provided: any, state: any) => ({
            ...provided,
            borderRadius: 0,
            padding: '0 25px',
            borderColor: '#fff',
            backgroundColor: '#fff',
            "&:hover": {
              borderColor: '#fff',
              boxShadow: '0 0 0 1px'
            },
            "&:focus": {
              borderColor: '#fff',
              boxShadow: '0 0 0 1px'
            }
          }),
          option: (provided: any, state: any) => ({
            ...provided,
            color: '#000',
            fontSize: 16,
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "#FFF"
            },
            "&:active": {
              backgroundColor: "#FFF"
            }
          }),
          ...styles
        }}
      />
    </SelectWrapper>
  );
};
