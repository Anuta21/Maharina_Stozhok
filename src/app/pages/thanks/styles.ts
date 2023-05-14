import styled from "styled-components";
import { ST2, Color } from "../../common/assets";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const CenterContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80%;
  transform: translate(-50%, -50%);
  text-align: center;

  font-family: "Playfair Display";
  font-weight: 700;
  font-size: 70px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 768px) {
    font-size: 50px;
  }

  @media (max-width: 480px) {
    font-size: 35px;
  }
`;

export const Arrow = styled.img`
  margin: 20px 0;
`;

export const Home = styled(ST2)`
  color: ${Color.Highlight};

  cursor: pointer;
`;
