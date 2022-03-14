import styled from "@emotion/styled";


export const Line = styled.h2`
  width: 100%;
  height: 1px;
  background-color: ${(props: any) => props.theme.secondary};
`;

export const TitleText = styled.h2`
  width: auto;
  align-items: center;
  color: ${(props: any) => props.theme.black};
  font-size: 24px;
  font-weight: 500;
  display: flex;
  margin: 0 15px 0 0;
  text-align: left;
  white-space: nowrap;
`;

export const TitleContainer = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  margin: 0 auto 70px;
`;
