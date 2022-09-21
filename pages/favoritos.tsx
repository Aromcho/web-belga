import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { PATHS } from "config";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import { Property } from "helpers";

import { Layout, Container } from "components/layout";
import { PropertyListProps } from "components/propertylist/propertylist";

const PropertyList = dynamic<PropertyListProps>(() => import("components/propertylist").then((mod) => mod.PropertyList))
const ContactForm = dynamic<any>(() => import("components/forms/contactform").then((mod) => mod.ContactForm))
const Status = dynamic<any>(() => import("components/status").then((mod) => mod.Status))
const ArrowBackIcon = dynamic<any>(() => import("components/icons").then((mod) => mod.ArrowBackIcon))

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

  const getFavorites = async () => {
    const axios = (await import("axios")).default;
    axios
      .get("/api/favorites", {
        params: { list: userStore.favorites.join(",") },
      })
      .then(({ data }) => {
        setFavs(data);
        setStatus("finish");
      });
  }

  React.useEffect(() => {
    if (userStore.favorites.length > 0) {
      getFavorites();
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

        {status === "loading" && <Status text="Cargando..." />}
        {status === "empty" && (
          <Status
            img="/images/empty_img_heart.gif"
            text="Tené a mano tus propiedades favoritas."
            textButton="AGREGÁ TUS FAVORITAS"
            buttonStyle="secondary shine"
            linkButton={PATHS.VENTA}
          />
        )}
        {status === "finish" && (
          <>
            <Container>
              <Title>TU SELECCIÓN DE FAVORITAS</Title>
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
              <ContactForm full />
            </FormWrapper>
          </>
        )}
      </FavoritesContainer>
    </Layout>
  );
});

export default Favorites;
