import styled from "@emotion/styled";

export const OficinasSection = styled.section`
  width: 100%;
  background-color: ${(props: any) => props.theme.white};
  margin: 0 auto;
  padding: 80px 0;
`;

export const ServiciosSection = styled.section`
  width: 100%;
  background-color: ${(props: any) => props.theme.white};
  margin: 0 auto;
  padding: 80px 0;
`;

export const SomosBelgaSection = styled.section`
  width: 100%;
  background-color: ${(props: any) => props.theme.white};
  margin: 0 auto;
  padding: 80px 0;
`;

export const QuotesSection = styled.section`
  width: 100%;
  background-color: ${(props: any) => props.theme.white};
  margin: 0 auto;
  padding: 80px 0;
`;

export const ValoresListText = styled.div`
  color: ${(props: any) => props.theme.black};
  text-align: justify;
  font-size: 14px;
  line-height: 18px;
`;

export const ValoresListTitle = styled.div`
  font-weight: 100;
  font-size: 48px;
  margin-bottom: 20px;
`;

export const ValoresWrapper = styled.div`
  width: 100%;
  max-width: 330px;
  color: ${(props: any) => props.theme.black};
`;

export const ValoresList = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export const ValoresSection = styled.section`
  width: 100%;
  background-color: ${(props: any) => props.theme.gray10};
  margin: 0 auto;
  padding: 80px 0;
`;

export const HistoriaText = styled.p`
  width: 100%;
  max-width: 600px;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 20px;
`;

export const UnderlineTitle = styled.div`
  width: 100%;
  max-width: 600px;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 50px;
  u {
    font-weight: 500;
    text-decoration: underline;
  }
`;

export const HistoriaTextWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  color: ${(props: any) => props.theme.black};
`;

export const HistoriaRight = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HistoriaGif = styled.img`
  width: 100%;
  max-width: 550px;
  height: auto;
  margin: 0 auto;
`;

export const HistoriaLeft = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HistoriaWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3%;
`;

export const HistoriaSection = styled.section`
  width: 100%;
  background-color: ${(props: any) => props.theme.white};
  margin: 0 auto;
  padding: 100px 0;
`;

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
    rgba(0, 0, 0, 0.75) 0%,
    rgba(0, 0, 0, 0) 40%
  );
  position: absolute;
  top: 0;
  left: 0;
  @media screen and (max-width: 992px) {
    background-color: rgba(0, 0, 0, 0.75);
  }
`;

export const SidebarContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const SidebarRed = styled.div`
  width: 100px;
  height: 100%;
  position: absolute;
  z-index: 3;
  clip: rect(0, auto, auto, 0);
  top: 0;
  right: 0;
`;

export const Hero = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 4;
  clip: rect(0, auto, auto, 0);
  top: 0;
  left: 0;
`;

export const MenuHeroText = styled.div`
  color: ${(props: any) => props.theme.white};
  text-transform: uppercase;
  text-align: center;
  border-bottom: 2px solid transparent;
  padding-bottom: 9px;
  transition: all 0.3s ease-in-out;
`;

export const MenuHeroItem = styled.div`
  width: 20%;
  height: 100%;
  align-self: start;
  align-items: center;
  display: flex;
  text-align: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    ${MenuHeroText} {
      border-color: ${(props: any) => props.theme.white};
    }
  }
  &.active {
    ${MenuHeroText} {
      border-color: ${(props: any) => props.theme.white};
    }
  }
`;

export const MenuHero = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  margin-top: auto;
  z-index: 5;
  position: relative;
`;

export const HeroWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 150px);
  display: flex;
  align-items: flex-end;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
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
