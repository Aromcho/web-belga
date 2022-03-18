import React from 'react';
import Link from "next/link";

import { SliderCardGallery } from 'components/sliderCardGallery';

import {
  CardPropContainer,
  HeadProp,
  Operation,
  Price,
  Currency,
  ImageWrapper,
  IsolatedImage,
  EmptyMedia,
  EmptyText,
  FooterProp,
  Info,
  DescWrapper,
  Desc,
  Address,
  Bedrooms,
  LikeWrapper,
  FeaturesWrapper,
  FeaturesList,
  FeaturesItem,
  FeatureText,
  FeatureImg,
} from './cardprop.styles';

import { HeartIcon, ImageIcon } from 'components/icons';
import { classes } from 'helpers';



export interface CardPropProps {
  className?: string;
  inversion?: boolean;
  operation?: string;
  currency?: string;
  price?: string;
  media?: any;
  link?: string;
  description?: string;
  address?: string;
  neighborhood?: string;
  m2?: string | number;
  bedroom?: string;
  bathroom?: string;
  garage?: string;
  liked?: boolean;
  onLiked?: (e: boolean) => void;
}



export const CardProp = ({
  className,
  inversion,
  operation,
  currency,
  price,
  media,
  link,
  description,
  address,
  neighborhood,
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
    <CardPropContainer className={classes(className, { inversion })}>
      {(inversion && link) && <Link href={link}><a className='inversion--link'></a></Link>}
      <HeadProp>
        {!inversion && <Operation>{operation}</Operation>}
        <Price>{inversion && 'Desde'}<Currency>{currency}</Currency>{price}</Price>
      </HeadProp>

      <ImageWrapper>
        {inversion
          ? <IsolatedImage style={{ backgroundImage: 'url(https://picsum.photos/600/300?random=1)' }} />
          : <SliderCardGallery img={imgProp} galleryLink={link} />
          /* (media
            ? <SliderCardGallery
              img={imgProp}
              galleryLink={link}
            />
  
            : <EmptyMedia>
              <ImageIcon />
              <EmptyText>Sin material multimedia</EmptyText>
            </EmptyMedia>
          ) */
        }
      </ImageWrapper>

      <FooterProp>
        <Info>
          <DescWrapper>
            <Desc>{description}</Desc>
            <Address>{inversion ? neighborhood : address}</Address>
            {inversion && <Bedrooms>{bedroom}</Bedrooms>}
          </DescWrapper>
          {!inversion &&
            <LikeWrapper className={classes({ liked: isLiked })} onClick={() => setIsLiked(!isLiked)}>
              <HeartIcon className='icon--heart' />
            </LikeWrapper>
          }
        </Info>
        {!inversion &&
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
        }
      </FooterProp>
    </CardPropContainer>
  );
};
