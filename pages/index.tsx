import React from 'react';
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { Layout, Container } from 'components/layout';
import { getProperties } from 'services';
import { observer } from 'mobx-react-lite';
import { useStore } from 'stores';

const Home = observer(({ properties }: any) => {

  const {
    rootStore: { userStore }
  } = useStore();

  
  {console.log(properties)}
  return (
    <Layout>
      <Head>
        <title>Belga Inmobiliaria</title>
      </Head>
      <Container>
        Home
      </Container>
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
