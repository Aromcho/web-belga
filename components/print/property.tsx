import React from 'react';
import QRCode from "react-qr-code";
import { Global as GlobalStyling } from "@emotion/react";
import { GlobalStyles } from "../layout/layout.styles";
import { formatToMoney } from "helpers";

import {
  PropertyPDF,
  Header,
  Footer,
  CenterColumn,
  CenterHeader,
  MarcaAgua,
  MainTitlecontainer,
  MainPriceContainer,
  CenterHeaderTitle,
  CenterHeaderSubtitle,
  Logo,
  HeaderContent,
  HeaderTitle,
  HeaderSubtitle,
  HeaderLabel,
  LeftColumn,
  RightColumn,
  IconList,
  IconItem,
  IconLabel,
  IconImage,
  DescriptionText,
  GalleryItem,
  GalleryList,
  ContentWrapper,
  BottomLeft,
  BottomRight,
  BottomWrapper,
  Price,
  Rooms,
  PrintStyle,
  ImgLogo,
  GridContainer,
  MainImage,
  SmallImages,
  MainPrice,
  MainPriceCoin,
  TitleNew,
  AddressTitle, 
  AddressSecundaryTitle
} from "./styles.styles";
import { Address } from 'components/cardprop/cardprop.styles';

const Property = ({ property, photoAmount }: any) => {

  const photoGallery: { src: string }[] = property?.photos
    ?.filter((item: any) => !item.is_blueprint)
    .map((item: any) => {
      return { src: `${item.image}`, loading: "lazy" };
    });
    
  const amount = photoAmount % 2 === 0 ? photoAmount : photoAmount - 1;

  
  
  return (
    <PropertyPDF id="pdfItem">
      <GlobalStyling styles={PrintStyle} />
      <GlobalStyling styles={GlobalStyles} />
      <thead>
        <tr>
          <th colSpan={2} style={{ display: "flex" }}>
            <Header>
              <Logo src="/images/print_logo.svg" alt="Belga" />
              <HeaderContent>
                <AddressTitle>{property.address}</AddressTitle>
                <HeaderSubtitle>{property.publication_title}</HeaderSubtitle>
              </HeaderContent>
            </Header>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={2}>
         
            <CenterColumn>
              <CenterHeader>
                <ImgLogo src="/images/logo-print-new.png" alt="" />
              </CenterHeader>
              <MainTitlecontainer>
                <TitleNew>
                  <AddressTitle>{property.address}</AddressTitle>
                 <AddressSecundaryTitle>{property.type.name}<span></span> {property.location?.name}</AddressSecundaryTitle>
                </TitleNew>
                <MainPriceContainer>
                  <MainPrice> <MainPriceCoin>{property?.operations[0]?.prices[0]?.currency}</MainPriceCoin> <Price>{formatToMoney(property?.operations[0]?.prices[0]?.price)}</Price></MainPrice>
                  <Rooms>{property.room_amount} {property.room_amount === 1 ? "Anbiente" : "Ambientes"} + {Math.round(property?.parking_lot_amount)} Cocheras</Rooms>                
                </MainPriceContainer>
              </MainTitlecontainer>
              <GridContainer>
                <MainImage>
                  <img src={photoGallery[0]?.src} alt="Main property image" style={{ width: '100%', height: '100%' }} />
                </MainImage>
                <SmallImages>
                  {photoGallery.slice(1, 3).map((item, index) => (
                    <img key={index} src={item.src} alt={`Small property image ${index + 1}`} style={{ width: '100%', height: '30%' }} />
                    
                  ))}
                  <QRCode size={80} value={`https://www.belga.com.ar/propiedad/${property.id.toString()}`} style={{ marginBottom: "30px" }} />
                  <MarcaAgua>BLEGA INMOBILIARIA S.A.</MarcaAgua>
                </SmallImages>
              </GridContainer>
            </CenterColumn>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
          <ContentWrapper>
    <LeftColumn>
      <IconList>
        {Math.round(property?.total_surface) > 0 && (
          <IconItem>
            <IconLabel>{Math.round(property?.total_surface)}</IconLabel>
            <IconImage src="/images/svg/m2.svg" />
          </IconItem>
        )}
        {Math.round(property?.suite_amount) > 0 && (
          <IconItem>
            <IconLabel>{Math.round(property?.suite_amount)}</IconLabel>
            <IconImage src="/images/svg/room.svg" />
          </IconItem>
        )}
        {Math.round(property?.bathroom_amount) > 0 && (
          <IconItem>
            <IconLabel>{Math.round(property?.bathroom_amount)}</IconLabel>
            <IconImage src="/images/svg/bath.svg" />
          </IconItem>
        )}
        {Math.round(property?.parking_lot_amount) > 0 && (
          <IconItem>
            <IconLabel>{Math.round(property?.parking_lot_amount)}</IconLabel>
            <IconImage className="fix" src="/images/svg/car.svg" />
          </IconItem>
        )}
      </IconList>
      <DescriptionText id="div" dangerouslySetInnerHTML={{ __html: property.description }} />
    </LeftColumn>
    <RightColumn>
    <GalleryList className="fixes">
      {photoGallery.slice(4, 8).map((item, index) => (
    <GalleryItem key={index}>
      <img src={item.src} alt={`property image ${index + 1}`} style={{ width: '100%' }} />
    </GalleryItem>
    ))}
    </GalleryList>

    <GalleryList className="fixes">
    {photoGallery.slice(8, amount).map((item, index) => (
    <GalleryItem key={index}>
      <img src={item.src} alt={`property image ${index + 5}`} style={{ width: '100%', height: '173px' }} />
    </GalleryItem>
    ))}
    </GalleryList>


    </RightColumn>
  </ContentWrapper>
          </td>
        </tr>
      </tbody>
      <tfoot>
      <tr>
          <td colSpan={2}>
            <Footer>
              
            </Footer>
          </td>
        </tr>
      </tfoot>
     
    </PropertyPDF>
  )
  
}

export default Property;
