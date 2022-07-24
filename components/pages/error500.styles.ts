import styled from "@emotion/styled";

export const Separator = styled.div`
  width: 1px;
  margin: 0 auto;
  &.black {
    height: 135px;
    margin: 30px auto 40px;
    background-color: ${(props: any) => props.theme.black};
    @media screen and (max-width: 1100px) {
      height: 100px;
    }
  }
  &.red {
    height: 190px;
    margin: 40px auto 0;
    background-color: ${(props: any) => props.theme.secondary};
    @media screen and (max-width: 1100px) {
      height: 100px;
    }
  }
`;

export const TopText = styled.div`
  width: 100%;
  color: ${(props: any) => props.theme.black};
  font-weight: 500;
  font-size: 22px;
  text-align: center;
  @media screen and (max-width: 840px) {
    font-size: 19px;
  }
`;

export const Text = styled.div`
  width: 100%;
  color: ${(props: any) => props.theme.black};
  font-size: 45px;
  font-weight: 100;
  line-height: 50px;
  margin: auto;
  text-align: center;
  white-space: nowrap;
  @media screen and (max-width: 1200px) {
    max-width: 450px;
    font-size: 38px;
    line-height: 45px;
  }
  @media screen and (max-width: 840px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const RightContentWrapper = styled.div`
  width: 100%;
  max-width: 470px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  @media screen and (max-width: 1100px) {
    margin: 0 auto;
  }
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
`;

export const Img = styled.img`
  width: calc(100% - 50px);
  height: auto;
  margin-left: 50px;
`;

export const LeftContent = styled.div`
  background-color: ${(props: any) => props.theme.white};
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const WrapperContent = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-top: 80px;
  @media screen and (max-width: 1100px) {
    margin-top: 50px;
    justify-content: center;
  }
`;

export const RowContent = styled.div`
  align-items: center;
  color: ${(props: any) => props.theme.black};
  font-size: 14px;
  line-height: 17px;
  display: flex;
  margin-bottom: 60px;
  &.bold {
    font-weight: 600;
    white-space: nowrap;
    cursor: pointer;
    a {
      font-weight: 600;
    }
  }
  &:hover {
    svg {
      &.right {
        transform: scale(1.2);
      }
      &.left {
        transform: translateX(-5px);
      }
    }
  }
  a {
    align-items: center;
    color: ${(props: any) => props.theme.black};
    display: flex;
  }
  svg {
    height: auto;
    display: block;
    transition: all 0.3s ease-in-out;
    &.right {
      width: 15px;
      margin-left: 5px;
    }
    &.left {
      width: 20px;
      margin-right: 5px;
    }
  }
`;

export const ErrorContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 80vh;
  padding: 150px 0;
  @media screen and (max-width: 840px) {
    padding: 100px 0;
  }
`;
