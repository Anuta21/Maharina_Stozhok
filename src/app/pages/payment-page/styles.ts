import styled from "styled-components";
import { T1, Color, T2, T3 } from "../../common/assets";
import { IBooksList, IConfirmButton } from "./models";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const MainContainer = styled.div`
  height: 90%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    justify-content: space-around;
    height: 200%;
  }
`;

// Right Part Style

export const RightPart = styled.div`
  width: 45%;
  height: 100%;

  @media (max-width: 900px) {
    margin-top: 20px;
    width: 100%;
    height: 50%;
  }

  @media (min-width: 901px) and (max-width: 1024px) {
    width: 60%;
  }
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

  @media (max-width: 480px) {
    height: 45%;
  }

  @media (min-width: 769px) and (max-width: 900px) {
    margin-left: 15%;
  }

  @media (min-width: 901px) and (max-width: 1024px) {
    height: 55%;
  }
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

// Left Part Style

export const LeftPart = styled.div`
  height: 100%;
  width: 50%;

  margin-left: 30px;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const LeftHeader = styled(T3)`
  margin: 30px 0 20px 0;

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

export const LongInputContainer = styled.div`
  width: 80%;
  margin: 80px 0 25px 10%;
`;

export const LongInputField = styled.input`
  width: 100%;
  height: 30px;

  background: ${Color.Sandy};
  font-family: "Playfair Display";
`;

export const ShortInputField = styled.input`
  width: 100%;
  height: 30px;

  margin-bottom: 25px;

  background: ${Color.Sandy};
  font-family: "Playfair Display";

  @media (max-width: 600px) {
    width: 80%;
    margin-left: 10%;
  }

  @media (min-width: 901px) and (max-width: 1024px) {
    width: 80%;
    margin-left: 10%;
  }
`;

export const ShortInputsContainer = styled.div`
  width: 100%;
  height: 30px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const InputHeader = styled(T1)`
  margin-bottom: 10px;
  @media (max-width: 600px) {
    margin-left: 10%;
  }

  @media (min-width: 901px) and (max-width: 1024px) {
    margin-left: 10%;
  }
`;

export const ConfirmButton = styled.button<IConfirmButton>`
  width: 70%;
  height: 45px;

  margin-top: 50px;
  background-color: ${Color.Black};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: ${(props) => (props.active ? "pointer" : "not-allowed")};

  @media (max-width: 480px) {
    width: 85%;
  }

  @media (min-width: 481px) and (max-width: 900px) {
    width: 90%;
  }

  @media (min-width: 901px) and (max-width: 768px) {
    width: 90%;
  }
`;

export const TextButton = styled(T2)`
  color: ${Color.White};
`;

export const CardFrame = styled.div`
  width: 80%;
  height: 45vh;
  min-height: 300px;

  margin-top: 50px;
  border: 1px solid ${Color.Black};

  @media (max-width: 600px) {
    width: 80%;
    margin-top: 20px;
  }

  @media (min-width: 901px) and (max-width: 1024px) {
    width: 80%;
    margin-top: 20px;
  }
`;

export const CardImagesContainer = styled.div`
  position: relative;
  height: 40px;
  width: 100%;
`;

export const VisaMasterCardImage = styled.img`
  position: absolute;
  top: 10px;
  right: 20px;
  height: 100%;
`;
