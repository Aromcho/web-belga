import styled from "@emotion/styled";

export const GalleryProp = styled.div`
  width: 100%;
`;

export const DescText = styled.div`
  width: 100%;
  color: ${(props: any) => props.theme.black};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

export const DescTitle = styled.div`
  width: 100%;
  color: ${(props: any) => props.theme.black};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

export const FtBottom = styled.div`
  color: ${(props: any) => props.theme.black};
  font-size: 12px;
  font-weight: 500;
  margin: 0 auto;
`;

export const FtImg = styled.img`
  width: 100%;
  max-width: 50px;
  height: auto;
  margin: -20px auto -3px;
`;

export const FtHead = styled.div`
  color: ${(props: any) => props.theme.black};
  font-size: 15px;
  font-weight: 600;
  margin: 0 auto 20px;
`;

export const Feature = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
`;

export const FeaturesGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 40px;
  align-items: center;
  justify-content: center;
`;

export const BodyFeatures = styled.div`
  width: 50%;
`;

export const BodyDesc = styled.div`
  width: 50%;
`;

export const BodyProp = styled.div`
  width: 98%;
  display: flex;
  gap: 3%;
  justify-content: space-between;
  margin-bottom: 30px;
  margin: 0 auto;
`;

export const HeadShare = styled.div`
  align-items: center;
  display: flex;
  color: ${(props: any) => props.theme.black};
  display: flex;
  font-size: 16px;
  font-weight: 500;
  a {
    svg {
      width: 20px;
      height: auto;
      color: ${(props: any) => props.theme.black};
      margin-left: 10px;
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      svg {
        color: ${(props: any) => props.theme.secondary};
      }
    }
  }
`;

export const HeadInfo = styled.div`
  align-items: center;
  display: flex;
  color: ${(props: any) => props.theme.black};
  display: flex;
  font-size: 16px;
  font-weight: 500;
`;

export const HeadInfoShare = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const HeadDivisor = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props: any) => props.theme.black};
  margin: 20px auto;
`;

export const HeadPrice = styled.div`
  align-items: center;
  display: flex;
  color: ${(props: any) => props.theme.black};
  display: flex;
  font-size: 24px;
  font-weight: 500;
`;

export const HeadAddress = styled.div`
  align-items: center;
  color: ${(props: any) => props.theme.black};
  display: flex;
  font-size: 24px;
  font-weight: 500;
  margin-right: 5px;
`;

export const HeadAddressPrice = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const HeadProp = styled.div`
  width: 100%;
  margin: 80px 0 40px;
`;

export const BackWrapper = styled.div`
  .back--link {
    align-items: center;
    display: flex;
    color: ${(props: any) => props.theme.black};
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    svg {
      width: 24px;
      height: auto;
      display: block;
      transition: all 0.3s ease-in-out;
      margin-right: 5px;
    }
    &:hover {
      svg {
        transform: translateX(-5px);
      }
    }
  }
`;

export const PropContainer = styled.div`
  width: 100%;
  padding: 150px 0 50px;
`;
