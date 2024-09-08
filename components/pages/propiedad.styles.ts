import styled from "@emotion/styled";

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

export const PropList = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  .card--prop {
    width: 48%;
    @media screen and (max-width: 992px) {
      margin-bottom: 60px;
    }
    @media screen and (max-width: 740px) {
      width: 100%;
      max-width: 100%;
    }
  }
`;

export const SimilarProps = styled.div`
  width: 100%;
  margin-bottom: 80px;
  @media screen and (max-width: 992px) {
    margin-bottom: 60px;
  }
`;

export const MapProp = styled.div`
  position: relative;
  width: 100%;
  height: 0;  // La altura inicial es 0 para no mostrar el mapa hasta que se haga clic en la imagen
  padding-bottom: 45%;
  margin-bottom: 80px;
  transform: translateX(-50%);
  overflow: hidden;
  position: relative;
  left: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  
  @media screen and (max-width: 992px) {
    margin-bottom: 60px;
  }
  
  @media screen and (max-width: 460px) {
    padding-bottom: 120%;
  }
  
  > * {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

// Imagen de marcador de posición
export const PlaceholderImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/images/map.png'); // Asegúrate de que la ruta sea correcta
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

// Icono del mapa
export const MapIcon = styled.div`
  width: 100%;
  height:100%;
  position: absolute;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px;
  backdrop-filter: blur(2px);

  h1{
  margin: 0 10px;
  }
`;

export const MediaImg = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: translateY(-10px);
    @media screen and (max-width: 992px) {
      transform: translateY(0);
    }
  }
`;

export const IframeWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  -webkit-overflow-scrolling: touch !important;
  * {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
`;

export const MediaWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export const SwiperContainerGallery = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  .swiper--prop-gallery {
    width: 100%;
    .swiper-slide {
      align-items: center;
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
      display: flex;
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

export const GalleryProp = styled.div`
  width: 100vw;
  height: 440px;
  margin: 0 auto 70px;
  transform: translateX(-50%);
  position: relative;
  left: 50%;
  @media screen and (max-width: 1300px) {
    height: 300px;
  }
  @media screen and (max-width: 1100px) {
    margin: 0 auto 40px;
  }
  @media screen and (max-width: 992px) {
    height: 230px;
  }

  &.inversion {
    margin: 0 auto;
    height: 550px;
    position: relative;
    @media screen and (max-width: 740px) {
      height: 500px;
    }
    &:after {
      width: 100%;
      max-width: 1200px;
      height: 100%;
      content: " ";
      background-color: ${(props: any) => props.theme.black};
      transform: translate(-50%, -50%);
      position: absolute;
      top: 50%;
      left: 50%;
      @media screen and (max-width: 1300px) {
        max-width: 90%;
      }
      @media screen and (max-width: 992px) {
        max-width: 100%;
      }
    }
  }
`;

export const DescText = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  @media screen and (max-width: 992px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const DescTitle = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

export const MoreItemText = styled.div`
  font-size: 14px;
  white-space: nowrap;
  margin-bottom: 20px;
  @media screen and (max-width: 992px) {
    font-size: 16px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  b {
    font-weight: 600;
  }
`;

export const MoreItemTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const MoreItem = styled.div`
  width: 50%;
  color: ${(props: any) => props.theme.black};
  margin-bottom: 40px;
  @media screen and (max-width: 992px) {
    margin-bottom: 60px;
  }
  &.large {
    width: 100%;
    align-items: baseline;
    display: flex;
    flex-flow: row wrap;
    @media screen and (max-width: 992px) {
      flex-flow: column;
    }
    ${MoreItemTitle} {
      width: 100%;
    }
    ${MoreItemText} {
      width: 50%;
    }
  }
`;

export const MoreInfo = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  margin-top: 30px;
  @media screen and (max-width: 992px) {
    flex-flow: column;
    margin-top: 60px;
  }
`;

export const FeaturesFooter = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props: any) => props.theme.black};
  margin: 60px auto 0;
  &.nm{
    margin: 0 auto;
  }
  .button--planos {
    margin: 0 auto 30px;
    @media screen and (max-width: 992px) {
      margin: 0 auto 60px;
    }
  }
`;

export const FtBottom = styled.div`
  font-size: 12px;
  font-weight: 500;
  margin: 0 auto;
`;

export const FtImg = styled.img`
  width: 100%;
  max-width: 50px;
  height: auto;
  margin: -20px auto -3px;
`;

export const FtHead = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin: 0 auto 20px;
  @media screen and (max-width: 600px) {
    white-space: nowrap;
  }
`;

export const Feature = styled.div`
  color: ${(props: any) => props.theme.black};
  width: 100%;
  text-align: center;
  position: relative;
`;

export const FeaturesGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 40px;
  align-items: center;
  justify-content: center;
`;

export const BodyFeatures = styled.div`
  width: 50%;
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

export const BodyDesc = styled.div`
  width: 50%;
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

export const BodyProp = styled.div`
  width: 98%;
  display: flex;
  gap: 5%;
  justify-content: space-between;
  margin-bottom: 30px;
  margin: 0 auto 80px;
  @media screen and (max-width: 1100px) {
    width: 95%;
    max-width: 500px;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 992px) {
    width: 100%;
    max-width: 500px;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto 60px;
  }

  &.inversion {
    width: 100%;
    margin: 0 auto;
    @media screen and (max-width: 992px) {
      width: 100vw;
      max-width: 100vw;
      transform: translateX(-50%);
      position: relative;
      left: 50%;
    }
    ${BodyDesc} {
      padding-top: 50px;
      @media screen and (max-width: 992px) {
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
        padding: 50px 6.5%;
      }
    }
    ${BodyFeatures} {
      padding: 50px 6.5% 90px;
      background-color: ${(props: any) => props.theme.black};
      ${FeaturesGrid} {
        @media screen and (max-width: 992px) {
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
        }
        ${Feature} {
          color: ${(props: any) => props.theme.white};
          ${FtImg} {
            filter: invert(100%) sepia(3%) saturate(901%) hue-rotate(343deg)
              brightness(118%) contrast(100%);
          }
        }
      }

      ${FeaturesFooter} {
        border-bottom: 1px solid ${(props: any) => props.theme.white};
        .button--planos {
          background-color: ${(props: any) => props.theme.black};
          border-color: ${(props: any) => props.theme.white};
          color: ${(props: any) => props.theme.white};
          &:hover {
            background-color: ${(props: any) => props.theme.white};
            color: ${(props: any) => props.theme.black};
          }
        }
      }

      ${MoreInfo} {
        @media screen and (max-width: 992px) {
          width: 100%;
          max-width: 500px;
          margin: 60px auto 0;
        }
        ${MoreItem} {
          color: ${(props: any) => props.theme.white};
        }
      }
    }
  }
`;

export const HeadShare = styled.div`
  align-items: center;
  display: flex;
  color: ${(props: any) => props.theme.black};
  display: flex;
  font-size: 16px;
  font-weight: 400;
  @media screen and (max-width: 992px) {
    width: 100%;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 12px;
    margin: 35px 0 0 auto;
    position: relative;
  }
  a {
    svg {
      width: 20px;
      height: auto;
      color: ${(props: any) => props.theme.black};
      margin-left: 15px;
      transition: all 0.3s ease-in-out;
      @media screen and (max-width: 992px) {
        width: 27px;
        margin-left: 12px;
      }
    }
    &:hover {
      svg {
        color: ${(props: any) => props.theme.secondary};
      }
    }
  }
`;

export const HeadInfo = styled.div`
  align-items: center;
  display: flex;
  color: ${(props: any) => props.theme.black};
  display: flex;
  font-size: 16px;
  font-weight: 400;
  @media screen and (max-width: 992px) {
    width: 100%;
    text-align: left;
  }
`;

export const HeadInfoShare = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 992px) {
    width: 100%;
    flex-flow: column;
  }
`;

export const HeadDivisor = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props: any) => props.theme.black};
  margin: 20px auto;
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const HeadPrice = styled.div`
  align-items: center;
  display: flex;
  color: ${(props: any) => props.theme.black};
  display: flex;
  font-size: 24px;
  font-weight: 400;
  @media screen and (max-width: 992px) {
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

export const LikeWrapper = styled.div`
  width: 28px;
  height: 28px;
  align-items: center;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  margin-left: 15px;
  transition: all 0.3s ease-in-out;
  z-index: 1;
  @media screen and (max-width: 992px) {
    display: none;
  }
  &.mobile {
    display: none;
    -webkit-tap-highlight-color: transparent;
    @media screen and (max-width: 992px) {
      width: 38px;
      height: 38px;
      display: flex;
      margin-left: 0;
      transform: translateY(-50%);
      position: absolute;
      left: 0;
      top: 50%;
    }
  }
  svg {
    width: 100%;
    height: auto;
    transition: all 0.3s ease-in-out;
    path {
      transition: all 0.3s ease-in-out;
      fill: transparent;
      stroke: ${(props: any) => props.theme.black};
    }
  }
  &:hover {
    cursor: pointer;
    svg {
      transform: scale(1.2);
    }
  }
  &.liked {
    svg {
      path {
        fill: ${(props: any) => props.theme.black};
        stroke: ${(props: any) => props.theme.black};
      }
    }
    &:hover {
      svg {
        transform: scale(0.8);
        @media screen and (max-width: 992px) {
          transform: none;
        }
      }
    }
  }

  &.inversion {
    svg {
      path {
        stroke: ${(props: any) => props.theme.white};
      }
    }
    &.liked {
      svg {
        path {
          fill: ${(props: any) => props.theme.white};
          stroke: ${(props: any) => props.theme.white};
        }
      }
    }
  }
`;

export const HeadAddress = styled.div`
  align-items: center;
  color: ${(props: any) => props.theme.black};
  display: flex;
  font-size: 24px;
  font-weight: 500;
  margin-right: 5px;
  @media screen and (max-width: 992px) {
    width: 100%;
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const HeadAddressPrice = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 992px) {
    align-items: flex-start;
    flex-flow: column;
  }
`;

export const HeadProp = styled.div`
  width: 100%;
  margin: 60px auto 40px;
  z-index: 9999997;
  position: relative;
  @media screen and (max-width: 992px) {
    margin: 60px auto;
  }

  &.inversion {
    background-color: ${(props: any) => props.theme.black};
    color: ${(props: any) => props.theme.black};
    margin: 40px auto 0;
    padding: 40px 50px;

    @media screen and (max-width: 992px) {
      width: 100vw;
      transform: translateX(-50%);
      position: relative;
      left: 50%;
    }
    ${HeadAddressPrice} {
      ${HeadAddress} {
        color: ${(props: any) => props.theme.white};
      }
      ${HeadPrice} {
        color: ${(props: any) => props.theme.white};
      }
    }
    ${HeadDivisor} {
      background-color: ${(props: any) => props.theme.white};
    }

    ${HeadInfoShare} {
      ${HeadInfo} {
        color: ${(props: any) => props.theme.white};
      }
      ${HeadShare} {
        color: ${(props: any) => props.theme.white};
        a svg {
          color: ${(props: any) => props.theme.white};
        }
      }
    }
  }
`;

export const BackWrapper = styled.div`
  &.inversion {
    padding-left: 50px;
    @media screen and (max-width: 992px) {
      padding-left: 0;
    }
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

export const PropContainer = styled.div`
  width: 100%;
  padding: 150px 0 50px;
  @media screen and (max-width: 992px) {
    padding: 116px 0 70px;
  }
`;


export const ButtonMobileWrapper = styled.div`
  display: none;
  @media screen and (max-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 60px;
    border-bottom: 1px solid black;
    .button--title{
      max-width: 100%;
    }
  }
`;

