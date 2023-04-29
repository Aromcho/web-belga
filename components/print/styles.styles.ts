import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const PropertyPDF = styled.table`
  width: 1100px;
  font-family: "Montserrat", sans-serif;
  font-weight: normal;
`;

export const Header = styled.div`
  width: 100%;
  background: white;
  display: flex;
  align-items: flex-start;
  text-align: left;
  position: relative;
  margin-bottom: 25px;
`;

export const Logo = styled.img`
  width: 130px;
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 14px 0 14px 22px;
  border-bottom: 1px solid black;
`;

export const HeaderTitle = styled.span`
  font-size: 24px;
  line-height: 26px;
  font-weight: 700;
  span {
    margin: 0 7px;
  }
`

export const HeaderSubtitle = styled.span`
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  margin-top: 10px;
  text-overflow: ellipsis;
  max-width: 940px;
  overflow: hidden;
  white-space: nowrap;
`

export const HeaderLabel = styled.span`
  font-size: 10px;
  font-weight: 500;
  color: #C62025;
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
  justify-content: space-around;
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
  &.fix{
    width: 60px;
  }
`;

export const DescriptionText = styled.div`
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
  b {
    font-weight: 700;
  }

  i {
    font-style: italic;
  }
`;

export const GalleryList = styled.div`
  display: flex;
  gap: 22px;
  flex-flow: wrap;
  &.fixes{
    margin-top: 30px;
  }
`;

export const GalleryItem = styled.div`
  width: calc(50% - 11px);
  height: 164px;
  /* aspect-ratio: 2/1; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const GalleryItemImage = styled.img`
  width: calc(50% - 8px);
`;

export const ContentWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 30px;
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
  border: 1px solid #C62025;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Rooms = styled.span`
  height: 50%;
  font-size: 40px;
  text-align: center;
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Price = styled.span`
  height: 50%;
  font-size: 40px;
  font-weight: 600;
  color: white;
  background-color: #C62025;
  text-align: center;
  padding: 15px 0;
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

export const Divider = styled.hr`
  width: 100%;
  height: 4px;
  background-color: #000000;
  margin: 30px 0;
`;

export const Disclaimer = styled.p`
  font-size: 10px;
  color: #000000;
  font-weight: 400;
`;