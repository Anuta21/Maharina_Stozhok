import styled from "styled-components";
import { S1, Color, T2 } from "../../common/assets";
import { IShowComponentProps, IBooksList, IExitButtonProps } from "./models";

export const Wrapper = styled.div`
  width: 100%;
`;

export const NavigationWrapper = styled.div`
  width: 100%;
  padding: 10px 0 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 480px) {
    visibility: hidden;
  }
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
  margin-left: 15%;

  @media (max-width: 768px) {
    margin-left: 5%;
  }
  @media (max-width: 480px) {
    visibility: visible;
  }

  cursor: pointer;
`;

export const RightNavigationPart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-right: 15%;

  @media (max-width: 768px) {
    margin-right: 3%;
  }
`;

export const UserIcon = styled.img<IShowComponentProps>`
  margin-right: 20px;
  z-index: ${(props) => (props.show ? "-1" : "2")};

  cursor: pointer;
`;

export const BasketIcon = styled.img`
  cursor: pointer;
`;

// Burger menu Component Style

export const BurgerIcon = styled.img`
  position: absolute;
  top: 3%;
  right: 5px;

  visibility: hidden;

  @media (max-width: 480px) {
    visibility: visible;
    margin-right: 3%;
  }
`;

export const BurgerMenu = styled.div`
  position: absolute;
  text-align: center;

  width: 100%;
  height: 50vh;
  border-bottom: 1px solid ${Color.Black};
  background-color: ${Color.Sandy};
  z-index: 2;

  visibility: hidden;

  @media (max-width: 480px) {
    visibility: visible;
  }
`;

export const BurgerMenuContent = styled.ul`
  padding: 0;
`;

export const BurgerMenuItem = styled.li`
  margin-bottom: 30px;
`;

// Basket Component Style

export const Basket = styled.div<IShowComponentProps>`
  position: absolute;
  width: 40%;
  height: 70%;
  right: 0;
  z-index: ${(props) => (props.show ? "2" : "-1")};

  background-color: ${Color.Sandy};
  border-bottom: 1px solid ${Color.Black};
  border-left: 1px solid ${Color.Black};

  opacity: ${(props) => (props.show ? "1" : "0")};

  @media (max-width: 768px) {
    width: 100%;
    height: 80%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 70%;
    height: 80%;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 50%;
    height: 80%;
  }
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
  width: 25%;
  height: 25%;
  right: 0;
  z-index: 2;

  background-color: ${Color.Sandy};
  border-bottom: 1px solid ${Color.Black};
  border-left: 1px solid ${Color.Black};

  @media (max-width: 768px) {
    width: 32%;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 35%;
  }
`;

export const InnerPartAccount = styled.div`
  position: absolute;
  left: 10%;
  top: 45%;
`;

export const Exit = styled.div<IExitButtonProps>`
  cursor: ${(props) => (props.show ? "pointer" : "default")};

  opacity: ${(props) => (props.show ? "1" : "0")};
`;

export const LoginButton = styled.span`
  color: ${Color.Highlight};
  cursor: pointer;
`;
