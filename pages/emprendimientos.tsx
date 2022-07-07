import React from "react";
import { GetServerSideProps } from "next";
import { Layout, Container } from "components/layout";
import { getDevelopments } from "services";
import { parseTokkoParameters } from "helpers/tokko";
import { PropertyList } from "components/propertylist";

const PropertySearch = ({ data }: any) => {
  return (
    <Layout menuTheme="dark">
      <Container>
        <PropertyList
          properties={data.objects}
          meta={data.meta}
          saveSearch={false}
          investment={true}
        />
      </Container>
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
