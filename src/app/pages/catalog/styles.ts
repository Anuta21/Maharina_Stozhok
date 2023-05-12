import styled, { css } from "styled-components";
import { Color, Images, S2, ST4 } from "../../common/assets";
import { IButtonProps, IFilterProps } from "./models";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1250px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 20px 0px 20px;

  @media (max-width: 1024px) {
    margin: 40px 0 0 0;
    justify-content: space-evenly;
  }
`;

export const RightPart = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BooksSetWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 60px;
  grid-row-gap: 30px;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
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

export const SearchInputField = styled.input`
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

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export const MobileFilterHeader = styled.div`
  display: none;
  @media (max-width: 480px) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 50px;
    border-top: 1px solid ${Color.Black};
    border-bottom: 1px solid ${Color.Black};
    margin-bottom: 20px;
  }
`;

export const MobileFilterWrapper = styled.div`
  position: absolute;
  top: 122px;

  visibility: hidden;

  @media (max-width: 480px) {
    visibility: visible;
  }
`;

export const OrdinaryFilterWrapper = styled.div`
  visibility: visible;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const FilterWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 480px) {
    background-color: ${Color.Sandy};
    border-bottom: 1px solid ${Color.Black};
    width: 100vw;
  }
`;

export const FilterHeader = styled.div`
  border-bottom: 1px solid ${Color.Black};
  padding-bottom: 25px;
  width: 100%;
`;

export const FilterItem = styled.div<IFilterProps>`
  border-bottom: 1px solid ${Color.Black};
  padding: 22px 0;
  width: 100%;
  ${(props) =>
    props.isMobile &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
`;

export const FilterShowedItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button<IButtonProps>`
  border: 1px solid ${Color.Black};
  margin-bottom: 10px;
  background-color: ${(props) => (props.isDark ? Color.Black : Color.Sandy)};
  height: 40px;
  width: 180px;

  cursor: pointer;
`;

export const PlusMinusButton = styled(S2)`
  margin: 0 10px;

  cursor: pointer;
`;

export const PriceInputFieldWrapper = styled.div`
  position: relative;
`;

export const PriceInputField = styled.input`
  border: 1px solid ${Color.Black};

  background-color: ${Color.Sandy};
  height: 30px;
  width: 60px;
  padding-left: 5px;

  :active,
  :focus,
  :hover {
    outline: none;
    border-color: ${Color.Highlight};
  }

  ::placeholder {
    font-family: "Playfair Display";
    font-size: 12px;
    color: ${Color.Highlight};
    opacity: 1;
  }

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const UAHText = styled(ST4)`
  position: absolute;
  top: 10px;
  right: 5px;
`;

export const PriceWrapper = styled.div`
  width: 100%;
  margin-top: 22px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const PriceFilterItem = styled.div<IFilterProps>`
  width: 100%;
  margin: 22px 0;
  ${(props) =>
    props.isMobile &&
    css`
      text-align: center;
    `}
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0 0 0;
`;

export const ListItem = styled.li`
  font-family: "Playfair Display";
  padding-bottom: 8px;

  cursor: pointer;

  :active,
  :focus,
  :hover {
    color: ${Color.Highlight};
  }
`;
