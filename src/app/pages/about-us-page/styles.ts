import styled from "styled-components";
import { Color, S1 } from "../../common/assets";

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;

  z-index: -1;
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
`;

export const Text = styled(S1)`
  margin: 0 50px 0 50px;
`;
