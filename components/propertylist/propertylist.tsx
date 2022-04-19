import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { observer } from 'mobx-react-lite';

import { CardProp } from 'components/cardprop';
import { ArrowBackIcon, CirclePlusIcon } from 'components/icons';
import { ContactForm } from 'components/contactform';

import { classes, Property } from 'helpers';
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
}

export const PropertyList = observer(({meta, properties, filters = true, saveSearch = true, investment = false}: propertylistProps) => {

  const {
    rootStore: { userStore }
  } = useStore();

  const router = useRouter();
  const currentPage = (meta.offset / meta.limit) + 1;
  const maxPage = Math.ceil(meta.total_count / meta.limit);

  return (
    <PropertyListWrapper>
      {filters && <FiltersContainer>
        
      </FiltersContainer>}
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
    </PropertyListWrapper>
  );
});
