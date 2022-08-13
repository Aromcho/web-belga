import styled from "@emotion/styled";

export const FormWrapper = styled.div`
  width: 100%;
  margin: 30px auto 100px;
  display: block;
`;

export const BlackLayer = styled.div`
  width: 100%;
  height: 100%;
  content: " ";
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 20%
  );
  position: absolute;
  top: 0;
  left: 0;
  @media screen and (max-width: 992px) {
    background-color: rgba(0, 0, 0, 0.75);
  }
`;

export const Hero = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  clip: rect(0, auto, auto, 0);
  top: 0;
  left: 0;
`;

export const HeroWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 150px);
  //background-image: url("/../images/home_bg_hero.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  @media screen and (max-width: 992px) {
    //background-image: url("/../images/home_bg_hero_mobile.jpg");
  }
  @media screen and (max-width: 840px) {
    height: auto;
    padding: 100px 0 80px;
  }
  @media screen and (max-width: 460px) {
    height: 100vh;
  }
`;

export const ConoceBelgaContainer = styled.div`
  width: 100%;
  height: auto;
  padding-top: 150px;
  @media screen and (max-width: 840px) {
    padding-top: 100px;
  }
`;
