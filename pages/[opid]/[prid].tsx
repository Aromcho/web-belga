import React from 'react';
import { GetServerSideProps } from 'next'
import { Layout, Container } from 'components/layout';
import { getProperties } from 'services';
import { parseTokkoParameters } from 'helpers/tokko';
import { PropertyList } from 'components/propertylist';

const PropertySearch = ({ data }: any) => {


  return (
    <Layout>
      <Container>
        <PropertyList properties={data.objects} meta={data.meta} />
      </Container>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  const data = await getProperties({
    params: parseTokkoParameters({ ...query })
  })

  return {
    props: {
      data
    }
  }
}

export default PropertySearch;
