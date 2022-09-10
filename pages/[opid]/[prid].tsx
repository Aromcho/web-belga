import React from 'react';
import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic';

import { getProperties } from 'services';
import { parseTokkoParameters } from 'helpers/tokko';

import { Layout } from 'components/layout';
import { PropertyListProps } from 'components/propertylist/propertylist';

const PropertyList = dynamic<PropertyListProps>(() => import("components/propertylist").then((mod) => mod.PropertyList))
const BackToTop = dynamic<any>(() => import("components/backtotop").then((mod) => mod.BackToTop))
const Error500 = dynamic<any>(() => import("pages/500"))
const Error404 = dynamic<any>(() => import("pages/404"))

const PropertySearch = ({ data, query, statusCode }: any) => {
  if (statusCode === 404) return <Error404 />
  if (statusCode >= 500) return <Error500 />

  return (
    <Layout>
      <BackToTop color='red' />
      <PropertyList properties={data.objects} meta={data.meta} query={query} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const props: any = {
    query,
  };

  try {
    props["data"] = await getProperties({
      params: parseTokkoParameters({ ...query }),
    });
  } catch (error: any) {
    props["statusCode"] = error?.response?.status || 500;
  }

  return {
    props,
  };
}

export default PropertySearch;
