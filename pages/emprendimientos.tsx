import React from "react";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { Layout } from "components/layout";
import { getDevelopments } from "services";
import { parseTokkoParameters } from "helpers/tokko";

import { PropertyListProps } from "components/propertylist/propertylist";
const BackToTop = dynamic<any>(() => import("components/backtotop").then((mod) => mod.BackToTop))
const PropertyList = dynamic<PropertyListProps>(() => import("components/propertylist").then((mod) => mod.PropertyList))

const PropertySearch = ({ data }: any) => {
  
  return (
    <Layout menuTheme="dark">
      <BackToTop />
      <PropertyList
        properties={data.objects}
        meta={data.meta}
        saveSearch={false}
        investment={true}
        filters={false}
      />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const data = await getDevelopments({
    params: parseTokkoParameters({ ...query }),
  });

  return {
    props: {
      data,
    },
  };
};

export default PropertySearch;
