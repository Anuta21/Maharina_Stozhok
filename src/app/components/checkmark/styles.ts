import styled from "styled-components";
import { Color, Images } from "../../common/assets";

export const Label = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

export const Input = styled.input`
  display: none;
`;

export const CheckMarkBTN = styled.div`
  width: 18px;
  height: 18px;
  border: 1px solid ${Color.Black};
  margin-right: 8px;

  ::after {
    content: url(${Images.mark});
    width: 15px;
    height: 15px;
    display: block;
    margin: 2px;

    transform: scale(0);
    transition: transform 0.15s;
  }

  ${Input}:checked + &&::after {
    transform: scale(1);
  }
`;
