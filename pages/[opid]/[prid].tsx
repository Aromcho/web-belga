import React from 'react';
import { GetServerSideProps } from 'next'
import { Layout } from 'components/layout';
import { getProperties } from 'services';
import { parseTokkoParameters } from 'helpers/tokko';
import { PropertyList } from 'components/propertylist';
import { BackToTop } from 'components/backtotop';

const PropertySearch = ({ data, query }: any) => {


  return (
    <Layout menuTheme='dark'>
      <BackToTop color='red' />
      <PropertyList properties={data.objects} meta={data.meta} query={query} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  const data = await getProperties({
    params: parseTokkoParameters({ ...query })
  })

  return {
    props: {
      data,
      query
    }
  }
}

export default PropertySearch;
