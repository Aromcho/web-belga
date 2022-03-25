import styled from "@emotion/styled";

export const PropList = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  .card--prop-home {
    width: 48%;
    @media screen and (max-width: 840px) {
      width: 100%;
    }
    &:last-of-type {
      @media screen and (max-width: 840px) {
        display: none;
      }
    }
  }
`;

export const InversionItem = styled.li`
  width: 30%;
  height: 100%;
  @media screen and (max-width: 992px) {
    width: 48%;
    align-items: center;
    display: flex;
    justify-content: center;
    &:first-of-type {
      width: 100%;
    }
  }
  @media screen and (max-width: 740px) {
    width: 100%;
    &:last-of-type {
      display: none;
    }
  }
`;

export const InversionList = styled.ul`
  width: 100%;
  height: 730px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 992px) {
    flex-flow: row wrap;
    height: auto;
  }
  @media screen and (max-width: 740px) {
    justify-content: center;
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
  background-color: ${(props: any) => props.theme.white};
  margin: 0 auto;
  padding: 80px 0;
  position: relative;
  .seleccion--container {
    z-index: 6;
    position: relative;
  }
  @media screen and (max-width: 992px) {
    padding: 40px 0;
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

export const BlackLayer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
`;

export const PriceRange = styled.div`
  width: 100%;
  max-width: 360px;
`;

export const InputDivider = styled.div`
  width: 10px;
  height: 2px;
  margin: 0 20px;
  background-color: ${(props: any) => props.theme.white};
`;

export const PriceInputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  .input--price {
    pointer-events: none;
  }
`;

export const PriceText = styled.div`
  color: ${(props: any) => props.theme.white};
  font-size: 14px;
  font-weight: 500;
  margin: 0 30px 0 20px;
`;
export const RangeWrapper = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: flex-start;
`;

export const SearchRow = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  &.first--row {
    .first--row-input {
      width: 32%;
      margin: 0 0 15px 0;
    }
  }
  &.second--row {
  }
  &.third--row {
  }
`;

export const SearchFormWrapper = styled.div`
  width: 100%;
  max-width: 710px;
  margin: 0 auto;
  position: relative;
  z-index: 6;
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
`;
