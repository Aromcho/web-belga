import styled from "@emotion/styled";

export const OfficeText = styled.div`
  width: 100%;
  text-align: justify;
  font-size: 14px;
  line-height: 20px;
`;

export const OfficeTextLoc = styled.div`
  font-size: 16px;
  margin-bottom: 30px;
  @media screen and (max-width: 992px) {
    margin-bottom: 20px;
  }
`;

export const OfficeTextName = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

export const OfficeTextWrapper = styled.div`
  width: 100%;
  max-width: 340px;
  color: ${(props: any) => props.theme.black};
  display: flex;
  flex-flow: column;
  @media screen and (max-width: 992px) {
    margin: 0 auto 0 30px;
  }
  @media screen and (max-width: 740px) {
    width: 87%;
    max-width: 600px;
    margin: 0;
  }
`;

export const OfficeListItem = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 992px) {
    width: 100%;
    height: auto;
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const OfficeListContainer = styled.div`

`

export const OfficeList = styled.div`
  width: 100%;
  height: 340px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  @media screen and (max-width: 992px) {
    max-width: 100%;
    height: auto;
    flex-flow: column;
    margin-top: 30px;
  }
  ${OfficeListItem} {
    ${OfficeTextWrapper} {
      @media screen and (max-width: 992px) {
        width: 100%;
      }

      ${OfficeTextLoc} {
        @media screen and (max-width: 992px) {
          margin-bottom: 15px;
        }
      }
    }
  }
`;

export const OfficeMainTex = styled.div`
  width: 50%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 992px) {
    width: 100%;
    height: auto;
    padding: 30px 0;
  }
`;

export const MainOfficeImg = styled.div`
  width: 50%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 992px) {
    width: 100%;
    height: 375px;
  }
  @media screen and (max-width: 640px) {
    height: 175px;
  }
`;

export const MainOffice = styled.div`
  width: 100%;
  height: 340px;
  background-color: ${(props: any) => props.theme.gray10};
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 40px auto 0;
  @media screen and (max-width: 992px) {
    height: auto;
    background-color: ${(props: any) => props.theme.gray30};
    flex-flow: column;
  }
`;

export const OficinasSection = styled.section`
  width: 100%;
  background-color: ${(props: any) => props.theme.white};
  margin: 0 auto;
  padding: 47px 0 0 ;
  @media screen and (max-width: 992px) {
    padding: 60px 0;
  }
`;

export const PortalName = styled.div`
  color: ${(props: any) => props.theme.black};
  font-size: 16px;
  text-align: center;
`;

export const PortalImg = styled.img`
  width: 100%;
  max-width: 100px;
  height: auto;
  margin-bottom: 15px;
  @media screen and (max-width: 740px) {
    max-width: 70px;
  }
`;

export const PortalItem = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-flow: column;
  justify-content: center;
`;

export const PortalesList = styled.div`
  width: 100%;
  max-width: 880px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;
  @media screen and (max-width: 740px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 47px;
    margin-bottom: 47px;
  }
`;

export const PortalesFooter = styled.div`
  width: 100%;
  height: 60px;
  align-items: flex-start;
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
  @media screen and (max-width: 740px) {
    height: auto;
    margin-bottom: 15px;
  }
`;

export const PortalesContainer = styled.div`
  width: 100%;
  height: 340px;
  display: flex;
  flex-flow: column;
  border: 1px solid ${(props: any) => props.theme.black};
  margin: 0 auto;
  @media screen and (max-width: 740px) {
    padding: 47px 0 0 0;
  }
`;

export const ServiceMediaImg = styled.div``;

export const ServiceMedia = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56%;
  position: relative;
  overflow: hidden;

  * {
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const ServiceTitle = styled.div`
  width: 100%;
  height: 70px;
  align-items: center;
  display: flex;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid ${(props: any) => props.theme.black};
  justify-content: center;
  color: ${(props: any) => props.theme.black};
  margin: 0 auto 10px;
  text-transform: uppercase;
`;

export const ServiceWrapper = styled.div`
  width: 100%;
`;

export const ServiciosSection = styled.section`
  width: 100%;
  background-color: ${(props: any) => props.theme.white};
  margin: 0 auto;
  padding: 60px 0;
  @media screen and (max-width: 992px) {
    padding: 30px 0 0;
  }
`;
export const IndexCounter = styled.div`
  color: ${(props: any) => props.theme.white};
  font-size: ${(props: any) => props.theme.text15};
  white-space: nowrap;
`;

export const HeaderGallery = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 15px 3% 0;
  .gallery--close-icon {
    width: 30px;
    height: auto;
    color: ${(props: any) => props.theme.white};
    transition: all 0.3s ease-in-out;
    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }
`;

export const ArrowGallery = styled.div`
  width: 7.5%;
  height: 80px;
  align-items: center;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  z-index: 5;
  position: absolute;
  left: 0;
  @media screen and (max-width: 992px) {
    width: 60px;
    height: 120px;
    &:before {
      width: 35px;
      height: 35px;
      background-color: ${(props: any) => props.theme.black}50;
      border-radius: 100%;
      content: "";
      transform: translate(-50%, -50%);
      position: absolute;
      top: 50%;
      left: 50%;
    }
  }
  &:hover {
    cursor: pointer;
    opacity: 0.5;
    @media screen and (max-width: 992px) {
      opacity: 1;
    }
  }
  &.arrow--prev {
    transform: rotate(180deg);
    .gallery--arrow {
      filter: drop-shadow(0px -1px 2px rgba(0, 0, 0, 0.4));
      @media screen and (max-width: 992px) {
        filter: none;
      }
    }
  }
  &.arrow--next {
    left: inherit;
    right: 0;
    .gallery--arrow {
      filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.4));
      @media screen and (max-width: 992px) {
        filter: none;
      }
    }
  }
  &.disabled {
    opacity: 0.3;
    cursor: default;
  }
  .gallery--arrow {
    width: 30px;
    height: auto;
    color: ${(props: any) => props.theme.white};
    z-index: 2;
    position: relative;
    @media screen and (max-width: 992px) {
      width: 20px;
    }
  }
`;

export const SwiperContainerGallery = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto 15px;
  .swiper--services-gallery {
    width: 100%;
    overflow: visible;
    @media screen and (max-width: 460px) {
      /* overflow: hidden; */
    }
    .swiper-slide {
      align-items: flex-start;
      display: flex;
      justify-content: center;
      @media screen and (max-width: 992px) {
        padding: 0;
      }
    }
    &.swiper-initialized.swiper-horizontal.swiper-pointer-events {
      height: 100%;
    }
    .swiper-button-prev,
    .swiper-button-next {
      width: 90px;
      height: 100%;
      align-items: center;
      background-color: ${(props: any) => props.theme.white}95;
      display: none;
      justify-content: center;
      transition: all 0.2s ease-in-out;
      transform: none;
      z-index: 99999999999999999;
      position: absolute;
      top: 22px;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-tap-highlight-color: transparent;
      @media screen and (max-width: 992px) {
        width: 60px;
      }
      @media screen and (max-width: 460px) {
        width: 40px;
      }
      &.swiper-button-disabled {
        opacity: 0;
      }
      &:before {
        width: 30px;
        height: 60px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 15px;
        content: "";
        transition: all 0.3s ease-in-out;
        opacity: 1;
        z-index: 4;
        position: relative;
      }
      &:after {
        width: 60px;
        height: 60px;
        content: "";
        position: absolute;
        z-index: 2;
      }
      &:hover {
      }
    }
    .swiper-button-prev {
      left: 0;
      background: rgb(0, 0, 0, 0);

      &:before {
        background-image: url("../images/arrow_prev_slider.svg");
        background-position: center center;
        filter: drop-shadow(1px 0 1px rgba(0, 0, 0, 0.25));
      }
      &:after {
        width: 120px;
        height: 100%;
        background: radial-gradient(
          100.74% 45.76% at 100.16% 46.58%,
          rgba(0, 0, 0, 0.4) 0%,
          rgba(192, 192, 192, 0) 100%
        );
        transform: matrix(-1, 0, 0, 1, 0, 0);
        left: 0;
      }
    }
    .swiper-button-next {
      right: 0;
      background: rgb(0, 0, 0, 0);
      &:before {
        background-image: url("../images/arrow_next_slider.svg");
        background-position: center center;
        filter: drop-shadow(-1px 0 1px rgba(0, 0, 0, 0.25));
      }
      &:after {
        width: 120px;
        height: 100%;
        background: radial-gradient(
          100.16% 45.5% at 100.16% 50.1%,
          rgba(0, 0, 0, 0.4) 0%,
          rgba(192, 192, 192, 0) 100%
        );
        transform: matrix(1, 0, 0, -1, 0, 0);
      }
    }
  }
`;

export const StaffList = styled.div`
  width: 100%;
  display: flex;
  gap: 17px;
  @media screen and (max-width: 992px) {
    flex-direction: column;
    gap: 30px;
  }

  .member--card {
    &.img-bottom {
      flex-flow: column-reverse;
      @media screen and (max-width: 992px) {
        flex-flow: column;
      }
    }
    @media screen and (max-width: 992px) {
      &:nth-of-type(even) {
        flex-flow: column-reverse;
      }
    }
  }
`;

export const StaffItem = styled.div`
  display: flex;
  width: 50%;
  border-bottom: 1px solid #C62025;
  @media screen and (max-width: 992px) {
    width: 100%;;
  }
  .name{
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    @media screen and (max-width: 992px) {
      font-size: 12px;
      line-height: 15px;
    }
  }
  .low-name{
    font-size: 13px;
    line-height: 16px;
    font-weight: 400;
    margin-bottom: 40px;
    text-align: center;
    @media screen and (max-width: 992px) {
      margin-bottom: 0;
      font-size: 10px;
      line-height: 12px;
      text-align: left;
    }
  }
  .mobile{
    display: none;
    @media screen and (max-width: 992px) {
      display: inline;
    }
  }
  .desktop{
    @media screen and (max-width: 992px) {
      display: none;
    }
  }
`
export const LeftContent = styled.div`
  width: calc(100% - 250px);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  @media screen and (max-width: 992px) {
    width: calc(100% - 155px);
    align-items: flex-start;
    justify-content: center;
  }

`
export const RightContent = styled.div`
  width: 250px;
  @media screen and (max-width: 992px) {
    width: 155px;
  }
`

export const StaffImage = styled.img`
  width: 100%;;
  position: relative;
  top: 2.5px;
`

export const SomosBelgaSection = styled.section`
  width: 100%;
  background-color: ${(props: any) => props.theme.white};
  margin: 0 auto;
  padding: 60px 0;
  @media screen and (max-width: 992px) {
    padding: 0 0 60px;
  }
`;

export const QuoteList = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
  }
  .quote {
    @media screen and (max-width: 992px) {
      max-width: 450px;
      margin: 0 auto;
    }
    @media screen and (max-width: 840px) {
      max-width: 100%;
      margin: 0;
    }
  }
`;

export const QuotesSection = styled.section`
  width: 100%;
  background-color: ${(props: any) => props.theme.white};
  margin: 0 auto;
  padding: 60px 0;
  /* @media screen and (max-width: 992px) {
    padding: 47px 0 0 ;
  } */
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
  @media screen and (max-width: 740px) {
    font-size: 29px;
    margin-bottom: 30px;
  }
`;

export const ValoresWrapper = styled.div`
  width: 100%;
  max-width: 330px;
  color: ${(props: any) => props.theme.black};
  @media screen and (max-width: 1300px) {
    width: 48%;
    max-width: 330px;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 992px) {
    width: 100%;
    max-width: 330px;
  }
  @media screen and (max-width: 840px) {
    width: 100%;
    max-width: 100%;
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const ValoresList = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  @media screen and (max-width: 1300px) {
    gap: 5%;
    flex-flow: row wrap;
    justify-content: flex-start;
  }
`;

export const ValoresSection = styled.section`
  width: 100%;
  background-color: ${(props: any) => props.theme.gray10};
  margin: 0 auto;
  padding: 60px 0;
  @media screen and (max-width: 992px) {
    padding: 60px 0;
  }
`;

export const HistoriaText = styled.p`
  width: 100%;
  max-width: 600px;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 20px;
  text-align: justify;
  @media screen and (max-width: 992px) {
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const UnderlineTitle = styled.div`
  width: 100%;
  max-width: 600px;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 60px;
  u {
    font-weight: 500;
    text-decoration: underline;
  }
  @media screen and (max-width: 992px) {
    font-size: 20px;
    margin-bottom: 30px;
  }
`;

export const HistoriaTextWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  color: ${(props: any) => props.theme.black};
  @media screen and (max-width: 992px) {
    max-width: 100%;
  }
`;

export const HistoriaRight = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 992px) {
    width: 100%;
    max-width: 100%;
  }
  @media screen and (max-width: 840px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const HistoriaGif = styled.img`
  width: 100%;
  max-width: 93%;
  height: auto;
  margin: 0;
  @media screen and (max-width: 992px) {
    margin: 0 0 60px 0;
  }
`;

export const HistoriaLeft = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 10px;
  @media screen and (max-width: 992px) {
    margin-right: auto;
  }
  @media screen and (max-width: 840px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const HistoriaWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  @media screen and (max-width: 992px) {
    flex-flow: column;
  }
`;

export const HistoriaSection = styled.section`
  width: 100%;
  background-color: ${(props: any) => props.theme.white};
  margin: 0 auto;
  padding: 100px 0;
  @media screen and (max-width: 992px) {
    padding: 60px 0;
  }
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
  padding-bottom: 9px;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:after {
    width: 0;
    height: 2px;
    background-color: ${(props: any) => props.theme.white};
    content: " ";
    transition: all 0.3s ease-in-out;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const MenuHeroItem = styled.a`
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
      &:after {
        width: 100%;
      }
    }
  }
  &.active {
    &:after {
      width: 100%;
    }
    ${MenuHeroText} {
      &:after {
        width: 100%;
      }
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
  height: calc(100vh - 91px);
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
  @media screen and (max-width: 992px) {
    display: none;
  }
  @media screen and (max-width: 460px) {
    height: 100vh;
  }
`;

export const BackWrapper = styled.div`
  display: none;
  @media screen and (max-width: 992px) {
    display: table;
  }
  .back--link {
    align-items: center;
    display: inline-flex;
    color: ${(props: any) => props.theme.black};
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    svg {
      width: 24px;
      height: auto;
      display: block;
      transition: all 0.3s ease-in-out;
      margin-right: 5px;
    }
    &:hover {
      svg {
        transform: translateX(-5px);
      }
    }
  }
`;

export const ConoceBelgaContainer = styled.div`
  width: 100%;
  height: auto;
  padding-top: 91px;
  @media screen and (max-width: 992px) {
    padding-top: 115px;
  }
`;
