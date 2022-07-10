import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { observer } from 'mobx-react-lite';

import { CardProp } from 'components/cardprop';
import { ArrowBackIcon, CirclePlusIcon } from 'components/icons';
import { ContactForm } from 'components/forms/contactform';
import { Select } from 'components/select';
import { Container } from 'components/layout';

import { classes, getDropdownValue, Property } from 'helpers';
import { neighborhoods } from 'helpers/neighborhoods';
import { getSearchUrl, operationArray, operationTypes, propertiesSelectOptions, propertyTypes } from 'helpers/tokko';
import { useMergeState } from 'helpers/hooks';
import { useStore } from 'stores';
import { PATHS } from 'config';

import {
  FiltersContainer,
  PropertyListWrapper,
  ListContainer,
  TopContainer,
  ContentWrapper,
  RowContent,
  PaginationWrapper,
  PaginationNumber
} from './propertylist.styles';

import { DropdownRow, RowLabel } from 'components/pages/home.styles';
import { Dropdown } from 'components/dropdown';
import { Input } from 'components/input';
import { Button } from 'components/button';

export interface propertylistProps {
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
}

export const PropertyList = observer(({query, meta, properties, filters = true, saveSearch = true, investment = false}: propertylistProps) => {

  const { rootStore: { userStore } } = useStore();

  React.useEffect(() => {
    if(query?.opid) setFormData({operation_type: operationTypes[query.opid].toString()?.split(',').map((item: string) => parseInt(item))});
    if(query?.prid) setFormData({property_type: propertyTypes[query?.prid]});
    if(query?.locid) setFormData({locations: localidades.filter(item => query?.locid.includes(item.label.toLowerCase().replace(' ', '-'))).map(item => item.value)});
    if(query?.rooms_from) setFormData({min_rooms: query?.rooms_from})
    if(query?.rooms_to) setFormData({max_rooms: query?.rooms_to})
  }, [query])

  const [formData, setFormData] = useMergeState<any>({
    locations: [],
    min_rooms: 0,
    max_rooms: 0,
    min_baths: 0,
    max_baths: 0,
    operation_type: [1],
    property_type: 0,
    price_from: 0,
    price_to: 0
  })

  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(getSearchUrl(formData));
  };

  const currentPage = (meta.offset / meta.limit) + 1;
  const maxPage = Math.ceil(meta.total_count / meta.limit);

  const localidades = neighborhoods.map(item => ({value: item.location_id, label: item.location_name}))

  return (
    <PropertyListWrapper>
      {filters && 
        <FiltersContainer>
          <Select 
            className="input--general full"
            options={localidades}
            isMulti={true}
            value={localidades.filter(item => formData.locations.includes(item.value))}
            placeholder="Barrios"
            hideSelectedOptions={true}
            onChange={(opt) => {
              setFormData({locations: opt.map((item: {value: number}) => item.value)})
            }}
          />
          <Select 
            className="input--general"
            options={[{value: 1, label: "Venta"}, {value: 2, label: "Alquiler"}]}
            isSearchable={false}
            isMulti={true}
            value={operationArray.filter(item => formData.operation_type.includes(item.value))}
            placeholder="Tipo de operación"
            onChange={(opt) => {
              setFormData({operation_type: opt.map((item: {value: number}) => item.value)})
            }}
          />

          <Select 
            className="input--general"
            options={propertiesSelectOptions}
            isSearchable={false}
            value={propertiesSelectOptions.filter(item => formData.property_type === item.value)}
            placeholder="Tipo de propiedad"
            onChange={(opt) => {
              setFormData({property_type: opt.value})
            }}
          />

          <Dropdown 
            className="input--general"
            placeholder="Dormitorios"
            value={getDropdownValue(formData.min_rooms, formData.max_rooms, 'dormitorios')}
          >
            <DropdownRow>
              <RowLabel>Min.</RowLabel>
              <Input
                className="dropdown--input"
                type='number'
                placeHolder='-'
                min={0}
                value={formData.min_rooms}
                onChange={(e) => {
                  setFormData({min_rooms: e.currentTarget.value})
                }}
              />
            </DropdownRow>
            <DropdownRow>
              <RowLabel>Max.</RowLabel>
              <Input
                className="dropdown--input"
                type='number'
                placeHolder='-'
                min={formData.min_rooms}
                value={formData.max_rooms}
                onChange={(e) => {
                  setFormData({max_rooms: e.currentTarget.value})
                }}
              />
            </DropdownRow>
          </Dropdown>

          <Dropdown 
            className="input--general"
            placeholder="Baños"
            value={getDropdownValue(formData.min_baths, formData.max_baths, 'baños')}
          >
            <DropdownRow>
              <RowLabel>Min.</RowLabel>
              <Input
                className="dropdown--input"
                type='number'
                placeHolder='-'
                min={0}
                value={formData.min_baths}
                onChange={(e) => {
                  setFormData({min_baths: e.currentTarget.value})
                }}
              />
            </DropdownRow>
            <DropdownRow>
              <RowLabel>Max.</RowLabel>
              <Input
                className="dropdown--input"
                type='number'
                placeHolder='-'
                min={0}
                value={formData.max_baths}
                onChange={(e) => {
                  setFormData({max_baths: e.currentTarget.value})
                }}
              />
            </DropdownRow>
          </Dropdown>

          <Button className="form--button" text='Buscar' type='secondary' onClick={handleSubmit} />
    
        </FiltersContainer>
      }
      <Container>
        <TopContainer>
          <ContentWrapper>
            <RowContent className='bold'>
              <Link href={PATHS.ROOT} passHref>
                <a>
                  <ArrowBackIcon className="left" /> VOLVER AL INICIO
                </a>
              </Link>
            </RowContent>
            <RowContent className='count'>
              {meta.total_count} resultados
            </RowContent>
          </ContentWrapper>
          <ContentWrapper>
            {saveSearch && <RowContent className='bold'>
              GUARDAR BÚSQUEDA <CirclePlusIcon className="right" />
            </RowContent>}
          </ContentWrapper>
        </TopContainer>
        <ListContainer className={classes({'investment-list': investment})}>
          {properties.map((item, k) => (
            <CardProp
              key={k}
              property={item}
              className='card--prop-home'
              liked={userStore.favorites.includes(item.id)}
              onLiked={() => userStore.toggleFavorite(item.id)}
              inversion={investment}
            />
          ))}
        </ListContainer>
        {meta.total_count > meta.limit &&
          <PaginationWrapper>
            {currentPage > 1 && <Link href={{pathname: router.pathname, query: {...router.query, page: currentPage - 1}}} passHref><PaginationNumber>{currentPage - 1}</PaginationNumber></Link>}
            <PaginationNumber className="active">{currentPage}</PaginationNumber>
            {maxPage >= currentPage + 1 && <Link href={{pathname: router.pathname, query: {...router.query, page: currentPage + 1}}} passHref><PaginationNumber>{currentPage + 1}</PaginationNumber></Link>}
          </PaginationWrapper>
        }
        <ContactForm className='full' />
      </Container>
    </PropertyListWrapper>
  );
});
