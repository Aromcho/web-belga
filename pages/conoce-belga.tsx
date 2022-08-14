import React from "react";
import Head from "next/head";
import { observer } from "mobx-react-lite";
import { classes } from "helpers";

import { Layout, Container } from "components/layout";
import { ContactForm } from "components/forms/contactform";
import { SocialSidebar } from "components/socialsidebar";
import { BackToTop } from "components/backtotop";

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
  SomosBelgaSection,
  ServiciosSection,
  OficinasSection,
} from "components/pages/conoceBelga.styles";

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

          <QuotesSection></QuotesSection>

          <SomosBelgaSection>
            <Container>
              <UnderlineTitle>
                <u>Somos Belga</u>
              </UnderlineTitle>
            </Container>
          </SomosBelgaSection>

          <ServiciosSection>
            <Container>
              <UnderlineTitle>
                Los <u>Servicios</u> que ofrecemos
              </UnderlineTitle>
            </Container>
          </ServiciosSection>

          <OficinasSection>
            <Container>
              <UnderlineTitle>
                Nuestras<u>Oficinas</u>, nuestras casas
              </UnderlineTitle>
            </Container>
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
