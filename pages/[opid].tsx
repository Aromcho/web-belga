import React from "react";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { getProperties } from "services";

import { Layout } from "components/layout";
import { parseTokkoParameters, operationTypes } from "helpers/tokko";
import { PropertyListProps } from "components/propertylist/propertylist";

const Error500 = dynamic<any>(() => import("pages/500"))
const Error404 = dynamic<any>(() => import("pages/404"))
const BackToTop = dynamic<any>(() => import("components/backtotop").then((mod) => mod.BackToTop))
const PropertyList = dynamic<PropertyListProps>(() => import("components/propertylist").then((mod) => mod.PropertyList))



const PropertySearch = ({ data, query, statusCode }: any) => {
  if (statusCode === 404) return <Error404 />
  if (statusCode >= 500) return <Error500 />

  return (
    <Layout menuTheme="light">
      <BackToTop />
      <PropertyList
        properties={data?.objects}
        meta={data?.meta}
        query={query}
      />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const op = operationTypes[query.opid as string];
  const props: any = {};
  if (op) {
    try {
      props["data"] = await getProperties({
        params: parseTokkoParameters({ ...query }),
      });
      props["query"] = query;
    } catch (error: any) {
      props["statusCode"] = error.response.status;
    }
  } else {
    props["statusCode"] = 404;
  }

  return {
    props,
  };
};

export default PropertySearch;
