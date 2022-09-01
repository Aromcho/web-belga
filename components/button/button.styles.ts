import styled from "@emotion/styled";

export const Text = styled.div`
  width: 220px;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  color: ${(props: any) => props.theme.white};
  font-size: 14px;
  @media screen and (max-width: 992px) {
    width: 330px;
  }
`;

export const WrapperText = styled.div`
  width: 660px;
  height: 100%;
  align-items: center;
  display: flex;
  transition: transform 0.9s cubic-bezier(0.96, -0.25, 0, 1.27),
    opacity 0.3s linear;
  justify-content: center;
  position: absolute;
  left: 0;
  pointer-events: none;
  @media screen and (max-width: 992px) {
    width: 990px;
  }
`;

export const ButtonWrapper = styled.a`
  width: 100%;
  min-width: 200px;
  max-width: 219px;
  height: 40px;
  align-items: center;
  background-color: transparent;
  border: 1px solid ${(props: any) => props.theme.white};
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
    cursor: pointer;
    background-color: ${(props: any) => props.theme.secondary};
    border-color: ${(props: any) => props.theme.secondary};
  }

  &.black {
    border-color: ${(props: any) => props.theme.black};
    background-color: ${(props: any) => props.theme.black};
    color: ${(props: any) => props.theme.white};

    &:hover {
      text-shadow: 0 0 3px ${(props: any) => props.theme.white}60;
    }
  }

  &.secondary {
    border-color: ${(props: any) => props.theme.secondary};
    background-color: ${(props: any) => props.theme.secondary};
    color: ${(props: any) => props.theme.white};
    &:hover {
      border-color: ${(props: any) => props.theme.primary};
      background-color: ${(props: any) => props.theme.primary};
      color: ${(props: any) => props.theme.black};
    }

    &.shine {
      &:hover {
        border-color: ${(props: any) => props.theme.secondary};
        background-color: ${(props: any) => props.theme.secondary};
        color: ${(props: any) => props.theme.white};
        text-shadow: 0 0 8px ${(props: any) => props.theme.white};
      }
    }
  }

  &.outline {
    border: 1px solid ${(props: any) => props.theme.secondary};
    background-color: ${(props: any) => props.theme.transparent};
    color: ${(props: any) => props.theme.black};
    &:hover {
      border-color: ${(props: any) => props.theme.primary};
      background-color: ${(props: any) => props.theme.primary};
      color: ${(props: any) => props.theme.white};
    }

    &.black {
      border: 1px solid ${(props: any) => props.theme.black};
      color: ${(props: any) => props.theme.black};
      &:hover {
        background-color: ${(props: any) => props.theme.black};
        color: ${(props: any) => props.theme.white};
      }
    }

    &.red {
      border: 1px solid ${(props: any) => props.theme.secondary};
      color: ${(props: any) => props.theme.black};
      &:hover {
        border-color: ${(props: any) => props.theme.secondary};
        background-color: ${(props: any) => props.theme.secondary};
        color: ${(props: any) => props.theme.white};
      }
    }
  }

  &.send,
  &.sending,
  &.sent {
    width: 220px;
    overflow: hidden;
    @media screen and (max-width: 992px) {
      width: 330px;
    }
    &.full {
      @media screen and (max-width: 992px) {
        width: 220px;
      }
    }
  }

  &.send {
    ${WrapperText} {
      opacity: 1;
      transform: translateX(-440px);
      @media screen and (max-width: 992px) {
        transform: translateX(-660px);
      }
    }

    &.full {
      ${WrapperText} {
        width: 660px;
        transform: translateX(-440px);
        @media screen and (max-width: 992px) {
          transform: translateX(-440px);
        }
      }
    }
  }

  &.sending {
    ${WrapperText} {
      transform: translateX(-220px);
      @media screen and (max-width: 992px) {
        transform: translateX(-330px);
      }
    }

    &.full {
      ${WrapperText} {
        width: 660px;
        transform: translateX(-220px);
        @media screen and (max-width: 992px) {
          transform: translateX(-220px);
        }
      }
    }
  }
  &.gone {
    max-width: 220px;
    ${WrapperText} {
      opacity: 0;
      transform: translateX(-440px);
      @media screen and (max-width: 992px) {
        transform: translateX(-660px);
      }
    }

    &.full {
      ${WrapperText} {
        transform: translateX(-440px);
        @media screen and (max-width: 992px) {
          transform: translateX(-440px);
        }
      }
    }
  }

  &.sent {
    ${WrapperText} {
      transform: translateX(0);
    }

    &.full {
      ${WrapperText} {
        width: 660px;
      }
    }
  }
`;
