import React from "react";
import { GetServerSideProps } from "next";
import { Layout, Container } from "components/layout";
import { getDevelopments } from "services";
import { parseTokkoParameters } from "helpers/tokko";
import { PropertyList } from "components/propertylist";
import { BackToTop } from "components/backtotop";

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
