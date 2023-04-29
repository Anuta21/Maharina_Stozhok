import styled from "styled-components";
import { S1, ST1, Color } from "../../common/assets";

export const FooterWrapper = styled.div`
  top: 30px;
  width: 100%;
  height: 300px;

  border-top: 1px solid ${Color.Black};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const TopFooterWrapper = styled.div`
  width: 100%;
  height: 40%;
  background-color: ${Color.Yellow};

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const BottomFooterWrapper = styled.div`
  width: 100%;
  height: 60%;
  border: 1px solid black;
  background-color: ${Color.Black};
  color: ${Color.White};

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const TopItem = styled.div`
  width: 15%;
  text-align: center;
`;

export const BottomItem = styled.div`
  width: 15%;
`;

export const Header = styled(S1)`
  margin-bottom: 8px;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled(ST1)`
  color: ${Color.White};
  :hover {
    cursor: pointer;
  }
`;
