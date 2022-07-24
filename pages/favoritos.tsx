import React from "react";
import Link from "next/link";
import { PATHS } from "config";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import { Property } from "helpers";
import axios from "axios";

import { Layout, Container } from "components/layout";
import { PropertyList } from "components/propertylist";
import { ContactForm } from "components/forms/contactform";
import { ArrowBackIcon } from "components/icons";
import { Status } from "components/status";

import {
  FavoritesContainer,
  BackWrapper,
  Title,
  FormWrapper,
} from "components/pages/favoritos.styles";

const Favorites = observer(() => {
  const {
    rootStore: { userStore },
  } = useStore();

  const [favs, setFavs] = React.useState<Property[]>([]);
  const [status, setStatus] = React.useState<string>("loading");

  React.useEffect(() => {
    if (userStore.favorites.length > 0) {
      axios
        .get("/api/favorites", {
          params: { list: userStore.favorites.join(",") },
        })
        .then(({ data }) => {
          setFavs(data);
          setStatus("finish");
        });

      // setFavs()
    } else {
      setStatus("empty");
    }
  }, [userStore.favorites]);

  return (
    <Layout>
      <FavoritesContainer>
        <Container>
          <BackWrapper>
            <Link href={PATHS.ROOT}>
              <a className="back--link">
                <ArrowBackIcon />
                Volver al inicio
              </a>
            </Link>
          </BackWrapper>
        </Container>

        <Container>
          {status === "loading" && <Status text="cargando..." />}
          {status === "empty" && (
            <Status
              img="/images/empty_img_heart.gif"
              text="Tené a mano tus propiedades favoritas."
              textButton="AGREGÁ TUS FAVORITOS"
              buttonStyle="secondary shine"
              linkButton={PATHS.VENTA}
            />
          )}
          {status === "finish" && (
            <>
              <Container>
                <Title>TU SELECCIÓN DE FAVORITOS</Title>
              </Container>

              <PropertyList
                properties={favs}
                filters={false}
                meta={{
                  total_count: favs.length,
                  limit: 26,
                  offset: 0,
                  next: "",
                  previous: "",
                }}
                saveSearch={false}
                back={false}
                withForm={false}
                withCount={false}
                paddingTop={0}
              />

              <FormWrapper>
                <ContactForm className="full" />
              </FormWrapper>
            </>
          )}
        </Container>
      </FavoritesContainer>
    </Layout>
  );
});

export default Favorites;
