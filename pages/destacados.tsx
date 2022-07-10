import React from "react";
import { GetServerSideProps } from "next";
import { Layout, Container } from "components/layout";
import { getProperties } from "services";
import { parseTokkoParameters } from "helpers/tokko";
import { PropertyList } from "components/propertylist";
import { BackToTop } from "components/backtotop";

const PropertySearch = ({ data }: any) => {
  return (
    <Layout>
      <BackToTop />
      <PropertyList
        properties={data.objects}
        meta={data.meta}
        saveSearch={false}
      />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const data = await getProperties({
    params: {
      filters: [["is_starred_on_web", "=", true]],
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
