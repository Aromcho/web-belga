import styled from "@emotion/styled";

export const BackToTopContainer = styled.div`
  width: 40px;
  height: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  pointer-events: none;
  z-index: 999999;
  position: fixed;
  bottom: 5%;
  right: 30px;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
  &.show {
    opacity: 1;
    pointer-events: all;
  }
  .icon--arrow {
    width: 30px;
    height: auto;
    color: ${(props: any) => props.theme.secondary};

    transform: rotate(90deg);
  }
`;
