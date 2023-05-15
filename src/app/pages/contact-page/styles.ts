import styled from "styled-components";
import { T2 } from "../../common/assets";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const InfoContainer = styled.ul`
  margin: 50px 0 50px 80px;

  @media (max-width: 480px) {
    margin-left: 20px;
  }
`;

export const InfoText = styled.li`
  margin-bottom: 10px;
`;

export const ContactHeader = styled(T2)`
  margin-bottom: 20px;
`;

export const MapContainer = styled.div`
  height: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Map = styled.iframe`
  height: 90%;
  width: 60%;
  transform: translateY(-10%);

  @media (max-width: 768px) {
    width: 80%;
  }
`;
