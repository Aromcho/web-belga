import React from "react";

import { RatingStart } from "components/ratingStart";

import {
  QuoteContainer,
  QuoteRating,
  QuoteText,
  QuoteAuthor,
  QuoteLogo,
} from "./quoteCard.styles";

export interface QuoteCardProps {
  className?: string;
  rating: number;
  quote: string;
  author: string;
  logo: string;
}

export const QuoteCard = ({
  className,
  rating,
  quote,
  author,
  logo,
}: QuoteCardProps) => {
  return (
    <QuoteContainer className={className}>
      <QuoteRating>
        <RatingStart itemSelected={rating} qtyItems={5} noSelect />
      </QuoteRating>
      <QuoteText>{quote}</QuoteText>
      <QuoteAuthor>{author}</QuoteAuthor>
      <QuoteLogo src={logo} />
    </QuoteContainer>
  );
};
