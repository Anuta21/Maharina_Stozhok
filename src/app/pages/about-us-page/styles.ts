import styled from "styled-components";
import { Color, S1 } from "../../common/assets";

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  max-height: 100%;
  position: absolute;

  top: 50%;
  transform: translateY(-40%);

  z-index: -1;

  @media (max-width: 480px) {
    opacity: 0;
  }
`;

export const InfoContainer = styled.div`
  width: 40%;
  height: 50%;
  background-color: ${Color.Yellow};
  bottom: 1000px;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: translate(120%, 50%);

  @media (max-width: 480px) {
    width: 90%;
    height: 60%;
    transform: translate(5%, 20%);
  }

  @media (min-width: 481px) and (max-width: 600px) {
    width: 90%;
    height: auto;
    transform: translate(5%, 110%);
  }

  @media (min-width: 601px) and (max-width: 768px) {
    width: 90%;
    height: auto;
    transform: translate(5%, 130%);
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 50%;
    transform: translate(80%, 40%);
  }
`;

export const Text = styled(S1)`
  margin: 0 50px 0 50px;
`;
