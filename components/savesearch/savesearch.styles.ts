import styled from "@emotion/styled";

export const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  align-items: center;
  border-radius: 100%;
  border: 1px solid ${(props: any) => props.theme.black};
  background-color: transparent;
  display: flex;
  justify-content: center;
  margin-left: 5px;
  transition: all 0.3s ease-in-out;
  svg {
    width: 16px;
    height: auto;
    position: relative;
    top: -0.5px;
    left: -0.5px;
    path {
      fill: ${(props: any) => props.theme.black};
    }
  }
`;

export const SaveText = styled.div`
  color: ${(props: any) => props.theme.black};
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
`;

export const SaveSearchContainer = styled.div`
  align-items: center;
  display: flex;

  &:hover {
    ${IconWrapper} {
      transform: scale(1.1);
    }
  }
  &.saved {
    ${IconWrapper} {
      background-color: ${(props: any) => props.theme.black};
      svg {
        path {
          fill: ${(props: any) => props.theme.white};
        }
      }
    }

    &:hover {
      ${IconWrapper} {
        transform: scale(0.8);
        background-color: ${(props: any) => props.theme.black};
      }
    }
  }
  /*  @media screen and (max-width: 1100px) {
    min-height: 330px;
    padding: 80px 0;
  } */
`;
