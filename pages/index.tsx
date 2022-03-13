import React from 'react';
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { Layout, Container } from 'components/layout';
import { getProperties } from 'services';
import { observer } from 'mobx-react-lite';
import { useStore } from 'stores';

import { SocialSidebar } from 'components/socialsidebar';

import {
  HeroWrapper
} from 'components/pages/home.styles'

const Home = observer(({ properties }: any) => {

  const {
    rootStore: { userStore }
  } = useStore();

  return (
    <Layout>
      <Head>
        <title>Belga Inmobiliaria</title>
      </Head>

      <SocialSidebar />

      <HeroWrapper style={{ backgroundImage: 'url(/images/home_bg_hero.jpg)' }}>
        <Container>
          Home
        </Container>
      </HeroWrapper>

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
