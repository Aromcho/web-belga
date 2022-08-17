import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Head from "next/head";
import parse from "html-react-parser";
import { useMergeState } from "helpers/hooks";
import { classes, formatToMoney } from "helpers";
import { getProperties, getPropertyById } from "services";
import { PATHS } from "config";
import { GetServerSideProps } from "next";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Lightbox, { ImagesListType } from "react-spring-lightbox";

import { MapProps } from "components/map/map";
import { Layout, Container } from "components/layout";
import { Button } from "components/button";
import { ContactForm } from "components/forms/contactform";
import { Title } from "components/title";
import { CardProp } from "components/cardprop";
import { BackToTop } from "components/backtotop";
import { SocialSidebar } from "components/socialsidebar";
import Error404 from "pages/error404";
import Error500 from "pages/error500";
import {
  ArrowBackIcon,
  ArrowSubmitIcon,
  CloseIcon,
  HeartIcon,
  MailIcon,
  WhatsappIcon,
} from "components/icons";

const DynamicMap = dynamic<MapProps>(
  () => import("components/map").then((mod) => mod.Map),
  { ssr: false }
);

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
  PropList,

  /* LigthBox */
  ArrowGallery,
  HeaderGallery,
  IndexCounter,
} from "components/pages/propiedad.styles";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PropertyDetail = ({ properties, property, statusCode }: any) => {

  console.log(property, properties)

  if (statusCode === 404 || statusCode === 500)
    return (
      <Layout menuTheme="light">
        {statusCode === 404 && <Error404 />}
        {statusCode === 500 && <Error500 />}
      </Layout>
    );

  /* Handle like prop*/
  const [isLiked, setIsLiked] = React.useState<boolean>(false);

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

  const photoGallery: ImagesListType = property?.photos?.filter((item: any) => !item.is_blueprint).map(
    (item: any, k: number) => {
      return { src: `${item.image}`, loading: "lazy" };
    }
  );

  const planoGallery: ImagesListType = property?.photos?.filter((item: any) => item.is_blueprint).map(
    (item: any, k: number) => {
      return { src: `${item.image}`, loading: "lazy" };
    }
  );

  return (
    <Layout menuTheme="light">
      <Head>
        {/*OpenGraph metadata*/}
        <title>{property.address} | Belga Propiedades</title>
        <meta property="og:type" content="Website" />
        <meta
          property="og:title"
          content={`${property.address} | Belga Propiedades`}
        />
        <meta
          property="og:description"
          content="	Nuestra misión: Ofrecer la mas alta calidad de servicios inmobiliarios, buscando continuamente mejorar y ampliar la gama de servicios ofrecidos con el fin de satisfacer las necesidades de nuestros clientes actuales y futuros"
        />
        <meta
          property="og:url"
          content={`https://www.belga.com.ar/${property.id.toString()}`}
        />
        <meta property="og:type" content="Website" />
        <meta property="og:site_name" content="Belga Inmobiliaria" />
        <meta
          property="og:image"
          content="https://web-belga.vercel.app/images/og_image.png"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.14.1/css/ol.css"
          type="text/css"
        ></link>
      </Head>

      <BackToTop color="red" />
      <SocialSidebar color="red" showWithOffset />

      <PropContainer>
        <Container>
          <BackWrapper>
            <Link href={PATHS.ROOT}>
              <a className="back--link">
                <ArrowBackIcon />
                Volver a la búsqueda
              </a>
            </Link>
          </BackWrapper>

          <HeadProp>
            <HeadAddressPrice>
              <HeadAddress>
                {property.address}
                <LikeWrapper
                  className={classes({ liked: isLiked })}
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <HeartIcon className="icon--heart" />
                </LikeWrapper>
              </HeadAddress>
              {property?.web_price && (
                <HeadPrice>{`${property?.operations[0]?.operation_type} ${
                  property?.operations[0]?.prices[0]?.currency
                } ${formatToMoney(
                  property?.operations[0]?.prices[0]?.price
                )}`}</HeadPrice>
              )}
            </HeadAddressPrice>

            <HeadDivisor />

            <HeadInfoShare>
              <HeadInfo>{property.location?.name}</HeadInfo>
              <HeadShare>
                <LikeWrapper
                  className={classes("mobile", { liked: isLiked })}
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <HeartIcon className="icon--heart" />
                </LikeWrapper>
                Enviar por
                <Link
                  href={`https://api.whatsapp.com/send?text=Encontr%C3%A9%20esta%20excelente%20propiedad!%0D%0Ahttps://web-belga.vercel.app/propiedad/${property.id.toString()}`}
                >
                  <a target="_blank">
                    <WhatsappIcon />
                  </a>
                </Link>
                <Link
                  href={`mailto:mail@server.com?subject=Encontr%C3%A9%20esta%20excelente%20propiedad!&body=Direcci%C3%B3n%3A%0D%0A${
                    property.address
                  }%0D%0A%0D%0ADescripci%C3%B3n%3A%0D%0A${
                    property.location?.name
                  }%0D%0A%0D%0APrecio%3A%0D%0A${
                    property?.operations[0]?.operation_type
                  } ${
                    property?.operations[0]?.prices[0]?.currency
                  } ${formatToMoney(
                    property?.operations[0]?.prices[0]?.price
                  )}`}
                >
                  <a target="_blank">
                    <MailIcon />
                  </a>
                </Link>
              </HeadShare>
            </HeadInfoShare>
          </HeadProp>

          <GalleryProp>
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
                    {currentImageIndex + 1} de {` `}
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
                    slidesPerView: 1,
                    allowTouchMove: true,
                  },
                  700: {
                    spaceBetween: 20,
                    slidesPerView: 2.3,
                    allowTouchMove: true,
                  },
                }}
              >
                {videos.length > 0 &&
                  videos?.map((item: any, k: number) => {
                    return <SwiperSlide key={k + 1000}>{item}</SwiperSlide>;
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

          <BodyProp>
            <BodyFeatures>
              <FeaturesGrid>
                <Feature>
                  <FtHead>
                    {property?.age === 0 ? "A estrenar" : property?.age}
                  </FtHead>
                  <FtImg src="/images/icons/prop_antiguedad.svg" />
                  <FtBottom>Antigüedad</FtBottom>
                </Feature>
                {Math.round(property?.roofed_surface) > 0 && <Feature>
                  <FtHead>{Math.round(property?.roofed_surface)}</FtHead>
                  <FtImg src="/images/icons/prop_m2.svg" />
                  <FtBottom>Sup. Cub.</FtBottom>
                </Feature>}
                {Math.round(property?.total_surface) > 0 && <Feature>
                  <FtHead>{Math.round(property?.total_surface)}</FtHead>
                  <FtImg src="/images/icons/prop_m2.svg" />
                  <FtBottom>Sup. Total</FtBottom>
                </Feature>}
                {property?.suite_amount > 0 && (
                  <Feature>
                    <FtHead>{property?.suite_amount}</FtHead>
                    <FtImg src="/images/icons/prop_cuarto.svg" />
                    <FtBottom>
                      {property?.suite_amount > 1
                        ? "Dormitorios"
                        : "Dormitorio"}
                    </FtBottom>
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
                {/* <Feature>
                  <FtHead>{property?.web_price ? "Si" : "No"}</FtHead>
                  <FtImg src="/images/icons/prop_credito.svg" />
                  <FtBottom>Apto Crédito</FtBottom>
                </Feature> */}
                {property?.expenses > 0 && (
                  <Feature>
                    <FtHead>
                      {formatToMoney(Math.round(property?.expenses), true, "$")}
                    </FtHead>
                    <FtImg src="/images/icons/prop_expensas.svg" />
                    <FtBottom>Expensas</FtBottom>
                  </Feature>
                )}
              </FeaturesGrid>

              <FeaturesFooter>
                {property?.files && <Button
                  className="button--planos"
                  text="Ver planos"
                  type="outline red"
                  onClick={() => setModalContent({ open: true, content: "planos" })}
                />}
              </FeaturesFooter>

              <MoreInfo>
                <MoreItem>
                  <MoreItemTitle>Información</MoreItemTitle>
                  {property?.room_amount > 0 && (
                    <MoreItemText>
                      <b>Ambientes: </b> {property?.room_amount}
                    </MoreItemText>
                  )}
                  {property?.disposition && (
                    <MoreItemText>
                      <b>Disposición: </b> {property?.disposition}
                    </MoreItemText>
                  )}
                  {property?.orientation && (
                    <MoreItemText>
                      <b>Orientación: </b> {property?.orientation}
                    </MoreItemText>
                  )}
                  {property?.property_condition && (
                    <MoreItemText>
                      <b>Condición: </b> {property?.property_condition}
                    </MoreItemText>
                  )}
                </MoreItem>

                <MoreItem>
                  <MoreItemTitle>Superficies</MoreItemTitle>
                  <MoreItemText>
                    <b>Sup. Cubierta: </b>
                    {`${Math.round(property?.roofed_surface)} m2`}
                  </MoreItemText>
                  {Math.round(property?.semiroofed_surface) > 0 && (
                    <MoreItemText>
                      <b>Sup. Semicubierta: </b>
                      {`${Math.round(property?.semiroofed_surface)} m2`}
                    </MoreItemText>
                  )}
                  {Math.round(property?.unroofed_surface) > 0 && (
                    <MoreItemText>
                      <b>Sup. Descubieta: </b>
                      {`${Math.round(property?.unroofed_surface)} m2`}
                    </MoreItemText>
                  )}
                  {Math.round(property?.total_surface) > 0 && <MoreItemText>
                    <b>Sup. Total: </b>
                    {`${Math.round(property?.total_surface)} m2`}
                  </MoreItemText>}
                </MoreItem>

                <MoreItem className="large">
                  <MoreItemTitle>Adicionales</MoreItemTitle>
                  {property?.tags?.map((tag: any, k: number) => (
                    <MoreItemText key={k}>{tag.name.toString()}</MoreItemText>
                  ))}
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
                lon: property.branch.geo_long,
                lat: property.branch.geo_lat,
              }}
              center={{
                lon: property.branch.geo_long,
                lat: property.branch.geo_lat,
              }}
              zoom={15}
            />
          </MapProp>

          {properties && <SimilarProps>
            <Title title="Propiedades similares" buttonStyle="outline red" />

            <PropList>
              {properties.map((item: any, k: number) => (
                <CardProp key={k} className="card--prop" property={item} />
              ))}
            </PropList>
          </SimilarProps>}

          <ContactForm className="full" />
        </Container>
      </PropContainer>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let props: any = {};

  try {
    const property = await getPropertyById(parseInt(query.id as string));

    // Only get starred & ventas
    const { objects } = await getProperties({
      params: {
        filters: [["is_starred_on_web", "=", true]],
        operation_types: [1],
        limit: 2,
      },
    });

    props = {
      property,
      properties: objects,
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
