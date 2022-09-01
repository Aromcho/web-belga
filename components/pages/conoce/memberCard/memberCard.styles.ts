import styled from "@emotion/styled";

export const InfoPos = styled.div`
  width: 100%;
  max-width: 230px;
  font-size: 13px;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  margin: 0 auto;
  @media screen and (max-width: 640px) {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    text-align: left;
  }
`;

export const InfoName = styled.div`
  width: 100%;
  max-width: 230px;
  margin: 0 auto 8px;
  font-size: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  @media screen and (max-width: 640px) {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    text-align: left;
    margin: 0 auto 10px;
  }
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
  @media screen and (max-width: 640px) {
    height: 80px;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    padding: 15px 0;
  }
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
  @media screen and (max-width: 640px) {
    height: 163px;
    filter: grayscale(0);
  }
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
  @media screen and (max-width: 640px) {
    box-shadow: none;
  }
`;

export const StaffMember = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-flow: column;
  justify-content: center;
  overflow: hidden;
  position: relative;
  @media screen and (max-width: 640px) {
    pointer-events: none;
  }
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

  &.right--info {
    ${MemberInfo} {
      @media screen and (max-width: 640px) {
        align-items: flex-end;
        justify-content: flex-end;
        text-align: right;
      }
      ${InfoPos}, ${InfoName} {
        @media screen and (max-width: 640px) {
          text-align: right;
        }
      }
    }
  }
`;
