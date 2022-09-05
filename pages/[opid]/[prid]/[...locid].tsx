import React from "react";
import { GetServerSideProps } from "next";
import { Layout } from "components/layout";
import { getProperties } from "services";
import { parseTokkoParameters } from "helpers/tokko";
import { PropertyList } from "components/propertylist";
import Error404 from 'pages/404';
import Error500 from 'pages/500';

const PropertySearch = ({ data, statusCode, query }: any) => {
  if (statusCode === 404) return <Error404 />
  if (statusCode >= 500) return <Error500 />

  return (
    <Layout>      
      <PropertyList
        properties={data?.objects}
        meta={data?.meta}
        query={query}
      />
    </Layout>
  );
};

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
};

export default PropertySearch;
