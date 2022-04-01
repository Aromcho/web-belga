import React from 'react';

import {
  InputWrapper,
  Label,
  InputStyled,
  BottomText,
  ErrorText,
  ListStyled,
  ListWrapper,
  Item
} from './inputautocomplete.styles';

export interface InputProps {
  label?: string;
  placeHolder?: string;
  type?: string;
  bottomText?: string;
  errorText?: string;
  className?: string;
  maxLength?: number;
  onBlur?: (e: any) => void;
  onClick?: () => void;
  onChangeValue?: (value: string) => void;
  required?: boolean;
  readonly?: boolean;
  suggestions: string[];
}

export const InputAutoComplete = ({
  label,
  placeHolder,
  type = 'text',
  bottomText,
  className,
  errorText,
  maxLength,
  required,
  readonly = false,
  suggestions,
  onChangeValue
}: InputProps) => {

  const [filteredSuggestions, setFilteredSuggestions] = React.useState<string[]>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = React.useState(0);
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const [input, setInput] = React.useState("");

  const onChange = (e: any) => {
    const userInput = e.target.value;

    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion?.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setInput(e.target.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const onClick = (e: any) => {
    setFilteredSuggestions([]);
    setInput(e.target.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
  };

  const onKeyDown = (key: any) => {
    if (key.keyCode === 13 || key.keyCode === 9) {
      setInput(filteredSuggestions[activeSuggestionIndex])
      setFilteredSuggestions([])
    }
  }

  React.useEffect(() => {
    if (onChangeValue) onChangeValue(input)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input])

  const SuggestionsListComponent = () => {
    return filteredSuggestions.length ? (
      <ListStyled >
        <ListWrapper>
          {filteredSuggestions.map((suggestion, index) => {
            let className;
            if (index === activeSuggestionIndex) {
              className = "suggestion-active";
            }
            return (
              <Item className={className} key={suggestion} onClick={onClick}>
                {suggestion}
              </Item>
            );
          })}
        </ListWrapper>
      </ListStyled>
    ) : (
      <ListStyled className="no-suggestions">
        <Item>Sin coincidencias.</Item>
      </ListStyled>
    );
  };

  return (
    <InputWrapper className={className}>
      {label && <Label>{label}</Label>}
      <InputStyled
        type={type}
        value={input}
        placeholder={placeHolder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        autoComplete='off'
        maxLength={maxLength}
        required={required || false}
        readOnly={readonly}
      />
      {className === 'error' && <ErrorText>{errorText}</ErrorText>}
      {bottomText && <BottomText>{bottomText}</BottomText>}

      {showSuggestions && input && <SuggestionsListComponent />}
    </InputWrapper>
  )
}