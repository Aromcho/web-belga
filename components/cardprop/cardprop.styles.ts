import styled from "@emotion/styled";

export const LikeWrapper = styled.div`
  width: 22px;
  height: 22px;
  align-items: center;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  z-index: 1;
  @media screen and (max-width: 992px) {
    width: 35px;
    height: 35px;
    position: relative;
    top: -6px;
  }
  svg {
    width: 100%;
    height: auto;
    transition: all 0.3s ease-in-out;
    path {
      transition: all 0.3s ease-in-out;
      fill: transparent;
      stroke: ${(props: any) => props.theme.black};
    }
  }
  &:hover {
    cursor: pointer;
    svg {
      transform: scale(1.2);
    }
  }
  &.liked {
    svg {
      path {
        fill: ${(props: any) => props.theme.black};
        stroke: ${(props: any) => props.theme.black};
      }
    }
    &:hover {
      svg {
        transform: scale(0.8);
      }
    }
  }
`;

export const Bedrooms = styled.div`
  width: 100%;
  max-width: 250px;
  font-size: 14px;
  font-weight: 500;
  color: ${(props: any) => props.theme.white};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Address = styled.div`
  width: 100%;
  max-width: 250px;
  font-size: 14px;
  font-weight: 500;
  color: ${(props: any) => props.theme.black};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Desc = styled.div`
  width: 100%;
  max-width: 300px;
  font-size: 16px;
  font-weight: 700;
  color: ${(props: any) => props.theme.black};
  margin-bottom: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const DescWrapper = styled.div`
  width: 100%;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px 30px 0;
  @media screen and (max-width: 992px) {
    padding: 20px 15px 0;
  }
`;

export const FeatureImg = styled.img`
  width: 44px;
  height: auto;
  flex: 0 0 auto;
  margin: 0 auto;
`;

export const FeatureText = styled.div`
  width: 100%;
  color: ${(props: any) => props.theme.black};
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 3px;
`;

export const FeaturesItem = styled.li`
  width: auto;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-flow: column;
  &:first-of-type {
    margin-left: -5px;
  }
`;

export const FeaturesList = styled.ul`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  &.center{
    gap: 15%;
    justify-content: center;
  }
`;

export const FeaturesWrapper = styled.div`
  width: 100%;
  padding: 20px 30px 20px 36px;
  @media screen and (max-width: 992px) {
    padding: 30px 15px 20px 19px;
  }
`;

export const FooterProp = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

export const EmptyText = styled.span`
  width: 90%;
  max-width: 200px;
  color: ${(props: any) => props.theme.black};
  font-size: 16px;
  font-weight: 500;
  margin: 0 auto;
  text-align: center;
  opacity: 0.5;
`;

export const EmptyMedia = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props: any) => props.theme.gray10};
  svg {
    width: 100%;
    max-width: 120px;
    height: auto;
    color: ${(props: any) => props.theme.black};
    opacity: 0.25;
  }
`;

export const IsolatedImage = styled.img`
  width: 100%;
  height: 570px;
  background-position: center;
  background-size: cover;
  position: absolute;
  transform: scale(1.05);
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 380px;
  position: relative;
  @media screen and (max-width: 992px) {
    height: 220px;
  }
`;

export const Currency = styled.div`
  color: ${(props: any) => props.theme.black};
  font-size: 14px;
  font-weight: 600;
  display: block;
  text-transform: uppercase;
  white-space: nowrap;
  margin-right: 8px;
`;

export const Price = styled.div`
  align-items: center;
  justify-content: flex-end;
  color: ${(props: any) => props.theme.black};
  display: flex;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  white-space: nowrap;
  margin-left: auto;
`;

export const Operation = styled.div`
  width: auto;
  color: ${(props: any) => props.theme.black};
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  text-transform: uppercase;
`;

export const HeadProp = styled.div`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 0 30px;
  @media screen and (max-width: 992px) {
    padding: 0 15px;
  }
`;

export const CardPropContainer = styled.div`
  width: 100%;
  max-width: 580px;
  height: 580px;
  border: 1px solid ${(props: any) => props.theme.black};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  position: relative;
  @media screen and (max-width: 992px) {
    height: auto;
  }
  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    @media screen and (max-width: 992px) {
      transform: none;
      box-shadow: none;
    }
  }

  .inversion--link {
    width: 100%;
    height: 100%;
    z-index: 5;
    position: absolute;
    &:hover {
      cursor: pointer;
    }
  }

  &.inversion {
    max-width: 380px;
    height: 730px;
    background-color: ${(props: any) => props.theme.black};
    ${HeadProp} {
      background-color: ${(props: any) => props.theme.black};
      justify-content: flex-end;
      ${Price} {
        color: ${(props: any) => props.theme.white};
        ${Currency} {
          color: ${(props: any) => props.theme.white};
          margin-left: 10px;
        }
      }
    }

    ${ImageWrapper} {
      height: 570px;
      overflow: hidden;
    }

    ${FooterProp} {
      ${Info} {
        background-color: ${(props: any) => props.theme.black};
        ${DescWrapper} {
          ${Desc} {
            color: ${(props: any) => props.theme.white};
            margin-bottom: 10px;
          }
          ${Address} {
            color: ${(props: any) => props.theme.white};
            margin-bottom: 10px;
          }
        }
      }
    }
  }
`;
