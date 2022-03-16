import styled from "@emotion/styled";

export const FeedbackContainer = styled.div`
  width: 100%;
  max-width: 450px;
  border-radius: 16px;
  color: ${(props: any) => props.theme.white};
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  padding: 10px 15px;
  margin: 20px 0;
  &.error{
    background-color: ${(props: any) => props.theme.error};
  }
  &.success{
    background-color: ${(props: any) => props.theme.success};
  }
`;