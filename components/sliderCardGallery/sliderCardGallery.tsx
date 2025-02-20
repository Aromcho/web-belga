import React from 'react';
import Link from "next/link";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  SwiperContainerGallery,
  SlideContainer,
  WrapperImage,
  OverlayHover
} from './sliderCardGallery.styles';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export interface sliderCardGalleryProps {
  className?: string;
  img?: string[];
  galleryLink?: string;
}

export const SliderCardGallery = ({ img, className, galleryLink }: sliderCardGalleryProps) => {

  return (
    <SwiperContainerGallery>
      <Swiper
        className={`swiper--images-gallery ${className}`}
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        centeredSlides={false}
        allowTouchMove={true}
        navigation={{}}
      >
        {img?.map((i: any, k: number) => (
          <SwiperSlide key={k}>
            {galleryLink
              ? <WrapperImage>
                <OverlayHover>MÁS INFO</OverlayHover>
                <a className='link--gallery' href={galleryLink} target={"_blank"}></a>
                <SlideContainer style={{ backgroundImage: `url(${i})` }}></SlideContainer>

              </WrapperImage>

              : <SlideContainer style={{ backgroundImage: `url(${i})` }}></SlideContainer>
            }
          </SwiperSlide>
        ))}

      </Swiper>
    </SwiperContainerGallery>
  );
};

