import styled from "@emotion/styled";

export const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 1px solid ${(props: any) => props.theme.black};
  background-color: transparent;
  margin-left: 8px;
  transition: all 0.3s ease-in-out;
  position: relative;
  svg {
    width: 12px;
    height: auto;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
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
        background-color: ${(props: any) => props.theme.black};
      }
    }
  }
`;
