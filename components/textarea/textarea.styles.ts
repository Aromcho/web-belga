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
  font-weight: 700;
  color: ${(props: any) => props.theme.gray50};
  display: block;
  font-size: ${(props: any) => props.theme.textSmall};
  margin-bottom: 5px;
  padding-left: 8px;
`;

export const TextareaStyled = styled.textarea`
  width: 100%;
  height: auto;
  min-height: 120px;
  align-items: center;
  border: 1px solid ${(props: any) => props.theme.black};
  border-radius: 6px;
  background-color: ${(props: any) => props.theme.white};
  color: ${(props: any) => props.theme.black};
  display: flex;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  transition: all 0.3s ease-in-out;
  margin: 0 auto;
  padding: 15px 25px;
  resize: none;
  &:focus,
  &:focus-within,
  &:not(:placeholder-shown) {
    background-color: ${(props: any) => props.theme.white};
    border-color: ${(props: any) => props.theme.first} !important;
    outline: none;
  }
  &::placeholder {
    color: ${(props: any) => props.theme.black};
    opacity: 1;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin: 0 auto 15px;
  position: relative;
  &.error {
    margin: 0 auto 20px;
    ${TextareaStyled} {
      border-color: ${(props: any) => props.theme.error};
    }
  }
`;
