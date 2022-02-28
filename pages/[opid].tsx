import React from 'react';
import { GetServerSideProps } from 'next'
import { Layout, Container } from 'components/layout';
import { getProperties } from 'services';
import { parseTokkoParameters } from 'helpers/tokko';

const PropertySearch = ({properties}: any) => {
  
  // console.log(properties)
  
  return (
    <Layout>
      <Container>
      </Container>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {

  parseTokkoParameters({...query})

  const { objects } = await getProperties({
    params: {
      operation_types: [1]
    }
  })

  return {
    props: {
      properties: objects 
    }
  }
}

export default PropertySearch;
