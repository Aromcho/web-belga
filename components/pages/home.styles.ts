import styled from "@emotion/styled";

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  &:after{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
  }
`;