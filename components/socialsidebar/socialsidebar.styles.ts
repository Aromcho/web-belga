import styled from "@emotion/styled";

export const SidebarContainer = styled.div`
  transform: translateY(-50%);
  transition: all 0.3s ease-in-out;
  opacity: 0;
  z-index: 99999;
  position: fixed;
  top: 50%;
  right: 30px;
  @media screen and (max-width: 1360px) {
    display: none;
  }
  &.show {
    opacity: 1;
  }
  .social--link {
    display: block;
    margin-bottom: 10px;
    transition: all 0.3s ease-in-out;
    &:last-of-type {
      margin-bottom: 0;
    }
    svg {
      width: 35px;
      height: auto;
      color: ${(props: any) => props.theme.primary};
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      opacity: 0.7;
    }
  }
  &.yellow {
    svg {
      color: ${(props: any) => props.theme.primary};
    }
  }
  &.red {
    svg {
      color: ${(props: any) => props.theme.secondary};
    }
  }
  &.black {
    svg {
      color: ${(props: any) => props.theme.black};
    }
  }
`;
