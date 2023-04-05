import styled from "styled-components";
import { ST1 } from "../../common/assets";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const TextContainer = styled.div`
  position: absolute;
  width: 50%;
  top: 50%;
  left: 7%;
  z-index: 1;
  transform: translateY(-50%);
`;

export const MainText = styled(ST1)`
  font-size: 140px;
`;

export const BookContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 7%;
  width: 55%;
  height: 70%;
  transform: translateY(-50%);

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BookImg = styled.img`
  height: 100%;
  max-width: 100%;
  align-self: center;
  border-radius: 5px;
`;
