import React from 'react';
import Link from "next/link";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  SwiperContainerGallery,
  SlideContainer,
  WrapperImage,
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
        loop={false}
        centeredSlides={false}
        allowTouchMove={true}
        navigation={{}}
      >
        {img?.map((i: any, k: number) => (
          < SwiperSlide key={k}>
            {galleryLink
              ? <WrapperImage>
                <Link href={galleryLink}><a className='link--gallery'></a></Link>
                <SlideContainer style={{ backgroundImage: `url(${i})` }}></SlideContainer>
              </WrapperImage>

              : <SlideContainer style={{ backgroundImage: `url(${i})` }}></SlideContainer>
            }
          </SwiperSlide>
        ))}

      </Swiper>
    </SwiperContainerGallery >
  );
};

