import styled from "styled-components";
import { Color, ST2, S2 } from "../../common/assets";

export const BookItem = styled.div`
  height: 30%;
  margin-bottom: 15px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const BookPic = styled.img`
  height: 100%;
`;

export const BookInfo = styled.div`
  width: 65%;
  margin-left: 5px;
`;

export const Name = styled(S2)`
  margin-bottom: 5px;
`;

export const ShortInfo = styled(ST2)`
  margin-bottom: 10px;
`;

export const BookInteractButtons = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
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
