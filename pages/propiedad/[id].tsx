import React from 'react';
import { GetServerSideProps } from 'next'
import { Layout, Container } from 'components/layout';
import { getPropertyById } from 'services';
import { PATHS } from 'config';
import Link from "next/link";
import { formatToMoney } from 'helpers';
import Head from 'next/head'

import { SocialSidebar } from 'components/socialsidebar';

import {
  PropContainer,
  BackWrapper,
  HeadProp,
  HeadAddressPrice,
  HeadDivisor,
  HeadInfoShare,
  HeadAddress,
  HeadPrice,
  HeadInfo,
  HeadShare,
  GalleryProp,
  BodyProp,
  BodyFeatures,
  FeaturesGrid,
  BodyDesc,
  DescTitle,
  DescText,
  Feature,
  FtHead,
  FtImg,
  FtBottom
} from 'components/pages/propiedad.styles';
import { ArrowBackIcon, MailIcon, WhatsappIcon } from 'components/icons';

const PropertyDetail = ({ property, statusCode }: any) => {
  if (statusCode === 404) return <>404</>

  if (statusCode === 500) return <>500</>

  console.log(property)
  return (
    < Layout >
      <Head>
        {/*OpenGraph metadata*/}
        <title>Propiedad | {property.address}</title>
        <meta property="og:type" content="Website" />
        <meta property="og:title" content={`Propiedad | ${property.address}`} />
        <meta property="og:description" content="	Nuestra misión: Ofrecer la mas alta calidad de servicios inmobiliarios, buscando continuamente mejorar y ampliar la gama de servicios ofrecidos con el fin de satisfacer las necesidades de nuestros clientes actuales y futuros" />
        <meta property="og:url" content={`https://www.belga.com.ar/${property.id.toString()}`} />
        <meta property="og:type" content="Website" />
        <meta property="og:site_name" content="Belga Inmobiliaria" />
        <meta property="og:image" content="https://web-belga.vercel.app/images/og_image.png" />
      </Head>

      <SocialSidebar color='red' />

      <PropContainer>
        <Container>
          <BackWrapper><Link href={PATHS.ROOT}><a className='back--link'><ArrowBackIcon />Volver a la búsqueda</a></Link> </BackWrapper>

          <HeadProp>
            <HeadAddressPrice>
              <HeadAddress>{property.address}</HeadAddress>
              <HeadPrice>{`${property.operations[0].operation_type} ${property.operations[0].prices[0].currency} ${formatToMoney(property.operations[0].prices[0].price)}`}</HeadPrice>
            </HeadAddressPrice>

            <HeadDivisor />

            <HeadInfoShare>
              <HeadInfo>{property.location?.name}</HeadInfo>
              <HeadShare>
                Enviar por
                <Link href={`https://api.whatsapp.com/send?text=Encontr%C3%A9%20esta%20excelente%20propiedad!%0D%0Ahttps://web-belga.vercel.app/propiedad/${property.id.toString()}`}><a target='_blank'><WhatsappIcon /></a></Link>
                <Link href={`mailto:mail@server.com?subject=Encontr%C3%A9%20esta%20excelente%20propiedad!&body=Direcci%C3%B3n%3A%0D%0A${property.address}%0D%0A%0D%0ADescripci%C3%B3n%3A%0D%0A${property.location?.name}%0D%0A%0D%0APrecio%3A%0D%0A${property.operations[0].operation_type} ${property.operations[0].prices[0].currency} ${formatToMoney(property.operations[0].prices[0].price)}`}><a target='_blank'><MailIcon /></a></Link>
              </HeadShare>
            </HeadInfoShare>
          </HeadProp>

          <GalleryProp>Gallery</GalleryProp>

          <BodyProp>
            <BodyFeatures>
              <FeaturesGrid>
                <Feature><FtHead>{property?.age}</FtHead><FtImg src='/images/icons/prop_antiguedad.svg' /><FtBottom>Antigüedad</FtBottom></Feature>
                <Feature><FtHead>{Math.round(property?.roofed_surface)}</FtHead><FtImg src='/images/icons/prop_m2.svg' /><FtBottom>Sup. Cub.</FtBottom></Feature>
                <Feature><FtHead>{Math.round(property?.total_surface)}</FtHead><FtImg src='/images/icons/prop_m2.svg' /><FtBottom>Sup. Total</FtBottom></Feature>
                <Feature><FtHead>{property?.suite_amount}</FtHead><FtImg src='/images/icons/prop_cuarto.svg' /><FtBottom>{property?.suite_amount > 1 ? 'Dormitorios' : 'Dormitorio'}</FtBottom></Feature>
                <Feature><FtHead>{property?.bathroom_amount}</FtHead><FtImg src='/images/icons/prop_ducha.svg' /><FtBottom>{property?.bathroom_amount > 1 ? 'Baños' : 'Baño'}</FtBottom></Feature>
                <Feature><FtHead>{property?.toilet_amount}</FtHead><FtImg src='/images/icons/prop_toilette.svg' /><FtBottom>{property?.toilet_amount > 1 ? 'Toilette' : 'Toilette'}</FtBottom></Feature>
                <Feature><FtHead>{property?.parking_lot_amount}</FtHead><FtImg src='/images/icons/prop_cochera.svg' /><FtBottom>{property?.parking_lot_amount > 1 ? 'Cocheras' : 'Cochera'}</FtBottom></Feature>
                <Feature><FtHead>{property?.web_price ? 'Si' : 'No'}</FtHead><FtImg src='/images/icons/prop_credito.svg' /><FtBottom>Apto Crédito</FtBottom></Feature>
                <Feature><FtHead>{formatToMoney(Math.round(property?.expenses), true, '$')}</FtHead><FtImg src='/images/icons/prop_expensas.svg' /><FtBottom>Expensas</FtBottom></Feature>
              </FeaturesGrid>
            </BodyFeatures>
            <BodyDesc>
              <DescTitle>Decripción</DescTitle>
              <DescText>{property.rich_description ?? property.description}</DescText>
            </BodyDesc>

          </BodyProp>


        </Container>
      </PropContainer>
    </Layout >
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  let props: any = {}

  try {
    const property = await getPropertyById(parseInt(query.id as string))
    props = {
      property
    }
  } catch (e: any) {
    props = {
      statusCode: e.response.status
    }
  }

  return {
    props
  }

}

export default PropertyDetail;