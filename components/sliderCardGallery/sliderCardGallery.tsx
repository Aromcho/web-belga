import React from 'react';
import Link from "next/link";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  SwiperContainerGallery,
  SlideContainer,
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
        {img?.map((i: any, key: number = 0) => (
          < SwiperSlide key={key + 1}>
            {galleryLink 
            ? <Link href={galleryLink}><a><SlideContainer style={{ backgroundImage: `url(${i})` }}></SlideContainer></a></Link>
            : <SlideContainer style={{ backgroundImage: `url(${i})` }}></SlideContainer>
            }
            
          </SwiperSlide>
        ))}

      </Swiper>
    </SwiperContainerGallery >
  );
};

