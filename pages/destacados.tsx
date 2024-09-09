import React from "react";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { getProperties } from "services";

import { Layout } from "components/layout";
import { PropertyListProps } from "components/propertylist/propertylist";
const BackToTop = dynamic<any>(() => import("components/backtotop").then((mod) => mod.BackToTop))
const PropertyList = dynamic<PropertyListProps>(() => import("components/propertylist").then((mod) => mod.PropertyList))

const PropertySearch = ({ data }: any) => {
  return (
    <Layout>
      <BackToTop />
      <PropertyList
        properties={data.objects}
        meta={data.meta}
        saveSearch={false}
        filters={true}
        withCount={false}
      />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const data = await getProperties({
    params: {
      filters: [["is_starred_on_web", "Yes", 0]],
      operation_types: [1],
    },
  });

  return {
    props: {
      data,
    },
  };
};

export default PropertySearch;
