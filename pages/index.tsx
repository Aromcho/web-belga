import React from 'react';
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { Layout, Container } from 'components/layout';
import { getProperties } from 'services';
import { observer } from 'mobx-react-lite';
import { useStore } from 'stores';
import { formatToMoney } from 'helpers';
import { useMergeState } from 'helpers/hooks';

import { SocialSidebar } from 'components/socialsidebar';
import { Title } from 'components/title';
import { CardProp } from 'components/cardprop';
import { Input } from 'components/input';
import { Button } from 'components/button';
import { MultiRange } from 'components/multirange';

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
  SearchRow,
  RangeWrapper,
  PriceRange,
  PriceText,
  PriceInputWrapper,
  InputDivider
} from 'components/pages/home.styles'

const Home = observer(({ properties }: any) => {

  const {
    rootStore: { userStore }
  } = useStore();

  /* Handle price */
  const [searchPrice, setSearchPrice] = useMergeState({
    minPrice: 0,
    maxPrice: 0
  })

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
              <RangeWrapper>
                <PriceText>Price</PriceText>

                <PriceRange>
                  <MultiRange
                    customWidth={360}
                    min={0}
                    max={3000001}
                    step={10000}
                    onChange={({ minVal, maxVal }: any) => {
                      setSearchPrice({ minPrice: minVal, maxPrice: maxVal })
                      console.log()
                    }}
                  />
                  <PriceInputWrapper>
                    <Input
                      className='input--price bottomLine'
                      type='text'
                      maxLength={15}
                      value={formatToMoney(searchPrice.minPrice.toString(), true, 'USD', true)}
                    />
                    <InputDivider />
                    <Input
                      className='input--price bottomLine'
                      type='text'
                      maxLength={15}
                      value={
                        searchPrice.maxPrice >= 3000000
                          ? formatToMoney(searchPrice.maxPrice.toString(), true, 'USD +', true)
                          : formatToMoney(searchPrice.maxPrice.toString(), true, 'USD', true)
                      }
                    />
                  </PriceInputWrapper>
                </PriceRange>

              </RangeWrapper>
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
            {properties.slice(0, 2).map((item: any, k: number) => {
              return (
                <>
                  <CardProp
                    key={k}
                    className='card--prop-home'
                    operation={item?.operations[0].operation_type}
                    currency={item?.operations[0].prices[0].currency}
                    price={formatToMoney(item?.operations[0].prices[0].price)}
                    description={item?.location?.name}
                    address={item?.address}
                    m2={Math.round(item?.total_surface)}
                    bedroom={item?.room_amount}
                    bathroom={item?.bathroom_amount}
                    garage={item?.parking_lot_amount}
                    media={item.photos.slice(0, 10).map((photo: any) => { return photo.image })}
                    link={`/propiedad/${item?.id.toString()}`}
                  />
                </>
              )
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

            {properties.slice(2, 4).map((item: any, k: number) => {
              return (
                <InversionItem >
                  <CardProp
                    key={k}
                    price={formatToMoney(item?.operations[0].prices[0].price)}
                    currency={item?.operations[0].prices[0].currency}
                    description={item?.location?.name}
                    neighborhood={item?.location?.name}
                    bedroom={`${item?.room_amount} ambientes`}
                    inversionCover={item.photos.slice(0, 1).map((photo: any) => { return photo.image })}
                    link={`/propiedad/${item?.id.toString()}`}
                    inversion
                  />
                </InversionItem>
              )
            })}
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
