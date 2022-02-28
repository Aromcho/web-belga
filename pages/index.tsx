import React from 'react';
import { GetServerSideProps } from 'next'
import { Layout, Container } from 'components/layout';
import { getProperties, getNeighborhoods } from 'services';
import { observer } from 'mobx-react-lite';
import { useStore } from 'stores';

const Home = observer(({properties}: any) => {

  const {
    rootStore: { userStore }
  } = useStore();

  
  return (
    <Layout>
      <Container>
        <button onClick={() => userStore.toggleFavorite(11)}>Add/Remove</button>

        <button onClick={() => console.log(userStore.favorites)}>Log</button>
      </Container>
    </Layout>
  )
});

export const getServerSideProps: GetServerSideProps = async ({query}) => {

  // const { objects } = await getProperties({
  //   params: {
  //     filters: [["is_starred_on_web","=",true]],
  //     operation_types: [1]
  //   }
  // })

  const { data } = await getNeighborhoods();

  console.log(data)

  return {
    props: {
      // properties: objects 
    }
  }
}

export default Home;
