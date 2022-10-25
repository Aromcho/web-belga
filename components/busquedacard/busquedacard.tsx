import React from "react";
import { useRouter } from "next/router";

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
import { getDropdownValue } from "helpers";

export interface BusquedaCardProps {
  className?: string;
  onRemove?: () => void;
  search: any;
}

export const BusquedaCard = ({
  className,
  onRemove,
  search,
}: BusquedaCardProps) => {
  const router = useRouter();

  return (
    <BusquedaContainer className={className}>
      <CloseWrapper onClick={onRemove}>
        <CloseIcon />
      </CloseWrapper>
      <BusquedaWrapper>
        <QueryList>
          <QueryColumn>
            {search.opid && (
              <Query>
                <QueryProp>Tipo de Operación</QueryProp>
                <QueryProp className="capitalize">{search.opid}</QueryProp>
              </Query>
            )}
            {search.prid && (
              <Query>
                <QueryProp>Tipo de Propiedad</QueryProp>
                <QueryProp className="capitalize">{search.prid}</QueryProp>
              </Query>
            )}
            <Query>
              <QueryProp>Cocheras</QueryProp>
              <QueryProp>
                {getDropdownValue(
                  search?.parking_lot_from,
                  search?.parking_lot_to,
                  undefined,
                  true
                )}
              </QueryProp>
            </Query>
            <Query>
              <QueryProp>Barrio</QueryProp>
              <QueryProp className="capitalize">
                {search.locid?.join(", ") ?? "-"}
              </QueryProp>
            </Query>
          </QueryColumn>
          <QueryColumn>
            {
              <Query>
                <QueryProp>Dormitorios</QueryProp>
                <QueryProp>
                  {getDropdownValue(
                    search?.rooms_from,
                    search?.rooms_to,
                    undefined,
                    true
                  )}
                </QueryProp>
              </Query>
            }
            {
              <Query>
                <QueryProp>Baños</QueryProp>
                <QueryProp>
                  {getDropdownValue(
                    search?.baths_from,
                    search?.baths_to,
                    undefined,
                    true
                  )}
                </QueryProp>
              </Query>
            }
            {
              <Query>
                <QueryProp>Precio</QueryProp>
                <QueryProp>
                  {getDropdownValue(
                    search?.price_from,
                    search?.price_to,
                    "USD",
                    true
                  )}
                </QueryProp>
              </Query>
            }
          </QueryColumn>
        </QueryList>
      </BusquedaWrapper>
      <Button
        text="IR A LA BÚSQUEDA"
        type="black"
        className="button--busqueda"
        onClick={(e: any) => {
          e.preventDefault();
          router.push(search.url);
        }}
      />
    </BusquedaContainer>
  );
};
