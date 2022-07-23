import styled from "@emotion/styled";

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const WrappperImage = styled.div`
  width: 440px;
  height: 440px;
  border-top: 20px solid ${(props: any) => props.theme.white};
  justify-content: center;
  display: flex;
  background-color: ${(props: any) => props.theme.white};
  z-index: 8;
  position: absolute;
  bottom: -20px;
  left: 0;
  @media screen and (max-width: 1200px) {
    width: 400px;
    height: 400px;
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const TopText = styled.div`
  height: 40px;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: ${(props: any) => props.theme.white};
  color: ${(props: any) => props.theme.black};
  font-weight: 500;
  font-size: 22px;
  text-align: center;
  padding: 0 20px;
  position: relative;
  white-space: nowrap;
  z-index: 5;
  top: -20px;
  @media screen and (max-width: 992px) {
    position: relative;
    white-space: normal;
  }
  @media screen and (max-width: 840px) {
    font-size: 19px;
  }
`;

export const Text = styled.div`
  width: 100%;
  max-width: 550px;
  color: ${(props: any) => props.theme.black};
  font-size: 45px;
  font-weight: 100;
  line-height: 50px;
  margin: auto;
  text-align: center;
  position: relative;
  top: -30px;

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

export const TextWrapper = styled.div`
  width: 75%;
  height: 100%;
  align-items: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin-left: auto;
  position: relative;
  z-index: 6;
  @media screen and (max-width: 1200px) {
    width: 65%;
  }
  @media screen and (max-width: 992px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const ButtonWrapper = styled.div`
  width: 75%;
  background-color: ${(props: any) => props.theme.white};
  position: absolute;
  z-index: 7;
  bottom: -20px;
  .button--square {
    margin-left: auto;
  }
  @media screen and (max-width: 1200px) {
    width: 80%;
  }
  @media screen and (max-width: 992px) {
    width: auto;
    padding: 0 20px;
    transform: translateX(-50%);
    left: 50%;
  }
`;

export const SquaresWrapper = styled.div`
  width: 100%;
  max-width: 90%;
  height: 100%;
  margin-left: auto;
  position: relative;
  @media screen and (max-width: 840px) {
    margin: 0 auto;
  }
`;

export const Square = styled.div`
  width: 100%;
  background-color: ${(props: any) => props.theme.white};
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  &::after {
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    content: " ";
    border: 1px solid ${(props: any) => props.theme.black};
    position: absolute;
    top: 0;
    left: 0;
  }
  &.red {
    width: 50.25%;
    z-index: 3;
    &::after {
      border-color: ${(props: any) => props.theme.secondary};
      border-left: none;
    }
  }
  &.black {
    width: 50.25%;
    z-index: 2;
    left: 0;
    &::after {
      border-color: ${(props: any) => props.theme.black};
      border-right: none;
    }
  }
`;

export const WrapperContent = styled.div`
  width: 100%;
  height: 460px;
  position: relative;
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
