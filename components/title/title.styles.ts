import styled from "@emotion/styled";

export const Line = styled.h2`
  width: 100%;
  height: 1px;
  background-color: ${(props: any) => props.theme.secondary};
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const TitleText = styled.h2`
  width: auto;
  align-items: center;
  color: ${(props: any) => props.theme.black};
  font-size: 24px;
  font-weight: 500;
  display: flex;
  margin: 0 15px 0 0;
  text-align: left;
  white-space: nowrap;
  @media screen and (max-width: 992px) {
    width: 100%;
    justify-content: center;
    text-align: center;
    margin: 0;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  margin: 0 auto 70px;
  @media screen and (max-width: 992px) {
    margin: 0 auto 60px;
  }

  .button--title {
    @media screen and (max-width: 992px) {
      display: none;
    }
  }

  &.vertical {
    height: 100%;
    flex-flow: column;
    @media screen and (max-width: 840px) {
      flex-flow: row;
    }
    ${Line} {
      width: 1px;
      height: 100%;
      background-color: ${(props: any) => props.theme.black};
    }
    ${TitleText} {
      margin: 0 0 15px 0;
      @media screen and (max-width: 992px) {
        margin-bottom: 0;
      }
    }
  }
`;
