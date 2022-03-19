import styled from "@emotion/styled";

export const ErrorText = styled.div`
  color: ${(props: any) => props.theme.error};
  font-size: ${(props: any) => props.theme.tableHeader};
  display: block;
  font-weight: 700;
  white-space: nowrap;
  position: absolute;
  top: -14px;
  right: 7px;
`;

export const BottomText = styled.div`
  color: ${(props: any) => props.theme.gray45};
  font-size: ${(props: any) => props.theme.tableHeader};
  display: block;
  margin-top: 5px;
  padding-left: 8px;
  white-space: nowrap;
`;

export const Label = styled.label`
  font-weight: 500;
  color: ${(props: any) => props.theme.gray50};
  display: block;
  font-size: ${(props: any) => props.theme.textSmall};
  margin-bottom: 5px;
  padding-left: 25px;
`;

export const InputStyled = styled.input`
  &[type="text"],
  &[type="email"],
  &[type="password"],
  &[type="tel"] {
    width: 100%;
    height: 40px;
    align-items: center;
    border: 1px solid ${(props: any) => props.theme.black};
    border-radius: 6px 6px 0 6px;
    background-color: ${(props: any) => props.theme.white};
    color: ${(props: any) => props.theme.black};
    display: flex;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.3s ease-in-out;
    margin: 0 auto;
    padding: 0 25px;
    &:focus,
    &:focus-within,
    &:not(:placeholder-shown) {
      background-color: ${(props: any) => props.theme.white};
      border-color: ${(props: any) => props.theme.first};
    }
    &::placeholder {
      color: ${(props: any) => props.theme.black};
      opacity: 1;
    }
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin: 0 auto 15px;
  position: relative;
  &.white {
    ${InputStyled} {
      border-color: ${(props: any) => props.theme.white};
      background-color: ${(props: any) => props.theme.white};
      border-radius: 0;
    }
  }

  &.bottomLine {
    ${InputStyled} {
      height: 32px;
      align-items: center;
      border: none;
      border-bottom: 2px solid ${(props: any) => props.theme.white};
      border-radius: 0;
      background-color: transparent;
      color: ${(props: any) => props.theme.white};
      font-weight: 500;
      justify-content: center;
      text-align: center;
      padding: 0 5px;
      &:focus,
      &:focus-within,
      &:not(:placeholder-shown) {
        background-color: transparent;
      }
      &::placeholder {
        color: ${(props: any) => props.theme.white};
        opacity: 1;
      }
    }
  }

  &.error {
    margin: 0 auto 20px;
    ${InputStyled} {
      border-color: ${(props: any) => props.theme.error};
    }
  }
`;
