import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { observer } from "mobx-react-lite";

import { CardProp } from "components/cardprop";
import { ArrowBackIcon, ChevronUpIcon, CloseIcon } from "components/icons";
import { ContactForm } from "components/forms/contactform";
import { Container } from "components/layout";

import { classes, getDropdownValue, Property } from "helpers";
import { neighborhoods } from "helpers/neighborhoods";
import {
  getSearchUrl,
  operationArray,
  operationTypes,
  propertiesSelectOptions,
  propertyTypes,
} from "helpers/tokko";
import { useMergeState } from "helpers/hooks";
import { useStore } from "stores";
import { PATHS } from "config";

import { DropdownRow, RowLabel } from "components/pages/home.styles";
import { Button } from "components/button";
import { SelectProps } from "components/select/select";
import { DropdownProps } from "components/dropdown/dropdown";
import { InputProps } from "components/input/input";

const Input = dynamic<InputProps>(() => import("components/input").then((mod) => mod.Input))
const Dropdown = dynamic<DropdownProps>(() => import("components/dropdown").then((mod) => mod.Dropdown))
const SaveSearch = dynamic<any>(() => import("components/savesearch").then((mod) => mod.SaveSearch))
const SocialSidebar = dynamic<any>(() => import("components/socialsidebar").then((mod) => mod.SocialSidebar))
const Select = dynamic<SelectProps>(() => import("components/select").then((mod) => mod.Select))

import {
  FiltersContainer,
  FiltersWrapperDesk,
  FiltersWrapperMobile,
  RowFilterSubtitle,
  RowInputsMobile,
  PropertyListWrapper,
  ListContainer,
  TopContainer,
  ContentWrapper,
  RowContent,
  PaginationWrapper,
  PaginationNumber,
  FiltersHeader,
  IconCloseWrapper,
} from "./propertylist.styles";

export interface PropertyListProps {
  properties: Property[];
  filters?: boolean;
  saveSearch?: boolean;
  meta: {
    total_count: number;
    offset: number;
    limit: number;
    next: string | null;
    previous: string | null;
  };
  investment?: boolean;
  query?: any;
  paddingTop?: number;
  back?: boolean;
  withForm?: boolean;
  withCount?: boolean;
}

export const PropertyList = observer(
  ({
    query,
    meta,
    properties,
    filters = true,
    saveSearch = true,
    investment = false,
    back = true,
    withForm = true,
    withCount = true,
    paddingTop,
  }: PropertyListProps) => {
    const {
      rootStore: { userStore },
    } = useStore();

    React.useEffect(() => {
      if (query?.opid)
        setFormData({
          operation_type: operationTypes[query.opid]
            .toString()
            ?.split(",")
            .map((item: string) => parseInt(item)),
        });
      if (query?.prid && query?.prid !== "todos") {
        setFormData({ property_type: propertyTypes[query?.prid] });
      }
      if (query?.locid)
        setFormData({
          locations: localidades
            .filter((item) =>
              query?.locid.includes(item.label.toLowerCase())
            )
            .map((item) => item.value),
        });
      if (query?.rooms_from) setFormData({ min_rooms: query?.rooms_from });
      if (query?.rooms_to) setFormData({ max_rooms: query?.rooms_to });
      if (query?.order) setFormData({ order: query?.order });
      if (query?.price_from) setFormData({ price_from: query?.price_from });
      if (query?.price_to) setFormData({ price_to: query?.price_to });
    }, [query]);

    const [formData, setFormData] = useMergeState<any>({
      locations: [],
      min_rooms: "",
      max_rooms: "",
      min_baths: "",
      max_baths: "",
      operation_type: [1],
      property_type: -1,
      price_from: 0,
      price_to: 0,
      parking_lot_to: "",
      parking_lot_from: "",
      order: "DESC",
    });

    const [close, setClose] = useMergeState<any>({
      rooms: undefined,
      baths: undefined,
      parking: undefined,
    });

    const router = useRouter();

    const handleSubmit = (e: any) => {
      e.preventDefault();
      router.push(getSearchUrl(formData));
    };

    const currentPage = meta?.offset / meta?.limit + 1;
    const maxPage = Math.ceil(meta?.total_count / meta?.limit);

    const localidades = neighborhoods.map((item) => ({
      value: item.location_id,
      label: item.location_name,
    }));

    const handleOrderChange = (order: string) => {
      setFormData({ order });
      setTimeout(() => {
        router.push(
          getSearchUrl({
            ...formData,
            order
          })
        );
      }, 100);
    };

    /* Show filters on mobile */
    const [showFilter, setShowFilter] = useState(false);

    return (
      <PropertyListWrapper
        style={paddingTop ? { paddingTop: `${paddingTop}px` } : {}}
      >
        <SocialSidebar color="red" />
        {filters && (
          <>
            {meta?.total_count !== 0 && (
              <Button
                className="filter--button"
                type="secondary shine"
                text="FILTRAR"
                onClick={() => setShowFilter(true)}
              />
            )}

            <FiltersContainer className={classes({ visible: showFilter })}>
              {meta?.total_count !== 0 && (
                <FiltersHeader>
                  <IconCloseWrapper
                    onClick={() => {
                      handleSubmit;
                      setShowFilter(false);
                    }}
                  >
                    <CloseIcon />
                  </IconCloseWrapper>
                </FiltersHeader>
              )}

              <FiltersWrapperDesk>
                <Select
                  className="input--general select"
                  options={[
                    { value: 1, label: "Venta" },
                    { value: 2, label: "Alquiler" },
                  ]}
                  isSearchable={false}
                  isMulti={true}
                  value={operationArray.filter((item) =>
                    formData.operation_type.includes(item.value)
                  )}
                  placeholder="Tipo de Operación"
                  onChange={(opt) => {
                    setFormData({
                      operation_type: opt.map(
                        (item: { value: number }) => item.value
                      ),
                    });
                  }}
                />

                <Select
                  className="input--general select"
                  options={propertiesSelectOptions}
                  isSearchable={false}
                  value={propertiesSelectOptions.filter(
                    (item) => formData.property_type === item.value
                  )}
                  placeholder="Tipo de Propiedad"
                  onChange={(opt) => {
                    setFormData({ property_type: opt.value });
                  }}
                />

                <Dropdown
                  className="input--general dropdown"
                  placeholder="Dormitorios"
                  close={close.rooms}
                  value={getDropdownValue(
                    formData.min_rooms,
                    formData.max_rooms,
                    "Dormitorios"
                  )}
                >
                  <DropdownRow>
                    <RowLabel>Min.</RowLabel>
                    <Input
                      className="dropdown--input"
                      type="number"
                      placeHolder="-"
                      min={0}
                      value={formData.min_rooms}
                      onChange={(e) => {
                        setFormData({ min_rooms: e.currentTarget.value });
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
                      className="dropdown--input"
                      type="number"
                      placeHolder="-"
                      min={formData?.min_rooms}
                      value={formData?.max_rooms}
                      onChange={(e) => {
                        setFormData({ max_rooms: e.currentTarget.value });
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

                <Dropdown
                  className="input--general dropdown"
                  placeholder="Baños"
                  close={close.baths}
                  value={getDropdownValue(
                    formData?.min_baths,
                    formData?.max_baths,
                    "Baños"
                  )}
                >
                  <DropdownRow>
                    <RowLabel>Min.</RowLabel>
                    <Input
                      className="dropdown--input"
                      type="number"
                      placeHolder="-"
                      min={0}
                      value={formData.min_baths}
                      onChange={(e) => {
                        setFormData({ min_baths: e.currentTarget.value });
                      }}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          setFormData({ min_baths: e?.currentTarget?.value });
                          setClose({ baths: !close.baths });
                        }
                      }}
                    />
                  </DropdownRow>
                  <DropdownRow>
                    <RowLabel>Max.</RowLabel>
                    <Input
                      className="dropdown--input"
                      type="number"
                      placeHolder="-"
                      min={0}
                      value={formData.max_baths}
                      onChange={(e) => {
                        setFormData({ max_baths: e.currentTarget.value });
                      }}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          setFormData({ max_baths: e?.currentTarget?.value });
                          setClose({ baths: !close.baths });
                        }
                      }}
                    />
                  </DropdownRow>
                </Dropdown>

                <Dropdown
                  className="input--general dropdown"
                  placeholder="Cocheras"
                  close={close.parking}
                  value={getDropdownValue(
                    formData?.parking_lot_from,
                    formData?.parking_lot_to,
                    "Cocheras"
                  )}
                >
                  <DropdownRow>
                    <RowLabel>Min.</RowLabel>
                    <Input
                      className="dropdown--input"
                      type="number"
                      placeHolder="-"
                      min={0}
                      value={formData.parking_lot_from}
                      onChange={(e) => {
                        setFormData({
                          parking_lot_from: e.currentTarget.value,
                        });
                      }}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          setFormData({
                            parking_lot_from: e?.currentTarget?.value,
                          });
                          setClose({ parking: !close.parking });
                        }
                      }}
                    />
                  </DropdownRow>
                  <DropdownRow>
                    <RowLabel>Max.</RowLabel>
                    <Input
                      className="dropdown--input"
                      type="number"
                      placeHolder="-"
                      min={0}
                      value={formData.parking_lot_to}
                      onChange={(e) => {
                        setFormData({ parking_lot_to: e.currentTarget.value });
                      }}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          setFormData({
                            parking_lot_to: e?.currentTarget?.value,
                          });
                          setClose({ parking: !close.parking });
                        }
                      }}
                    />
                  </DropdownRow>
                </Dropdown>

                <Dropdown
                  className="input--general dropdown"
                  placeholder="Precio"
                  value={`${getDropdownValue(
                    formData?.price_from,
                    formData?.price_to,
                    "USD"
                  )}`}
                >
                  <DropdownRow>
                    <Input
                      className="dropdown--input input--price no-things"
                      type="number"
                      placeHolder="-"
                      min={0}
                      value={formData.price_from}
                      onChange={(e) => {
                        setFormData({ price_from: e.currentTarget.value });
                      }}
                    />
                  </DropdownRow>
                  <DropdownRow>
                    <Input
                      className="dropdown--input input--price no-things"
                      type="number"
                      placeHolder="-"
                      min={0}
                      value={formData.price_to}
                      onChange={(e) => {
                        setFormData({ price_to: e.currentTarget.value });
                      }}
                    />
                  </DropdownRow>
                </Dropdown>

                <Select
                  className="input--general full select"
                  options={localidades}
                  isMulti={true}
                  value={localidades.filter((item) =>
                    formData.locations.includes(item.value)
                  )}
                  placeholder="Barrios"
                  hideSelectedOptions={true}
                  onChange={(opt) => {
                    setFormData({
                      locations: opt.map(
                        (item: { value: number }) => item.value
                      ),
                    });
                  }}
                />

                <Button
                  className="form--button"
                  text="Buscar"
                  type="secondary shine"
                  onClick={handleSubmit}
                />
              </FiltersWrapperDesk>

              <FiltersWrapperMobile>
                <Select
                  className="input--general full select"
                  options={localidades}
                  isMulti={true}
                  value={localidades.filter((item) =>
                    formData.locations.includes(item.value)
                  )}
                  placeholder="Barrios"
                  hideSelectedOptions={true}
                  onChange={(opt) => {
                    setFormData({
                      locations: opt.map(
                        (item: { value: number }) => item.value
                      ),
                    });
                  }}
                />

                <Select
                  className="input--general select"
                  options={[
                    { value: 1, label: "Venta" },
                    { value: 2, label: "Alquiler" },
                  ]}
                  isSearchable={false}
                  isMulti={true}
                  value={operationArray.filter((item) =>
                    formData.operation_type.includes(item.value)
                  )}
                  placeholder="Tipo de Operación"
                  onChange={(opt) => {
                    setFormData({
                      operation_type: opt.map(
                        (item: { value: number }) => item.value
                      ),
                    });
                  }}
                />

                <Select
                  className="input--general select"
                  options={propertiesSelectOptions}
                  isSearchable={false}
                  value={propertiesSelectOptions.filter(
                    (item) => formData.property_type === item.value
                  )}
                  placeholder="Tipo de Propiedad"
                  onChange={(opt) => {
                    setFormData({ property_type: opt.value });
                  }}
                />

                <RowFilterSubtitle>Precio</RowFilterSubtitle>
                <RowInputsMobile>
                  <Input
                    className="dropdown--input half"
                    type="number"
                    placeHolder="Desde"
                    min={0}
                    onChange={(e) => {
                      setFormData({ price_from: e.currentTarget.value });
                    }}
                  />
                  <Input
                    className="dropdown--input half"
                    type="number"
                    placeHolder="Hasta"
                    min={0}
                    onChange={(e) => {
                      setFormData({ price_to: e.currentTarget.value });
                    }}
                  />
                </RowInputsMobile>

                <RowFilterSubtitle>Dormitorios</RowFilterSubtitle>
                <RowInputsMobile>
                  <Input
                    className="dropdown--input half"
                    type="number"
                    placeHolder="Min."
                    min={0}
                    onChange={(e) => {
                      setFormData({ min_rooms: e.currentTarget.value });
                    }}
                  />
                  <Input
                    className="dropdown--input half"
                    type="number"
                    placeHolder="Max."
                    min={formData?.min_rooms}
                    onChange={(e) => {
                      setFormData({ max_rooms: e.currentTarget.value });
                    }}
                  />
                </RowInputsMobile>

                <RowFilterSubtitle>Baños</RowFilterSubtitle>
                <RowInputsMobile>
                  <Input
                    className="dropdown--input half"
                    type="number"
                    placeHolder="Min."
                    min={0}
                    onChange={(e) => {
                      setFormData({ min_baths: e.currentTarget.value });
                    }}
                  />
                  <Input
                    className="dropdown--input half"
                    type="number"
                    placeHolder="Max."
                    min={0}
                    onChange={(e) => {
                      setFormData({ max_baths: e.currentTarget.value });
                    }}
                  />
                </RowInputsMobile>

                <RowFilterSubtitle>Cocheras</RowFilterSubtitle>
                <RowInputsMobile>
                  <Input
                    className="dropdown--input half"
                    type="number"
                    placeHolder="Min."
                    min={0}
                    onChange={(e) => {
                      setFormData({ parking_lot_to: e.currentTarget.value });
                    }}
                  />
                  <Input
                    className="dropdown--input half"
                    type="number"
                    placeHolder="Max."
                    min={0}
                    onChange={(e) => {
                      setFormData({ parking_lot_from: e.currentTarget.value });
                    }}
                  />
                </RowInputsMobile>
                <RowInputsMobile>
                <Button
                  className="filter--button btn-mobile"
                  type="secondary shine"
                  text="Aplicar filtros"
                  onClick={handleSubmit}
                />
                </RowInputsMobile>

                {saveSearch && (
                  <RowContent className="bold save--search-mobile">
                    <SaveSearch
                      onSaved={() => userStore.saveSearch(query)}
                      saved={
                        !!userStore.searchs.find(
                          (item) =>
                            item.url ===
                            window.location.pathname + window.location.search
                        )
                      }
                    />
                  </RowContent>
                )}
              </FiltersWrapperMobile>
            </FiltersContainer>
          </>
        )}
        <Container>
          <TopContainer>
            <ContentWrapper>
              {back && (
                <RowContent className="bold">
                  <Link href={PATHS.ROOT} passHref>
                    <a>
                      <ArrowBackIcon className="left" /> VOLVER AL INICIO
                    </a>
                  </Link>
                </RowContent>
              )}

              {withCount && (
                <RowContent className="count">
                  {`${meta?.total_count} ${
                    meta?.total_count > 1 ? "Resultados" : "Resultado"
                  }`}
                </RowContent>
              )}
            </ContentWrapper>
            <ContentWrapper className="content--order">
              {saveSearch && (
                <RowContent className="bold save--search-desk">
                  <SaveSearch
                    onSaved={() => userStore.saveSearch(query)}
                    saved={
                      !!userStore.searchs.find(
                        (item) =>
                          item.url ===
                          window.location.pathname + window.location.search
                      )
                    }
                  />
                </RowContent>
              )}
              {filters && meta?.total_count !== 0 && (
                <RowContent
                  className={classes("bold order order--desk", {
                    high: formData.order === "DESC",
                  })}
                  onClick={() =>
                    handleOrderChange(formData.order === "ASC" ? "DESC" : "ASC")
                  }
                >
                  Ordenar por Precio <ChevronUpIcon className="order--icon" />
                </RowContent>
              )}
            </ContentWrapper>
          </TopContainer>
          <ListContainer className={classes({ "investment-list": investment })}>
            {properties?.map((item, k) => (
              <CardProp
                key={k}
                property={item}
                className="card--prop-home"
                liked={userStore.favorites.includes(item.id)}
                onLiked={() => userStore.toggleFavorite(item.id)}
                inversion={investment}
              />
            ))}
          </ListContainer>
          {meta?.total_count > meta?.limit && (
            <PaginationWrapper>
              {currentPage > 1 && (
                <Link
                  href={{
                    pathname: router.pathname,
                    query: { ...router.query, page: currentPage - 1 },
                  }}
                  passHref
                >
                  <PaginationNumber>{currentPage - 1}</PaginationNumber>
                </Link>
              )}
              <PaginationNumber className="active">
                {currentPage}
              </PaginationNumber>
              {maxPage >= currentPage + 1 && (
                <Link
                  href={{
                    pathname: router.pathname,
                    query: { ...router.query, page: currentPage + 1 },
                  }}
                  passHref
                >
                  <PaginationNumber>{currentPage + 1}</PaginationNumber>
                </Link>
              )}
            </PaginationWrapper>
          )}
          {withForm && <ContactForm full />}
        </Container>
      </PropertyListWrapper>
    );
  }
);
