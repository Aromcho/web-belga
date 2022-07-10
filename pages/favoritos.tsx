import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from 'stores';
import { Layout, Container } from 'components/layout';
import { PropertyList } from 'components/propertylist';
import { Property } from 'helpers';
import axios from 'axios';
import { ContactForm } from 'components/forms/contactform';

const Favorites = observer(() => {

  const {
    rootStore: { userStore }
  } = useStore();


  const [favs, setFavs] = React.useState<Property[]>([]);
  const [status, setStatus] = React.useState<string>('loading');

  React.useEffect(() => {
    if(userStore.favorites.length > 0){
      axios.get('/api/favorites', {params: {list: userStore.favorites.join(',')}})
      .then(({data}) => {
        setFavs(data);
        setStatus("finish");
      })
      
      // setFavs()
    } else {
      setStatus("empty");
    }
  }, [userStore.favorites])

  
  return (
    <Layout>
      <Container>
        {status === "loading" && <p>Cargando</p>}
        {status === "empty" && <p>No posee favoritos cargados</p>}
        {status === "finish" &&  
          <PropertyList properties={favs} filters={false} meta={{total_count: favs.length, limit: 26, offset: 0, next: '', previous: ''}} saveSearch={false}/>
        }
        <ContactForm className='full' />
      </Container>
    </Layout>
  )
});

export default Favorites;
