import React from 'react';
import { GetServerSideProps } from 'next'
import { Layout, Container } from 'components/layout';
import { getPropertyById } from 'services';

import {
  PropContainer
} from 'components/pages/propiedad.styles';

const PropertyDetail = ({ property, statusCode }: any) => {
  if (statusCode === 404) return <>404</>

  if (statusCode === 500) return <>500</>

  return (
    <Layout>
      <PropContainer>
        {property.address}
      </PropContainer>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  let props: any = {}

  try {
    const property = await getPropertyById(parseInt(query.id as string))
    props = {
      property
    }
  } catch (e: any) {
    props = {
      statusCode: e.response.status
    }
  }

  return {
    props
  }

}

export default PropertyDetail;