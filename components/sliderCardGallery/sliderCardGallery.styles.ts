import styled from "@emotion/styled";

export const OverlayHover = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  color: ${(props: any) => props.theme.white};
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  transform: translateX(-50%);
  opacity: 0;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 50%;
`;

export const WrapperImage = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  &:hover {
    ${OverlayHover} {
      opacity: 1;
    }
  }
`;

export const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  align-items: flex-start;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  transition: all 0.3s ease-in-out;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    cursor: pointer;
  }
`;

export const SwiperContainerGallery = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  .swiper--images-gallery {
    width: 100%;
    .swiper-slide {
      align-items: center;
      display: flex;
      justify-content: center;
      .link--gallery {
        width: 70%;
        height: 100%;
        transform: translateX(-50%);
        z-index: 3;
        position: absolute;
        top: 0;
        left: 50%;
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
      position: absolute;
      top: 22px;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-tap-highlight-color: transparent;
      @media screen and (max-width: 992px) {
        width: 60px;
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
