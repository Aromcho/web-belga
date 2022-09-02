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
import { formatToMoney, getDropdownValue } from "helpers";
import { getSearchUrl } from "helpers/tokko";

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
            {search.locid?.length > 0 && (
              <Query>
                <QueryProp>Barrio</QueryProp>
                <QueryProp className="capitalize">
                  {search.locid?.join(", ")}
                </QueryProp>
              </Query>
            )}
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
            {
              <Query>
                <QueryProp>Cocheras</QueryProp>
                <QueryProp>
                  {getDropdownValue(
                    search?.parking_lot_to ?? 1,
                    search?.parking_lot_from ?? 5
                  )}
                </QueryProp>
              </Query>
            }
          </QueryColumn>
          <QueryColumn>
            {
              <Query>
                <QueryProp>Dormitorios</QueryProp>
                <QueryProp>
                  {getDropdownValue(
                    search?.rooms_from ?? 1,
                    search?.rooms_to ?? 5
                  )}
                </QueryProp>
              </Query>
            }
            {
              <Query>
                <QueryProp>Baños</QueryProp>
                <QueryProp>
                  {getDropdownValue(
                    search?.baths_to ?? 2,
                    search?.baths_from ?? 5
                  )}
                </QueryProp>
              </Query>
            }
            {
              <Query>
                <QueryProp>Precio</QueryProp>
                <QueryProp>
                  {getDropdownValue(
                    search?.price_from ?? 1,
                    search?.price_to ?? "",
                    "USD"
                  )}
                  {!search?.price_to &&
                    ` - Max. USD ${formatToMoney(3000000, false, "", false)}`}
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
