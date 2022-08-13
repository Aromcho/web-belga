import React from "react";
import Head from "next/head";
import { observer } from "mobx-react-lite";

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
} from "components/pages/conoceBelga.styles";

const ConoceBelga = observer(() => {
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
        </HeroWrapper>

        <Container>
          <FormWrapper>
            <ContactForm className="full" />
          </FormWrapper>
        </Container>
      </ConoceBelgaContainer>
    </Layout>
  );
});

export default ConoceBelga;
