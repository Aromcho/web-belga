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
  link?: string;
  rating: number;
  quote: string;
  author: string;
  logo: string;
  id?: string;
}

export const QuoteCard = ({
  className,
  link,
  rating,
  quote,
  author,
  logo,
  id
}: QuoteCardProps) => {
  return (
    <QuoteContainer href={link ?? " "} target="_blank" className={className}>
      <QuoteRating>
        <RatingStart itemSelected={rating} qtyItems={5} noSelect />
      </QuoteRating>
      <QuoteText>{quote}</QuoteText>
      <QuoteAuthor>{author}</QuoteAuthor>
      <QuoteLogo src={logo} id={id} loading="lazy" />
    </QuoteContainer>
  );
};
