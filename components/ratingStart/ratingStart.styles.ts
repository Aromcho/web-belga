import styled from "@emotion/styled";

export const Msg = styled.span`
  color: ${(props: any) => props.theme.black};
  font-size: 14px;
  white-space: nowrap;
  margin-left: 10px;
`;

export const Item = styled.span`
  font-size: 1.4rem;
  transition: all 0.3s ease-in-out;
`;

export const Button = styled.div`
  align-items: center;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  outline: none;
  cursor: pointer;
  margin: 0 6px 0 0;
  padding: 0;
  &:last-of-type {
    margin-right: 0;
  }

  &.on {
    ${Item} {
      color: ${(props: any) => props.theme.black};
    }
  }
  &.off {
    ${Item} {
      color: transparent;
      -webkit-text-stroke: 1px ${(props: any) => props.theme.black};
    }
  }
`;

export const RatingStartContainer = styled.div`
  display: flex;
  align-items: center;
  &.noSelect {
    pointer-events: none;
  }
`;
