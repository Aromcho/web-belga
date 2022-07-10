import React from 'react';
import { GetServerSideProps } from 'next'
import { Layout, Container } from 'components/layout';
import { getProperties } from 'services';
import { parseTokkoParameters, operationTypes } from 'helpers/tokko';
import { PropertyList } from 'components/propertylist';
import { BackToTop } from 'components/backtotop';

const PropertySearch = ({data, query, statusCode}: any) => {

  if (statusCode === 404) return <>404</>

  if (statusCode === 500) return <>500</>
  
  return (
    <Layout menuTheme='light'>
      <BackToTop />
      <PropertyList properties={data.objects} meta={data.meta} query={query} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {

  const op = operationTypes[query.opid as string];
  const props: any = {}
  if (op){
    try {
      props['data'] = await getProperties({
        params: parseTokkoParameters({...query})
      })
      props['query'] = query
    } catch (error: any) {
      props['statusCode'] = error.response.status
    }
  } else {
    props['statusCode'] = 404
  }


  return {
    props
  }
}

export default PropertySearch;
