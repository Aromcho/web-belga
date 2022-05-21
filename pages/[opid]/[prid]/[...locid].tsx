import React from 'react';
import { GetServerSideProps } from 'next'
import { Layout, Container } from 'components/layout';
import { getProperties } from 'services';
import { parseTokkoParameters } from 'helpers/tokko';
import { PropertyList } from 'components/propertylist';

const PropertySearch = ({ data, statusCode }: any) => {

  if (statusCode) return <>{statusCode}</>

  return (
    <Layout>
      <Container>
        <PropertyList properties={data?.objects} meta={data?.meta} />
      </Container>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  const props: any = {}

  try {
    props['data'] = await getProperties({
      params: parseTokkoParameters({ ...query })
    })
  } catch (error: any) {
    props['statusCode'] = error?.response?.status || 500;
  }

  return {
    props
  }
}

export default PropertySearch;
