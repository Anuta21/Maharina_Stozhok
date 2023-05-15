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

  @media (max-width: 480px) {
    transform: translateY(0%);
    top: 20%;
    left: 5%;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    transform: translateY(30%);
    width: 80%;
    top: 10%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    transform: translateY(-90%);
    width: 70%;
  }
`;

export const MainText = styled(ST1)`
  font-size: 140px;

  @media (max-width: 480px) {
    font-size: 60px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 80px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 100px;
  }
`;

export const BookContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 7%;
  width: 60%;
  height: 70%;
  transform: translateY(-50%);

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    width: 90%;
    height: auto;
    transform: translateY(-50%);
  }

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }

  @media (max-width: 1024px) {
    width: 78%;
  }
`;

export const BookImg = styled.img`
  height: 100%;
  max-width: 100%;
  align-self: center;
  border-radius: 5px;
`;
