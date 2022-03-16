import React from 'react';
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { Layout, Container } from 'components/layout';
import { getProperties } from 'services';
import { observer } from 'mobx-react-lite';
import { useStore } from 'stores';

import { SocialSidebar } from 'components/socialsidebar';

import {
  HeroWrapper,
  Hero,
  SeleccionSection,
  Seleccion,
  InversionSection,
  Inversion,
  InversionList,
  InversionItem,
  PropList
} from 'components/pages/home.styles'
import { Title } from 'components/title';
import { CardProp } from 'components/cardprop';

const Home = observer(({ properties }: any) => {

  const {
    rootStore: { userStore }
  } = useStore();

  return (
    <Layout>
      <Head>
        <title>Belga Inmobiliaria</title>
      </Head>


      <HeroWrapper style={{ backgroundImage: 'url(/images/home_bg_hero.jpg)' }}>
        <Container>
          <Hero>
            <SocialSidebar />

          </Hero>

        </Container>
      </HeroWrapper>

      <SeleccionSection>
        <Seleccion><SocialSidebar color='red' /></Seleccion>

        <Container className='seleccion--container'>
          <Title title='Nuestra Selección' />

          <PropList>
            <CardProp
              className='card--prop-home'
              operation='Venta'
              currency='USD'
              price='1.500.000'
              description='Casa en Belgrano R'
              address='Virrey del Pino al 3400'
              m2='550'
              bedroom='5'
              bathroom='3'
              garage='3'
            />

            <CardProp
              className='card--prop-home'
              operation='Venta'
              currency='USD'
              price='1.500.000'
              description='Casa en Belgrano R'
              address='Virrey del Pino al 3400'
              m2='550'
              bedroom='5'
              bathroom='3'
              garage='3'
            />
          </PropList>
        </Container>

      </SeleccionSection>

      <InversionSection>
        <Inversion><SocialSidebar color='black' /></Inversion>

        <Container className='inversion--container'>
          <InversionList>

            <InversionItem>
              <Title
                title='Tu próxima inversión'
                buttonStyle='outline black'
                vertical
              />
            </InversionItem>

            <InversionItem>
              <CardProp
                price='1.500.000'
                currency='USD'
                description='Casa en Belgrano R'
                neighborhood='Belgrano R'
                bedroom='2 a 5 ambientes'
                inversion
              />
            </InversionItem>

            <InversionItem>
              <CardProp
                price='1.500.000'
                currency='USD'
                description='Casa en Belgrano R'
                neighborhood='Belgrano R'
                bedroom='2 a 5 ambientes'
                inversion
              />
            </InversionItem>
          </InversionList>
        </Container>
      </InversionSection>

    </Layout>
  )
});

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  // Only get starred & ventas
  const { objects } = await getProperties({
    params: {
      filters: [["is_starred_on_web", "=", true]],
      operation_types: [1]
    }
  })

  return {
    props: {
      properties: objects
    }
  }
}

export default Home;
