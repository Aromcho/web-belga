import React from 'react';


import { Button } from 'components/button';
import { SliderCardGallery } from 'components/sliderCardGallery';

import {
  CardPropContainer,
  HeadProp,
  Operation,
  Price,
  Currency,
  ImageWrapper,
  EmptyMedia,
  EmptyText,
  FooterProp,
  Info,
  DescWrapper,
  Desc,
  Address,
  LikeWrapper,
  FeaturesWrapper,
  FeaturesList,
  FeaturesItem,
  FeatureText,
  FeatureImg
} from './cardprop.styles';

import { HeartIcon, ImageIcon } from 'components/icons';
import { classes } from 'helpers';



export interface CardPropProps {
  className?: string;
  operation: string;
  currency: string;
  price: string;
  media?: any;
  link?: string;
  description?: string;
  address?: string;
  m2?: string;
  bedroom?: string;
  bathroom?: string;
  garage?: string;
  liked?: boolean;
  onLiked?: (e: boolean) => void;
}



export const CardProp = ({
  className,
  operation,
  currency,
  price,
  media,
  link,
  description,
  address,
  m2,
  bedroom,
  bathroom,
  garage,
  liked = false,
  onLiked
}: CardPropProps) => {

  /* Handle like prop*/
  const [isLiked, setIsLiked] = React.useState<boolean>(liked)
  React.useEffect(() => {
    if (onLiked) onLiked(isLiked)
  }, [isLiked, liked])

  const imgProp = [`https://picsum.photos/600/300?random=1`, `https://picsum.photos/600/300?random=2`, `https://picsum.photos/600/300?random=3`]

  return (
    <CardPropContainer className={className}>
      <HeadProp>
        <Operation>{operation}</Operation>
        <Price><Currency>{currency}</Currency>{price}</Price>
      </HeadProp>

      <ImageWrapper>
        <SliderCardGallery
          img={imgProp}
          galleryLink={link}
        />
        {/* {media
          ? <SliderCardGallery img={imgProp} />

          : <EmptyMedia>
            <ImageIcon />
            <EmptyText>Sin material multimedia</EmptyText>
          </EmptyMedia>
        } */}
      </ImageWrapper>

      <FooterProp>
        <Info>
          <DescWrapper>
            <Desc>{description}</Desc>
            <Address>{address}</Address>
          </DescWrapper>
          <LikeWrapper className={classes({ liked: isLiked })} onClick={() => setIsLiked(!isLiked)}>
            <HeartIcon className='icon--heart' />
          </LikeWrapper>
        </Info>
        <FeaturesWrapper>
          <FeaturesList>
            <FeaturesItem>

              <FeatureText>{m2}</FeatureText>
              <FeatureImg src='/images/icons/prop_m2.svg' />
            </FeaturesItem>

            <FeaturesItem>
              <FeatureText>{bedroom}</FeatureText>
              <FeatureImg src='/images/icons/prop_cuarto.svg' />
            </FeaturesItem>

            <FeaturesItem>
              <FeatureText>{bathroom}</FeatureText>
              <FeatureImg src='/images/icons/prop_ducha.svg' />
            </FeaturesItem>

            <FeaturesItem>
              <FeatureText>{garage}</FeatureText>
              <FeatureImg src='/images/icons/prop_cochera.svg' />
            </FeaturesItem>

          </FeaturesList>
        </FeaturesWrapper>
      </FooterProp>
    </CardPropContainer>
  );
};
