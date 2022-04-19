import React from 'react';
import dynamic from 'next/dynamic'
import { GetServerSideProps } from 'next'
import { Layout, Container } from 'components/layout';
import { getProperties, getPropertyById } from 'services';
import { PATHS } from 'config';
import Link from "next/link";
import { classes, formatToMoney } from 'helpers';
import Head from 'next/head'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Button } from 'components/button';
import { ContactForm } from 'components/contactform';
import { Title } from 'components/title';
import { CardProp } from 'components/cardprop';
// import { Map } from 'components/map';

const DynamicMap = dynamic<MapProps>(() => import('components/map').then((mod) => mod.Map), { ssr: false })

import {
  PropContainer,
  BackWrapper,
  HeadProp,
  HeadAddressPrice,
  HeadDivisor,
  HeadInfoShare,
  HeadAddress,
  HeadPrice,
  LikeWrapper,
  HeadInfo,
  HeadShare,
  GalleryProp,
  SwiperContainerGallery,
  IframeWrapper,
  MediaImg,
  BodyProp,
  BodyFeatures,
  FeaturesGrid,
  BodyDesc,
  DescTitle,
  DescText,
  Feature,
  FtHead,
  FtImg,
  FtBottom,
  FeaturesFooter,
  MoreInfo,
  MoreItemTitle,
  MoreItem,
  MoreItemText,
  MapProp,
  SimilarProps,
  PropList
} from 'components/pages/propiedad.styles';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ArrowBackIcon, HeartIcon, MailIcon, WhatsappIcon } from 'components/icons';
import { MapProps } from 'components/map/map';

const PropertyDetail = ({ properties, property, statusCode }: any) => {
  if (statusCode === 404) return <>404</>

  if (statusCode === 500) return <>500</>

  /* Handle like prop*/
  const [isLiked, setIsLiked] = React.useState<boolean>(false)

  /* Handle media content*/
  const images = property?.photos?.map((item: any, k: number) => <MediaImg key={k} style={{backgroundImage: `url(${item.image})`}} />)
  const videos = property?.videos?.map((item: any, k: number) => <IframeWrapper key={k}><iframe src={item.player_url} /></IframeWrapper>)
  const allMedia = [...videos, ...images]

  return (
    <Layout>
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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.14.1/css/ol.css" type="text/css"></link>
      </Head>

      <PropContainer>
        <Container>
          <BackWrapper><Link href={PATHS.ROOT}><a className='back--link'><ArrowBackIcon />Volver a la búsqueda</a></Link> </BackWrapper>

          <HeadProp>
            <HeadAddressPrice>
              <HeadAddress>{property.address}
                <LikeWrapper className={classes({ liked: isLiked })} onClick={() => setIsLiked(!isLiked)}>
                  <HeartIcon className='icon--heart' />
                </LikeWrapper>
              </HeadAddress>
              <HeadPrice>{`${property.operations[0].operation_type} ${property.operations[0].prices[0].currency} ${formatToMoney(property.operations[0].prices[0].price)}`}</HeadPrice>
            </HeadAddressPrice>

            <HeadDivisor />

            <HeadInfoShare>
              <HeadInfo>{property.location?.name}</HeadInfo>
              <HeadShare>
                <LikeWrapper className={classes('mobile', { liked: isLiked })} onClick={() => setIsLiked(!isLiked)}>
                  <HeartIcon className='icon--heart' />
                </LikeWrapper>
                Enviar por
                <Link href={`https://api.whatsapp.com/send?text=Encontr%C3%A9%20esta%20excelente%20propiedad!%0D%0Ahttps://web-belga.vercel.app/propiedad/${property.id.toString()}`}><a target='_blank'><WhatsappIcon /></a></Link>
                <Link href={`mailto:mail@server.com?subject=Encontr%C3%A9%20esta%20excelente%20propiedad!&body=Direcci%C3%B3n%3A%0D%0A${property.address}%0D%0A%0D%0ADescripci%C3%B3n%3A%0D%0A${property.location?.name}%0D%0A%0D%0APrecio%3A%0D%0A${property.operations[0].operation_type} ${property.operations[0].prices[0].currency} ${formatToMoney(property.operations[0].prices[0].price)}`}><a target='_blank'><MailIcon /></a></Link>
              </HeadShare>
            </HeadInfoShare>
          </HeadProp>

          <GalleryProp>
            <SwiperContainerGallery>

              <Swiper
                className='swiper--prop-gallery'
                modules={[Navigation]}
                loop={false}
                centeredSlides={false}
                allowTouchMove={true}
                navigation={{}}
                grabCursor={true}
                draggable={true}
                breakpoints={{
                  // when window width is >= 1366px
                  1: {
                    spaceBetween: 20,
                    slidesPerView: 1,
                    allowTouchMove: true
                  },
                  700: {
                    spaceBetween: 20,
                    slidesPerView: 2.3,
                    allowTouchMove: true
                  }
                }}
              >
                {allMedia?.map((item: any, k: number) => <SwiperSlide key={k}>{item}</SwiperSlide>)}
              </Swiper>

            </SwiperContainerGallery>
          </GalleryProp>

          <BodyProp>
            <BodyFeatures>
              <FeaturesGrid>
                <Feature><FtHead>{property?.age === 0 ? "A estrenar" : property?.age}</FtHead><FtImg src='/images/icons/prop_antiguedad.svg' /><FtBottom>Antigüedad</FtBottom></Feature>
                <Feature><FtHead>{Math.round(property?.roofed_surface)}</FtHead><FtImg src='/images/icons/prop_m2.svg' /><FtBottom>Sup. Cub.</FtBottom></Feature>
                <Feature><FtHead>{Math.round(property?.total_surface)}</FtHead><FtImg src='/images/icons/prop_m2.svg' /><FtBottom>Sup. Total</FtBottom></Feature>
                <Feature><FtHead>{property?.suite_amount}</FtHead><FtImg src='/images/icons/prop_cuarto.svg' /><FtBottom>{property?.suite_amount > 1 ? 'Dormitorios' : 'Dormitorio'}</FtBottom></Feature>
                <Feature><FtHead>{property?.bathroom_amount}</FtHead><FtImg src='/images/icons/prop_ducha.svg' /><FtBottom>{property?.bathroom_amount > 1 ? 'Baños' : 'Baño'}</FtBottom></Feature>
                <Feature><FtHead>{property?.toilet_amount}</FtHead><FtImg src='/images/icons/prop_toilette.svg' /><FtBottom>{property?.toilet_amount > 1 ? 'Toilette' : 'Toilette'}</FtBottom></Feature>
                <Feature><FtHead>{property?.parking_lot_amount}</FtHead><FtImg src='/images/icons/prop_cochera.svg' /><FtBottom>{property?.parking_lot_amount > 1 ? 'Cocheras' : 'Cochera'}</FtBottom></Feature>
                <Feature><FtHead>{property?.web_price ? 'Si' : 'No'}</FtHead><FtImg src='/images/icons/prop_credito.svg' /><FtBottom>Apto Crédito</FtBottom></Feature>
                <Feature><FtHead>{formatToMoney(Math.round(property?.expenses), true, '$')}</FtHead><FtImg src='/images/icons/prop_expensas.svg' /><FtBottom>Expensas</FtBottom></Feature>
              </FeaturesGrid>

              <FeaturesFooter>
                <Button className='button--planos' text='Ver planos' type='outline red' />
              </FeaturesFooter>

              <MoreInfo>
                <MoreItem>
                  <MoreItemTitle>Información</MoreItemTitle>
                  {property?.room_amount && <MoreItemText><b>Ambientes:</b> {property?.room_amount}</MoreItemText>}
                  {property?.disposition && <MoreItemText><b>Disposición:</b> {property?.disposition}</MoreItemText>}
                  {property?.orientation && <MoreItemText><b>Orientación:</b> </MoreItemText>}
                  {property?.property_condition && <MoreItemText><b>Condición:</b> {property?.property_condition}</MoreItemText>}
                </MoreItem>

                <MoreItem>
                  <MoreItemTitle>Información</MoreItemTitle>
                  <MoreItemText><b>Sup. Cubierta:</b> {`${Math.round(property?.roofed_surface)} m2`}</MoreItemText>
                  <MoreItemText><b>Sup. Semicubierta:</b> {`${Math.round(property?.semiroofed_surface)} m2`}</MoreItemText>
                  <MoreItemText><b>Sup. Descubieta:</b> {`${Math.round(property?.unroofed_surface)} m2`}</MoreItemText>
                  <MoreItemText><b>Sup. Total:</b> {`${Math.round(property?.total_surface)} m2`}</MoreItemText>
                </MoreItem>

                <MoreItem className='large'>
                  <MoreItemTitle>Adicionales</MoreItemTitle>
                  {property?.tags?.map((tag: any, k: number) => <MoreItemText key={k}>{tag.name.toString()}</MoreItemText>)}
                </MoreItem>
              </MoreInfo>
            </BodyFeatures>


            <BodyDesc>
              <DescTitle>Decripción</DescTitle>
              <DescText>{property.rich_description ?? property.description}</DescText>
            </BodyDesc>

          </BodyProp>

          <MapProp>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6567.948790442833!2d-58.38486108228965!3d-34.60480896825873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1648690340385!5m2!1ses-419!2sar" /> */}
            <DynamicMap marker={{lon: property.branch.geo_long, lat: property.branch.geo_lat}} center={{lon: property.branch.geo_long, lat: property.branch.geo_lat}} zoom={15} />
          </MapProp>

          <SimilarProps>
            <Title title='Propiedades similares' />

            <PropList>
              {properties.map((item: any, k: number) => (
                <CardProp
                  key={k}
                  className='card--prop'
                  property={item}
                />
              ))}
            </PropList>
          </SimilarProps>

          <ContactForm className='full' />

        </Container>
      </PropContainer>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  let props: any = {}

  try {
    const property = await getPropertyById(parseInt(query.id as string))

    // Only get starred & ventas
    const { objects } = await getProperties({
      params: {
        filters: [["is_starred_on_web", "=", true]],
        operation_types: [1],
        limit: 2
      }
    })

    props = {
      property,
      properties: objects
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