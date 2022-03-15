import styled from "@emotion/styled";

export const PropList = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  .card--prop-home {
    width: 48%;
  }
`;

export const Inversion = styled.div`
  width: 100%;
  height: 100%;
  z-index: 5;
  position: absolute;
  clip: rect(0, auto, auto, 0);
  top: 0;
  left: 0;
`;

export const InversionSection = styled.div`
  width: 100%;
  padding: 80px 0;
  background-color: ${(props: any) => props.theme.gray10};
  margin: 0 auto;
  position: relative;
  .inversion--container {
    z-index: 6;
    position: relative;
  }
`;

export const Seleccion = styled.div`
  width: 100%;
  height: 100%;
  z-index: 5;
  position: absolute;
  clip: rect(0, auto, auto, 0);
  top: 0;
  left: 0;
`;

export const SeleccionSection = styled.div`
  width: 100%;
  padding: 80px 0;
  background-color: ${(props: any) => props.theme.white};
  margin: 0 auto;
  position: relative;
  .seleccion--container {
    z-index: 6;
    position: relative;
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
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  
  &:after {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
  }
`;
