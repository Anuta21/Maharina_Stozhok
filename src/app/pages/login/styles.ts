import styled from "styled-components";
import { IErrorProps } from "./models";
import { S2, Color } from "../../common/assets";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const CenterContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const Form = styled.form`
  @media (max-width: 480px) {
    width: 80%;
  }
`;

export const InputField = styled.input`
  margin: 10px 0 30px 0;
  border: 1px solid ${Color.Black};

  background-color: ${Color.Sandy};
  height: 40px;
  padding-left: 10px;
  width: 300px;

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

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const InputFieldWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Eye = styled.img`
  position: absolute;
  top: 35px;
  right: 10px;

  cursor: pointer;
`;

export const Header = styled(S2)`
  margin-bottom: 30px;
`;

export const Button = styled.button`
  border: 1px solid ${Color.Black};
  background-color: ${Color.Black};
  margin-bottom: 30px;
  height: 40px;
  width: 180px;

  cursor: pointer;
`;

export const SighUpButton = styled.span`
  color: ${Color.Highlight};
  cursor: pointer;
`;

export const ErrorText = styled.div<IErrorProps>`
  margin-bottom: 20px;
  width: 300px;
  color: #5e0a18;

  opacity: ${(props) => (props.show ? "1" : "0")};
  transition: 0.5s opacity ease-in-out;

  @media (max-width: 480px) {
    width: 100%;
  }
`;
