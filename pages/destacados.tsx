import React from "react";
import { GetServerSideProps } from "next";
import { Layout } from "components/layout";
import { getProperties } from "services";
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
        filters={false}
        withCount={false}
      />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const data = await getProperties({
    params: {
      filters: [["is_starred_on_web", "=", 1]],
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
