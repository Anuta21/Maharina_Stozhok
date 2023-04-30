import styled from "styled-components";
import { T1, Color, T2, T3 } from "../../common/assets";
import { IBooksList } from "./models";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const MainContainer = styled.div`
  height: 90%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

// Right Part Style

export const RightPart = styled.div`
  width: 45%;
  height: 100%;
`;

export const BooksList = styled.div<IBooksList>`
  height: 50%;
  margin: 50px 0 20px 0;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${Color.Sandy};
    width: 15px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${Color.Black};
    :hover {
      background: ${Color.DarkGrey};
    }
  }
  ::-webkit-scrollbar-corner {
    opacity: 0;
  }

  overflow-y: ${(props) => (props.showScroll ? "scroll" : "hidden")};
  scrollbar-color: ${Color.Black} ${Color.DarkGrey};
  scrollbar-width: thin;
`;

export const PriceUnderlinedItem = styled.div`
  position: relative;
  height: 30px;

  margin-bottom: 30px;
`;

export const UnderlinedHeader = styled(T2)`
  position: absolute;
  left: 30px;
`;

export const UnderlinedPrice = styled(T2)`
  position: absolute;
  right: 30px;
`;

export const Line = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;

  border-bottom: 1px solid ${Color.Black};
`;

// Left PArt Style

export const LeftPart = styled.div`
  height: 100%;
  width: 50%;

  margin-left: 30px;
`;

export const LeftHeader = styled(T3)`
  margin: 10px 0 30px 0;
`;

export const InputField = styled.input`
  width: 60%;
  height: 30px;

  margin-bottom: 25px;

  background: ${Color.Sandy};
  font-family: "Playfair Display";
`;

export const InputHeader = styled(T1)`
  margin-bottom: 10px;
`;

export const OrderButton = styled.button`
  width: 70%;
  height: 45px;

  margin-top: 20px;
  background-color: ${Color.Black};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const TextButton = styled(T2)`
  color: ${Color.White};
`;
