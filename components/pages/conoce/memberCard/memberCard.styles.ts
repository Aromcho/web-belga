import styled from "@emotion/styled";

export const InfoPos = styled.div`
  width: 100%;
  max-width: 230px;
  font-size: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  margin: 0 auto;
`;

export const InfoName = styled.div`
  width: 100%;
  max-width: 230px;
  margin: 0 auto 8px;
  font-size: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
`;

export const MemberInfo = styled.div`
  width: 100%;
  height: 130px;
  align-items: center;
  background-color: ${(props: any) => props.theme.white};
  color: ${(props: any) => props.theme.black};
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

export const MemberImg = styled.div`
  width: 100%;
  height: 240px;
  align-items: center;
  background-color: ${(props: any) => props.theme.gray30};
  background-position: center;
  background-size: cover;
  flex: 0 0 auto;
  background-repeat: no-repeat;
  display: flex;
  flex-flow: column;
  justify-content: center;
  filter: grayscale(1);
  transition: all 0.3s ease-in-out;
`;

export const BorderCard = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: inset 0px 0px 0px 1px transparent;
  transition: all 0.3s ease-in-out;
  pointer-events: none;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
`;

export const StaffMember = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-flow: column;
  justify-content: center;
  overflow: hidden;
  position: relative;
  &:hover {
    ${BorderCard} {
      box-shadow: inset 0px 0px 0px 1px ${(props: any) => props.theme.black};
    }
    ${MemberImg} {
      filter: grayscale(0);
    }
    ${MemberInfo} {
      ${InfoName} {
        font-weight: 600;
      }
    }
  }
`;
