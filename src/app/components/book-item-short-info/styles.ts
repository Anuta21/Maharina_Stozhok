import styled from "styled-components";
import { Color, ST2, S2 } from "../../common/assets";

export const BookItem = styled.div`
  height: 40%;
  margin-bottom: 15px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 480px) {
    height: 60%;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    height: 50%;
    margin-bottom: 20px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: 50%;
    margin-bottom: 25px;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    height: 50%;
    margin-bottom: 30px;
  }
`;

export const BookPic = styled.img`
  height: 100%;

  @media (max-width: 480px) {
    height: 80%;
  }
`;

export const BookInfo = styled.div`
  width: 65%;
  margin-left: 5px;
`;

export const Name = styled(S2)`
  margin-bottom: 5px;

  @media (max-width: 1280px) {
    margin-left: 10px;
  }
`;

export const ShortInfo = styled(ST2)`
  margin-bottom: 10px;
  width: 70%;

  @media (max-width: 1280px) {
    margin-left: 10px;
  }
`;

export const BookInteractButtons = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 480px) {
    margin-left: 30px;
  }

  @media (min-width: 481px) and (max-width: 600px) {
    margin-left: 10px;
  }

  @media (min-width: 601px) and (max-width: 1025px) {
    margin-left: 20px;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    margin-left: 10px;
  }
`;

export const DeleteButton = styled.button`
  border: 0;
  cursor: pointer;
  background-color: ${Color.Sandy};
`;

export const CountButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  border: 1px solid ${Color.Black};
`;

export const PlusMinus = styled.button`
  border: 0;
  cursor: pointer;
  background-color: ${Color.Sandy};
`;

export const PriceWithNum = styled(ST2)`
  width: 30%;

  @media (max-width: 600px) {
    width: 25%;
  }

  @media (min-width: 601px) and (max-width: 768px) {
    width: 15%;
  }
`;
