import styled from "@emotion/styled";

export const PropList = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  .card--prop {
    width: 48%;
    @media screen and (max-width: 740px) {
      width: 100%;
    }
  }
`;

export const SimilarProps = styled.div`
  width: 100%;
  margin-bottom: 80px;
`;

export const MapProp = styled.div`
  width: 100vw;
  height: 0;
  margin-bottom: 80px;
  padding-bottom: 45%;
  transform: translateX(-50%);
  position: relative;
  left: 50%;
  @media screen and (max-width: 460px) {
    padding-bottom: 120%;
  }
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const MediaImg = styled.img`
  width: auto;
  height: 100%;
  @media screen and (max-width: 460px) {
    width: auto;
    height: 100%;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
  }
`;

export const IframeWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll !important;
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
        width: 60px;
        height: 60px;
        content: "";
        position: absolute;
      }
      &:after {
        width: 30px;
        height: 60px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 15px;
        content: "";
        transition: all 0.3s ease-in-out;
        opacity: 0.7;
      }
      &:hover {
        &:after {
          opacity: 1;
        }
      }
    }
    .swiper-button-prev {
      left: 0;
      background: rgb(0, 0, 0);
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.25) 0%,
        rgba(0, 0, 0, 0) 88%
      );
      &:before {
        left: 0;
      }
      &:after {
        background-image: url("../images/arrow_prev_slider.svg");
        background-position: center center;
      }
    }
    .swiper-button-next {
      right: 0;
      background: rgb(0, 0, 0);
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0) 9%,
        rgba(0, 0, 0, 0.25) 100%
      );
      &:before {
        right: 0;
      }
      &:after {
        background-image: url("../images/arrow_next_slider.svg");
        background-position: center center;
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
`;

export const DescText = styled.div`
  width: 100%;
  color: ${(props: any) => props.theme.black};
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
  color: ${(props: any) => props.theme.black};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

export const MoreItemText = styled.div`
  color: ${(props: any) => props.theme.black};
  font-size: 14px;
  white-space: nowrap;
  margin-bottom: 20px;
  @media screen and (max-width: 992px) {
    font-size: 16px;
  }
  b {
    font-weight: 600;
  }
`;

export const MoreItemTitle = styled.div`
  color: ${(props: any) => props.theme.black};
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const MoreItem = styled.div`
  width: 50%;
  margin-bottom: 40px;
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
  margin-top: 60px;
  @media screen and (max-width: 992px) {
    flex-flow: column;
  }
`;

export const FeaturesFooter = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props: any) => props.theme.black};
  padding-bottom: 25px;
  margin: 60px auto 0;
  .button--planos {
    margin: 0 auto;
  }
`;

export const FtBottom = styled.div`
  color: ${(props: any) => props.theme.black};
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
  color: ${(props: any) => props.theme.black};
  font-size: 15px;
  font-weight: 600;
  margin: 0 auto 20px;
`;

export const Feature = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
`;

export const FeaturesGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
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
  }
`;

export const HeadShare = styled.div`
  align-items: center;
  display: flex;
  color: ${(props: any) => props.theme.black};
  display: flex;
  font-size: 16px;
  font-weight: 500;
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
      margin-left: 10px;
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
  font-weight: 500;
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
  font-weight: 500;
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
      @media screen and (max-width: 992px) {
        transform: none;
      }
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
  @media screen and (max-width: 992px) {
    margin: 30px auto;
  }
`;

export const BackWrapper = styled.div`
  .back--link {
    align-items: center;
    display: flex;
    color: ${(props: any) => props.theme.black};
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
    padding: 100px 0 50px;
  }
`;
