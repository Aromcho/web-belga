import styled from "@emotion/styled";

export const HeroFooter = styled.div`
  width: 100%;
  max-width: 280px;
  display: none;
  justify-content: space-between;
  margin: 50px auto 0;
  @media screen and (max-width: 992px) {
    display: flex;
  }
  .head--footer-link {
    width: 55px;
    height: 55px;
    align-items: center;
    flex: 0 0 auto;
    background-color: ${(props: any) => props.theme.white};
    border: 1px solid ${(props: any) => props.theme.primary};
    border-radius: 100%;
    display: flex;
    justify-content: center;
    svg {
      width: 30px;
      height: auto;
      color: ${(props: any) => props.theme.secondary};
    }

    &.mail {
      background-color: ${(props: any) => props.theme.secondary};
      border-color: 1px solid ${(props: any) => props.theme.primary};
      svg {
        color: ${(props: any) => props.theme.white};
      }
    }
    &.wsp {
      background-color: ${(props: any) => props.theme.wspGreen};
      border-color: ${(props: any) => props.theme.white};
      svg {
        color: ${(props: any) => props.theme.white};
      }
    }
  }
`;

export const PropList = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  .card--prop-home {
    width: 48%;
    @media screen and (max-width: 740px) {
      width: 100%;
    }
    &:last-of-type {
      @media screen and (max-width: 740px) {
        display: none;
      }
    }
  }
`;

export const InversionItem = styled.li`
  width: 30%;
  height: 100%;
  text-transform: uppercase;
  &.item--text {
    width: auto;
    padding-top: 25px;
  }
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
    .button--mobile {
      display: none;
      @media screen and (max-width: 992px) {
        width: 100%;
        max-width: 400px;
        display: flex;
        margin: 40px auto 0;
      }
    }
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
    .button--mobile {
      display: none;
      @media screen and (max-width: 992px) {
        width: 100%;
        max-width: 400px;
        display: flex;
        margin: 40px auto 0;
      }
    }
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
  @media screen and (max-width: 992px) {
    background-color: rgba(0, 0, 0, 0.75);
  }
`;

export const PriceRange = styled.div`
  width: 100%;
  height: 40px;
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
  .input--price {
    pointer-events: none;
    margin-bottom: 0;
    input {
      height: 25px !important;
      font-size: 13px;
    }
  }
`;

export const PriceText = styled.div`
  color: ${(props: any) => props.theme.white};
  font-size: 14px;
  font-weight: 500;
  margin: 0 30px;
`;
export const RangeWrapper = styled.div`
  width: 100%;
  height: 40px;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  position: relative;
  top: -1px;
  @media screen and (max-width: 992px) {
    display: none;
  }

  .range--home {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    & > div {
      &:first-of-type {
        position: relative;
        top: 5px;
      }
    }
  }
`;

export const SearchRow = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 992px) {
    flex-flow: column;
  }

  &.first--row {
    .first--row-input {
      width: 32%;
      margin: 0 0 15px 0;
    }
  }
  &.second--row {
  }
  &.third--row {
    .third--row-button {
      @media screen and (max-width: 992px) {
        width: 100%;
        max-width: 100%;
        height: 45px;
      }
    }
  }
  &.fourth--row {
    display: none;
    margin-top: 80px;
    @media screen and (max-width: 992px) {
      display: block;
    }
    .fourth--row-button {
      width: 100%;
      max-width: 100%;
      height: 45px;
    }
  }
  &.fifth--row {
    display: none;
    margin-top: 80px;
    @media screen and (max-width: 992px) {
      display: block;
    }
    .fourth--row-button {
      width: 100%;
      max-width: 100%;
      height: 45px;
    }
  }

  &.first--row,
  &.second--row {
    .first--row-input,
    .second--row-input {
      @media screen and (max-width: 992px) {
        width: 100%;
        margin: 0 0 25px 0;
      }
      input {
        @media screen and (max-width: 992px) {
          height: 45px;
          background-color: transparent;
          border: 2px solid ${(props: any) => props.theme.white};
          color: ${(props: any) => props.theme.white};
          &:focus,
          &:focus-within,
          &:not(:placeholder-shown) {
            color: ${(props: any) => props.theme.white};
          }
          &::placeholder {
            color: ${(props: any) => props.theme.white};
          }
        }
      }
    }
  }
`;

export const SearchFormWrapper = styled.div`
  width: 100%;
  max-width: 710px;
  margin: 0 auto;
  /* position: relative; */
  z-index: 6;
  @media screen and (max-width: 992px) {
    max-width: 500px;
  }
`;

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/../images/home_bg_hero.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  @media screen and (max-width: 992px) {
    background-image: url("/../images/home_bg_hero_mobile.jpg");
  }
  @media screen and (max-width: 840px) {
    height: auto;
    padding: 100px 0 80px;
  }
  @media screen and (max-width: 460px) {
    height: 100vh;
  }
`;

export const DropdownRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .input--general {
    width: 100px;
    margin: 0;
    input {
      -webkit-appearance: none;
      -moz-appearance: textfield;
      border-radius: 0;
    }
  }
  & + & {
    margin-top: 10px;
  }
`;

export const RowLabel = styled.span`
  font-size: 14px;
  font-weight: 300;
`;
