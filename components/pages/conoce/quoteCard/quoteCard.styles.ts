import styled from "@emotion/styled";

export const QuoteLogo = styled.img`
  width: 100%;
  max-width: 20px;
  height: auto;
  display: block;
  margin: 0 auto;
`;

export const QuoteAuthor = styled.div`
  font-size: 16px;
  margin-bottom: 30px;
  font-weight: 600;
`;

export const QuoteText = styled.div`
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  text-align: justify;
  margin-bottom: 30px;
`;

export const QuoteRating = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const QuoteContainer = styled.div`
  width: 100%;
  padding: 30px;
  border: 1px solid ${(props: any) => props.theme.black};
  color: ${(props: any) => props.theme.black};
`;
