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
  BlackLayer,
  Hero,
  SeleccionSection,
  Seleccion,
  InversionSection,
  Inversion,
  InversionList,
  InversionItem,
  PropList,
  SearchFormWrapper,
  SearchRow
} from 'components/pages/home.styles'
import { Title } from 'components/title';
import { CardProp } from 'components/cardprop';
import { Input } from 'components/input';
import { Button } from 'components/button';


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
        <BlackLayer />
        <Hero><SocialSidebar /></Hero>
        <Container className='align--center'>
          <SearchFormWrapper>
            <SearchRow className='first--row'>
              <Input
                className='white first--row-input'
                type='text'
                placeHolder='Tipo de operación'
              />

              <Input
                className='white first--row-input'
                type='text'
                placeHolder='Tipo de propiedad'
              />

              <Input
                className='white first--row-input'
                type='text'
                placeHolder='Dormitorios'
              />
            </SearchRow>

            <SearchRow className='second--row'>
              <Input
                className='white second--row-input'
                type='text'
                placeHolder='Barrio'
              />
            </SearchRow>

            <SearchRow className='third--row'>
              <Button className='third--row-button' text='Buscar' type='secondary' />
            </SearchRow>

          </SearchFormWrapper>
        </Container>
      </HeroWrapper>

      <SeleccionSection>
        <Seleccion><SocialSidebar color='red' /></Seleccion>

        <Container className='seleccion--container'>
          <Title title='Nuestra Selección' />

          <PropList>

            {properties.slice(0,2).map((item: any) => {
              return <>
              <CardProp
              className='card--prop-home'
              operation={item?.operations[0].operation_type}
              currency={item?.operations[0].prices[0].currency}
              price={item?.operations[0].prices[0].price}
              description={item?.location?.name}
              address={item?.address}
              m2={Math.round(item?.total_surface)}
              bedroom={item?.room_amount}
              bathroom={item?.bathroom_amount}
              garage={item?.parking_lot_amount}
            /></>
            })}
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
