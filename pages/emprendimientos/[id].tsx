import React from "react";
import parse from "html-react-parser";
import dynamic from "next/dynamic";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import { Layout, Container } from "components/layout";
import {
  getDevelopmentById,
  getDevelopmentProperties,
  getProperties,
} from "services";
import { PATHS } from "config";
import { useMergeState } from "helpers/hooks";
import { classes, getDevelopmentsData } from "helpers";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Lightbox, { ImagesListType } from "react-spring-lightbox";

import { Button } from "components/button";
import { MapProps } from "components/map/map";
const DynamicMap = dynamic<MapProps>(
  () => import("components/map").then((mod) => mod.Map),
  { ssr: false }
);
const ContactForm = dynamic<any>(() => import("components/forms/contactform").then((mod) => mod.ContactForm))
const SocialSidebar = dynamic<any>(() => import("components/socialsidebar").then((mod) => mod.SocialSidebar))
const BackToTop = dynamic<any>(() => import("components/backtotop").then((mod) => mod.BackToTop))
const Error500 = dynamic<any>(() => import("pages/500"))
const Error404 = dynamic<any>(() => import("pages/404"))

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

  /* LigthBox */
  ArrowGallery,
  HeaderGallery,
  IndexCounter,
} from "components/pages/propiedad.styles";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  ArrowBackIcon,
  ArrowSubmitIcon,
  CloseIcon,
  HeartIcon,
  MailIcon,
  WhatsappIcon,
} from "components/icons";

const PropertyDetail = observer(({
  properties,
  property,
  statusCode,
  property_subs,
}: any) => {
  if (statusCode === 404) return <Error404 />
  if (statusCode >= 500) return <Error500 />


  console.log(property)

  /* Handle media content */
  const images = property?.photos?.map((item: any, k: number) => (
    <MediaImg key={k} style={{ backgroundImage: `url(${item.image})` }} />
  ));
  const videos = property?.videos?.map((item: any, k: number) => (
    <IframeWrapper key={k}>
      <iframe src={item.player_url} />
    </IframeWrapper>
  ));

  /* Handle modal gallery */
  const [modalContent, setModalContent] = useMergeState({
    open: false,
    content: "fotos",
  });
  const [currentImageIndex, setCurrentIndex] = React.useState(0);
  const onClose = () => setModalContent({ open: false });

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);
  const gotoNext = () =>
    currentImageIndex + 1 <
      (modalContent.content === "fotos"
        ? photoGallery.length
        : planoGallery.length) && setCurrentIndex(currentImageIndex + 1);

  const photoGallery: ImagesListType = property?.photos?.map(
    (item: any, k: number) => {
      return { src: `${item.image}`, loading: "lazy" };
    }
  );

  const planoGallery: ImagesListType = property?.photos?.map(
    (item: any, k: number) => {
      return { src: `${item.image}`, loading: "lazy" };
    }
  );

  const devPropertiesData = getDevelopmentsData(property_subs);

  return (
    <Layout menuTheme="dark">
      <Head>
        {/*OpenGraph metadata*/}
        <title>{property.fake_address} | Belga Emprendimientos</title>
        <meta
          key="og:title" property="og:title"
          content={`${property.fake_address} | Belga Emprendimientos`}
        />
        <meta
          key="og:description" property="og:description"
          content="Conocé nuestros emprendimientos y más"
        />
        <meta
          key="og:url" property="og:url"
          content={`https://www.belga.com.ar/emprendimientos/${property.id.toString()}`}
        />
        <meta key="og:image" property="og:image" content={`${property?.photos[0]?.image}` || "https://belga.com.ar/images/og_image.png" } />
      </Head>

      <BackToTop color="black" />
      <SocialSidebar color="black" showWithOffset />

      <PropContainer>
        <Container>
          <BackWrapper className={classes("inversion")}>
            <a className="back--link" onClick={() => history.state.idx > 0 ? history.back() : window.location.href = PATHS.EMPRENDIMIENTOS}>
              <ArrowBackIcon />
              Volver a la búsqueda
            </a>
          </BackWrapper>

          <HeadProp className={classes("inversion")}>
            <HeadAddressPrice>
              <HeadAddress>
                {property.fake_address}
              </HeadAddress>
              {devPropertiesData.min_price && (
                <HeadPrice>{`Venta Desde ${devPropertiesData.currency} ${devPropertiesData.min_price}`}</HeadPrice>
              )}
            </HeadAddressPrice>

            <HeadDivisor />

            <HeadInfoShare>
              <HeadInfo>{property.location?.name}</HeadInfo>
              <HeadShare>
                Enviar por
                <a target="_blank" href={`https://api.whatsapp.com/send?text=Encontr%C3%A9%20esta%20excelente%20propiedad!%0D%0Ahttps://belga.com.ar/propiedad/${property.id.toString()}`}>
                  <WhatsappIcon />
                </a>
                <a target="_blank" href={`mailto:?subject=${property.fake_address} - Belga&body=Encontr%C3%A9%20esta%20excelente%20propiedad%20que%20te%20puede%20interesar%20https://belga.com.ar/propiedad/${property.id.toString()}`}>
                  <MailIcon />
                </a>
              </HeadShare>
            </HeadInfoShare>
          </HeadProp>

          <GalleryProp className={classes("inversion")}>
            <Lightbox
              className="propiedad--gallery"
              isOpen={modalContent.open}
              onPrev={gotoPrevious}
              onNext={gotoNext}
              images={
                modalContent.content === "fotos" ? photoGallery : planoGallery
              }
              currentIndex={currentImageIndex}
              onClose={onClose}
              style={{ background: "rgba(0,0,0,0.95)", zIndex: 99999999 }}
              singleClickToZoom
              renderPrevButton={() => (
                <ArrowGallery
                  className={classes("arrow--prev", {
                    disabled: currentImageIndex === 0,
                  })}
                  onClick={gotoPrevious}
                >
                  <ArrowSubmitIcon className="gallery--arrow " />
                </ArrowGallery>
              )}
              renderNextButton={() => (
                <ArrowGallery
                  className={classes("arrow--next", {
                    disabled:
                      currentImageIndex + 1 ===
                      (modalContent.content === "fotos"
                        ? photoGallery.length
                        : planoGallery.length),
                  })}
                  onClick={gotoNext}
                >
                  <ArrowSubmitIcon className="gallery--arrow" />
                </ArrowGallery>
              )}
              renderHeader={() => (
                <HeaderGallery>
                  <IndexCounter>
                    {currentImageIndex + 1} de
                    {modalContent.content === "fotos"
                      ? photoGallery.length
                      : planoGallery.length}
                  </IndexCounter>
                  <CloseIcon
                    onClick={onClose}
                    className="gallery--close-icon"
                  />
                </HeaderGallery>
              )}
            />

            <SwiperContainerGallery>
              <Swiper
                className="swiper--prop-gallery"
                modules={[Navigation]}
                loop={true}
                loopAdditionalSlides={images.length + videos.length}
                centeredSlides={
                  images.length + videos.length === 1 ? true : false
                }
                allowTouchMove={true}
                navigation={{}}
                grabCursor={true}
                draggable={true}
                breakpoints={{
                  // when window width is >= 1366px
                  1: {
                    spaceBetween: 20,
                    slidesPerView: 1.5,
                    allowTouchMove: true,
                  },
                  700: {
                    spaceBetween: 20,
                    slidesPerView: 5.5,
                    allowTouchMove: true,
                  },
                }}
              >
                {videos.length > 0 &&
                  videos?.map((item: any, k: number) => {
                    return <SwiperSlide key={k}>{item}</SwiperSlide>;
                  })}

                {images.length > 0 &&
                  images?.map((item: any, k: number) => {
                    return (
                      <SwiperSlide
                        key={k}
                        onClick={() => {
                          setModalContent({ open: true, content: "fotos" });
                          setCurrentIndex(k);
                        }}
                      >
                        {item}
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </SwiperContainerGallery>
          </GalleryProp>

          <BodyProp className={classes("inversion")}>
            <BodyFeatures>
              <FeaturesGrid>
                {property?.age && (
                  <Feature>
                    <FtHead>{property?.age == "-1" ? "En construcción" : property?.age}</FtHead>
                    <FtImg src="/images/icons/prop_antiguedad.svg" />
                    <FtBottom>Antigüedad</FtBottom>
                  </Feature>
                )}
                {devPropertiesData?.roofed_surface && (
                  <Feature>
                    <FtHead>{devPropertiesData.roofed_surface}</FtHead>
                    <FtImg src="/images/icons/prop_m2.svg" />
                    <FtBottom>Sup. Cub.</FtBottom>
                  </Feature>
                )}
                {devPropertiesData?.total_surface && (
                  <Feature>
                    <FtHead>{devPropertiesData?.total_surface}</FtHead>
                    <FtImg src="/images/icons/prop_m2.svg" />
                    <FtBottom>Sup. Total</FtBottom>
                  </Feature>
                )}
                {devPropertiesData?.suite_amount > 0 && (
                  <Feature>
                    <FtHead>{devPropertiesData?.suite_amount}</FtHead>
                    <FtImg src="/images/icons/prop_cuarto.svg" />
                    <FtBottom>Dormitorios</FtBottom>
                  </Feature>
                )}
                {property?.bathroom_amount > 0 && (
                  <Feature>
                    <FtHead>{property?.bathroom_amount}</FtHead>
                    <FtImg src="/images/icons/prop_ducha.svg" />
                    <FtBottom>
                      {property?.bathroom_amount > 1 ? "Baños" : "Baño"}
                    </FtBottom>
                  </Feature>
                )}
                {property?.toilet_amount > 0 && (
                  <Feature>
                    <FtHead>{property?.toilet_amount}</FtHead>
                    <FtImg src="/images/icons/prop_toilette.svg" />
                    <FtBottom>
                      {property?.toilet_amount > 1 ? "Toilette" : "Toilette"}
                    </FtBottom>
                  </Feature>
                )}
                {property?.parking_lot_amount > 0 && (
                  <Feature>
                    <FtHead>{property?.parking_lot_amount}</FtHead>
                    <FtImg src="/images/icons/prop_cochera.svg" />
                    <FtBottom>
                      {property?.parking_lot_amount > 1
                        ? "Cocheras"
                        : "Cochera"}
                    </FtBottom>
                  </Feature>
                )}
                {/* <Feature><FtHead>{property?.web_price ? 'Si' : 'No'}</FtHead><FtImg src='/images/icons/prop_credito.svg' /><FtBottom>Apto Crédito</FtBottom></Feature> */}
              </FeaturesGrid>

              <FeaturesFooter>
              {property?.files?.length > 0 && (
                  <Button
                    className="button--planos"
                    text="Ver planos"
                    type="outline red"
                  />
              )}
              </FeaturesFooter>

              <MoreInfo>
                <MoreItem>
                  <MoreItemTitle>Información</MoreItemTitle>
                  {devPropertiesData?.room_amount && (
                    <MoreItemText>
                      <b>Ambientes:</b> {devPropertiesData?.room_amount}
                    </MoreItemText>
                  )}
                </MoreItem>

                <MoreItem>
                  <MoreItemTitle>Superficies</MoreItemTitle>
                  {devPropertiesData?.roofed_surface && (
                    <MoreItemText>
                      <b>Sup. Cubierta: </b>
                      {`${devPropertiesData?.roofed_surface} m2`}
                    </MoreItemText>
                  )}
                  {devPropertiesData?.semiroofed_surface && (
                    <MoreItemText>
                      <b>Sup. Semicubierta: </b>
                      {`${devPropertiesData?.semiroofed_surface} m2`}
                    </MoreItemText>
                  )}
                  {devPropertiesData?.unroofed_surface && (
                    <MoreItemText>
                      <b>Sup. Descubieta: </b>
                      {`${devPropertiesData?.unroofed_surface} m2`}
                    </MoreItemText>
                  )}
                  {devPropertiesData?.total_surface && (
                    <MoreItemText>
                      <b>Sup. Total: </b>
                      {`${devPropertiesData?.total_surface} m2`}
                    </MoreItemText>
                  )}
                </MoreItem>

                <MoreItem className="large">
                  <MoreItemTitle>Adicionales</MoreItemTitle>
                  {property?.tags?.map((tag: any, k: number) => {
                    return (
                      <MoreItemText key={k}>{tag.name.toString()}</MoreItemText>
                    );
                  })}
                </MoreItem>
              </MoreInfo>
            </BodyFeatures>

            <BodyDesc>
              <DescTitle>Descripción</DescTitle>
              <DescText>
                {parse(property.rich_description ?? property.description)}
              </DescText>
            </BodyDesc>
          </BodyProp>

          <MapProp>
            <DynamicMap
              marker={{
                lon: property.geo_long,
                lat: property.geo_lat,
              }}
              center={{
                lon: property.geo_long,
                lat: property.geo_lat,
              }}
              zoom={15}
            />
          </MapProp>

          <ContactForm full />
        </Container>
      </PropContainer>
    </Layout>
  );
});

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let props: any = {};

  try {
    const property: any = await getDevelopmentById(
      parseInt(query.id as string)
    );

    const property_subs = await getDevelopmentProperties(property.id);

    // Only get starred & ventas
    const { objects } = await getProperties({
      params: {
        filters: [["is_starred_on_web", "=", true]],
        operation_types: [1],
      },
    });

    props = {
      property,
      properties: objects,
      property_subs: property_subs.objects,
    };
  } catch (e: any) {
    props = {
      statusCode: e.response.status,
    };
  }

  return {
    props,
  };
};

export default PropertyDetail;
