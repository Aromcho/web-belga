import styled from "@emotion/styled";

export const FooterTitleText = styled.div`
  width: 100%;
  max-width: 280px;
  height: 42px;
  align-items: center;
  border: 1px solid ${(props: any) => props.theme.white};
  border-radius: 0 5px 5px 5px;
  color: ${(props: any) => props.theme.white};
  display: flex;
  font-size: 16px;
  font-weight: 500;
  justify-content: center;
  white-space: nowrap;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  svg {
    width: 30px;
    height: auto;
    color: ${(props: any) => props.theme.white};
    display: block;
    flex: 0 0 auto;
    margin-right: 10px;
    position: relative;
    top: -5px;
  }
  &.black {
    svg {
      color: ${(props: any) => props.theme.black};
    }
    ${FooterTitleText} {
      border-color: ${(props: any) => props.theme.black};
      color: ${(props: any) => props.theme.black};
    }
  }
`;
