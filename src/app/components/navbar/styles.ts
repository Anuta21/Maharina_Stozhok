import styled from "styled-components";
import { S1, Color, T2 } from "../../common/assets";
import { IShowComponentProps, IBooksList } from "./models";

export const Wrapper = styled.div`
  width: 100%;
`;

export const NavigationWrapper = styled.div`
  width: 100%;
  padding: 10px 0 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CenterItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 28px;
  left: 50%;
  transform: translateX(-50%);
`;

export const NavigationItem = styled(S1)`
  margin: 0 15px 0 15px;
  text-align: center;

  cursor: pointer;

  :active,
  :focus,
  :hover {
    color: ${Color.Highlight};
  }
`;

export const BookIcon = styled.img`
  padding-left: 53px;
  margin-left: 8%;

  cursor: pointer;
`;

export const RightNavigationPart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding-right: 53px;
  margin-right: 8%;
`;

export const UserIcon = styled.img<IShowComponentProps>`
  margin-right: 20px;
  z-index: ${(props) => (props.show ? "-1" : "1")};

  cursor: pointer;
`;

export const BasketIcon = styled.img`
  cursor: pointer;
`;

// Basket Component Style

export const Basket = styled.div<IShowComponentProps>`
  position: absolute;
  width: 40%;
  height: 70%;
  right: 0;
  z-index: ${(props) => (props.show ? "1" : "-1")};

  background-color: ${Color.Sandy};
  border-bottom: 1px solid ${Color.Black};
  border-left: 1px solid ${Color.Black};

  opacity: ${(props) => (props.show ? "1" : "0")};
`;

export const Bar = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const BooksList = styled.div<IBooksList>`
  height: 65%;
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

export const ButtonContainer = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BuyButton = styled.button`
  width: 80%;
  height: 50%;

  background-color: ${Color.Black};

  cursor: pointer;
`;

export const BuyButtonText = styled(T2)`
  color: ${Color.White};
`;

export const Cross = styled.button`
  border: 0;
  cursor: pointer;
  background-color: ${Color.Sandy};
`;

// Account styles

export const Account = styled.div`
  position: absolute;
  width: 20%;
  height: 25%;
  right: 0;
  z-index: 2;

  background-color: ${Color.Sandy};
  border-bottom: 1px solid ${Color.Black};
  border-left: 1px solid ${Color.Black};
`;

export const InnerPartAccount = styled.div`
  position: absolute;
  left: 10%;
  top: 45%;
`;

export const Exit = styled.div`
  cursor: pointer;
`;
