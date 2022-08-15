import React from "react";
import Head from "next/head";
import { observer } from "mobx-react-lite";
import { classes, truncateWithEllipsis } from "helpers";

import { Layout, Container } from "components/layout";
import { ContactForm } from "components/forms/contactform";
import { SocialSidebar } from "components/socialsidebar";
import { BackToTop } from "components/backtotop";
import { MemberCard } from "components/pages/conoce/memberCard";
import { QuoteCard } from "components/pages/conoce/quoteCard";

import {
  ConoceBelgaContainer,
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
  ServicesList,
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
  const [activeSection, setActiveSection] = React.useState<string>("historia");
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
                onClick={() => setActiveSection("historia")}
              >
                <MenuHeroText>Historia</MenuHeroText>
              </MenuHeroItem>

              <MenuHeroItem
                className={classes({ active: activeSection === "valores" })}
                onClick={() => setActiveSection("valores")}
              >
                <MenuHeroText>Valores</MenuHeroText>
              </MenuHeroItem>

              <MenuHeroItem
                className={classes({ active: activeSection === "belga" })}
                onClick={() => setActiveSection("belga")}
              >
                <MenuHeroText>Somos Belga</MenuHeroText>
              </MenuHeroItem>

              <MenuHeroItem
                className={classes({ active: activeSection === "servicios" })}
                onClick={() => setActiveSection("servicios")}
              >
                <MenuHeroText>Servicios</MenuHeroText>
              </MenuHeroItem>

              <MenuHeroItem
                className={classes({ active: activeSection === "oficinas" })}
                onClick={() => setActiveSection("oficinas")}
              >
                <MenuHeroText>Oficinas</MenuHeroText>
              </MenuHeroItem>
            </MenuHero>
          </Container>
        </HeroWrapper>

        <SidebarContainer>
          <SidebarRed>
            <SocialSidebar color="red" />
            <BackToTop color="red" />
          </SidebarRed>

          <HistoriaSection>
            <Container>
              <HistoriaWrapper>
                <HistoriaLeft>
                  <HistoriaGif src="/images/65_historia.gif" />
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
                    <HistoriaText>
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
                Los <u>Valores</u> que Jorge nos dejó
              </UnderlineTitle>

              <ValoresList>
                <ValoresWrapper>
                  <ValoresListTitle>Una tradición familiar.</ValoresListTitle>
                  <ValoresListText>
                    Somos una empresa reconocida por su trato familiar, una de
                    nuestras prioridades es mantener un trato personalizado que
                    nos permita entender y empatizar con cada situación.
                    Buscando como resultado que nuestros clientes se sientan
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
                    capacitarnos constantemente para estar conectados y
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
                  className="member--card"
                  img="/images/somos_belga/somos_lucas_jooris.jpg"
                  name="Lucas Jooris"
                  position="CEO"
                />

                <MemberCard
                  className="member--card"
                  name="Alejandrina Juarez"
                  position="Agente de Venta"
                />

                <MemberCard
                  className="member--card"
                  img="/images/somos_belga/somos_gonzalo_figueroa.jpg"
                  name="Gonzalo Figueroa"
                  position="Agente de Venta"
                />

                <MemberCard
                  className="member--card"
                  name="Facundo Aphalo"
                  position="Agente de Venta"
                />
              </StaffList>

              <StaffList>
                <MemberCard
                  className="member--card"
                  img="/images/somos_belga/somos_rima_amar.jpg"
                  name="Rima Amar"
                  position="Agente de Venta"
                />

                <MemberCard
                  className="member--card"
                  name="Daniela Nemniski"
                  position="Agente de Venta"
                />

                <MemberCard
                  className="member--card"
                  name="Federico Buonfiglio"
                  position="Agente de Alquiler"
                />

                <MemberCard
                  className="member--card"
                  name="Lucía Martin"
                  position="Legales"
                />

                <MemberCard
                  className="member--card"
                  img="/images/somos_belga/somos_julieta_kesner.jpg"
                  name="Julieta Kesner"
                  position="Legales"
                />
              </StaffList>

              <StaffList>
                <MemberCard
                  className="member--card"
                  img="/images/somos_belga/somos_maria_jose_amigo.jpg"
                  name="María José Amigo"
                  position="Atención al Cliente"
                />

                <MemberCard
                  className="member--card"
                  img="/images/somos_belga/somos_micaela_carela.jpg"
                  name="Micaela Varela"
                  position="Administración"
                />

                <MemberCard
                  className="member--card"
                  name="Gabriela Peralta Antunez"
                  position="Creativa"
                />

                <MemberCard
                  className="member--card"
                  img="/images/somos_belga/somos_alejandra_pautasso.jpg"
                  name="Alejandra Pautasso"
                  position="Creativa"
                />

                <MemberCard
                  className="member--card"
                  img="/images/somos_belga/somos_gabriela_santiago.jpg"
                  name="Gabriela Santiago Vélez"
                  position="Creativa"
                />
              </StaffList>
            </Container>
          </SomosBelgaSection>

          <ServiciosSection>
            <Container>
              <UnderlineTitle>
                Los <u>Servicios</u> que ofrecemos
              </UnderlineTitle>
            </Container>

            <Container>
              <ServicesList>
                <ServiceWrapper>
                  <ServiceTitle>Video Drone</ServiceTitle>
                  <ServiceMedia>
                    <iframe src="https://www.youtube.com/embed/Yc8pUaq8Zsg" />
                  </ServiceMedia>
                </ServiceWrapper>

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

                <ServiceWrapper>
                  <ServiceTitle>Tour Virtual</ServiceTitle>
                  <ServiceMedia>
                    <iframe src="https://matterport.com/discover/space/BB1DiUzwnhk" />
                  </ServiceMedia>
                </ServiceWrapper>

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
              </ServicesList>
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

            <OfficeList>
              <OfficeListItem>
                <OfficeTextWrapper>
                  <OfficeTextName>BELGRANO C</OfficeTextName>
                  <OfficeTextLoc>Juramento 2102</OfficeTextLoc>
                  <OfficeText>
                    Te esperamos en el centro de Belgrano, a 2 cuadras del
                    mítico cruce de Av. Cabildo con Juramento.
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
          </OficinasSection>

          <FormWrapper>
            <Container>
              <ContactForm className="full" />
            </Container>
          </FormWrapper>
        </SidebarContainer>
      </ConoceBelgaContainer>
    </Layout>
  );
});

export default ConoceBelga;
