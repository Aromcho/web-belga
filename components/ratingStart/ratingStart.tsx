import { classes } from 'helpers';
import React from 'react';

import {
  RatingStartContainer,
  Button,
  Item,
  Msg
} from './ratingStart.styles';

export interface RatingStartProps {
  className?: string;
  qtyItems?: number;
  itemSelected?: number;
  noSelect?: boolean;
  msg?: boolean;
}

export const RatingStart = ({
  className,
  qtyItems = 5,
  itemSelected = 0,
  noSelect,
  msg
}: RatingStartProps) => {
  const [rating, setRating] = React.useState(itemSelected);
  const [hover, setHover] = React.useState(itemSelected);

  return (
    <RatingStartContainer className={classes(className, { noSelect })}>
      {[...Array(qtyItems)].map((star: any, index: number) => {
        index += 1;
        return (
          <Button
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <Item>&#9733;</Item>
          </Button>
        );
      })}
      {msg &&
        <Msg>
          {rating === 1 && 'Pésimo'}
          {rating === 2 && 'Malo'}
          {rating === 3 && 'Bueno'}
          {rating === 4 && 'Muy bueno'}
          {rating === 5 && '¡Excelente!'}
        </Msg>
      }
    </RatingStartContainer>
  );
};

