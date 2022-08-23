import styled from '@emotion/styled';

export const DropdownStyled = styled.div`
  width: 100%;
  height: 40px;
  background-color: #ffffff;
  border-color: #ffffff;
  border-radius: 0;
  margin: 0 auto;
  @media screen and (max-width: 992px) {
    height: 38px;
  }
`;

export const Label = styled.span`
  height: 100%;
  align-items: center;
  color: #000000;
  cursor: default;
  display: flex;
  font-size: 14px;
  font-weight: 300;
  padding: 0 25px;
`;

export const List = styled.div`
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 5px 10px 3px rgba(0, 0, 0, 0.18);
  padding: 16px 24px;
  z-index: 99999;
  position: relative;
  margin-top: 4px;
`;

export const DivClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
