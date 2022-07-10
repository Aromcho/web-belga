import React from "react";

import { CloseIcon } from "components/icons";
import { Button } from "components/button";

import {
  BusquedaContainer,
  BusquedaWrapper,
  CloseWrapper,
  QueryList,
  QueryColumn,
  Query,
  QueryProp,
} from "./busquedacard.styles";

export interface BusquedaCardProps {
  className?: string;
  onClickRemove?: () => void;
}

export const BusquedaCard = ({
  className,
  onClickRemove,
}: BusquedaCardProps) => {
  return (
    <BusquedaContainer className={className}>
      <CloseWrapper onClick={onClickRemove}>
        <CloseIcon />
      </CloseWrapper>
      <BusquedaWrapper>
        <QueryList>
          <QueryColumn>
            <Query>
              <QueryProp>Barrio</QueryProp>
              <QueryProp>Belgrano, Nuñez, Coghlan, Palermo</QueryProp>
            </Query>
            <Query>
              <QueryProp>Tipo de Operación</QueryProp>
              <QueryProp>Venta</QueryProp>
            </Query>
            <Query>
              <QueryProp>Tipo de Propiedad</QueryProp>
              <QueryProp>Casa, Departamento</QueryProp>
            </Query>
          </QueryColumn>
          <QueryColumn>
            <Query>
              <QueryProp>Dormitorios</QueryProp>
              <QueryProp>Min. 2</QueryProp>
            </Query>
            <Query>
              <QueryProp>Baños</QueryProp>
              <QueryProp>Min. 1</QueryProp>
            </Query>
            <Query>
              <QueryProp>Precio</QueryProp>
              <QueryProp>250.000</QueryProp>
            </Query>
          </QueryColumn>
        </QueryList>
      </BusquedaWrapper>
      <Button text="¿Buscar?" type="black" className="button--busqueda" />
    </BusquedaContainer>
  );
};
