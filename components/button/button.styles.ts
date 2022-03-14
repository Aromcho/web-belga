import styled from "@emotion/styled";

export const ButtonWrapper = styled.a`
  width: 100%;
  min-width: 200px;
  max-width: 220px;
  height: 40px;
  align-items: center;
  background-color: transparent;
  border: 2px solid ${(props: any) => props.theme.white};
  color: ${(props: any) => props.theme.white};
  display: flex;
  font-size: 14px;
  font-weight: 500;
  justify-content: center;
  white-space: nowrap;
  margin: 0;
  text-align: center;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  &:hover {
    background-color: ${(props: any) => props.theme.secondary};
    border-color: ${(props: any) => props.theme.secondary};
  }

  &.secondary {
    border-color: ${(props: any) => props.theme.secondary};
    background-color: ${(props: any) => props.theme.secondary};
    color: ${(props: any) => props.theme.wite};
    &:hover {
      border-color: ${(props: any) => props.theme.primary};
      background-color: ${(props: any) => props.theme.primary};
      color: ${(props: any) => props.theme.black};
    }
  }

  &.outline {
    border: 2px solid ${(props: any) => props.theme.secondary};
    background-color: ${(props: any) => props.theme.white};
    color: ${(props: any) => props.theme.black};
    &:hover {
      border-color: ${(props: any) => props.theme.primary};
      background-color: ${(props: any) => props.theme.primary};
      color: ${(props: any) => props.theme.white};
    }
  }
`;
