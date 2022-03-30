import React from 'react';
import { GetServerSideProps } from 'next'
import { Layout, Container } from 'components/layout';
import { getProperties } from 'services';
import { parseTokkoParameters } from 'helpers/tokko';

const PropertySearch = ({ properties }: any) => {


  return (
    <Layout>
      {console.log(properties)}
      <Container>
      </Container>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  const { objects } = await getProperties({
    params: parseTokkoParameters({ ...query })
  })

  return {
    props: {
      properties: objects
    }
  }
}

export default PropertySearch;
