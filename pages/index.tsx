import React from "react";
import Head from "next/head";
import Link from "next/link";
import { PATHS } from "config";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { getDevelopments, getProperties } from "services";
import { observer } from "mobx-react-lite";
import { useStore } from "stores";
import { formatToMoney, getDropdownValue, Property } from "helpers";
import { useMergeState } from "helpers/hooks";
import { neighborhoods } from "helpers/neighborhoods";
import { getSearchUrl, propertiesSelectOptions } from "helpers/tokko";

import { Layout, Container } from "components/layout";
import { SocialSidebar } from "components/socialsidebar";
import { Title } from "components/title";
import { CardProp } from "components/cardprop";
import { Input } from "components/input";
import { Button } from "components/button";
import { MultiRange } from "components/multirange";
import { Dropdown } from "components/dropdown";
import { Select } from "components/select";
import { MailIcon, TelIcon, WhatsappIcon } from "components/icons";
import { BackToTop } from "components/backtotop";

import {
  HeroWrapper,
  BlackLayer,
  Hero,
  SeleccionSection,
  Seleccion,
  InversionSection,
  Inversion,
  InversionList,
  InversionItem,
  PropList,
  SearchFormWrapper,
  SearchRow,
  RangeWrapper,
  PriceRange,
  PriceText,
  PriceInputWrapper,
  InputDivider,
  HeroFooter,
  DropdownRow,
  RowLabel,
} from "components/pages/home.styles";

const Home = observer(({ properties, emprendimientos }: any) => {
  const {
    rootStore: { userStore },
  } = useStore();

  const router = useRouter();

  const [formData, setFormData] = useMergeState<any>({
    locations: [],
    min_rooms: "",
    max_rooms: "",
    operation_type: [1],
    property_type: 0,
    price_from: 0,
    price_to: 0,
  });

  const [close, setClose] = useMergeState<any>({
    rooms: undefined,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(getSearchUrl(formData));
  };

  const localidades = neighborhoods.map((item) => ({
    value: item?.location_id,
    label: item?.location_name,
  }));

  return (
    <Layout menuTheme="transparent" footerSmall={false} backToTopFooter>
      <Head>
        <title>Belga Inmobiliaria</title>
      </Head>

      <HeroWrapper>
        <BlackLayer />
        <Hero>
          <SocialSidebar />
        </Hero>
        <Container className="hero--container align--center">
          <SearchFormWrapper>
            <SearchRow className="first--row">
              <Select
                className="white first--row-input input--general"
                options={[
                  { value: 1, label: "Venta" },
                  { value: 2, label: "Alquiler" },
                ]}
                isSearchable={false}
                isMulti={true}
                placeholder="Tipo de operación"
                onChange={(opt) => {
                  setFormData({
                    operation_type: opt.map(
                      (item: { value: number }) => item.value
                    ),
                  });
                }}
              />

              <Select
                className="white first--row-input input--general"
                options={propertiesSelectOptions}
                isSearchable={false}
                placeholder="Tipo de propiedad"
                onChange={(opt) => {
                  setFormData({ property_type: opt.value });
                }}
              />

              <Dropdown
                className="white first--row-input"
                placeholder="Dormitorios"
                close={close.rooms}
                value={getDropdownValue(
                  formData?.min_rooms,
                  formData?.max_rooms,
                  "Dormitorios"
                )}
              >
                <DropdownRow>
                  <RowLabel>Min.</RowLabel>
                  <Input
                    className="input--general"
                    type="number"
                    placeHolder="-"
                    min={0}
                    value={formData?.min_rooms}
                    onChange={(e) => {
                      setFormData({ min_rooms: e?.currentTarget?.value });
                    }}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        setFormData({ min_rooms: e?.currentTarget?.value });
                        setClose({ rooms: !close.rooms });
                      }
                    }}
                  />
                </DropdownRow>
                <DropdownRow>
                  <RowLabel>Max.</RowLabel>
                  <Input
                    className="input--general"
                    type="number"
                    placeHolder="-"
                    min={formData?.min_rooms}
                    value={formData?.max_rooms}
                    onChange={(e) => {
                      setFormData({ max_rooms: e?.currentTarget?.value });
                    }}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        setFormData({ max_rooms: e?.currentTarget?.value });
                        setClose({ rooms: !close.rooms });
                      }
                    }}
                  />
                </DropdownRow>
              </Dropdown>
            </SearchRow>

            <SearchRow className="second--row">
              <Select
                options={localidades}
                isMulti={true}
                placeholder="Barrios"
                hideSelectedOptions={true}
                styles={{
                  container: (provided: any, state: any) => ({
                    ...provided,
                    marginBottom: 15,
                  }),
                }}
                onChange={(opt) => {
                  setFormData({
                    locations: opt.map((item: { value: number }) => item.value),
                  });
                }}
              />
            </SearchRow>

            <SearchRow className="third--row">
              <RangeWrapper>
                <PriceText>Precio</PriceText>

                <PriceRange className="range--home">
                  <MultiRange
                    customWidth={360}
                    min={0}
                    max={3000000}
                    step={20000}
                    onChange={({ minVal, maxVal }: any) => {
                      setFormData({ price_from: minVal, price_to: maxVal });
                    }}
                  />
                  <PriceInputWrapper>
                    <Input
                      className="input--price bottomLine"
                      type="text"
                      maxLength={15}
                      value={formatToMoney(
                        formData.price_from.toString(),
                        true,
                        "USD",
                        false
                      )}
                    />
                    <InputDivider />
                    <Input
                      className="input--price bottomLine"
                      type="text"
                      maxLength={15}
                      value={
                        formData.price_to >= 3000000
                          ? formatToMoney(
                              formData.price_to.toString(),
                              true,
                              "USD +",
                              false
                            )
                          : formatToMoney(
                              formData.price_to.toString(),
                              true,
                              "USD",
                              false
                            )
                      }
                    />
                  </PriceInputWrapper>
                </PriceRange>
              </RangeWrapper>

              <Button
                className="third--row-button"
                text="Buscar"
                type="secondary shine"
                onClick={handleSubmit}
              />
            </SearchRow>

            <SearchRow className="fourth--row">
              <Button
                className="fourth--row-button"
                text="Quiero vender"
                link={PATHS.QUIEROVENDER}
              />
            </SearchRow>

            <HeroFooter>
              <Link href="tel:+541152633393">
                <a className="head--footer-link phone" target="_blank">
                  <TelIcon />
                </a>
              </Link>
              <Link href="mailto:info@belga.com.ar">
                <a className="head--footer-link mail" target="_blank">
                  <MailIcon />
                </a>
              </Link>
              <Link href="https://api.whatsapp.com/send?phone=5491169462894&text=Hola%20Belga!%20%F0%9F%91%8B%20Quisiera%20hacerles%20una%20consulta.">
                <a className="head--footer-link wsp" target="_blank">
                  <WhatsappIcon />
                </a>
              </Link>
            </HeroFooter>
          </SearchFormWrapper>
        </Container>
      </HeroWrapper>

      <SeleccionSection>
        <Seleccion>
          <SocialSidebar color="red" />
          <BackToTop color="red" />
        </Seleccion>

        <Container className="seleccion--container">
          <Title
            title="NUESTRA  SELECCIÓN"
            linkButton={PATHS.HIGHLIGHTED}
            buttonStyle="outline red"
          />
          <PropList>
            {properties.map((item: Property, k: number) => {
              return (
                <CardProp
                  key={k}
                  className="card--prop-home"
                  property={item}
                  liked={userStore.favorites.includes(item.id)}
                  onLiked={() => userStore.toggleFavorite(item.id)}
                />
              );
            })}
          </PropList>

          <Link href={PATHS.HIGHLIGHTED} passHref>
            <Button
              link={PATHS.HIGHLIGHTED}
              className="button--mobile"
              text="Ver más"
              type="outline red"
            />
          </Link>
        </Container>
      </SeleccionSection>

      <InversionSection>
        <Inversion>
          <SocialSidebar color="black" />
          <BackToTop color="black" />
        </Inversion>

        <Container className="inversion--container">
          <InversionList>
            <InversionItem className="item--text">
              <Title
                title="TU PRÓXIMA INVERSIÓN"
                buttonStyle="outline black"
                vertical
                linkButton={PATHS.EMPRENDIMIENTOS}
              />
            </InversionItem>

            {emprendimientos?.map((item: Property, k: number) => {
              return (
                <InversionItem>
                  <CardProp key={k} property={item} inversion />
                </InversionItem>
              );
            })}
          </InversionList>

          <Link href={PATHS.EMPRENDIMIENTOS} passHref>
            <Button
              link={PATHS.EMPRENDIMIENTOS}
              className="button--mobile"
              text="Ver más"
              type="outline black"
            />
          </Link>
        </Container>
      </InversionSection>
    </Layout>
  );
});

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  // Only get starred & ventas
  const { objects } = await getProperties({
    params: {
      filters: [["is_starred_on_web", "Yes", 0]],
      operation_types: [1],
      limit: 2,
    },
  });

  const emprendimientos: any = await getDevelopments({
    params: {
      limit: 2,
    },
  });

  return {
    props: {
      properties: objects,
      emprendimientos: emprendimientos.objects,
    },
  };
};

export default Home;
