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
  onSaved?: (e: any) => void;
}

export const SaveSearch = ({ className, onSaved }: SaveSearchProps) => {
  /* Handle Save Search*/
  const [isSaved, setIsSaved] = React.useState(false);

  React.useEffect(() => {
    if (onSaved) onSaved(isSaved);
  }, [isSaved]);

  return (
    <SaveSearchContainer
      className={classes(className, { saved: isSaved })}
      onClick={() => setIsSaved(!isSaved)}
    >
      <SaveText>GUARDAR BÚSQUEDA</SaveText>
      <IconWrapper>
        <PlusIcon />
      </IconWrapper>
    </SaveSearchContainer>
  );
};
