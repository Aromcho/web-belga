import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const PropertyPDF = styled.table`
  width: 1100px;
  height: auto;
  font-family: "Montserrat", sans-serif;
`;
export const Header = styled.div`
  position: relative;
  width: 100%;
  background: white;
  display: flex;
  align-items: flex-start;
  text-align: left;
  margin-bottom: 15px;
`;


/* new version */
export const AddressSecundaryTitle = styled.p`
  font-size: 24px;
  line-height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  span {
    margin: 0 7px;
  }
    margin-left: 8px;
    font-weight: 500;

`;

export const AddressTitle = styled.span`
  font-size: 44px;
  `;
export const TitleNew = styled.span`
   padding-left: 35px;
  font-size: 24px;
  line-height: 26px;
  font-weight: 700;
  span {
    margin: 0 7px;
  }
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
export const Price = styled.span`
  height: 50%;
  font-size: 40px;
  font-weight: 600;
  text-align: end;
`;
export const ImgLogo = styled.img`
  width: 165px;
  height: 40px;
  margin-right: 30px;
  margin-top: 40px;
`;
export const MainPriceCoin = styled.span`
  font-size: 25px;
  font-weight: 600;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const MainPriceContainer = styled.div`
  
   margin-right: 30px;
   margin-left: 30px;
   margin-top: 30px;
  margin-bottom: 30px;
`;
export const MainPrice = styled.span`
  font-size: 30px;
  font-weight: 600px;
  color: black;
  display: flex;
  align-items: end;
  justify-content: end;
  margin-bottom: 10px;

  `;

export const MainTitlecontainer = styled.div`
  position: relative;
  top:-48px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  width: 100vw;
  padding-right: 10px;
`;
export const CenterHeader = styled.div`
  position: absolute;
  top: -10px;
  width: 100%;
  height: 100px;
  background: #F1B332;
  display: flex;
  justify-content: end;
  align-items: flex-center;
  text-align: left;
`;

export const CenterHeaderContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 14px 0 14px 22px;
  border-bottom: 1px solid #333;
`;

export const CenterHeaderTitle = styled.span`
  font-size: 24px;
  line-height: 26px;
  font-weight: 700;
`;

export const CenterHeaderSubtitle = styled.span`
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  margin-top: 10px;
`;

export const CenterColumn = styled.div`
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const GridContainer = styled.div`
position: relative;
  top:-52px;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0;
  padding-left: 35px;
  padding-right: 35px;
  gap: 20px;
`;

export const MainImage = styled.div`
  flex: 3;
`;

export const SmallImages = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
    gap: 20px;
`;
export const Rooms = styled.p`
  mergitn-top: 10px;

`;
/*------------------------------*/
export const Logo = styled.img`
  width: 130px;
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 14px 0 14px 22px;
`;

export const HeaderTitle = styled.span`
  font-size: 24px;
  line-height: 26px;
  font-weight: 700;
  span {
    margin: 0 7px;
  }
`;

export const HeaderSubtitle = styled.span`
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  margin-top: 10px;
  text-overflow: ellipsis;
  max-width: 940px;
  overflow: hidden;
  white-space: nowrap;
`;

export const HeaderLabel = styled.span`
  font-size: 10px;
  font-weight: 500;
  color: #c62025;
  position: absolute;
  right: 0;
  bottom: 9px;
  text-transform: uppercase;
`;

export const LeftColumn = styled.div`
  width: 50%;
  `;

export const RightColumn = styled.div`
  width: 50%;
`;

export const IconList = styled.div`
  display: flex;
  justify-content: center;
  gap: 70px;
  margin: 47px 0 63px;
`;

export const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const IconLabel = styled.span`
  font-size: 20px;
  text-align: center;
  margin-bottom: 22px;
`;

export const IconImage = styled.img`
  width: 46px;
  &.fix {
    width: 60px;
  }
`;

export const DescriptionText = styled.div`
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
`;

export const GalleryList = styled.div`
  display: flex;
  gap: 15px; /* Ajustar el espacio entre las imágenes */
  flex-wrap: wrap;
  &.fixes {
    margin-top: 15px;
  }
  
`;

export const GalleryItem = styled.div`
  width: calc(50% - 11px);
  height: 158px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 15px; /* Asegurar el mismo espacio vertical */
`;

export const GalleryItemImage = styled.img`
  width: calc(50% - 8px);
  
  `;


export const ContentWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 15px;
  padding: 0 35px;

`;

export const BottomWrapper = styled.div`
  margin-top: 30px;
  display: flex;
`;

export const BottomLeft = styled.div`
  width: calc(100% - 150px);
  display: flex;
  flex-direction: column;
`;

export const BottomRight = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid #c62025;
  display: flex;
  align-items: center;
  justify-content: center;
`;




export const PrintStyle = css`
  #pdfItem {
    display: none;
  }

  @media print {
    #pdfItem {
      display: block;
    }
    #propItem {
      display: none;
    }
    #backTop {
      display: none;
    }
    #socialSidebar {
      display: none;
    }

    #menuItem {
      display: none;
    }
    #contacto {
      display: none;
    }
    #menuFooter {
      display: none;
    }
  }

  @page {
    size: A4 landscape;
    margin: 70px 35px;
  }
`;
