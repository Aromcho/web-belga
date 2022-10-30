import React from "react";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import { observer } from "mobx-react-lite";
import { PATHS } from "config";
import { classes, truncateWithEllipsis } from "helpers";
import { useMergeState } from "helpers/hooks";
import Lightbox, { ImagesListType } from "react-spring-lightbox";

import { Layout, Container } from "components/layout";
import { ArrowBackIcon, ArrowSubmitIcon, CloseIcon } from "components/icons";

const SocialSidebar = dynamic<any>(() => import("components/socialsidebar").then((mod) => mod.SocialSidebar))
const BackToTop = dynamic<any>(() => import("components/backtotop").then((mod) => mod.BackToTop))
const MemberCard = dynamic<any>(() => import("components/pages/conoce/memberCard").then((mod) => mod.MemberCard))
const QuoteCard = dynamic<any>(() => import("components/pages/conoce/quoteCard").then((mod) => mod.QuoteCard))
const ContactForm = dynamic<any>(() => import("components/forms/contactform").then((mod) => mod.ContactForm))

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  ConoceBelgaContainer,
  BackWrapper,
  HeroWrapper,
  Hero,
  BlackLayer,
  FormWrapper,
  HistoriaSection,
  HistoriaWrapper,
  HistoriaLeft,
  HistoriaRight,
  HistoriaGif,
  HistoriaTextWrapper,
  UnderlineTitle,
  HistoriaText,
  SidebarContainer,
  SidebarRed,
  MenuHero,
  MenuHeroItem,
  MenuHeroText,
  ValoresSection,
  ValoresList,
  ValoresWrapper,
  ValoresListTitle,
  ValoresListText,
  QuotesSection,
  QuoteList,
  SomosBelgaSection,
  StaffList,
  ServiciosSection,
  SwiperContainerGallery,
  IndexCounter,
  HeaderGallery,
  ArrowGallery,
  ServiceWrapper,
  ServiceTitle,
  ServiceMedia,
  ServiceMediaImg,
  PortalesContainer,
  PortalesList,
  PortalItem,
  PortalImg,
  PortalName,
  PortalesFooter,
  OficinasSection,
  MainOffice,
  OfficeList,
  OfficeListItem,
  MainOfficeImg,
  OfficeMainTex,
  OfficeTextWrapper,
  OfficeTextName,
  OfficeTextLoc,
  OfficeText,
} from "components/pages/conoce/conoceBelga.styles";

const ConoceBelga = observer(() => {
  /* Handle UI menu */
  const [activeSection, setActiveSection] = React.useState<string>("");

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
      (modalContent.content === "fotos" && photoGallery.length) &&
    setCurrentIndex(currentImageIndex + 1);

  const photos = [
    "/images/servicios_fotos.jpg",
    "/images/servicios_planos.jpg",
  ];
  const photoGallery: ImagesListType = photos?.map((image: string) => {
    return { src: `${image}`, loading: "lazy", alt: `${image}` };
  });

  return (
    <Layout menuTheme="light" footerSmall backToTopFooter>
      <Head>
        <title>Belga Inmobiliaria | Conoce Belga</title>
      </Head>
      <ConoceBelgaContainer>
        <HeroWrapper
          style={{ backgroundImage: `url(/images/nosotros_hero.jpg)` }}
        >
          <BlackLayer />
          <Hero>
            <SocialSidebar />
          </Hero>
          <Container>
            <MenuHero>
              <MenuHeroItem
                className={classes({ active: activeSection === "historia" })}
                href="#historia"
              >
                <MenuHeroText>Historia</MenuHeroText>
              </MenuHeroItem>

              <MenuHeroItem
                className={classes({ active: activeSection === "valores" })}
                href="#valores"
              >
                <MenuHeroText>Valores</MenuHeroText>
              </MenuHeroItem>

              <MenuHeroItem
                className={classes({ active: activeSection === "belga" })}
                href="#belga"
              >
                <MenuHeroText>Somos Belga</MenuHeroText>
              </MenuHeroItem>

              <MenuHeroItem
                className={classes({ active: activeSection === "servicios" })}
                href="#servicios"
              >
                <MenuHeroText>Servicios</MenuHeroText>
              </MenuHeroItem>

              <MenuHeroItem
                className={classes({ active: activeSection === "oficinas" })}
                href="#oficinas"
              >
                <MenuHeroText>Oficinas</MenuHeroText>
              </MenuHeroItem>
            </MenuHero>
          </Container>
        </HeroWrapper>

        <Container>
          <BackWrapper>
            <Link href={PATHS.ROOT}>
              <a className="back--link">
                <ArrowBackIcon />
                Volver al inicio
              </a>
            </Link>
          </BackWrapper>
        </Container>

        <SidebarContainer>
          <SidebarRed>
            <SocialSidebar color="red" />
            <BackToTop color="red" />
          </SidebarRed>

          <HistoriaSection
            id="historia"
            onMouseOver={() => setActiveSection("historia")}
            onMouseLeave={() => setActiveSection("")}
          >
            <Container>
              <HistoriaWrapper>
                <HistoriaLeft>
                  <HistoriaGif src="/images/65_historia.gif" loading="lazy" />
                </HistoriaLeft>
                <HistoriaRight>
                  <HistoriaTextWrapper>
                    <UnderlineTitle>
                      Una <u>Historia</u> Belga
                    </UnderlineTitle>
                    <HistoriaText>
                      Belga comienza su historia con nuestro fundador Jorge
                      Jooris en 1957. Recién llegado desde Bélgica con un puñado
                      de costumbres y tradiciones familiares al barrio de
                      Belgrano ubicado en la Ciudad Autónoma de Buenos Aires. Un
                      hombre apasionado por su profesión que supo conectar a
                      cientos de personas con los que terminarían siendo sus
                      nuevos hogares. Una pasión que transmitió a la siguiente y
                      actual generación.
                    </HistoriaText>
                    <HistoriaText>
                      Belgrano y Palermo son las sedes dónde tenemos nuestras 3
                      casas, nuestros hogares, cómo nos gusta llamarles. Barrios
                      que fueron y son testigos del esfuerzo, la dedicación y el
                      compromiso que nos sigue haciendo crecer, y acompañando
                      después de 65 años.
                    </HistoriaText>
                    <HistoriaText>
                      Hoy contamos con un cálido grupo humano de profesionales
                      destacados que brindan al mercado un asesoramiento
                      inmobiliario distinguido.
                    </HistoriaText>
                    <HistoriaText id="valores">
                      Somos el lugar donde nacen las historias.
                    </HistoriaText>
                  </HistoriaTextWrapper>
                </HistoriaRight>
              </HistoriaWrapper>
            </Container>
          </HistoriaSection>

          <ValoresSection>
            <Container>
              <UnderlineTitle>
                Los <u>Valores</u> que heredamos
              </UnderlineTitle>

              <ValoresList>
                <ValoresWrapper>
                  <ValoresListTitle>Una tradición familiar.</ValoresListTitle>
                  <ValoresListText>
                    Somos una empresa reconocida por su trato familiar. Una de
                    nuestras prioridades es mantener un trato personalizado que
                    nos permita entender y empatizar con cada situación,
                    buscando como resultado que nuestros clientes se sientan
                    acompañados en todas las etapas de cada operación.
                  </ValoresListText>
                </ValoresWrapper>

                <ValoresWrapper>
                  <ValoresListTitle>Una puerta abierta.</ValoresListTitle>
                  <ValoresListText>
                    Creemos fielmente que la confianza y la honestidad son los
                    pilares fundamentales de cualquier forma de trabajo. Es por
                    esto que, a través de todos estos años, hemos cosechado
                    fuertes lazos con todos nuestros clientes, manteniendo
                    absoluta transparencia en todas nuestras operaciones.
                  </ValoresListText>
                </ValoresWrapper>

                <ValoresWrapper>
                  <ValoresListTitle>Un desarrollo constante.</ValoresListTitle>
                  <ValoresListText>
                    El crecimiento siempre viene acompañado del aprendizaje. En
                    un mundo donde los cambios son constantes, es imprescindible
                    capacitarnos regularmente para estar conectados y
                    actualizarnos con las últimas tendencias en tecnología. Es
                    por eso que ofrecemos servicios de excelencia.
                  </ValoresListText>
                </ValoresWrapper>
              </ValoresList>
            </Container>
          </ValoresSection>

          <QuotesSection>
            <Container>
              <QuoteList>
                <QuoteCard
                  className="quote"
                  rating={4}
                  quote={truncateWithEllipsis(
                    "Hoy 22/6 se concretó la operación de compra-venta. Un Placer trabajar con Inmobiliaria Belga. Todo salió perfecto, a tiempo y lo mejor de todo es la gente que trabaja,  que hace de la inmobiliaria un lugar de confianza y prestigio. Estoy muy agradecida a todos desde las chicas que te reciben en el local,  hasta los agentes inmobiliarios especialmente Martín que fue el que acompañó el proceso. Gracias a todos!!!",
                    400
                  )}
                  author="Andrea Gallis"
                  logo="/images/google_logo.png"
                  link="https://www.google.com/search?q=belga+juramento&oq=belga+juramento&aqs=chrome..69i57j0i22i30j69i60.5296j0j7&sourceid=chrome&ie=UTF-8#lrd=0x95bcb5d2fa0f781d:0x7a96ad3b6c0351f2,1"
                />

                <QuoteCard
                  className="quote"
                  rating={5}
                  quote={truncateWithEllipsis(
                    "Profesionalismo y calidez humana. Desde el primer día que Lucas vino a tasar nuestro departamento hasta el ultimo cuando firmamos la escritura con Martin, la experiencia con todo el equipo de Belga fue excelente. Mica, Gonzalo, Alejandrina, Gabriela, siempre dispuestos a ayudar y poniendo la mejor onda, incluso en tiempos donde concretar una operación inmobiliaria no es nada sencillo. Sin dudas serán nuestra primera opción...",
                    400
                  )}
                  author="Favio Novello"
                  logo="/images/google_logo.png"
                  link="https://www.google.com/search?q=belga+juramento&oq=belga+juramento&aqs=chrome..69i57j0i22i30j69i60.5296j0j7&sourceid=chrome&ie=UTF-8#lrd=0x95bcb5d2fa0f781d:0x7a96ad3b6c0351f2,1"
                  id="belga"
                />
              </QuoteList>
            </Container>
          </QuotesSection>

          <SomosBelgaSection>
            <Container>
              <UnderlineTitle>
                <u>Somos Belga</u>
              </UnderlineTitle>

              <StaffList>
                <MemberCard
                  className="member--card"
                  img="/images/somos_belga/somos_martin_gallegos.jpg"
                  name="Martín Gallegos"
                  position="CEO"
                />

                <MemberCard
                  className="member--card img-bottom"
                  img="/images/somos_belga/somos_lucas_jooris.jpg"
                  name="Lucas Jooris"
                  position="CEO"
                  rightInfo
                />

                <MemberCard
                  className="member--card"
                  name="Alejandrina Juarez"
                  img="/images/somos_belga/somos_alejandrina_juarez.jpg"
                  position="Agente de Venta"
                />

                <MemberCard
                  className="member--card img-bottom"
                  img="/images/somos_belga/somos_gonzalo_figueroa.jpg"
                  name="Gonzalo Figueroa"
                  position="Agente de Venta"
                  rightInfo
                />

                <MemberCard
                  className="member--card"
                  name="Facundo Aphalo"
                  img="/images/somos_belga/somos_facundo_aphalo.jpg"
                  position="Agente de Venta"
                />

                <MemberCard
                  className="member--card"
                  img="/images/somos_belga/somos_rima_amar.jpg"
                  name="Rima Amar"
                  position="Agente de Venta"
                  rightInfo
                />

                <MemberCard
                  className="member--card img-bottom"
                  name="Daniela Nemniski"
                  img="/images/somos_belga/somos_daniela_nemniski.jpg"
                  position="Agente de Venta"
                />

                <MemberCard
                  className="member--card"
                  name="Federico Buonfiglio"
                  img="/images/somos_belga/somos_federico_buonfiglio.jpg"
                  position="Agente de Alquiler"
                  rightInfo
                />

                <MemberCard
                  className="member--card img-bottom"
                  name="Lucía Martin"
                  img="/images/somos_belga/somos_lucia_martin.jpg"
                  position="Legales"
                />

                <MemberCard
                  className="member--card"
                  img="/images/somos_belga/somos_julieta_kesner.jpg"
                  name="Julieta Kesner"
                  position="Legales"
                  rightInfo
                />

                <MemberCard
                  className="member--card"
                  img="/images/somos_belga/somos_maria_jose_amigo.jpg"
                  name="María José Amigo"
                  position="Atención al Cliente"
                />

                <MemberCard
                  className="member--card img-bottom"
                  img="/images/somos_belga/somos_micaela_varela.jpg"
                  name="Micaela Varela"
                  position="Administración"
                  rightInfo
                />

                <MemberCard
                  className="member--card"
                  name="Gabriela Peralta Antunez"
                  position="Creativa"
                />

                <MemberCard
                  className="member--card img-bottom"
                  img="/images/somos_belga/somos_alejandra_pautasso.jpg"
                  name="Alejandra Pautasso"
                  position="Creativa"
                  rightInfo
                />

                <MemberCard
                  className="member--card"
                  img="/images/somos_belga/somos_gabriela_santiago.jpg"
                  name="Gabriela Santiago Vélez"
                  position="Creativa"
                />
              </StaffList>
            </Container>
            <div id="servicios"></div>
          </SomosBelgaSection>

          <ServiciosSection>
            <Container>
              <UnderlineTitle>
                Los <u>Servicios</u> que ofrecemos
              </UnderlineTitle>
            </Container>

            <Container>
              <Lightbox
                className="servicios--gallery"
                isOpen={modalContent.open}
                onPrev={gotoPrevious}
                onNext={gotoNext}
                images={photoGallery}
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
                      disabled: currentImageIndex + 1 === photoGallery.length,
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
                      {photoGallery.length}
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
                  className="swiper--services-gallery"
                  modules={[]}
                  loop={true}
                  centeredSlides={false}
                  allowTouchMove={true}
                  navigation={{}}
                  loopAdditionalSlides={4}
                  grabCursor={true}
                  draggable={true}
                  spaceBetween={20}
                  breakpoints={{
                    // when window width is >= 1366px
                    740: {
                      slidesPerView: 2,
                      autoplay: {
                        delay: 4000
                      },
                      centeredSlides: true
                    },
                    992: {
                      slidesPerView: 2.5,
                    },
                  }}
                >
                  <SwiperSlide>
                    <ServiceWrapper>
                      <ServiceTitle>Video Drone</ServiceTitle>
                      <ServiceMedia>
                        <iframe src="https://www.youtube.com/embed/Yc8pUaq8Zsg" />
                      </ServiceMedia>
                    </ServiceWrapper>
                  </SwiperSlide>

                  <SwiperSlide
                    onClick={() => {
                      setModalContent({ open: true });
                      setCurrentIndex(0);
                    }}
                  >
                    <ServiceWrapper>
                      <ServiceTitle>Fotos</ServiceTitle>
                      <ServiceMedia>
                        <ServiceMediaImg
                          style={{
                            backgroundImage: `url(/images/servicios_fotos.jpg)`,
                          }}
                        />
                      </ServiceMedia>
                    </ServiceWrapper>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ServiceWrapper>
                      <ServiceTitle>Tour Virtual</ServiceTitle>
                      <ServiceMedia>
                        <iframe src="https://matterport.com/discover/space/BB1DiUzwnhk" />
                      </ServiceMedia>
                    </ServiceWrapper>
                  </SwiperSlide>

                  <SwiperSlide
                    onClick={() => {
                      setModalContent({ open: true });
                      setCurrentIndex(1);
                    }}
                  >
                    <ServiceWrapper>
                      <ServiceTitle>Planos</ServiceTitle>
                      <ServiceMedia>
                        <ServiceMediaImg
                          style={{
                            backgroundImage: `url(/images/servicios_planos.jpg)`,
                          }}
                        />
                      </ServiceMedia>
                    </ServiceWrapper>
                  </SwiperSlide>
                </Swiper>
              </SwiperContainerGallery>
            </Container>

            <Container>
              <PortalesContainer>
                <PortalesList>
                  <PortalItem>
                    <PortalImg src={"/images/portales_zonaprop.png"} />
                    <PortalName>Zona Prop</PortalName>
                  </PortalItem>

                  <PortalItem>
                    <PortalImg src={"/images/portales_meli.png"} />
                    <PortalName>Mercado Libre</PortalName>
                  </PortalItem>

                  <PortalItem>
                    <PortalImg src={"/images/portales_argenprop.png"} />
                    <PortalName>Argenprop</PortalName>
                  </PortalItem>

                  <PortalItem>
                    <PortalImg src={"/images/portales_properati.png"} />
                    <PortalName>Properati</PortalName>
                  </PortalItem>
                </PortalesList>
                <PortalesFooter>PUBLICACIÓN EN PORTALES</PortalesFooter>
              </PortalesContainer>
            </Container>
            <div id="oficinas"></div>
          </ServiciosSection>

          <OficinasSection>
            <Container>
              <UnderlineTitle>
                Nuestras <u>Oficinas</u>, nuestras casas
              </UnderlineTitle>
            </Container>

            <MainOffice>
              <MainOfficeImg
                style={{
                  backgroundImage: `url(/images/oficina_la_imprenta.jpg)`,
                }}
              />
              <OfficeMainTex>
                <OfficeTextWrapper>
                  <OfficeTextName>La Imprenta</OfficeTextName>
                  <OfficeTextLoc>Gorostiaga 1601</OfficeTextLoc>
                  <OfficeText>
                    Nuestra oficina sede, nuestra casa central. La más jóven de
                    las 3 oficinas se encuentra ubicada en el corazón de La
                    Imprenta, en Palermo. Un gran equipo te espera, ¡Vení a
                    conocerla!
                  </OfficeText>
                </OfficeTextWrapper>
              </OfficeMainTex>
            </MainOffice>

            <Container>
              <OfficeList>
                <OfficeListItem>
                  <OfficeTextWrapper>
                    <OfficeTextName>BELGRANO C</OfficeTextName>
                    <OfficeTextLoc>Juramento 2102</OfficeTextLoc>
                    <OfficeText>
                      Te esperamos en el centro de Belgrano, a 2 cuadras del
                      reconocido cruce de Av. Cabildo con Juramento.
                    </OfficeText>
                  </OfficeTextWrapper>
                </OfficeListItem>

                <OfficeListItem>
                  <OfficeTextWrapper>
                    <OfficeTextName>BELGRANO R</OfficeTextName>
                    <OfficeTextLoc>Superí 1485</OfficeTextLoc>
                    <OfficeText>
                      Nos encontramos a metros de una de las calles más hermosas
                      de Belgrano, Av. de los Incas. ¡Vení a visitarnos!
                    </OfficeText>
                  </OfficeTextWrapper>
                </OfficeListItem>
              </OfficeList>
            </Container>
          </OficinasSection>

          <FormWrapper>
            <Container>
              <ContactForm full />
            </Container>
          </FormWrapper>
        </SidebarContainer>
      </ConoceBelgaContainer>
    </Layout>
  );
});

export default ConoceBelga;
