import React, { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import { PATHS } from "config";

import { Layout, Container } from "components/layout";
import { ArrowBackIcon } from "components/icons";

import { BusquedaCardProps } from "components/busquedacard/busquedacard";
const BusquedaCard = dynamic<BusquedaCardProps>(() => import("components/busquedacard").then((mod) => mod.BusquedaCard))
const Status = dynamic<any>(() => import("components/status").then((mod) => mod.Status))
const ContactForm = dynamic<any>(() => import("components/forms/contactform").then((mod) => mod.ContactForm))

import {
  BackWrapper,
  BusquedasContainer,
  FormWrapper,
  Title,
  BusquedasList,
  Subtitle,
} from "components/pages/busquedasGuardadas.styles";

const BusquedasGuardadas = observer(() => {
  const {
    rootStore: { userStore },
  } = useStore();

  const [saveSearch, setSaveSearch] = useState<number>(0);
  useEffect(() => {
    setSaveSearch(userStore?.searchs?.length);
  }, [userStore, saveSearch]);
  return (
    <Layout>
      <BusquedasContainer>
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
          {saveSearch === 0 && (
            <Status
              img="/images/empty_img_plus.gif"
              text="Tené a mano tus búsquedas."
              textButton="AGREGÁ TUS BÚSQUEDAS"
              buttonStyle="secondary shine"
              linkButton={PATHS.VENTA}
            />
          )}

          {saveSearch > 0 && (
            <>
              <Container>
                <Title>TUS BÚSQUEDAS GUARDADAS</Title>
              </Container>

              <BusquedasList>
                {userStore.searchs?.map((item, key) => (
                  <BusquedaCard
                    key={key}
                    search={item}
                    onRemove={() => {
                      userStore.removeSearch(item),
                        setSaveSearch(saveSearch > 0 ? saveSearch - 1 : 0);
                    }}
                  />
                ))}
              </BusquedasList>

              <Container>
                <Subtitle>Encontrá lo que estás buscando.</Subtitle>
              </Container>
              <FormWrapper>
                <ContactForm full />
              </FormWrapper>
            </>
          )}
        </Container>
      </BusquedasContainer>
    </Layout>
  );
});

export default BusquedasGuardadas;
