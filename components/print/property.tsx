import React from 'react';
import QRCode from "react-qr-code";
import { Global as GlobalStyling } from "@emotion/react";
import { GlobalStyles } from "../layout/layout.styles";
import { formatToMoney } from "helpers";

import {
  PropertyPDF,
  Header,
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
  GalleryItemImage,
  BottomLeft,
  BottomRight,
  BottomWrapper,
  Price,
  Rooms,
  Disclaimer,
  PrintStyle
} from "./styles.styles";
import { url } from 'inspector';

const Property = ({property, photoAmount}: any) => {

  const photoGallery: {src: string}[] = property?.photos
  ?.filter((item: any) => !item.is_blueprint)
  .map((item: any, k: number) => {
    return { src: `${item.image}`, loading: "lazy" };
  });

  // const asd = Math.ceil(property.description.split(/\r\n|\r|\n/).length / 2.90) - 2
  
  const amount = photoAmount % 2 == 0 ? photoAmount : photoAmount - 1;
  console.log(photoGallery.length, amount, property.description.split(/\r\n|\r|\n/).length)

  console.log(property)
  
  return (
    <PropertyPDF id="pdfItem">
      <GlobalStyling styles={PrintStyle} />
      <GlobalStyling styles={GlobalStyles} />
      <thead><th><td style={{display: "flex"}}>
      <Header>
        <Logo src="/images/print_logo.svg" alt="Belga" style={{}} />
        <HeaderContent>
          <HeaderTitle>{property.type.name}<span>|</span>{property.location?.name}<span>|</span>{property.address}</HeaderTitle>
          <HeaderSubtitle>{property.publication_title}</HeaderSubtitle>
        </HeaderContent>
        <HeaderLabel>BELGA INMOBILIARIA S.A.</HeaderLabel>
      </Header>
      </td></th></thead>
      <tbody><tr><td>
      <ContentWrapper>
        <LeftColumn>
          <IconList>
            {Math.round(property?.total_surface) > 0 && <IconItem>
              <IconLabel>{Math.round(property?.total_surface)}</IconLabel>
              <IconImage src="/images/svg/m2.svg" />
            </IconItem>}
            {Math.round(property?.suite_amount) > 0 && <IconItem>
              <IconLabel>{Math.round(property?.suite_amount)}</IconLabel>
              <IconImage src="/images/svg/room.svg" />
            </IconItem>}
            {Math.round(property?.bathroom_amount) > 0 && <IconItem>
              <IconLabel>{Math.round(property?.bathroom_amount)}</IconLabel>
              <IconImage src="/images/svg/bath.svg" />
            </IconItem>}
            {Math.round(property?.parking_lot_amount) > 0 && <IconItem>
              <IconLabel>{Math.round(property?.parking_lot_amount)}</IconLabel>
              <IconImage className="fix" src="/images/svg/car.svg" />
            </IconItem>}
          </IconList>
          <DescriptionText id="div" dangerouslySetInnerHTML={{__html: property.description}} />
          {/* <Divider />
          <Disclaimer>
            Nota Importante: Toda la información y medidas provistas son aproximadas y deberán ratificarse con la documentación pertinente y no compromete contractualmente a nuestra empresa. Los gastos (Expensas, ABL) expresados refieren a la última información recabada y deberán confirmarse. Fotografías no vinculantes ni contractuales. 
          </Disclaimer> */}
        </LeftColumn>
        <RightColumn>
          <GalleryList>
            {/* {photoGallery.slice(0, 4).map(item => <GalleryItemImage src={item.src} />)} */}
            {photoGallery.slice(0, 4).map(item => <GalleryItem style={{backgroundImage: `url("${item.src}")`}} />)}
          </GalleryList>
          <BottomWrapper>
            <BottomLeft>
              <Rooms>{property.room_amount} {property.room_amount === 1 ? "AMBIENTE" : "AMBIENTES"}</Rooms>
              <Price>{property?.operations[0]?.prices[0]?.currency} {formatToMoney(property?.operations[0]?.prices[0]?.price)}</Price>
            </BottomLeft>
            <BottomRight>
              <QRCode size={110} value={`https://www.belga.com.ar/propiedad/${property.id.toString()}`} />
            </BottomRight>
          </BottomWrapper>
          <GalleryList className="fixes">
            {/* {photoGallery.slice(4, amount).map(item => <GalleryItemImage src={item.src} />)} */}
            {photoGallery.slice(4, amount).map(item => <GalleryItem style={{backgroundImage: `url("${item.src}")`}} />)}
          </GalleryList>
        </RightColumn>
      </ContentWrapper>
      </td></tr></tbody>
    </PropertyPDF>
  )
}

export default Property;