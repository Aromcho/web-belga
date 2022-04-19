import React from 'react';
import Head from 'next/head'
import Link from "next/link";
import { GetServerSideProps } from 'next'
import { Layout, Container } from 'components/layout';
import { getDevelopments, getProperties } from 'services';
import { observer } from 'mobx-react-lite';
import { useStore } from 'stores';
import { formatToMoney, Property } from 'helpers';
import { useMergeState } from 'helpers/hooks';

import { SocialSidebar } from 'components/socialsidebar';
import { Title } from 'components/title';
import { CardProp } from 'components/cardprop';
import { Input } from 'components/input';
import { Button } from 'components/button';
import { MultiRange } from 'components/multirange';
import { PATHS } from 'config';

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
import { neighborhoods } from 'helpers/neighborhoods';

const Home = observer(({ properties, emprendimientos }: any) => {

  const {
    rootStore: { userStore }
  } = useStore();

  /* Handle price */
  const [searchPrice, setSearchPrice] = useMergeState({
    minPrice: 0,
    maxPrice: 0
  })

  const handleSearchPick = () => {
    const loc = formData.locations;
    // setFormData({locations})
  }

  const findNeighborhood = (location: string) => {
    return neighborhoods.find(item => location === item.location_name)
  }

  const [formData, setFormData] = useMergeState({
    locations: []
  })

  const localidades = neighborhoods.map(item => item.location_name)

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
                onChangeValue={(item) => setFormData({locations: findNeighborhood(item)})}
              />

            </SearchRow>

            <SearchRow className='third--row'>
              <RangeWrapper>
                <PriceText>Precio</PriceText>

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
              <Link href="#"><a className='head--footer-link' target='_blank'><TelIcon /></a></Link>
              <Link href="#"><a className='head--footer-link' target='_blank'><TelIcon /></a></Link>
              <Link href="#"><a className='head--footer-link' target='_blank'><TelIcon /></a></Link>
            </HeroFooter>

          </SearchFormWrapper>

        </Container>

      </HeroWrapper>

      <SeleccionSection>
        <Seleccion><SocialSidebar color='red' /></Seleccion>

        <Container className='seleccion--container'>
          <Title title='Nuestra Selección' linkButton={PATHS.HIGHLIGHTED} />
          <PropList>
            {properties.map((item: Property, k: number) => {
              return (
                <CardProp
                  key={k}
                  className='card--prop-home'
                  property={item}
                  liked={userStore.favorites.includes(item.id)}
                  onLiked={() => userStore.toggleFavorite(item.id)}
                />
              )
            })}
          </PropList>

          <Link href={PATHS.HIGHLIGHTED} passHref><Button link={PATHS.HIGHLIGHTED} className='button--mobile' text='Ver más' type='outline black' /></Link>

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
                linkButton={PATHS.EMPRENDIMIENTOS}
              />
            </InversionItem>

            {emprendimientos?.map((item: Property, k: number) => {
              return (
                <InversionItem>
                  <CardProp
                    key={k}
                    property={item}
                    inversion
                  />
                </InversionItem>
              )
            })}
          </InversionList>

          <Link href={PATHS.EMPRENDIMIENTOS} passHref><Button link={PATHS.EMPRENDIMIENTOS} className='button--mobile' text='Ver más' type='outline black' /></Link>

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
      operation_types: [1],
      limit: 2
    }
  })

  const emprendimientos: any = await getDevelopments({
    params: {
      limit: 2
    }
  })

  return {
    props: {
      properties: objects,
      emprendimientos: emprendimientos.objects
    }
  }
}

export default Home;
