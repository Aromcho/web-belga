import React from "react";
import { classes } from "helpers";

import { PlusIcon } from "components/icons";

import {
  SaveSearchContainer,
  SaveText,
  IconWrapper,
} from "./savesearch.styles";

export interface SaveSearchProps {
  className?: string;
  saved?: boolean;
  onSaved?: () => void;
}

export const SaveSearch = ({ className, onSaved, saved }: SaveSearchProps) => {
  
  const [isLiked, setIsLiked] = React.useState(false);

  React.useEffect(() => {
    if(typeof saved === "boolean") setIsLiked(saved);
  }, [saved]);


  const handleSaveSearch = () => {
    if (onSaved) onSaved();
  }

  return (
    <SaveSearchContainer
      className={classes(className, { saved: isLiked })}
      onClick={handleSaveSearch}
    >
      <SaveText>GUARDAR BÚSQUEDA</SaveText>
      <IconWrapper>
        <PlusIcon />
      </IconWrapper>
    </SaveSearchContainer>
  );
};
