import React from 'react';
import Head from 'next/head'
import Link from "next/link";
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
  InputDivider,
  HeroFooter
} from 'components/pages/home.styles'
import { TelIcon } from 'components/icons';
import { InputAutoComplete } from 'components/inputautocomplete';

const Home = observer(({ properties }: any) => {

  const {
    rootStore: { userStore }
  } = useStore();

  /* Handle price */
  const [searchPrice, setSearchPrice] = useMergeState({
    minPrice: 0,
    maxPrice: 0
  })

  const localidades = ['Agronomía', 'Almagro', 'Balvanera', 'Barracas', 'Belgrano', 'Boedo', 'Caballito', 'Chacarita', 'Coghlan', 'Colegiales', 'Constitución', 'Flores', 'Floresta', 'La Boca', 'La Paternal', 'Liniers', 'Mataderos', 'Monte Castro', 'Montserrat', 'Nueva Pompeya', 'Nuñez', 'Palermo', 'Parque Avellaneda', 'Parque Chacabuco', 'Parque Chas', 'Parque Patricios', 'Puerto Madero', 'Recoleta', 'Retiro', 'Saavedra', 'San Cristóbal', 'San Nicolás', 'San Telmo', 'Versalles', 'Villa Crespo', 'Villa Devoto', 'Villa General Mitre', 'Villa Lugano', 'Villa Luro', 'Villa Ortúzar', 'Villa Pueyrredón', 'Villa Real', 'Villa Riachuelo', 'Villa Santa Rita', 'Villa Soldati', 'Villa Urquiza', 'Villa del Parque', 'Vélez Sarsfield']
  const [barrio, setBarrio] = React.useState('Barrio')

  return (
    <Layout>
      <Head>
        <title>Belga Inmobiliaria</title>
      </Head>


      <HeroWrapper>
        <BlackLayer />
        <Hero><SocialSidebar /></Hero>
        <Container className='hero--container align--center'>
          <SearchFormWrapper>
            <SearchRow className='first--row'>
              <Input
                className='white first--row-input input--general'
                type='text'
                placeHolder='Tipo de operación'
              />

              <Input
                className='white first--row-input input--general'
                type='text'
                placeHolder='Tipo de propiedad'
              />

              <Input
                className='white first--row-input input--general'
                type='text'
                placeHolder='Dormitorios'
              />
            </SearchRow>

            <SearchRow className='second--row'>

              <InputAutoComplete
                className='white second--row-input input--general'
                placeHolder='Barrio'
                suggestions={localidades}
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

            <SearchRow className='fourth--row'>
              <Button className='fourth--row-button' text='Quiero vender' />
            </SearchRow>

            <HeroFooter>
              <Link href="#"><a className='head--footer-link' target='_blank' ><TelIcon /></a></Link>
              <Link href="#"><a className='head--footer-link' target='_blank' ><TelIcon /></a></Link>
              <Link href="#"><a className='head--footer-link' target='_blank' ><TelIcon /></a></Link>
            </HeroFooter>

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
                    bedroom={item?.suite_amount}
                    bathroom={item?.bathroom_amount}
                    garage={item?.parking_lot_amount}
                    media={item.photos.slice(0, 10).map((photo: any) => { return photo.image })}
                    link={`/propiedad/${item?.id.toString()}`}
                  />
                </>
              )
            })}
          </PropList>

          <Button className='button--mobile' text='Ver más' type='outline black' />

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
                    bedroom={`${item?.suite_amount} ambientes`}
                    inversionCover={item.photos.slice(0, 1).map((photo: any) => { return photo.image })}
                    link={`/propiedad/${item?.id.toString()}`}
                    inversion
                  />
                </InversionItem>
              )
            })}
          </InversionList>

          <Button className='button--mobile' text='Ver más' type='outline black' />

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
