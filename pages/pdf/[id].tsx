import { GetServerSideProps } from "next";
import { getProperties, getPropertyById } from "services";

import Property from "components/print/property";

const Index = ({property}: any) => {
  return (
    <Property property={property} />
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let props: any = {};

  try {
    const property = await getPropertyById(parseInt(query.id as string));

    // Only get starred & ventas
    const { objects } = await getProperties({
      params: {
        filters: [["is_starred_on_web", "=", true]],
        operation_types: [1],
        limit: 2,
      },
    });

    props = {
      property,
      properties: objects,
    };
  } catch (e: any) {
    props = {
      statusCode: e.response.status,
    };
  }

  return {
    props,
  };
};

export default Index;