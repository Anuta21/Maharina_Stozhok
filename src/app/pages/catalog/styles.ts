import styled from "styled-components";
import { Color, Images } from "../../common/assets";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1250px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

export const FilterComp = styled.div`
  width: 200px;
  height: 600px;
  border: 1px solid black;
`;

export const RightPart = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BooksSetWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 100px;
  grid-row-gap: 30px;
  justify-items: center;
`;

export const BookCardWrapper = styled.div`
  width: 200px;
  height: 300px;
  padding: 10px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  :hover {
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
`;

export const BookImage = styled.img`
  margin: 10px 0;
  width: 180px;
  height: 270px;
`;

export const InputField = styled.input`
  margin-bottom: 30px;
  border: 1px solid ${Color.Black};

  background-color: ${Color.Sandy};
  height: 30px;
  padding-left: 40px;
  background: url(${Images.search}) no-repeat scroll 7px 6px;

  :active,
  :focus,
  :hover {
    outline: none;
    border-color: ${Color.Highlight};
  }

  ::placeholder {
    font-family: "Playfair Display";
    font-size: 16px;
    color: ${Color.Highlight};
    opacity: 1;
  }
`;

export const PaginationWrapper = styled.div`
  position: relative;
  padding: 30px 0px;
  display: flex;
  justify-content: flex-end;
`;
