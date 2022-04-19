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
import { classes, formatToMoney, Property } from 'helpers';

export interface CardPropProps {
  className?: string;
  liked?: boolean;
  onLiked?: () => void;
  property: Property;
  inversion?: boolean;
}

export const CardProp = ({
  className,
  liked = false,
  onLiked,
  inversion = false,
  property
}: CardPropProps) => {

  const link = inversion ? `/emprendimientos/${property.id.toString()}` : `/propiedad/${property.id.toString()}`;
  const media = property.photos.slice(0, 10).map((photo: any) => photo.image );

  const handleLike = () => {
    if(onLiked) onLiked();
  }

  return (
    <CardPropContainer className={classes(className, { inversion })}>
      {(inversion && link) && <Link href={link} passHref><a className='inversion--link'></a></Link>}
      <HeadProp>
        {!inversion && <Operation>{property.operations[0].operation_type}</Operation>}
        {!inversion && <Price>{inversion && 'Desde'}<Currency>{property.operations[0].prices[0].currency}</Currency>{formatToMoney(property.operations[0].prices[0].price)}</Price>}
      </HeadProp>

      <ImageWrapper>
        {inversion
          ? <IsolatedImage style={{ backgroundImage: `url(${property.photos.slice(0, 1).map((photo: any) => photo.image )})` }} />
          : (media
            ? <SliderCardGallery img={media} galleryLink={link} />
            : <EmptyMedia>
              <ImageIcon />
              <EmptyText>Sin material multimedia</EmptyText>
            </EmptyMedia>
          )
        }
      </ImageWrapper>

      <FooterProp>
        <Info>
          <DescWrapper>
            <Desc>{inversion ? property.name : property.location?.name}</Desc>
            <Address>{inversion ? property.location?.name : property.address}</Address>
            {inversion && <Bedrooms>{`${property.suite_amount} ambientes`}</Bedrooms>}
          </DescWrapper>
          {!inversion &&
            <LikeWrapper className={classes({ liked: liked })} onClick={handleLike}>
              <HeartIcon className='icon--heart' />
            </LikeWrapper>
          }
        </Info>
        {!inversion &&
          <FeaturesWrapper>
            <FeaturesList>
              <FeaturesItem>

                <FeatureText>{Math.round(property.total_surface)}</FeatureText>
                <FeatureImg src='/images/icons/prop_m2.svg' />
              </FeaturesItem>

              <FeaturesItem>
                <FeatureText>{property.suite_amount}</FeatureText>
                <FeatureImg src='/images/icons/prop_cuarto.svg' />
              </FeaturesItem>

              <FeaturesItem>
                <FeatureText>{property.bathroom_amount}</FeatureText>
                <FeatureImg src='/images/icons/prop_ducha.svg' />
              </FeaturesItem>

              <FeaturesItem>
                <FeatureText>{property.parking_lot_amount}</FeatureText>
                <FeatureImg src='/images/icons/prop_cochera.svg' />
              </FeaturesItem>

            </FeaturesList>
          </FeaturesWrapper>
        }
      </FooterProp>
    </CardPropContainer>
  );
};
